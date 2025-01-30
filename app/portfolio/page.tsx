"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/Navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { BarChart, Activity, Wallet } from "lucide-react"

export default function PortfolioPage() {
  const [nfts, setNfts] = useState([])
  const [portfolioValue, setPortfolioValue] = useState(0)
  const [totalNFTs, setTotalNFTs] = useState(0)
  const [email, setEmail] = useState("")
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)

  useEffect(() => {
    // Simulating API call to fetch user's NFTs
    const fetchNFTs = async () => {
      // This would be replaced with an actual API call
      const mockNFTs = [
        {
          id: 1,
          name: "Cool Cat #1234",
          collection: "Cool Cats",
          image: "https://picsum.photos/200/300",
          price: 0.5,
          rarity: "Rare",
        },
        {
          id: 2,
          name: "Bored Ape #5678",
          collection: "BAYC",
          image: "https://picsum.photos/200/300",
          price: 10,
          rarity: "Legendary",
        },
        { id: 3, name: "Azuki #9101", collection: "Azuki", image: "https://picsum.photos/200/300", price: 2, rarity: "Uncommon" },
        { id: 4, name: "Doodle #1122", collection: "Doodles", image: "https://picsum.photos/200/300", price: 1.5, rarity: "Rare" },
      ]
      setNfts(mockNFTs)
      setTotalNFTs(mockNFTs.length)
      setPortfolioValue(mockNFTs.reduce((total, nft) => total + nft.price, 0))
    }

    fetchNFTs()
  }, [])

  const handleNotificationSettingsSubmit = (e) => {
    e.preventDefault()
    console.log("Notification settings saved:", { email, notificationsEnabled })
    // Here you would typically send this data to your backend
    alert("Notification settings saved!")
  }

  const gotoNFTPage = (nftId) => {
    window.location.href = `/guard/${nftId}`
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-8">
        <h1 className="text-3xl font-bold mb-8">Your NFT Portfolio</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Value</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{portfolioValue.toFixed(2)} ETH</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total NFTs</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalNFTs}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Guarded NFTs</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Math.floor(totalNFTs * 0.75)}</div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Notification Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleNotificationSettingsSubmit} className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="notifications" checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled} />
                <Label htmlFor="notifications">Enable email notifications</Label>
              </div>
              {notificationsEnabled && (
                <div className="space-y-2">
                  <Label htmlFor="email">Email address for notifications:</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              )}
              <Button type="submit">Save Notification Settings</Button>
            </form>
          </CardContent>
        </Card>

        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All NFTs</TabsTrigger>
            <TabsTrigger value="guarded">Guarded NFTs</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nfts.map((nft) => (
                <Card key={nft.id}>
                  <CardHeader>
                    <CardTitle>{nft.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={nft.image || "https://picsum.photos/200/300"}
                      alt={nft.name}
                      className="w-full h-48 object-cover mb-4 rounded-md"
                    />
                    <p className="text-sm text-gray-500 mb-2">Collection: {nft.collection}</p>
                    <p className="text-lg font-semibold mb-2">Price: {nft.price} ETH</p>
                    <Badge>{nft.rarity}</Badge>
                    <Button onClick={()=>gotoNFTPage(nft.id)} className="w-full mt-4">Set Guard</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="guarded">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nfts.slice(0, Math.floor(nfts.length * 0.75)).map((nft) => (
                <Card key={nft.id}>
                  <CardHeader>
                    <CardTitle>{nft.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={nft.image || "https://picsum.photos/200/300"}
                      alt={nft.name}
                      className="w-full h-48 object-cover mb-4 rounded-md"
                    />
                    <p className="text-sm text-gray-500 mb-2">Collection: {nft.collection}</p>
                    <p className="text-lg font-semibold mb-2">Price: {nft.price} ETH</p>
                    <Badge>{nft.rarity}</Badge>
                    <Button onClick={()=>gotoNFTPage(nft.id)} className="w-full mt-4">Update Guard</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

