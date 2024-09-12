import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
 
describe("LumxTDCPOAP", () => {
  async function deployFixture() {
    const [owner, otherAccount] = await ethers.getSigners();
    const MyNFT = await ethers.getContractFactory("LumxTDCPOAP", ["0xBe4FFDA2b229F6f0e99a01Cf189E4d40FC623B23"]);
    const myNFT = await MyNFT.deploy();
    return { myNFT, owner, otherAccount };
  }
});