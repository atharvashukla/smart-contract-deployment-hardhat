const ethers = require("ethers");
const fs = require("fs");

function main() {
  let res = [];
  for (let i = 0; i < 10; i++) {
    const wallet = ethers.Wallet.createRandom();
    res.push({
      pubKey: wallet.address,
      secKey: wallet.privateKey,
      phrase: wallet.mnemonic.phrase,
    });
  }
  return { data: res };
}

fs.writeFileSync("generate_wallets.json", JSON.stringify(main(), null, 4));
