#!/usr/bin/env node

/**
 * Migration script to help migrate from sixchain-client to sixchain-sdk
 * 
 * This script will:
 * 1. Find all TypeScript files in src/scripts that use sixchain-client
 * 2. Provide migration guidance for each file
 * 3. Apply common transformations
 */

const { readFileSync, writeFileSync } = require('fs');
const { glob } = require('glob');
const { join } = require('path');

// Common migration rules
const migrationRules = [
  // Import changes
  {
    from: /import\s*{\s*([^}]*)\s*}\s*from\s*["']@sixnetwork\/sixchain-client["'];?/g,
    to: 'import { getSigningSixprotocolClient, sixprotocol } from "@sixnetwork/sixchain-sdk";\nimport { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";\nimport { EncodeObject } from "@cosmjs/proto-signing";',
    description: 'Replace sixchain-client imports with sixchain-sdk imports'
  },
  // Client initialization
  {
    from: /const sixConnector = new SixDataChainConnector\(\);[\s\S]*?sixConnector\.apiUrl = apiUrl;/g,
    to: '// Create wallet from mnemonic\n  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(\n    mnemonic,\n    { prefix: "6x" }\n  );\n\n  // Get signing client\n  const client = await getSigningSixprotocolClient({\n    rpcEndpoint: rpcUrl,\n    signer: wallet,\n  });\n\n  // Get account address\n  const accounts = await wallet.getAccounts();\n  const address = accounts[0].address;',
    description: 'Replace SixDataChainConnector with SigningSixprotocolClient'
  },
  // Account signer
  {
    from: /const accountSigner =\s*await sixConnector\.accounts\.mnemonicKeyToAccount\(mnemonic\);\s*const address = \(await accountSigner\.getAccounts\(\)\)\[0\]\.address;/g,
    to: '// Account address already obtained above',
    description: 'Remove redundant account signer code'
  },
  // RPC client
  {
    from: /const rpcClient = await sixConnector\.connectRPCClient\(accountSigner,\s*{\s*gasPrice: GasPrice\.fromString\(["'][^"']*["']\),?\s*}\);/g,
    to: '// RPC client replaced with SigningSixprotocolClient',
    description: 'Remove RPC client initialization'
  },
  // Message composition
  {
    from: /rpcClient\.nftmngrModule\.msgPerformActionByAdmin\(([^)]+)\)/g,
    to: 'sixprotocol.nftmngr.MessageComposer.withTypeUrl.performActionByAdmin($1)',
    description: 'Replace msgPerformActionByAdmin with MessageComposer'
  },
  {
    from: /rpcClient\.nftmngrModule\.msgProposalVirtualSchema\(([^)]+)\)/g,
    to: 'sixprotocol.nftmngr.MessageComposer.withTypeUrl.proposalVirtualSchema($1)',
    description: 'Replace msgProposalVirtualSchema with MessageComposer'
  },
  {
    from: /rpcClient\.nftmngrModule\.msgCreateNFTSchema\(([^)]+)\)/g,
    to: 'sixprotocol.nftmngr.MessageComposer.withTypeUrl.createNFTSchema($1)',
    description: 'Replace msgCreateNFTSchema with MessageComposer'
  },
  {
    from: /rpcClient\.nftmngrModule\.msgCreateMetadata\(([^)]+)\)/g,
    to: 'sixprotocol.nftmngr.MessageComposer.withTypeUrl.createMetadata($1)',
    description: 'Replace msgCreateMetadata with MessageComposer'
  },
  {
    from: /rpcClient\.nftmngrModule\.msgAddAttribute\(([^)]+)\)/g,
    to: 'sixprotocol.nftmngr.MessageComposer.withTypeUrl.addAttribute($1)',
    description: 'Replace msgAddAttribute with MessageComposer'
  },
  {
    from: /rpcClient\.nftmngrModule\.msgAddAction\(([^)]+)\)/g,
    to: 'sixprotocol.nftmngr.MessageComposer.withTypeUrl.addAction($1)',
    description: 'Replace msgAddAction with MessageComposer'
  },
  {
    from: /rpcClient\.nftmngrModule\.msgUpdateSchemaAttribute\(([^)]+)\)/g,
    to: 'sixprotocol.nftmngr.MessageComposer.withTypeUrl.updateSchemaAttribute($1)',
    description: 'Replace msgUpdateSchemaAttribute with MessageComposer'
  },
  {
    from: /rpcClient\.nftmngrModule\.msgUpdateAction\(([^)]+)\)/g,
    to: 'sixprotocol.nftmngr.MessageComposer.withTypeUrl.updateAction($1)',
    description: 'Replace msgUpdateAction with MessageComposer'
  },
  {
    from: /rpcClient\.nftmngrModule\.msgPerformVirtualAction\(([^)]+)\)/g,
    to: 'sixprotocol.nftmngr.MessageComposer.withTypeUrl.performVirtualAction($1)',
    description: 'Replace msgPerformVirtualAction with MessageComposer'
  },
  {
    from: /rpcClient\.nftmngrModule\.msgVoteVirtualSchemaProposal\(([^)]+)\)/g,
    to: 'sixprotocol.nftmngr.MessageComposer.withTypeUrl.voteVirtualSchemaProposal($1)',
    description: 'Replace msgVoteVirtualSchemaProposal with MessageComposer'
  },
  // Transaction broadcasting
  {
    from: /await rpcClient\.nftmngrModule\.signAndBroadcast\(\s*msgArray,\s*{\s*fee:\s*["']auto["'],\s*memo:\s*([^}]*)\s*}\s*\)/g,
    to: 'await client.signAndBroadcast(\n      address,\n      msgArray,\n      "auto",\n      $1\n    )',
    description: 'Replace signAndBroadcast with new signature'
  },
  // Type references
  {
    from: /ITxNFTmngr\.MsgPerformActionByAdmin/g,
    to: 'sixprotocol.nftmngr.MsgPerformActionByAdmin',
    description: 'Replace ITxNFTmngr type references'
  },
  {
    from: /ITxNFTmngr\.MsgProposalVirtualSchema/g,
    to: 'sixprotocol.nftmngr.MsgProposalVirtualSchema',
    description: 'Replace ITxNFTmngr type references'
  },
  {
    from: /ITxNFTmngr\.MsgCreateNFTSchema/g,
    to: 'sixprotocol.nftmngr.MsgCreateNFTSchema',
    description: 'Replace ITxNFTmngr type references'
  },
  {
    from: /ITxNFTmngr\.MsgCreateMetadata/g,
    to: 'sixprotocol.nftmngr.MsgCreateMetadata',
    description: 'Replace ITxNFTmngr type references'
  },
  {
    from: /ITxNFTmngr\.MsgAddAttribute/g,
    to: 'sixprotocol.nftmngr.MsgAddAttribute',
    description: 'Replace ITxNFTmngr type references'
  },
  {
    from: /ITxNFTmngr\.MsgAddAction/g,
    to: 'sixprotocol.nftmngr.MsgAddAction',
    description: 'Replace ITxNFTmngr type references'
  },
  {
    from: /ITxNFTmngr\.MsgUpdateSchemaAttribute/g,
    to: 'sixprotocol.nftmngr.MsgUpdateSchemaAttribute',
    description: 'Replace ITxNFTmngr type references'
  },
  {
    from: /ITxNFTmngr\.MsgUpdateAction/g,
    to: 'sixprotocol.nftmngr.MsgUpdateAction',
    description: 'Replace ITxNFTmngr type references'
  },
  // Property name changes (snake_case to camelCase)
  {
    from: /nft_schema_code:/g,
    to: 'nftSchemaCode:',
    description: 'Convert nft_schema_code to nftSchemaCode'
  },
  {
    from: /ref_id:/g,
    to: 'refId:',
    description: 'Convert ref_id to refId'
  },
  {
    from: /allowed_actioner:/g,
    to: 'allowedActioner:',
    description: 'Convert allowed_actioner to allowedActioner'
  },
  {
    from: /data_type:/g,
    to: 'dataType:',
    description: 'Convert data_type to dataType'
  },
  {
    from: /default_value:/g,
    to: 'defaultValue:',
    description: 'Convert default_value to defaultValue'
  },
  // AllowedActioner enum references
  {
    from: /AllowedActioner\.ALLOWED_ACTIONER_SYSTEM_ONLY/g,
    to: 'sixprotocol.nftmngr.AllowedActioner.ALLOWED_ACTIONER_SYSTEM_ONLY',
    description: 'Update AllowedActioner enum reference'
  },
  {
    from: /AllowedActioner\.ALLOWED_ACTIONER_ALL/g,
    to: 'sixprotocol.nftmngr.AllowedActioner.ALLOWED_ACTIONER_ALL',
    description: 'Update AllowedActioner enum reference'
  },
  {
    from: /AllowedActioner\.ALLOWED_ACTIONER_USER_ONLY/g,
    to: 'sixprotocol.nftmngr.AllowedActioner.ALLOWED_ACTIONER_USER_ONLY',
    description: 'Update AllowedActioner enum reference'
  },
  // Remove imports of GasPrice since it's not needed
  {
    from: /import\s*{\s*GasPrice\s*}\s*from\s*["']@cosmjs\/stargate["'];?\s*\n/g,
    to: '',
    description: 'Remove GasPrice import'
  },
  // Update getConnectorConfig destructuring
  {
    from: /const\s*{\s*rpcUrl,\s*apiUrl,\s*mnemonic\s*}\s*=\s*await\s*getConnectorConfig\(network\);/g,
    to: 'const { rpcUrl, mnemonic } = await getConnectorConfig(network);',
    description: 'Remove apiUrl from getConnectorConfig destructuring'
  },
];

function findFilesWithSixchainClient(directory) {
  const files = glob.sync(join(directory, '**/*.ts'));
  return files.filter(file => {
    const content = readFileSync(file, 'utf-8');
    return content.includes('@sixnetwork/sixchain-client');
  });
}

function applyMigrations(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  let changesMade = false;
  
  console.log(`\nMigrating: ${filePath}`);
  
  migrationRules.forEach(rule => {
    const originalContent = content;
    content = content.replace(rule.from, rule.to);
    if (content !== originalContent) {
      console.log(`  ✓ ${rule.description}`);
      changesMade = true;
    }
  });
  
  if (changesMade) {
    writeFileSync(filePath, content);
    console.log(`  → File updated successfully`);
  } else {
    console.log(`  → No changes needed`);
  }
}

function main() {
  const scriptsDirectory = './src/scripts';
  const filesToMigrate = findFilesWithSixchainClient(scriptsDirectory);
  
  console.log(`Found ${filesToMigrate.length} files to migrate:`);
  filesToMigrate.forEach(file => console.log(`  - ${file}`));
  
  if (filesToMigrate.length === 0) {
    console.log('No files found that need migration.');
    return;
  }
  
  console.log('\nStarting migration...');
  
  filesToMigrate.forEach(applyMigrations);
  
  console.log('\nMigration complete!');
  console.log('\nManual steps required:');
  console.log('1. Review all migrated files for any remaining issues');
  console.log('2. Update any custom message types or interfaces');
  console.log('3. Test the scripts to ensure they work correctly');
  console.log('4. Update any remaining snake_case properties to camelCase');
  console.log('5. Remove any unused imports');
}

if (require.main === module) {
  main();
}
