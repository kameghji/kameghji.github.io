
# Manual Package.json Updates Needed

Add these entries to your package.json:

```json
{
  "homepage": "https://kameghji.github.io",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Then install the gh-pages package:
```bash
npm install --save-dev gh-pages
```
