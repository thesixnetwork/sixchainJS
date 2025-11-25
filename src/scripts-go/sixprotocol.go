package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"

	"cosmossdk.io/math"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/codec/types"
	cryptocodec "github.com/cosmos/cosmos-sdk/crypto/codec"
	"github.com/cosmos/cosmos-sdk/crypto/hd"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/tx/signing"
	authsigning "github.com/cosmos/cosmos-sdk/x/auth/signing"
	authtx "github.com/cosmos/cosmos-sdk/x/auth/tx"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	"github.com/cosmos/go-bip39"

	// SixProtocol modules
	nftadminmoduletypes "github.com/thesixnetwork/six-protocol/v4/x/nftadmin/types"
	nftmngrmoduletypes "github.com/thesixnetwork/six-protocol/v4/x/nftmngr/types"
	nftoraclemoduletypes "github.com/thesixnetwork/six-protocol/v4/x/nftoracle/types"
	protocoladminmoduletypes "github.com/thesixnetwork/six-protocol/v4/x/protocoladmin/types"
	tokenmngrmoduletypes "github.com/thesixnetwork/six-protocol/v4/x/tokenmngr/types"
)

const (
	// Network configurations
	MainnetRPC   = "https://sixnet-rpc.sixprotocol.net:443"
	MainnetAPI   = "https://sixnet-api.sixprotocol.net"
	MainnetCHAIN = "sixnet"

	TestnetRPC   = "https://rpc1.fivenet.sixprotocol.net:443"
	TestnetAPI   = "https://api1.fivenet.sixprotocol.net"
	TestnetCHAIN = "fivenet"

	LocalRPC   = "http://localhost:26657"
	LocalAPI   = "http://localhost:1317"
	LocalCHAIN = "testnet"

	// SIX Protocol specifics
	AddressPrefix = "6x"
	DENOM         = "usix"
	GasLimit      = uint64(300000) // Higher gas limit for SixProtocol operations
	GasPrice      = "1.25"
)

type NetworkConfig struct {
	RPC     string
	API     string
	ChainID string
}

type SixProtocolClient struct {
	config     NetworkConfig
	keyring    keyring.Keyring
	clientCtx  client.Context
	httpClient *http.Client
}

func init() {
	// Set SIX Protocol address prefixes
	config := sdk.GetConfig()
	config.SetBech32PrefixForAccount(AddressPrefix, AddressPrefix+"pub")
	config.SetBech32PrefixForValidator(AddressPrefix+"valoper", AddressPrefix+"valoperpub")
	config.SetBech32PrefixForConsensusNode(AddressPrefix+"valcons", AddressPrefix+"valconspub")
	config.Seal()
}

func main() {
	// Parse command line arguments
	if len(os.Args) < 3 {
		printUsage()
		os.Exit(1)
	}

	network := os.Args[1]
	command := os.Args[2]

	// Get network configuration
	config := getNetworkConfig(network)
	if config == nil {
		log.Fatal("Invalid network. Use 'mainnet' or 'testnet'")
	}

	// Initialize client
	client, err := NewSixProtocolClient(*config)
	if err != nil {
		log.Fatal("Failed to create client:", err)
	}
	defer client.Close()

	// Load mnemonic from environment
	mnemonic := os.Getenv("MNEMONIC")
	if mnemonic == "" {
		log.Fatal("MNEMONIC environment variable not set")
	}

	// Add account to keyring
	err = client.AddAccount("main", mnemonic)
	if err != nil {
		log.Fatal("Failed to add account:", err)
	}

	// Execute command
	switch command {
	// case "create-schema":
	// 	err = client.CreateNFTSchema()
	case "query-schema":
		err = client.QueryNFTSchema()
	case "transfer-schema":
		err = client.TransferSchemaOwnership()
	// case "create-token":
	// 	err = client.CreateToken()
	case "query-token":
		err = client.QueryToken()
	case "mint-token":
		err = client.MintToken()
	case "burn-token":
		err = client.BurnToken()
	case "list-schemas":
		err = client.ListNFTSchemas()
	case "list-tokens":
		err = client.ListTokens()
	case "balance":
		err = client.QueryBalance()
	case "debug-api":
		err = client.DebugAPIEndpoints()
	case "send":
		err = client.SendTokens()
	case "address":
		err = client.ShowAddress()
	default:
		log.Fatal("Unknown command:", command)
	}

	if err != nil {
		log.Fatal("Command failed:", err)
	}
}

func printUsage() {
	fmt.Println("SixProtocol Operations CLI")
	fmt.Println("Usage: go run sixprotocol.go <network> <command>")
	fmt.Println()
	fmt.Println("Networks:")
	fmt.Println("  testnet    - Use fivenet testnet")
	fmt.Println("  mainnet    - Use sixnet mainnet")
	fmt.Println()
	fmt.Println("NFT Schema Commands:")
	fmt.Println("  create-schema     - Create a new NFT schema")
	fmt.Println("  query-schema      - Query NFT schema information")
	fmt.Println("  transfer-schema   - Transfer schema ownership")
	fmt.Println("  list-schemas      - List all NFT schemas")
	fmt.Println()
	fmt.Println("Token Commands:")
	fmt.Println("  create-token      - Create a new custom token")
	fmt.Println("  query-token       - Query token information")
	fmt.Println("  mint-token        - Mint tokens to address")
	fmt.Println("  burn-token        - Burn tokens from address")
	fmt.Println("  list-tokens       - List all custom tokens")
	fmt.Println()
	fmt.Println("Bank Commands:")
	fmt.Println("  balance           - Query account balance")
	fmt.Println("  send              - Send tokens to another address")
	fmt.Println("  address           - Show your wallet address")
	fmt.Println()
	fmt.Println("Debug Commands:")
	fmt.Println("  debug-api         - Test API endpoints and show available paths")
	fmt.Println()
	fmt.Println("Examples:")
	fmt.Println("  go run sixprotocol.go testnet create-schema")
	fmt.Println("  go run sixprotocol.go testnet create-token")
	fmt.Println("  go run sixprotocol.go testnet query-schema")
	fmt.Println("  go run sixprotocol.go testnet balance")
	fmt.Println()
	fmt.Println("Environment variables:")
	fmt.Println("  MNEMONIC - Your wallet mnemonic phrase")
}

func getNetworkConfig(network string) *NetworkConfig {
	switch network {
	case "mainnet":
		return &NetworkConfig{
			RPC:     MainnetRPC,
			API:     MainnetAPI,
			ChainID: MainnetCHAIN,
		}
	case "testnet":
		return &NetworkConfig{
			RPC:     TestnetRPC,
			API:     TestnetAPI,
			ChainID: TestnetCHAIN,
		}
	case "local":
		return &NetworkConfig{
			RPC:     LocalRPC,
			API:     LocalAPI,
			ChainID: LocalCHAIN,
		}
	default:
		return nil
	}
}

func NewSixProtocolClient(config NetworkConfig) (*SixProtocolClient, error) {
	// Create codec and registry with all SixProtocol modules
	registry := types.NewInterfaceRegistry()

	// Register standard Cosmos modules
	authtypes.RegisterInterfaces(registry)
	banktypes.RegisterInterfaces(registry)
	cryptocodec.RegisterInterfaces(registry)

	// Register SixProtocol modules
	nftmngrmoduletypes.RegisterInterfaces(registry)
	tokenmngrmoduletypes.RegisterInterfaces(registry)
	nftadminmoduletypes.RegisterInterfaces(registry)
	nftoraclemoduletypes.RegisterInterfaces(registry)
	protocoladminmoduletypes.RegisterInterfaces(registry)

	cdc := codec.NewProtoCodec(registry)

	// Create legacy amino codec for keyring
	amino := codec.NewLegacyAmino()

	// Create keyring with proper codec
	kr := keyring.NewInMemory(cdc)

	// Create HTTP client
	httpClient := &http.Client{}

	// Create TxConfig
	txConfig := authtx.NewTxConfig(cdc, authtx.DefaultSignModes)

	// Create client context
	clientCtx := client.Context{}.
		WithCodec(cdc).
		WithInterfaceRegistry(registry).
		WithTxConfig(txConfig).
		WithLegacyAmino(amino).
		WithAccountRetriever(authtypes.AccountRetriever{}).
		WithBroadcastMode(flags.BroadcastSync).
		WithKeyring(kr).
		WithChainID(config.ChainID).
		WithNodeURI(config.RPC)

	return &SixProtocolClient{
		config:     config,
		keyring:    kr,
		clientCtx:  clientCtx,
		httpClient: httpClient,
	}, nil
}

func (c *SixProtocolClient) Close() {
	// HTTP client doesn't need explicit closing
}

func (c *SixProtocolClient) AddAccount(name, mnemonic string) error {
	if !bip39.IsMnemonicValid(mnemonic) {
		return fmt.Errorf("invalid mnemonic")
	}

	_, err := c.keyring.NewAccount(name, mnemonic, "", hd.CreateHDPath(118, 0, 0).String(), hd.Secp256k1)
	return err
}

func (c *SixProtocolClient) GetAddress(keyName string) (sdk.AccAddress, error) {
	info, err := c.keyring.Key(keyName)
	if err != nil {
		return nil, err
	}
	return info.GetAddress()
}

// NFT Schema Operations

// func (c *SixProtocolClient) CreateNFTSchema() error {
// 	fromAddr, err := c.GetAddress("main")
// 	if err != nil {
// 		return err
// 	}

// 	schemaCode := fmt.Sprintf("test-schema-%d", sdk.Context.BlockTime)

// 	msg := &nftmngrmoduletypes.MsgCreateNFTSchema{
// 		Creator:       fromAddr.String(),
// 		NftSchemaCode: schemaCode,
// 		Name:          "Test NFT Schema",
// 		Description:   "A test NFT schema created via Go SDK",
// 		Image:         "https://example.com/schema-image.png",
// 		OriginData: &nftmngrmoduletypes.OriginData{
// 			OriginChain:           c.config.ChainID,
// 			OriginContractAddress: "",
// 			OriginBaseUri:         "https://example.com/metadata/",
// 			AttributeOverriding:   nftmngrmoduletypes.AttributeOverriding_CHAIN,
// 			MetadataFormat:        "",
// 			OriginAttributes: []*nftmngrmoduletypes.AttributeDefinition{
// 				{
// 					Name:              "rarity",
// 					DataType:          "string",
// 					Required:          true,
// 					DisplayValueField: "value",
// 					DisplayOption: &nftmngrmoduletypes.DisplayOption{
// 						BoolTrueValue:  "",
// 						BoolFalseValue: "",
// 						Opensea: &nftmngrmoduletypes.OpenseaDisplayOption{
// 							DisplayType: "text",
// 							TraitType:   "Rarity",
// 						},
// 					},
// 					DefaultMintValue: &nftmngrmoduletypes.DefaultMintValue{
// 						NumberAttributeValue: &nftmngrmoduletypes.NumberAttributeValue{
// 							Value: math.NewUint(0),
// 						},
// 						StringAttributeValue: &nftmngrmoduletypes.StringAttributeValue{
// 							Value: "common",
// 						},
// 						BooleanAttributeValue: &nftmngrmoduletypes.BooleanAttributeValue{
// 							Value: false,
// 						},
// 						FloatAttributeValue: &nftmngrmoduletypes.FloatAttributeValue{
// 							Value: 0.0,
// 						},
// 					},
// 					HiddenOverride:      false,
// 					HiddenToMarketplace: false,
// 					Index:               0,
// 				},
// 			},
// 		},
// 		OnchainData: &nftmngrmoduletypes.OnChainData{
// 			NftAttributes: []*nftmngrmoduletypes.AttributeDefinition{
// 				{
// 					Name:              "level",
// 					DataType:          "number",
// 					Required:          false,
// 					DisplayValueField: "value",
// 					DisplayOption: &nftmngrmoduletypes.DisplayOption{
// 						Opensea: &nftmngrmoduletypes.OpenseaDisplayOption{
// 							DisplayType: "number",
// 							TraitType:   "Level",
// 						},
// 					},
// 					DefaultMintValue: &nftmngrmoduletypes.DefaultMintValue{
// 						NumberAttributeValue: &nftmngrmoduletypes.NumberAttributeValue{
// 							Value: math.NewUint(1),
// 						},
// 					},
// 				},
// 			},
// 			TokenAttributes: []*nftmngrmoduletypes.AttributeDefinition{},
// 			Actions:         []*nftmngrmoduletypes.Action{},
// 			Status: &nftmngrmoduletypes.FlagStatus{
// 				StatusName:  "active",
// 				StatusValue: true,
// 			},
// 		},
// 		IsVerified: true,
// 	}

// 	fmt.Printf("🎨 Creating NFT schema: %s\n", schemaCode)
// 	fmt.Printf("📋 Name: %s\n", msg.Name)
// 	fmt.Printf("📄 Description: %s\n", msg.Description)

// 	txHash, err := c.BroadcastTx([]sdk.Msg{msg}, "create NFT schema via SixProtocol Go SDK")
// 	if err != nil {
// 		return err
// 	}

// 	fmt.Printf("✅ NFT Schema created successfully!\n")
// 	fmt.Printf("🏷️  Schema Code: %s\n", schemaCode)
// 	fmt.Printf("📋 Transaction Hash: %s\n", txHash)
// 	fmt.Printf("🔍 Explorer: https://sixscan.io/%s/tx/%s\n", c.config.ChainID, txHash)
// 	return nil
// }

func (c *SixProtocolClient) QueryNFTSchema() error {
	// Example schema code - in real implementation, this could be passed as parameter
	schemaCode := "example-schema"

	fmt.Printf("🔍 Querying NFT schema: %s\n", schemaCode)

	// Make HTTP request to REST API
	url := fmt.Sprintf("%s/sixprotocol/nftmngr/nft_schema/%s", c.config.API, schemaCode)
	resp, err := c.httpClient.Get(url)
	if err != nil {
		return fmt.Errorf("failed to query NFT schema: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("API returned status %d", resp.StatusCode)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return fmt.Errorf("failed to read response: %w", err)
	}

	var apiResp struct {
		NFTSchema nftmngrmoduletypes.NFTSchema `json:"nftSchema"`
	}

	err = json.Unmarshal(body, &apiResp)
	if err != nil {
		return fmt.Errorf("failed to unmarshal response: %w", err)
	}

	schema := apiResp.NFTSchema
	fmt.Printf("📋 Schema Details:\n")
	fmt.Printf("   Code: %s\n", schema.Code)
	fmt.Printf("   Name: %s\n", schema.Name)
	fmt.Printf("   Description: %s\n", schema.Description)
	fmt.Printf("   Owner: %s\n", schema.Owner)
	fmt.Printf("   Verified: %v\n", schema.IsVerified)

	if schema.OriginData != nil {
		fmt.Printf("   Origin Chain: %s\n", schema.OriginData.OriginChain)
		fmt.Printf("   Attributes: %d\n", len(schema.OriginData.OriginAttributes))
	}

	return nil
}

func (c *SixProtocolClient) TransferSchemaOwnership() error {
	fromAddr, err := c.GetAddress("main")
	if err != nil {
		return err
	}

	// Example values - in real implementation, these could be passed as parameters
	schemaCode := "example-schema"
	newOwner := "6x1newowner123example456789abcdef"

	msg := &nftmngrmoduletypes.MsgChangeSchemaOwner{
		Creator:       fromAddr.String(),
		NftSchemaCode: schemaCode,
		NewOwner:      newOwner,
	}

	fmt.Printf("🔄 Transferring schema ownership\n")
	fmt.Printf("🏷️  Schema: %s\n", schemaCode)
	fmt.Printf("👤 New Owner: %s\n", newOwner)

	txHash, err := c.BroadcastTx([]sdk.Msg{msg}, "transfer schema ownership via SixProtocol Go SDK")
	if err != nil {
		return err
	}

	fmt.Printf("✅ Schema ownership transferred successfully!\n")
	fmt.Printf("📋 Transaction Hash: %s\n", txHash)
	return nil
}

func (c *SixProtocolClient) ListNFTSchemas() error {
	fmt.Println("📑 Listing all NFT schemas...")

	// Make HTTP request to REST API
	url := fmt.Sprintf("%s/sixprotocol/nftmngr/nft_schema", c.config.API)
	resp, err := c.httpClient.Get(url)
	if err != nil {
		return fmt.Errorf("failed to list NFT schemas: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("API returned status %d", resp.StatusCode)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return fmt.Errorf("failed to read response: %w", err)
	}

	var apiResp struct {
		NFTSchema []nftmngrmoduletypes.NFTSchema `json:"nftSchema"`
	}

	err = json.Unmarshal(body, &apiResp)
	if err != nil {
		return fmt.Errorf("failed to unmarshal response: %w", err)
	}

	if len(apiResp.NFTSchema) == 0 {
		fmt.Println("📭 No NFT schemas found")
		return nil
	}

	fmt.Printf("📋 Found %d NFT schemas:\n\n", len(apiResp.NFTSchema))

	for i, schema := range apiResp.NFTSchema {
		fmt.Printf("%d. %s - %s\n", i+1, schema.Code, schema.Name)
		fmt.Printf("   Owner: %s\n", schema.Owner)
		fmt.Printf("   Verified: %v\n", schema.IsVerified)
		if schema.Description != "" {
			fmt.Printf("   Description: %s\n", schema.Description)
		}
		fmt.Println()
	}

	return nil
}

// Token Operations

// func (c *SixProtocolClient) CreateToken() error {
// 	fromAddr, err := c.GetAddress("main")
// 	if err != nil {
// 		return err
// 	}

// 	tokenName := fmt.Sprintf("TestToken%d", sdk.Now().Unix())

// 	msg := &tokenmngrmoduletypes.MsgCreateToken{
// 		Creator:   fromAddr.String(),
// 		Name:      tokenName,
// 		Base:      fmt.Sprintf("u%s", tokenName),
// 		MaxSupply: math.NewInt(1000000000000), // 1 trillion
// 		Mintee:    fromAddr.String(),
// 		MetaData:  "Test token created via Go SDK",
// 	}

// 	fmt.Printf("🪙 Creating custom token: %s\n", tokenName)
// 	fmt.Printf("📊 Max Supply: %s\n", msg.MaxSupply.String())
// 	fmt.Printf("👤 Mintee: %s\n", msg.Mintee)

// 	txHash, err := c.BroadcastTx([]sdk.Msg{msg}, "create token via SixProtocol Go SDK")
// 	if err != nil {
// 		return err
// 	}

// 	fmt.Printf("✅ Token created successfully!\n")
// 	fmt.Printf("🏷️  Token Name: %s\n", tokenName)
// 	fmt.Printf("📋 Transaction Hash: %s\n", txHash)
// 	fmt.Printf("🔍 Explorer: https://sixscan.io/%s/tx/%s\n", c.config.ChainID, txHash)
// 	return nil
// }

func (c *SixProtocolClient) QueryToken() error {
	// Example token name - in real implementation, this could be passed as parameter
	tokenName := "example-token"

	fmt.Printf("🔍 Querying token: %s\n", tokenName)

	// Make HTTP request to REST API
	url := fmt.Sprintf("%s/sixprotocol/tokenmngr/token/%s", c.config.API, tokenName)
	resp, err := c.httpClient.Get(url)
	if err != nil {
		return fmt.Errorf("failed to query token: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("API returned status %d", resp.StatusCode)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return fmt.Errorf("failed to read response: %w", err)
	}

	var apiResp struct {
		Token tokenmngrmoduletypes.Token `json:"token"`
	}

	err = json.Unmarshal(body, &apiResp)
	if err != nil {
		return fmt.Errorf("failed to unmarshal response: %w", err)
	}

	token := apiResp.Token
	fmt.Printf("🪙 Token Details:\n")
	fmt.Printf("   Name: %s\n", token.Name)
	fmt.Printf("   Base: %s\n", token.Base)
	fmt.Printf("   Current Supply: %s\n", token.String())
	fmt.Printf("   Creator: %s\n", token.Creator)
	fmt.Printf("   Mintee: %s\n", token.Mintee)

	return nil
}

func (c *SixProtocolClient) MintToken() error {
	fromAddr, err := c.GetAddress("main")
	if err != nil {
		return err
	}

	// Example values - in real implementation, these could be passed as parameters
	tokenName := "example-token"
	amount := math.NewInt(1000000) // 1 million tokens
	recipient := fromAddr.String()

	msg := &tokenmngrmoduletypes.MsgMint{
		Creator: fromAddr.String(),
		Amount: sdk.Coin{
			Denom:  tokenName,
			Amount: amount,
		},
	}

	fmt.Printf("🏭 Minting tokens\n")
	fmt.Printf("🏷️  Token: %s\n", tokenName)
	fmt.Printf("💰 Amount: %s\n", amount.String())
	fmt.Printf("👤 Recipient: %s\n", recipient)

	txHash, err := c.BroadcastTx([]sdk.Msg{msg}, "mint tokens via SixProtocol Go SDK")
	if err != nil {
		return err
	}

	fmt.Printf("✅ Tokens minted successfully!\n")
	fmt.Printf("📋 Transaction Hash: %s\n", txHash)
	return nil
}

func (c *SixProtocolClient) BurnToken() error {
	fromAddr, err := c.GetAddress("main")
	if err != nil {
		return err
	}

	// Example values - in real implementation, these could be passed as parameters
	tokenName := "example-token"
	amount := math.NewInt(100000) // 100k tokens

	msg := &tokenmngrmoduletypes.MsgBurn{
		Creator: fromAddr.String(),
		Amount: sdk.Coin{
			Denom:  tokenName,
			Amount: amount,
		},
	}

	fmt.Printf("🔥 Burning tokens\n")
	fmt.Printf("🏷️  Token: %s\n", tokenName)
	fmt.Printf("💰 Amount: %s\n", amount.String())

	txHash, err := c.BroadcastTx([]sdk.Msg{msg}, "burn tokens via SixProtocol Go SDK")
	if err != nil {
		return err
	}

	fmt.Printf("✅ Tokens burned successfully!\n")
	fmt.Printf("📋 Transaction Hash: %s\n", txHash)
	return nil
}

func (c *SixProtocolClient) ListTokens() error {
	fmt.Println("📑 Listing all custom tokens...")

	// Try multiple possible endpoints
	endpoints := []string{
		"/sixprotocol/tokenmngr/token",
		"/sixprotocol/tokenmngr/tokens",
		"/sixprotocol/tokenmngr/token_all",
		"/cosmos/bank/v1beta1/supply",
	}

	var resp *http.Response
	var err error
	var workingEndpoint string

	for _, endpoint := range endpoints {
		url := fmt.Sprintf("%s%s", c.config.API, endpoint)
		fmt.Printf("🔍 Trying endpoint: %s\n", url)

		resp, err = c.httpClient.Get(url)
		if err != nil {
			fmt.Printf("❌ Error: %v\n", err)
			continue
		}

		if resp.StatusCode == http.StatusOK {
			workingEndpoint = endpoint
			fmt.Printf("✅ Found working endpoint: %s\n", endpoint)
			break
		} else {
			fmt.Printf("❌ Status %d for endpoint: %s\n", resp.StatusCode, endpoint)
			resp.Body.Close()
		}
	}

	if resp == nil || resp.StatusCode != http.StatusOK {
		return fmt.Errorf("no working endpoint found for token listing")
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return fmt.Errorf("failed to read response: %w", err)
	}

	fmt.Printf("📄 Raw response from %s:\n%s\n\n", workingEndpoint, string(body))

	// Try different response structures based on endpoint
	if workingEndpoint == "/cosmos/bank/v1beta1/supply" {
		var supplyResp struct {
			Supply []struct {
				Denom  string `json:"denom"`
				Amount string `json:"amount"`
			} `json:"supply"`
		}

		err = json.Unmarshal(body, &supplyResp)
		if err != nil {
			return fmt.Errorf("failed to unmarshal supply response: %w", err)
		}

		fmt.Printf("💰 Found %d denominations:\n\n", len(supplyResp.Supply))
		for i, coin := range supplyResp.Supply {
			fmt.Printf("%d. %s: %s\n", i+1, coin.Denom, coin.Amount)
		}
		return nil
	}

	// Try SixProtocol token structure
	var tokenResp struct {
		Token []tokenmngrmoduletypes.Token `json:"token"`
	}

	err = json.Unmarshal(body, &tokenResp)
	if err != nil {
		// Try alternative structure
		var altResp struct {
			Tokens []tokenmngrmoduletypes.Token `json:"tokens"`
		}
		err2 := json.Unmarshal(body, &altResp)
		if err2 != nil {
			return fmt.Errorf("failed to unmarshal token response with both structures: %v, %v", err, err2)
		}
		tokenResp.Token = altResp.Tokens
	}

	if len(tokenResp.Token) == 0 {
		fmt.Println("📭 No custom tokens found")
		return nil
	}

	fmt.Printf("🪙 Found %d custom tokens:\n\n", len(tokenResp.Token))

	for i, token := range tokenResp.Token {
		fmt.Printf("%d. %s (%s)\n", i+1, token.Name, token.Base)
		fmt.Printf("   Creator: %s\n", token.Creator)
		fmt.Printf("   Max Supply: %s\n", token.MaxSupply.String())
		fmt.Println()
	}

	return nil
}

// Common transaction broadcasting function
func (c *SixProtocolClient) BroadcastTx(msgs []sdk.Msg, memo string) (string, error) {
	// Get account info
	fromAddr, err := c.GetAddress("main")
	if err != nil {
		return "", err
	}

	// Build transaction
	txBuilder := c.clientCtx.TxConfig.NewTxBuilder()
	err = txBuilder.SetMsgs(msgs...)
	if err != nil {
		return "", err
	}

	// Set gas and fees
	txBuilder.SetGasLimit(GasLimit)

	// Calculate fee: gas_limit * gas_price
	gasPrice, err := math.LegacyNewDecFromStr(GasPrice)
	if err != nil {
		return "", err
	}
	feeAmount := gasPrice.MulInt64(int64(GasLimit)).TruncateInt()
	fee := sdk.NewCoins(sdk.NewCoin(DENOM, feeAmount))
	txBuilder.SetFeeAmount(fee)

	txBuilder.SetMemo(memo)

	// Get signing info
	info, err := c.keyring.Key("main")
	if err != nil {
		return "", err
	}

	pubKey, err := info.GetPubKey()
	if err != nil {
		return "", err
	}

	// Query account for sequence number via REST API
	url := fmt.Sprintf("%s/cosmos/auth/v1beta1/accounts/%s", c.config.API, fromAddr.String())
	accResp, err := c.httpClient.Get(url)
	if err != nil {
		return "", err
	}
	defer accResp.Body.Close()

	if accResp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("failed to query account: status %d", accResp.StatusCode)
	}

	accBody, err := io.ReadAll(accResp.Body)
	if err != nil {
		return "", err
	}

	var accApiResp struct {
		Account struct {
			Type          string      `json:"@type"`
			Address       string      `json:"address"`
			PubKey        interface{} `json:"pub_key"`
			AccountNumber string      `json:"account_number"`
			Sequence      string      `json:"sequence"`
		} `json:"account"`
	}

	err = json.Unmarshal(accBody, &accApiResp)
	if err != nil {
		return "", err
	}

	// Parse account number and sequence
	accountNumber := uint64(0)
	sequence := uint64(0)
	fmt.Sscanf(accApiResp.Account.AccountNumber, "%d", &accountNumber)
	fmt.Sscanf(accApiResp.Account.Sequence, "%d", &sequence)

	// Create signature placeholder
	sigV2 := signing.SignatureV2{
		PubKey: pubKey,
		Data: &signing.SingleSignatureData{
			SignMode:  signing.SignMode_SIGN_MODE_DIRECT,
			Signature: nil,
		},
		Sequence: sequence,
	}

	err = txBuilder.SetSignatures(sigV2)
	if err != nil {
		return "", err
	}

	// Sign transaction
	signerData := authsigning.SignerData{
		ChainID:       c.config.ChainID,
		AccountNumber: accountNumber,
		Sequence:      sequence,
	}

	// Generate the bytes to be signed
	signBytes, err := authsigning.GetSignBytesAdapter(
		context.Background(),
		c.clientCtx.TxConfig.SignModeHandler(),
		signing.SignMode_SIGN_MODE_DIRECT,
		signerData,
		txBuilder.GetTx(),
	)
	if err != nil {
		return "", err
	}

	// Sign using keyring
	signatureBytes, pubKey, err := c.keyring.Sign("main", signBytes, signing.SignMode_SIGN_MODE_DIRECT)
	if err != nil {
		return "", err
	}

	// Create signature V2
	sigV2 = signing.SignatureV2{
		PubKey: pubKey,
		Data: &signing.SingleSignatureData{
			SignMode:  signing.SignMode_SIGN_MODE_DIRECT,
			Signature: signatureBytes,
		},
		Sequence: sequence,
	}

	err = txBuilder.SetSignatures(sigV2)
	if err != nil {
		return "", err
	}

	// Encode transaction
	txBytes, err := c.clientCtx.TxConfig.TxEncoder()(txBuilder.GetTx())
	if err != nil {
		return "", err
	}

	// Broadcast transaction via HTTP since gRPC is not available
	fmt.Printf("📡 Broadcasting transaction (size: %d bytes)...\n", len(txBytes))

	// Create HTTP broadcast request
	broadcastReq := struct {
		TxBytes string `json:"tx_bytes"`
		Mode    string `json:"mode"`
	}{
		TxBytes: fmt.Sprintf("%x", txBytes), // Convert to hex
		Mode:    "BROADCAST_MODE_SYNC",
	}

	reqBytes, err := json.Marshal(broadcastReq)
	if err != nil {
		return "", fmt.Errorf("failed to marshal broadcast request: %w", err)
	}

	// Post to broadcast endpoint
	url := fmt.Sprintf("%s/cosmos/tx/v1beta1/txs", c.config.API)
	resp, err := c.httpClient.Post(url, "application/json", bytes.NewBuffer(reqBytes))
	if err != nil {
		return "", fmt.Errorf("failed to broadcast transaction: %w", err)
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", fmt.Errorf("failed to read broadcast response: %w", err)
	}

	fmt.Printf("📡 Broadcast response (status %d): %s\n", resp.StatusCode, string(body))

	if resp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("broadcast failed with status %d: %s", resp.StatusCode, string(body))
	}

	// Parse response
	var broadcastResp struct {
		TxResponse struct {
			TxHash    string `json:"txhash"`
			Code      uint32 `json:"code"`
			RawLog    string `json:"raw_log"`
			GasUsed   string `json:"gas_used"`
			GasWanted string `json:"gas_wanted"`
		} `json:"tx_response"`
	}

	err = json.Unmarshal(body, &broadcastResp)
	if err != nil {
		return "", fmt.Errorf("failed to unmarshal broadcast response: %w", err)
	}

	res := broadcastResp.TxResponse

	if res.Code != 0 {
		return "", fmt.Errorf("transaction failed (code %d): %s", res.Code, res.RawLog)
	}

	// Parse gas values
	gasUsed := uint64(0)
	gasWanted := uint64(0)
	fmt.Sscanf(res.GasUsed, "%d", &gasUsed)
	fmt.Sscanf(res.GasWanted, "%d", &gasWanted)

	if gasWanted > 0 {
		fmt.Printf("⛽ Gas used: %d/%d (%.1f%%)\n", gasUsed, gasWanted,
			float64(gasUsed)/float64(gasWanted)*100)
	} else {
		fmt.Printf("⛽ Gas used: %d\n", gasUsed)
	}

	return res.TxHash, nil
}

// HTTP helper methods
func (c *SixProtocolClient) httpGet(path string) ([]byte, error) {
	url := fmt.Sprintf("%s%s", c.config.API, path)
	resp, err := c.httpClient.Get(url)
	if err != nil {
		return nil, fmt.Errorf("HTTP GET failed: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("API returned status %d for %s", resp.StatusCode, path)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("failed to read response body: %w", err)
	}

	return body, nil
}

func (c *SixProtocolClient) QueryBalance() error {
	address, err := c.GetAddress("main")
	if err != nil {
		return err
	}

	fmt.Printf("💰 Querying balance for address: %s\n", address.String())

	// Query balance via REST API
	path := fmt.Sprintf("/cosmos/bank/v1beta1/balances/%s", address.String())
	body, err := c.httpGet(path)
	if err != nil {
		return err
	}

	var balanceResp struct {
		Balances []struct {
			Denom  string `json:"denom"`
			Amount string `json:"amount"`
		} `json:"balances"`
	}

	err = json.Unmarshal(body, &balanceResp)
	if err != nil {
		return fmt.Errorf("failed to unmarshal balance response: %w", err)
	}

	if len(balanceResp.Balances) == 0 {
		fmt.Println("💸 No balances found")
		return nil
	}

	fmt.Printf("💰 Account balances:\n")
	for _, balance := range balanceResp.Balances {
		if balance.Denom == DENOM {
			// Convert usix to SIX for display
			amount, ok := math.NewIntFromString(balance.Amount)
			if !ok {
				sixAmount := amount.Quo(math.NewInt(1000000))
				fmt.Printf("   %s SIX (%s %s)\n", sixAmount.String(), balance.Amount, balance.Denom)
			} else {
				fmt.Printf("   %s %s\n", balance.Amount, balance.Denom)
			}
		} else {
			fmt.Printf("   %s %s\n", balance.Amount, balance.Denom)
		}
	}

	return nil
}

func (c *SixProtocolClient) DebugAPIEndpoints() error {
	fmt.Println("🔍 Testing API endpoints...")
	fmt.Printf("API Base URL: %s\n\n", c.config.API)

	// List of endpoints to test
	endpoints := []struct {
		path        string
		description string
	}{
		{"/", "Root API"},
		{"/cosmos/bank/v1beta1/supply", "Total supply"},
		{"/cosmos/base/tendermint/v1beta1/node_info", "Node info"},
		{"/sixprotocol/tokenmngr/token", "SixProtocol tokens"},
		{"/sixprotocol/tokenmngr/tokens", "SixProtocol tokens (alt)"},
		{"/sixprotocol/nftmngr/nft_schema", "NFT schemas"},
		{"/sixprotocol/nftmngr/nft_schemas", "NFT schemas (alt)"},
		{"/swagger/", "API documentation"},
	}

	for _, endpoint := range endpoints {
		url := fmt.Sprintf("%s%s", c.config.API, endpoint.path)
		fmt.Printf("Testing: %-50s (%s)\n", endpoint.path, endpoint.description)

		resp, err := c.httpClient.Get(url)
		if err != nil {
			fmt.Printf("  ❌ Error: %v\n\n", err)
			continue
		}
		defer resp.Body.Close()

		fmt.Printf("  📊 Status: %d %s\n", resp.StatusCode, http.StatusText(resp.StatusCode))
		fmt.Printf("  📝 Content-Type: %s\n", resp.Header.Get("Content-Type"))

		if resp.StatusCode == http.StatusOK {
			body, err := io.ReadAll(resp.Body)
			if err != nil {
				fmt.Printf("  ❌ Failed to read body: %v\n\n", err)
				continue
			}

			// Show first 200 characters of response
			preview := string(body)
			if len(preview) > 200 {
				preview = preview[:200] + "..."
			}
			fmt.Printf("  📄 Preview: %s\n", preview)
		}
		fmt.Println()
	}

	return nil
}

func (c *SixProtocolClient) SendTokens() error {
	// Get sender address
	fromAddr, err := c.GetAddress("main")
	if err != nil {
		return err
	}

	// Hardcoded recipient and amount for testing
	toAddress := "6x13g50hqdqsjk85fmgqz2h5xdxq49lsmjdwlemsp"
	amount := math.NewInt(1000000) // 1 SIX token

	fmt.Printf("💸 Sending %s %s from %s to %s\n",
		amount.String(), DENOM, fromAddr.String(), toAddress)

	toAddr, err := sdk.AccAddressFromBech32(toAddress)
	if err != nil {
		return fmt.Errorf("invalid recipient address: %w", err)
	}

	// Create send message
	msg := banktypes.NewMsgSend(
		fromAddr,
		toAddr,
		sdk.NewCoins(sdk.NewCoin(DENOM, amount)),
	)

	// Broadcast transaction
	txHash, err := c.BroadcastTx([]sdk.Msg{msg}, "send tokens via Go SDK")
	if err != nil {
		return err
	}

	fmt.Printf("✅ Transaction successful! Hash: %s\n", txHash)
	return nil
}

func (c *SixProtocolClient) ShowAddress() error {
	address, err := c.GetAddress("main")
	if err != nil {
		return err
	}

	fmt.Printf("📍 Your wallet address: %s\n", address.String())
	fmt.Printf("🔍 You can view this address on the explorer:\n")
	fmt.Printf("   https://sixscan.io/fivenet/account/%s\n", address.String())

	return nil
}
