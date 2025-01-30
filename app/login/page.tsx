"use client"; 

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";

export default function LoginPage() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleConnect = async () => {
    setIsConnecting(true);
    setError(null);

    try {
      const provider: any = await detectEthereumProvider();

      if (provider) {
        // Request account access if needed
        await provider.request({ method: "eth_requestAccounts" });

        // We use ethers.js to interact with the provider
        const ethersProvider = new ethers.BrowserProvider(provider);
        const signer = await ethersProvider.getSigner();
        const address = await signer.getAddress();

        console.log("Connected address:", address);
        alert('wallet connected');
        sessionStorage.setItem("walletAddress", address);
        // Simulate wallet connection
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsConnecting(false);
        router.push("/portfolio");
      } else {
        setError("Please install MetaMask!");
        setIsConnecting(false);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to connect to MetaMask.");
      setIsConnecting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-purple-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
          <h1 className="text-2xl font-bold mb-6">Connect Your Wallet</h1>
          <p className="mb-6 text-gray-600">
            Connect your wallet to access your NFT portfolio and start using NFTGuard.
          </p>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            onClick={handleConnect}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            disabled={isConnecting}
          >
            {isConnecting ? "Connecting..." : "Connect Wallet"}
          </button>
        </div>
      </div>
    </>
  );
}