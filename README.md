# Getting Started with NPM package

## publish npm package
### 1)  npm install --save-dev @babel/cli @babel/preset-react

### 2) edit your package.json
```
{
...,
"private": false,
"babel": {
  "presets": [
    "@babel/preset-react"
  ]
},
"dependencies": {
  ...
},
"scripts": {
  ...,
  "publish:npm": "rm -rf dist && mkdir dist &&  babel ./src/components -d dist --copy-files"
},
"eslintConfig": {
  ...
},
"browserslist": {
 ...
},
"devDependencies": {
  "@babel/cli": "^7.5.5",
  "@babel/preset-react": "^7.0.0"
}
}
```

### 3) Create or Login npm Account

### 4) npm login

### 5) npm run publish:npm

### 6) npm publish




