# HTTP Migration Documentation

## Overview

This document describes the migration from gRPC to HTTP REST API calls in the SixProtocol Go client. This change was necessary due to load balancer configuration constraints that prevent direct gRPC connections.

## Key Changes Made

### 1. Network Configuration Updates

**Before (gRPC):**
```go
const (
    MainnetGRPC  = "grpc.sixnet.sixprotocol.net:443"
    TestnetGRPC  = "grpc.fivenet.sixprotocol.net:443"
    LocalGRPC    = "localhost:9090"
)

type NetworkConfig struct {
    RPC     string
    GRPC    string
    ChainID string
}
```

**After (HTTP REST):**
```go
const (
    MainnetAPI   = "https://sixnet-api.sixprotocol.net"
    TestnetAPI   = "https://rest1.fivenet.sixprotocol.net"
    LocalAPI     = "http://localhost:1317"
)

type NetworkConfig struct {
    RPC     string
    API     string
    ChainID string
}
```

### 2. Client Structure Changes

**Before:**
```go
type SixProtocolClient struct {
    config    NetworkConfig
    keyring   keyring.Keyring
    clientCtx client.Context
    conn      *grpc.ClientConn
}
```

**After:**
```go
type SixProtocolClient struct {
    config     NetworkConfig
    keyring    keyring.Keyring
    clientCtx  client.Context
    httpClient *http.Client
}
```

### 3. Client Initialization

**Before (gRPC):**
```go
// Connect to gRPC
conn, err := grpc.NewClient(config.GRPC, grpc.WithTransportCredentials(insecure.NewCredentials()))
if err != nil {
    return nil, fmt.Errorf("failed to connect to gRPC: %w", err)
}

clientCtx := client.Context{}.
    // ...
    WithGRPCClient(conn)
```

**After (HTTP):**
```go
// Create HTTP client
httpClient := &http.Client{}

clientCtx := client.Context{}.
    // ... (removed WithGRPCClient)
```

### 4. Query Method Conversions

#### NFT Schema Query

**Before (gRPC):**
```go
func (c *SixProtocolClient) QueryNFTSchema() error {
    nftClient := nftmngrmoduletypes.NewQueryClient(c.conn)
    
    resp, err := nftClient.NFTSchema(context.Background(), &nftmngrmoduletypes.QueryGetNFTSchemaRequest{
        Code: schemaCode,
    })
    if err != nil {
        return fmt.Errorf("failed to query NFT schema: %w", err)
    }
    
    schema := resp.NFTSchema
    // Process schema...
}
```

**After (HTTP REST):**
```go
func (c *SixProtocolClient) QueryNFTSchema() error {
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
    // Process schema...
}
```

#### Account Query for Transaction Signing

**Before (gRPC):**
```go
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

accountNumber := acc.GetAccountNumber()
sequence := acc.GetSequence()
```

**After (HTTP REST):**
```go
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

accountNumber := uint64(0)
sequence := uint64(0)
fmt.Sscanf(accApiResp.Account.AccountNumber, "%d", &accountNumber)
fmt.Sscanf(accApiResp.Account.Sequence, "%d", &sequence)
```

## REST API Endpoints

### SixProtocol Module Endpoints

| Module | Endpoint | Purpose |
|--------|----------|---------|
| NFT Manager | `/sixprotocol/nftmngr/nft_schema/{code}` | Query single NFT schema |
| NFT Manager | `/sixprotocol/nftmngr/nft_schema` | List all NFT schemas |
| Token Manager | `/sixprotocol/tokenmngr/token/{name}` | Query single token |
| Token Manager | `/sixprotocol/tokenmngr/token` | List all tokens |

### Cosmos Module Endpoints

| Module | Endpoint | Purpose |
|--------|----------|---------|
| Auth | `/cosmos/auth/v1beta1/accounts/{address}` | Query account info |
| Bank | `/cosmos/bank/v1beta1/balances/{address}` | Query account balances |

## Helper Functions

### HTTP GET Helper

Added a reusable HTTP GET helper function:

```go
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
```

## Benefits of HTTP Migration

### 1. Load Balancer Compatibility
- HTTP REST APIs work seamlessly with load balancers
- No need for special gRPC load balancer configuration
- Better support for standard web infrastructure

### 2. Debugging and Monitoring
- HTTP requests are easier to debug with standard tools
- Better logging and monitoring capabilities
- Can use tools like curl for testing

### 3. Firewall Friendly
- HTTP/HTTPS uses standard ports (80/443)
- Less likely to be blocked by corporate firewalls
- Better compatibility with proxy servers

### 4. Caching Capabilities
- HTTP responses can be cached by intermediary servers
- Better performance for repeated queries
- Can leverage CDN capabilities

## Migration Considerations

### 1. Error Handling
- HTTP status codes need to be checked explicitly
- JSON unmarshaling errors need proper handling
- Network timeouts should be configured

### 2. Type Conversions
- String to integer conversions for account numbers/sequences
- JSON field mapping must match API response structure
- Handle potential null/empty values in JSON responses

### 3. Performance
- HTTP has slightly more overhead than gRPC
- JSON serialization vs protobuf (gRPC is more efficient)
- Connection reuse should be implemented for better performance

## Testing

### Manual Testing Commands

```bash
# Test balance query
go run sixprotocol.go testnet balance

# Test NFT schema query
go run sixprotocol.go testnet query-schema

# Test token query
go run sixprotocol.go testnet query-token

# Test list operations
go run sixprotocol.go testnet list-schemas
go run sixprotocol.go testnet list-tokens
```

### REST API Testing with curl

```bash
# Query account
curl "https://rest1.fivenet.sixprotocol.net/cosmos/auth/v1beta1/accounts/6x1address..."

# Query balances
curl "https://rest1.fivenet.sixprotocol.net/cosmos/bank/v1beta1/balances/6x1address..."

# Query NFT schema
curl "https://rest1.fivenet.sixprotocol.net/sixprotocol/nftmngr/nft_schema/schema-code"

# List tokens
curl "https://rest1.fivenet.sixprotocol.net/sixprotocol/tokenmngr/token"
```

## Future Improvements

### 1. HTTP Client Configuration
- Add timeout configuration
- Implement retry mechanisms
- Add connection pooling

### 2. Response Caching
- Implement local caching for frequent queries
- Add cache invalidation strategies
- Use ETag headers for conditional requests

### 3. Batch Operations
- Combine multiple HTTP requests where possible
- Implement bulk query operations
- Add pagination support for large datasets

### 4. Error Recovery
- Implement automatic fallback mechanisms
- Add circuit breaker patterns
- Improve error message clarity

## Conclusion

The migration from gRPC to HTTP REST API successfully addresses the load balancer compatibility issues while maintaining full functionality. The HTTP-based implementation provides better debugging capabilities and broader infrastructure compatibility, making it more suitable for production deployments behind load balancers.

All core functionality has been preserved:
- ✅ NFT schema operations (query, list, transfer)
- ✅ Token operations (query, list, mint, burn)
- ✅ Account balance queries
- ✅ Transaction broadcasting
- ✅ Account sequence/number retrieval

The migration is complete and ready for production use.