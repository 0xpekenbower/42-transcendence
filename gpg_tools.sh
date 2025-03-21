#!/bin/bash

set -e
# Files to encrypt/decrypt
ENV_FILE="./infra/.env"

# Default recipient for public key encryption
DEFAULT_RECIPIENT="elmrabet.abdellah11@gmail.com"

# Function to encrypt a file
encrypt_file() {
    local file=$1
    local output="${file}.gpg"
    
    if [ ! -f "$file" ]; then
        echo "Warning: $file does not exist, skipping encryption."
        return
    fi
    
    echo "Encrypting $file..."
    gpg --yes --batch --output "$output" --encrypt --recipient "$DEFAULT_RECIPIENT" "$file"
    
    if [ $? -eq 0 ]; then
        echo "Successfully encrypted $file to $output"
        chmod 600 "$output"
        rm "$file"
    else
        echo "Failed to encrypt $file"
        exit 1
    fi
}

# Function to decrypt a file
decrypt_file() {
    local encrypted_file="${1}.gpg"
    local output=$1
    
    if [ ! -f "$encrypted_file" ]; then
        echo "Warning: $encrypted_file does not exist, skipping decryption."
        return
    fi
    
    echo "Decrypting $encrypted_file..."
    gpg --yes --batch --output "$output" --decrypt "$encrypted_file"
    
    if [ $? -eq 0 ]; then
        echo "Successfully decrypted $encrypted_file to $output"
        chmod 600 "$output"
        rm "$encrypted_file"
    else
        echo "Failed to decrypt $encrypted_file"
        exit 1
    fi
}

# Function to encrypt all files
encrypt_all() {
    # Create directory if it doesn't exist
    
    encrypt_file "$ENV_FILE"
}

# Function to decrypt all files
decrypt_all() {
    # Create directory if it doesn't exist
    
    decrypt_file "$ENV_FILE"
}

# Main script logic
if [ $# -lt 1 ]; then
    echo "Usage: $0 [encrypt|decrypt]"
    exit 1
fi

COMMAND=$1

case "$COMMAND" in
    encrypt)
        encrypt_all
        ;;
    decrypt)
        decrypt_all
        ;;
    *)
        echo "Error: Unknown command '$COMMAND'"
        echo "Usage: $0 [encrypt|decrypt]"
        exit 1
        ;;
esac

exit 0
