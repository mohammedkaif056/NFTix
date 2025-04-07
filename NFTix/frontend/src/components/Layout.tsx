import React from "react";
import { useAccount } from "wagmi";
import Link from "next/link";
import ClientOnly from "./ClientOnly";
import NavBar from "./NavBar";
import Toast from "./Toast";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { isConnected } = useAccount();

    return (
        <div className="container mx-auto text-center flex flex-col min-h-screen">
            <ClientOnly>
                <NavBar />
                <div className="flex-grow bg-gray-100 flex flex-col py-12 px-8">
                    {isConnected ? (
                        children
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full">
                            <p className="text-xl text-gray-800 mb-4">Please connect your wallet to continue.</p>
                        </div>
                    )}
                </div>
            </ClientOnly>
            <ClientOnly>
                <Toast />
            </ClientOnly>
            <footer className="bg-blue-800 text-white py-4">
                <p>
                    &copy; {new Date().getFullYear()} |{" "}
                    <Link href="https://github.com/s-damian/hardhat-nft-ticketing" className="hover:text-yellow-300" target="_blank">
                        Hardhat NFT Ticketing
                    </Link>
                </p>
            </footer>
        </div>
    );
};

export default Layout;
