import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "";
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL || "";
const ETH_PRIVATE_KEY = process.env.ETH_PRIVATE_KEY || "";

const config: HardhatUserConfig = {
    solidity: "0.8.28",
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545/",
        },
        ...(ETH_PRIVATE_KEY && {
            sepolia: {
                url: SEPOLIA_RPC_URL,
                accounts: [ETH_PRIVATE_KEY],
            },
            mainnet: {
                url: MAINNET_RPC_URL,
                accounts: [ETH_PRIVATE_KEY],
            },
        }),
    },
};

export default config;
