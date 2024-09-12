import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true, 
        runs: 200
      }
    }
  },
  networks: {
    sepolia: {
      url: process.env.RPC_NODE_S,
      chainId: Number(process.env.CHAIN_ID_S),
      accounts: {
        mnemonic: process.env.SECRET
      }
    },
    holesky: {
      url: process.env.RPC_NODE_H,
      chainId: Number(process.env.CHAIN_ID_H),
      accounts: {
        mnemonic: process.env.SECRET
      }
    }, 
    amoy: {
      url: process.env.RPC_NODE_A,
      chainId: Number(process.env.CHAIN_ID_A),
      accounts: {
        mnemonic: process.env.SECRET
      }  
    }, 
    mantle: {
      url: process.env.RPC_NODE_M,
      chainId: Number(process.env.CHAIN_ID_M),
      accounts: {
        mnemonic: process.env.SECRET
      }  
    },
    polygon: {
      url: process.env.RPC_NODE_P,
      chainId: Number(process.env.CHAIN_ID_P),
      accounts: {
        mnemonic: process.env.SECRET
      }  
    }
  },
  etherscan: {
    apiKey: process.env.API_KEY
  },
  sourcify: {
    enabled:true
  }
};

export default config;
