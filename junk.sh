#!/bin/bash
# find . -type f \( -name "*.Identifier" -o -name "*.DS_Store" \) -delete 

# Check if the filepath argument is provided
if [ -z "$1" ]; then
  filepath="."
fi

# Get the filepath argument
filepath="$1"

# Run the find command with the filepath argument
find "$filepath" -type f \( -name "*.Identifier" -o -name "*.DS_Store" \) -delete