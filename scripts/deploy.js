const hre = require("hardhat");

async function main() {
  const BikeToken = await hre.ethers.getContractFactory("BikeToken");
  const bikeToken = await BikeToken.deploy(100000000, 50);

  await bikeToken.deployed();

  console.log("Bike Token deployed: ", bikeToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  
});