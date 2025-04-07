import { createConfig, http } from "wagmi";
import { hardhat, sepolia, mainnet } from "wagmi/chains";
import { metaMask, walletConnect } from "wagmi/connectors";

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

const sepoliaRpcUrl = process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL;
const mainnetRpcUrl = process.env.NEXT_PUBLIC_MAINNET_RPC_URL;

export const config = createConfig({
    chains: [hardhat, sepolia, mainnet],
    connectors: [
        metaMask(),
        walletConnect({ projectId: projectId || 'YOUR_PROJECT_ID' }),
    ],
    transports: {
        [hardhat.id]: http('http://127.0.0.1:8545'),
        [sepolia.id]: http(sepoliaRpcUrl),
        [mainnet.id]: http(mainnetRpcUrl),
    },
});
