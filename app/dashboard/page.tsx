"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield } from "lucide-react"
import { Navbar } from "@/components/Navbar"

export default function DashboardPage() {
  const [nfts, setNfts] = useState([])

  useEffect(() => {
    // Simulate fetching NFTs
    const fetchNfts = async () => {
      const mockNfts = [
        { id: 1, name: "Cool Cat #1234", image: "/placeholder.svg", price: "0.5 ETH" },
        { id: 2, name: "Bored Ape #5678", image: "/placeholder.svg", price: "10 ETH" },
        { id: 3, name: "Azuki #9101", image: "/placeholder.svg", price: "2 ETH" },
      ]
      setNfts(mockNfts)
    }
    fetchNfts()
  }, [])

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-8">
        <h1 className="text-3xl font-bold mb-8">Your NFT Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nfts.map((nft) => (
            <Card key={nft.id}>
              <CardHeader>
                <CardTitle>{nft.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={nft.image || "/placeholder.svg"} alt={nft.name} className="w-full h-48 object-cover mb-4" />
                <p className="text-lg font-semibold mb-4">Current Price: {nft.price}</p>
                <Button asChild>
                  <Link href={`/guard/${nft.id}`}>
                    <Shield className="mr-2" /> Guard this NFT
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}

