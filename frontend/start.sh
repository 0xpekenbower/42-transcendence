#!/bin/sh

# Check the Build Mode (Development or Production)

if [ "$MODE" = "dev" ]; then
    echo "Starting Development Server..."
    exec npm run dev
else
    echo "Starting Production Server..."
    npm run build
    exec npm run start
fi