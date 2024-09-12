import { ethers } from "hardhat";
 
async function main() {
  const MyNFT = await ethers.getContractFactory("LumxTDCPOAP", ["0xBe4FFDA2b229F6f0e99a01Cf189E4d40FC623B23"]);
  const myNFT = await MyNFT.deploy();
 
  await myNFT.waitForDeployment();
  const address = await myNFT.getAddress();
 
  console.log(`Contract LumxTDCPOAP deployed to ${address}`);
}
 
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});