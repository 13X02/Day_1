const hre = require("hardhat");
async function main() {
  const AadharRegistery = await hre.ethers.getContractFactory("AadharRegistery");
  const aadharlock = await AadharRegistery.deploy();

  await aadharlock.deployed();

  console.log(
    `deployed to ${aadharlock.address}`
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
