"use client";

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Navbar } from "@/components/Navbar"

export default function GuardPage() {
  const { id } = useParams()
  const [notifyType, setNotifyType] = useState("price")
  const [notifyPrice, setNotifyPrice] = useState("")
  const [notifyPercent, setNotifyPercent] = useState("")

  // Selling strategy state
  const [sellEnabled, setSellEnabled] = useState(false)
  const [sellMethod, setSellMethod] = useState("ai")
  const [aiRiskTolerance, setAiRiskTolerance] = useState(50)
  const [customRules, setCustomRules] = useState([{ decreasePercent: "", sellPrice: "" }])

  const [buyBackEnabled, setBuyBackEnabled] = useState(false)
  const [buyBackPrice, setBuyBackPrice] = useState("")

  const handleAddRule = () => {
    setCustomRules([...customRules, { decreasePercent: "", sellPrice: "" }])
  }

  const handleRemoveRule = (index) => {
    const newRules = customRules.filter((_, i) => i !== index)
    setCustomRules(newRules)
  }

  const handleRuleChange = (index, field, value) => {
    const newRules = [...customRules]
    newRules[index][field] = value
    setCustomRules(newRules)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Guard settings:", {
      id,
      notifyType,
      notifyPrice,
      notifyPercent,
      sellEnabled,
      sellMethod,
      aiRiskTolerance,
      customRules,
      buyBackEnabled,
      buyBackPrice,
    })
    alert("Guard settings saved!")
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-8">
        <h1 className="text-3xl font-bold mb-8">Set Guard for NFT #{id}</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
          <div className="mb-4">
            <Label>Notify me when:</Label>
            <RadioGroup value={notifyType} onValueChange={setNotifyType} className="flex space-x-4 mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="price" id="notify-price" />
                <Label htmlFor="notify-price">Price reaches</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="percent" id="notify-percent" />
                <Label htmlFor="notify-percent">Price decreases by percentage</Label>
              </div>
            </RadioGroup>
          </div>
          {notifyType === "price" && (
            <div className="mb-4">
              <Label htmlFor="notifyPrice">Notification price (ETH):</Label>
              <Input
                id="notifyPrice"
                type="number"
                value={notifyPrice}
                onChange={(e) => setNotifyPrice(e.target.value)}
                placeholder="e.g. 0.5"
              />
            </div>
          )}
          {notifyType === "percent" && (
            <div className="mb-4">
              <Label htmlFor="notifyPercent">Notification percentage:</Label>
              <Input
                id="notifyPercent"
                type="number"
                value={notifyPercent}
                onChange={(e) => setNotifyPercent(e.target.value)}
                placeholder="e.g. 10"
              />
            </div>
          )}

          <h2 className="text-xl font-semibold mb-4 mt-8">Selling Strategy</h2>
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="sellEnabled">Enable automatic selling:</Label>
              <Switch id="sellEnabled" checked={sellEnabled} onCheckedChange={setSellEnabled} />
            </div>
          </div>

          {sellEnabled && (
            <>
              <div className="mb-4">
                <Label>Selling method:</Label>
                <Select value={sellMethod} onValueChange={setSellMethod}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a selling method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ai">AI-managed</SelectItem>
                    <SelectItem value="custom">Custom rules</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {sellMethod === "ai" && (
                <div className="mb-4">
                  <Label htmlFor="aiRiskTolerance">AI Risk Tolerance:</Label>
                  <Slider
                    id="aiRiskTolerance"
                    min={0}
                    max={100}
                    step={1}
                    value={[aiRiskTolerance]}
                    onValueChange={(value) => setAiRiskTolerance(value[0])}
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>Conservative</span>
                    <span>Balanced</span>
                    <span>Aggressive</span>
                  </div>
                </div>
              )}

              {sellMethod === "custom" && (
                <div className="mb-4">
                  <Label>Custom selling rules:</Label>
                  {customRules.map((rule, index) => (
                    <div key={index} className="flex space-x-2 mt-2">
                      <Input
                        type="number"
                        value={rule.decreasePercent}
                        onChange={(e) => handleRuleChange(index, "decreasePercent", e.target.value)}
                        placeholder="Decrease %"
                        className="w-1/3"
                      />
                      <Input
                        type="number"
                        value={rule.sellPrice}
                        onChange={(e) => handleRuleChange(index, "sellPrice", e.target.value)}
                        placeholder="Sell price (ETH)"
                        className="w-1/3"
                      />
                      <Button type="button" onClick={() => handleRemoveRule(index)} variant="destructive">
                        Remove
                      </Button>
                    </div>
                  ))}
                  <Button type="button" onClick={handleAddRule} className="mt-2">
                    Add Rule
                  </Button>
                </div>
              )}
            </>
          )}

          <h2 className="text-xl font-semibold mb-4 mt-8">Buy-back Strategy</h2>
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="buyBackEnabled">Enable buy-back feature:</Label>
              <Switch id="buyBackEnabled" checked={buyBackEnabled} onCheckedChange={setBuyBackEnabled} />
            </div>
          </div>

          {buyBackEnabled && (
            <div className="mb-4">
              <Label htmlFor="buyBackPrice">Buy back when price drops to (ETH):</Label>
              <Input
                id="buyBackPrice"
                type="number"
                value={buyBackPrice}
                onChange={(e) => setBuyBackPrice(e.target.value)}
                placeholder="e.g. 0.3"
              />
            </div>
          )}

          <Button type="submit" className="w-full mt-6">
            Save Guard Settings
          </Button>
        </form>
      </div>
    </>
  )
}

