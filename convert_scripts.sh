#!/bin/bash

# Script to convert all remaining files from sixchain-client to sixchain-sdk

echo "Converting all scripts from @sixnetwork/sixchain-client to @sixnetwork/sixchain-sdk..."

# Find all TypeScript files that contain the old import
FILES=$(find src/scripts -name "*.ts" -exec grep -l "@sixnetwork/sixchain-client" {} \;)

for file in $FILES; do
    echo "Converting: $file"
    
    # Basic import replacements
    sed -i '' 's/import { SixDataChainConnector.*/import { getSigningSixprotocolClient, sixprotocol } from "@sixnetwork\/sixchain-sdk";/g' "$file"
    sed -i '' 's/import.*@sixnetwork\/sixchain-client.*;//g' "$file"
    
    # Add DirectSecp256k1HdWallet import if not present
    if ! grep -q "DirectSecp256k1HdWallet" "$file"; then
        sed -i '' '1i\
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
' "$file"
    fi
    
    # Remove apiUrl references  
    sed -i '' 's/, apiUrl//g' "$file"
    sed -i '' 's/apiUrl, //g' "$file"
    sed -i '' 's/sixConnector\.apiUrl.*;//g' "$file"
    
    echo "Completed basic conversion for: $file"
done

echo "Basic conversion completed. Manual review and testing required for each file."
