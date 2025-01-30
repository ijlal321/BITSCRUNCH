import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Wallet, BarChart2, Database, Cpu } from "lucide-react"
import { Navbar } from "@/components/Navbar"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <Navbar />

      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6">Protect Your NFT Investments with AI</h1>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          NFTGuard uses advanced AI and the bitsCrunch API to monitor, analyze, and protect your NFT portfolio.
        </p>
        <Button size="lg" asChild>
          <Link href="/login">
            Get Started <ArrowRight className="ml-2" />
          </Link>
        </Button>

        <div id="features" className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard
            icon={<Shield className="w-12 h-12 text-blue-500" />}
            title="AI-Powered Protection"
            description="Our AI agent continuously monitors your NFTs for price changes and market trends."
          />
          <FeatureCard
            icon={<Wallet className="w-12 h-12 text-blue-500" />}
            title="Easy Wallet Integration"
            description="Connect your wallet securely and let NFTGuard do the rest."
          />
          <FeatureCard
            icon={<BarChart2 className="w-12 h-12 text-blue-500" />}
            title="Real-time Analytics"
            description="Get insights on your NFT portfolio with data from the bitsCrunch API."
          />
        </div>

        <div id="about" className="mt-24 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6">Powered by bitsCrunch</h2>
          <p className="text-lg mb-8">
            NFTGuard leverages the powerful bitsCrunch API to gather comprehensive data on NFTs, ensuring you have the
            most accurate and up-to-date information for your investments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AIFeatureCard
              icon={<Database className="w-10 h-10 text-blue-500" />}
              title="Data Gathering"
              description="Our AI collects and analyzes vast amounts of NFT data from multiple sources."
            />
            <AIFeatureCard
              icon={<Cpu className="w-10 h-10 text-blue-500" />}
              title="Price Estimation"
              description="Advanced algorithms predict NFT prices based on historical data and market trends."
            />
            <AIFeatureCard
              icon={<BarChart2 className="w-10 h-10 text-blue-500" />}
              title="Rarity Assessment"
              description="AI-powered analysis determines the true rarity and uniqueness of your NFTs."
            />
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 mt-24 py-8 text-center">
        <p>&copy; 2023 NFTGuard. All rights reserved.</p>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function AIFeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  )
}

