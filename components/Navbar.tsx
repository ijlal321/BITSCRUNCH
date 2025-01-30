"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import React, {useState} from "react";

export function Navbar() {
  const [connectedtext, setConnectedtext] = useState('Connect Wallet');

  React.useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('walletAddress')) {
      const address = sessionStorage.getItem('walletAddress');
      setConnectedtext(`${address.slice(0, 6)}...${address.slice(-4)}`);
    }
  }, []);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          NFTGuard
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-blue-600">
            About
          </Link>
          <Link href="#features" className="text-gray-600 hover:text-blue-600">
            Features
          </Link>
          <Button asChild>
            {connectedtext
            ? <Link href="/portfolio">{connectedtext}</Link>
            : <Link href="/login">Connect Wallet</Link>
            }

              {/* <Link href="/dashboard">Dashboard</Link> */}
          </Button>
        </div>
      </div>
    </nav>
  )
}

