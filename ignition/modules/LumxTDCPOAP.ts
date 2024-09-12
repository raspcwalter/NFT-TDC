import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LumxTDCPOAPModule = buildModule("LumxTDCPOAPModule", (m) => {

  const nft = m.contract("LumxTDCPOAP", ["0xBe4FFDA2b229F6f0e99a01Cf189E4d40FC623B23"]);

  return { nft };
});

export default LumxTDCPOAPModule;
