# SIX Protocol Go Scripts Makefile

.PHONY: help setup build clean test send balance multi-send testnet-send testnet-balance testnet-multi-send six-create-schema six-create-token six-query-schema six-query-token

# Default target
help:
	@echo "Available commands:"
	@echo "  setup           - Download dependencies and setup environment"
	@echo "  build           - Build the Go binary"
	@echo "  clean           - Clean build artifacts"
	@echo "  test            - Run tests"
	@echo ""
	@echo "Testnet commands:"
	@echo "  testnet-send    - Send tokens on testnet"
	@echo "  testnet-balance - Check balance on testnet"
	@echo "  testnet-multi   - Multi-send on testnet"
	@echo ""
	@echo "Mainnet commands:"
	@echo "  send            - Send tokens on mainnet"
	@echo "  balance         - Check balance on mainnet"
	@echo "  multi-send      - Multi-send on mainnet"
	@echo ""
	@echo "SixProtocol commands:"
	@echo "  six-create-schema    - Create NFT schema on testnet"
	@echo "  six-create-token     - Create custom token on testnet"
	@echo "  six-query-schema     - Query NFT schema info"
	@echo "  six-query-token      - Query custom token info"
	@echo "  six-list-schemas     - List all NFT schemas"
	@echo "  six-list-tokens      - List all custom tokens"
	@echo ""
	@echo "Setup commands:"
	@echo "  env-setup       - Create .env file from example"
	@echo "  deps            - Download Go dependencies"

# Setup environment
setup: deps env-setup
	@echo "Setup complete! Don't forget to set your MNEMONIC in .env"

env-setup:
	@if [ ! -f .env ]; then \
		cp .env.example .env; \
		echo "Created .env file from .env.example"; \
		echo "Please edit .env and add your MNEMONIC"; \
	else \
		echo ".env file already exists"; \
	fi

# Download dependencies
deps:
	@echo "Downloading Go dependencies..."
	go mod download
	go mod tidy

# Build binary
build:
	@echo "Building Go binary..."
	go build -o bin/sixchain-bank bank.go

# Clean build artifacts
clean:
	@echo "Cleaning build artifacts..."
	rm -rf bin/
	go clean

# Run tests
test:
	@echo "Running tests..."
	go test -v ./...

# Load environment variables
include .env
export

# Testnet operations
testnet-send:
	@echo "Sending tokens on testnet..."
	go run bank.go testnet send

testnet-balance:
	@echo "Checking balance on testnet..."
	go run bank.go testnet balance

testnet-multi:
	@echo "Multi-sending on testnet..."
	go run bank.go testnet multi-send

testnet-nft:
	@echo "Querying NFT info on testnet..."
	go run bank.go testnet nft-balance

testnet-tokens:
	@echo "Querying custom tokens on testnet..."
	go run bank.go testnet token-balance

# Mainnet operations (require confirmation)
send:
	@echo "⚠️  WARNING: This will send tokens on MAINNET!"
	@read -p "Are you sure? (yes/no): " confirm; \
	if [ "$$confirm" = "yes" ]; then \
		go run bank.go mainnet send; \
	else \
		echo "Operation cancelled."; \
	fi

balance:
	@echo "Checking balance on mainnet..."
	go run bank.go mainnet balance

multi-send:
	@echo "⚠️  WARNING: This will send tokens to multiple recipients on MAINNET!"
	@read -p "Are you sure? (yes/no): " confirm; \
	if [ "$$confirm" = "yes" ]; then \
		go run bank.go mainnet multi-send; \
	else \
		echo "Operation cancelled."; \
	fi

nft-info:
	@echo "Querying NFT info on mainnet..."
	go run bank.go mainnet nft-balance

token-info:
	@echo "Querying custom tokens on mainnet..."
	go run bank.go mainnet token-balance

# Development helpers
dev-check:
	@echo "Checking if environment is ready..."
	@if [ -z "$(MNEMONIC)" ]; then \
		echo "❌ MNEMONIC not set in .env"; \
		exit 1; \
	else \
		echo "✅ MNEMONIC is set"; \
	fi
	@go version
	@echo "✅ Environment is ready"

# Format code
fmt:
	@echo "Formatting Go code..."
	go fmt ./...

# Lint code
lint:
	@echo "Linting Go code..."
	@if command -v golangci-lint >/dev/null 2>&1; then \
		golangci-lint run; \
	else \
		echo "golangci-lint not installed, running go vet instead"; \
		go vet ./...; \
	fi

# Install development tools
install-tools:
	@echo "Installing development tools..."
	go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest

# Show version info
version:
	@echo "Go version: $$(go version)"
	@echo "Module: $$(go list -m)"
	@if [ -f go.mod ]; then \
		echo "Dependencies:"; \
		go list -m all | head -10; \
	fi

# SixProtocol Operations
six-create-schema:
	@echo "🎨 Creating NFT schema on testnet..."
	go run sixprotocol.go testnet create-schema

six-create-token:
	@echo "🪙 Creating custom token on testnet..."
	go run sixprotocol.go testnet create-token

six-query-schema:
	@echo "🔍 Querying NFT schema..."
	go run sixprotocol.go testnet query-schema

six-query-token:
	@echo "🔍 Querying custom token..."
	go run sixprotocol.go testnet query-token

six-list-schemas:
	@echo "📑 Listing all NFT schemas..."
	go run sixprotocol.go testnet list-schemas

six-list-tokens:
	@echo "📑 Listing all custom tokens..."
	go run sixprotocol.go testnet list-tokens

# Quick test with dry run
dry-run:
	@echo "Running dry-run on testnet (balance check only)..."
	@MNEMONIC="abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about" \
	go run bank.go testnet balance || echo "This is expected to fail - it's just a syntax check"
