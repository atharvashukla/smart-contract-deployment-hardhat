# Smart Contract Deployment with Hardhat

1. Install hardhat with `npm install --save-dev hardhat`
2. Generate a wallet. See `walletgen.js`. It will print out 10 wallets to `generate_wallets.json` (gitignored).
   Will need to install ethers for this `npm install --save-dev ethers`
3. Once the wallets are generated, I'll need goerli testnet eth in them. Use Alchemy to get 0.25 eth into 4 wallets:
   ```
   0xF733AEF047f0FDFe3FE181C0A7DADf8d793FC88E
   0x484F660cC37E6a92651FEbfB0c0e5C245515310E
   0x4C8041316783e56257290562faBC8b02fb4bD051
   0x4A0454D557F5Bf9c0d1B071528a3F0a366Fbde9E
   ```
4. Now deploying NFT contract using hardhat. Clone WC contract. `npx hardhat`
   - change compiler to 0.7.0, add solidity extensions for VSCODE.
   - make sure you're using commonjs module (ie remove "type": "module" from package.json)
5. For deployment, see `scripts/deploy.js`. ethers is in global scope, but I had to make a signer using the first generated wallet. Deploy using `npx hardhat run scripts/deploy.js --network goerli`
6. For verification, add "etherscan api key" to config then `npx hardhat verify --network goerli <contract address>`
