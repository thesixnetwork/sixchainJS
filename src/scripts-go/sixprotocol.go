package main

import (
	"context"
	"fmt"
	"log"
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
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"

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
	MainnetGRPC  = "grpc.sixnet.sixprotocol:443"
	MainnetCHAIN = "sixnet"

	TestnetRPC   = "https://rpc1.fivenet.sixprotocol.net:443"
	TestnetGRPC  = "grpc.fivenet.sixprotocol:443"
	TestnetCHAIN = "fivenet"

	LocalRPC   = "http://localhost:26657"
	LocalGRPC  = "grpc.fivenet.sixprotocol:443"
	LocalCHAIN = "testnet"

	// SIX Protocol specifics
	AddressPrefix = "6x"
	DENOM         = "usix"
	GasLimit      = uint64(300000) // Higher gas limit for SixProtocol operations
	GasPrice      = "1.25"
)

type NetworkConfig struct {
	RPC     string
	GRPC    string
	ChainID string
}

type SixProtocolClient struct {
	config    NetworkConfig
	keyring   keyring.Keyring
	clientCtx client.Context
	conn      *grpc.ClientConn
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
	fmt.Println("Examples:")
	fmt.Println("  go run sixprotocol.go testnet create-schema")
	fmt.Println("  go run sixprotocol.go testnet create-token")
	fmt.Println("  go run sixprotocol.go testnet query-schema")
	fmt.Println()
	fmt.Println("Environment variables:")
	fmt.Println("  MNEMONIC - Your wallet mnemonic phrase")
}

func getNetworkConfig(network string) *NetworkConfig {
	switch network {
	case "mainnet":
		return &NetworkConfig{
			RPC:     MainnetRPC,
			GRPC:    MainnetGRPC,
			ChainID: MainnetCHAIN,
		}
	case "testnet":
		return &NetworkConfig{
			RPC:     TestnetRPC,
			GRPC:    TestnetGRPC,
			ChainID: TestnetCHAIN,
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

	// Connect to gRPC
	conn, err := grpc.Dial(config.GRPC, grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		return nil, fmt.Errorf("failed to connect to gRPC: %w", err)
	}

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
		WithGRPCClient(conn).
		WithNodeURI(config.RPC)

	return &SixProtocolClient{
		config:    config,
		keyring:   kr,
		clientCtx: clientCtx,
		conn:      conn,
	}, nil
}

func (c *SixProtocolClient) Close() {
	if c.conn != nil {
		c.conn.Close()
	}
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

	nftClient := nftmngrmoduletypes.NewQueryClient(c.conn)

	fmt.Printf("🔍 Querying NFT schema: %s\n", schemaCode)

	resp, err := nftClient.NFTSchema(context.Background(), &nftmngrmoduletypes.QueryGetNFTSchemaRequest{
		Code: schemaCode,
	})
	if err != nil {
		return fmt.Errorf("failed to query NFT schema: %w", err)
	}

	schema := resp.NFTSchema
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
	nftClient := nftmngrmoduletypes.NewQueryClient(c.conn)

	fmt.Println("📑 Listing all NFT schemas...")

	resp, err := nftClient.NFTSchemaAll(context.Background(), &nftmngrmoduletypes.QueryAllNFTSchemaRequest{})
	if err != nil {
		return fmt.Errorf("failed to list NFT schemas: %w", err)
	}

	if len(resp.NFTSchema) == 0 {
		fmt.Println("📭 No NFT schemas found")
		return nil
	}

	fmt.Printf("📋 Found %d NFT schemas:\n\n", len(resp.NFTSchema))

	for i, schema := range resp.NFTSchema {
		fmt.Printf("%d. %s (%s)\n", i+1, schema.Name, schema.Code)
		fmt.Printf("   Owner: %s\n", schema.Owner)
		fmt.Printf("   Verified: %v\n", schema.IsVerified)
		fmt.Printf("   Description: %s\n", schema.Description)
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

	tokenClient := tokenmngrmoduletypes.NewQueryClient(c.conn)

	fmt.Printf("🔍 Querying token: %s\n", tokenName)

	resp, err := tokenClient.Token(context.Background(), &tokenmngrmoduletypes.QueryGetTokenRequest{
		Name: tokenName,
	})
	if err != nil {
		return fmt.Errorf("failed to query token: %w", err)
	}

	token := resp.Token
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
	tokenClient := tokenmngrmoduletypes.NewQueryClient(c.conn)

	fmt.Println("📑 Listing all custom tokens...")

	resp, err := tokenClient.TokenAll(context.Background(), &tokenmngrmoduletypes.QueryAllTokenRequest{})
	if err != nil {
		return fmt.Errorf("failed to list tokens: %w", err)
	}

	if len(resp.Token) == 0 {
		fmt.Println("📭 No custom tokens found")
		return nil
	}

	fmt.Printf("🪙 Found %d custom tokens:\n\n", len(resp.Token))

	for i, token := range resp.Token {
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

	// Query account for sequence number
	authClient := authtypes.NewQueryClient(c.conn)
	accResp, err := authClient.Account(context.Background(), &authtypes.QueryAccountRequest{
		Address: fromAddr.String(),
	})
	if err != nil {
		return "", err
	}

	var acc authtypes.AccountI
	err = c.clientCtx.Codec.UnpackAny(accResp.Account, &acc)
	if err != nil {
		return "", err
	}

	// Create signature placeholder
	sigV2 := signing.SignatureV2{
		PubKey: pubKey,
		Data: &signing.SingleSignatureData{
			SignMode:  signing.SignMode_SIGN_MODE_DIRECT,
			Signature: nil,
		},
		Sequence: acc.GetSequence(),
	}

	err = txBuilder.SetSignatures(sigV2)
	if err != nil {
		return "", err
	}

	// Sign transaction
	signerData := authsigning.SignerData{
		ChainID:       c.config.ChainID,
		AccountNumber: acc.GetAccountNumber(),
		Sequence:      acc.GetSequence(),
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
		Sequence: acc.GetSequence(),
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

	// Broadcast transaction
	res, err := c.clientCtx.BroadcastTx(txBytes)
	if err != nil {
		return "", err
	}

	if res.Code != 0 {
		return "", fmt.Errorf("transaction failed: %s", res.RawLog)
	}

	fmt.Printf("⛽ Gas used: %d/%d (%.1f%%)\n", res.GasUsed, res.GasWanted,
		float64(res.GasUsed)/float64(res.GasWanted)*100)

	return res.TxHash, nil
}
