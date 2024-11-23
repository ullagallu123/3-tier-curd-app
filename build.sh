#!/bin/bash

# List of docker-compose files
compose_files=(
  "mysql-build.yml"
  "backend-build.yml"
  "frontend-build.yml"
  "react-build.yml"
)

# Display options
echo "Choose which image to build:"
for i in "${!compose_files[@]}"; do
  echo "$((i + 1)). ${compose_files[$i]}"
done

# Get user choice
read -p "Enter the number of your choice: " choice

# Validate input
if [[ "$choice" -ge 1 && "$choice" -le ${#compose_files[@]} ]]; then
  selected_file="${compose_files[$((choice - 1))]}"
  echo "Building images using $selected_file..."
  docker-compose -f "$selected_file" build
  if [[ $? -eq 0 ]]; then
    echo "Build completed successfully!"
  else
    echo "Error occurred during the build."
  fi
else
  echo "Invalid choice. Please run the script again and select a valid option."
  exit 1
fi
