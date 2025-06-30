
#!/bin/bash

# Build the project
npm run build

# Deploy to gh-pages branch
npx gh-pages -d dist

echo "Deployment complete! Your site should be live at https://kameghji.github.io"
