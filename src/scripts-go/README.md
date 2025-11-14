# SIX Protocol Go Scripts

This directory contains Go implementations for interacting with the SIX Protocol blockchain, providing an alternative to the JavaScript SDK.

## Prerequisites

- Go 1.21 or higher
- Access to SIX Protocol network (mainnet or testnet)
- Mnemonic phrase for your wallet

## Setup

1. Install dependencies:
```bash
cd src/scripts-go
go mod tidy
```

2. Set your environment variables:
```bash
export MNEMONIC="your twelve word mnemonic phrase here"
```

## Available Commands

### Bank Operations

The `bank.go` script provides banking functionality similar to the JavaScript examples.

#### Send Tokens

Send tokens from your account to another address:

```bash
# Testnet
go run bank.go testnet send

# Mainnet
go run bank.go mainnet send
```

This will send 10 SIX tokens (10,000,000 usix) to the hardcoded recipient address `6x13g50hqdqsjk85fmgqz2h5xdxq49lsmjdwlemsp`.

#### Query Balance

Check your account balance:

```bash
# Testnet
go run bank.go testnet balance

# Mainnet
go run bank.go mainnet balance
```

#### Multi-Send

Send tokens to multiple recipients in a single transaction:

```bash
# Testnet
go run bank.go testnet multi-send

# Mainnet
go run bank.go mainnet multi-send
```

## Network Configuration

### Testnet (fivenet)
- RPC: `https://rpc1.fivenet.sixprotocol.net:443`
- gRPC: `rpc1.fivenet.sixprotocol.net:9090`
- Chain ID: `fivenet`
- Currency: `tSIX`
- Explorer: https://sixscan.io/fivenet

### Mainnet (sixnet)
- RPC: `https://sixnet-rpc.sixprotocol.net:443`
- gRPC: `sixnet-rpc.sixprotocol.net:9090`
- Chain ID: `sixnet`
- Currency: `SIX`
- Explorer: https://sixscan.io/

## Code Structure

### SixClient & SixProtocolClient

The main client structures that handle:
- Network configuration
- Keyring management  
- Transaction building and broadcasting
- Account queries
- SixProtocol module interactions (NFT, tokens)
- Enhanced interface registry with all modules

### Key Features

1. **Type Safety**: Go provides compile-time type checking
2. **Performance**: Better performance for blockchain operations  
3. **Direct Integration**: Uses Cosmos SDK directly
4. **Error Handling**: Explicit error handling following Go conventions
5. **Modular Design**: Easy to extend with additional functionality
6. **SixProtocol Integration**: Native support for NFT and token operations
7. **Enhanced Registry**: Complete module registration for all SixProtocol features

### Transaction Flow

1. **Initialize Client**: Set up network configuration and connect to gRPC
2. **Register Modules**: Register all Cosmos and SixProtocol module interfaces
3. **Load Account**: Import account from mnemonic into keyring
4. **Build Message**: Create the appropriate message type (bank, NFT, token, etc.)
5. **Calculate Fees**: Set gas limit and calculate fees based on gas price
6. **Sign Transaction**: Sign with private key from keyring
7. **Broadcast**: Submit transaction to the network
8. **Monitor**: Track transaction status and results

## Environment Variables

- `MNEMONIC`: Your wallet's mnemonic phrase (required)

## Security Notes

1. **Never commit mnemonics** to version control
2. **Use environment variables** for sensitive data
3. **Validate addresses** before sending transactions
4. **Test on testnet first** before using mainnet

## Examples

### Custom Send Amount

To modify the send amount, edit the `SendTokens()` function in `bank.go`:

```go
// Change this line to send a different amount
amount := sdk.NewCoins(sdk.NewCoin(DENOM, sdk.NewInt(5000000))) // 5 SIX
```

### Custom Recipients

For multi-send, modify the recipients slice in the `MultiSend()` function:

```go
recipients := []struct {
    address string
    amount  sdk.Coins
}{
    {"6x1recipient1address", sdk.NewCoins(sdk.NewCoin(DENOM, sdk.NewInt(2000000)))},
    {"6x1recipient2address", sdk.NewCoins(sdk.NewCoin(DENOM, sdk.NewInt(3000000)))},
}
```

## Extending Functionality

To add support for other SIX Protocol modules:

1. Import the appropriate message types
2. Create message builder functions
3. Add new command handlers to the main switch statement
4. Update the usage instructions

Example for NFT operations:
```go
import (
    nftmngrTypes "github.com/thesixnetwork/six-protocol/v4/x/nftmngr/types"
)

func (c *SixClient) CreateNFTSchema() error {
    msg := &nftmngrTypes.MsgCreateNFTSchema{
        Creator:       address.String(),
        NftSchemaCode: "my-nft-schema", 
        Name:          "My NFT Collection",
        Description:   "A collection of unique NFTs",
        Image:         "https://example.com/schema-image.png",
        OriginData: &nftmngrTypes.OriginData{
            OriginChain:         c.config.ChainID,
            AttributeOverriding: nftmngrTypes.AttributeOverriding_CHAIN,
            // ... additional configuration
        },
        // ... other required fields
    }
    
    return c.BroadcastTx([]sdk.Msg{msg}, "create NFT schema")
}
```

Example for custom token operations:
```go
import (
    tokenmngrTypes "github.com/thesixnetwork/six-protocol/v4/x/tokenmngr/types"
)

func (c *SixClient) CreateToken() error {
    msg := &tokenmngrTypes.MsgCreateToken{
        Creator:   address.String(),
        Name:      "MyToken",
        Base:      "umytoken", 
        MaxSupply: math.NewInt(1000000000000),
        Mintee:    address.String(),
        MetaData:  "Custom token via Go SDK",
    }
    
    return c.BroadcastTx([]sdk.Msg{msg}, "create custom token")
}
```

## Troubleshooting

### Common Issues

1. **Connection Failed**: Check network connectivity and RPC endpoints
2. **Insufficient Balance**: Ensure account has enough tokens for transaction + fees
3. **Invalid Mnemonic**: Verify mnemonic is correct and properly formatted
4. **Gas Estimation**: Adjust gas limit if transactions fail due to out of gas

### Debug Mode

Add verbose logging by modifying the client initialization:

```go
// Add debug logging
import "log"

func main() {
    log.SetFlags(log.LstdFlags | log.Lshortfile)
    // ... rest of main function
}
```

## Comparison with JavaScript SDK

| Feature | Go | JavaScript |
|---------|----|-----------| 
| Type Safety | ✅ Compile-time | ❌ Runtime only |
| Performance | ✅ High | ✅ Good |
| Memory Usage | ✅ Low | ❌ Higher |
| Ecosystem | ✅ Native Cosmos | ✅ Web-friendly |
| Learning Curve | ⚠️ Steeper | ✅ Easier |
| Deployment | ✅ Single binary | ❌ Node.js required |

Choose Go for:
- Backend services
- High-performance applications
- Direct blockchain integration
- Production servers

Choose JavaScript for:
- Web applications
- Rapid prototyping
- Frontend integration
- Cross-platform compatibility