# Protocol Admin Query Scripts

This directory contains query scripts for the protocoladmin module that mirror the CLI commands.

## Available Commands

### 1. Parameters Query
Query the parameters of the protocoladmin module.

```bash
# Using bun
bun run ./scripts/protocoladmin/query/params.ts fivenet

# Using yarn/ts-node
yarn ts-node ./scripts/protocoladmin/query/params.ts fivenet
```

### 2. List All Groups
List all protocol admin groups.

```bash
# Using bun
bun run ./scripts/protocoladmin/query/list-group.ts fivenet

# Using yarn/ts-node
yarn ts-node ./scripts/protocoladmin/query/list-group.ts fivenet
```

### 3. Show Specific Group
Show details of a specific group by name.

```bash
# Using bun
bun run ./scripts/protocoladmin/query/show-group.ts fivenet [group_name]

# Using yarn/ts-node
yarn ts-node ./scripts/protocoladmin/query/show-group.ts fivenet [group_name]
```

**Parameters:**
- `group_name`: The name of the group to query

### 4. List All Admins
List all protocol admins across all groups.

```bash
# Using bun
bun run ./scripts/protocoladmin/query/list-admin.ts fivenet

# Using yarn/ts-node
yarn ts-node ./scripts/protocoladmin/query/list-admin.ts fivenet
```

### 5. Show Specific Admin
Show details of a specific admin in a specific group.

```bash
# Using bun
bun run ./scripts/protocoladmin/query/show-admin.ts fivenet [group_name] [admin_address]

# Using yarn/ts-node
yarn ts-node ./scripts/protocoladmin/query/show-admin.ts fivenet [group_name] [admin_address]
```

**Parameters:**
- `group_name`: The name of the group
- `admin_address`: The address of the admin to query

### 6. List Admins of Group
List all admins that belong to a specific group.

```bash
# Using bun
bun run ./scripts/protocoladmin/query/list-admin-of-group.ts fivenet [group_name]

# Using yarn/ts-node
yarn ts-node ./scripts/protocoladmin/query/list-admin-of-group.ts fivenet [group_name]
```

**Parameters:**
- `group_name`: The name of the group to query admins for

## Network Options

All scripts accept the following network options:
- `local`: Local development network
- `fivenet`: Testnet environment  
- `sixnet`: Mainnet environment

## CLI Command Mapping

These scripts correspond to the following CLI commands:

| Script | CLI Command |
|--------|-------------|
| `params.ts` | `sixd query protocoladmin params` |
| `list-group.ts` | `sixd query protocoladmin list-group` |
| `show-group.ts` | `sixd query protocoladmin show-group [name]` |
| `list-admin.ts` | `sixd query protocoladmin list-admin` |
| `show-admin.ts` | `sixd query protocoladmin show-admin [group] [admin]` |
| `list-admin-of-group.ts` | `sixd query protocoladmin list-admin-of-group [group]` |

## Examples

```bash
# Query protocol admin parameters
bun run ./scripts/protocoladmin/query/params.ts fivenet

# List all groups
bun run ./scripts/protocoladmin/query/list-group.ts fivenet

# Show specific group details
bun run ./scripts/protocoladmin/query/show-group.ts fivenet "admin-group"

# List all admins
bun run ./scripts/protocoladmin/query/list-admin.ts fivenet

# Show specific admin
bun run ./scripts/protocoladmin/query/show-admin.ts fivenet "admin-group" "6x1abc123..."

# List admins of a specific group
bun run ./scripts/protocoladmin/query/list-admin-of-group.ts fivenet "admin-group"
```