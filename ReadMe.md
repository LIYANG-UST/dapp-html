# Simple HTML DApp

## Install dependencies

```bash
yarn

cd hardhat-simple-storage & yarn
```

## Run local hardhat network

```bash
cd hardhat-simple-storage && npx hardhat node
```

## Compile nodejs to frontend js

```bash
yarn browserify index.js --standalone bundle -o ./dist/bundle.js
```

## Live server

Test with metamask and live server

- Import your accounts to metamask
- Set the local network config (localhost:8545)
