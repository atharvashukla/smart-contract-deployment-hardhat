require("dotenv").config();

async function main() {
  let alchemyProvider = await new ethers.providers.AlchemyProvider("goerli", process.env.ALCHEMY_GOERLI_KEY);
  const deployer = await new ethers.Wallet(process.env.DEPLOYER_PK, alchemyProvider);

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("WickedCraniums");
  const token = await Token.deploy();

  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
