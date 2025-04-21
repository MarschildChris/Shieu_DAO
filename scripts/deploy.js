const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const Token = await hre.ethers.getContractFactory("MyToken");
  const token = await Token.deploy(1000000); // 1 million tokens
  await token.waitForDeployment();

  const TokenSale = await hre.ethers.getContractFactory("TokenSale");
  const tokenSale = await TokenSale.deploy(await token.getAddress());
  await tokenSale.waitForDeployment();

  console.log("Token deployed at:", await token.getAddress());
  console.log("TokenSale deployed at:", await tokenSale.getAddress());

  // Approve TokenSale to spend tokens
  const approveTx = await token.approve(await tokenSale.getAddress(), hre.ethers.parseUnits("1000000", 18));
  await approveTx.wait();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
