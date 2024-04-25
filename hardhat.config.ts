import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-verify";
import "hardhat-deploy";
import "dotenv/config";

import { getMnemonic } from "./utils/accounts";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    localhost: {
      deploy: ["deploy/ethereum/"],
      saveDeployments: false,
    },
    ethereum_testnet: {
      url: "https://ethereum-sepolia-rpc.publicnode.com	",
      deploy: ["deploy/ethereum/"],
      accounts: {
        mnemonic: getMnemonic("ethereum_sepolia"),
      },
    },
    ethereum_mainnet: {
      url: "https://rpc.ankr.com/eth",
      deploy: ["deploy/ethereum/"],
      accounts: {
        mnemonic: getMnemonic("ethereum_mainnet"),
      },
    },
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      // Ethereum
      ethereum_testnet: "0xdc5c8fc9aA8101e495BCF7F8a43e8E3E9a1617E2",
      ethereum_mainnet: "0xdc5c8fc9aA8101e495BCF7F8a43e8E3E9a1617E2",
    },
  },
  // For contract source verification
  etherscan: {
    apiKey: {},
  },
};

export default config;
