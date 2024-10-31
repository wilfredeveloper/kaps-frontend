'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function DailyDataRecordingComponent() {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCow, setSelectedCow] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    // Here you would typically make an API call to your backend to save the daily data
    // For this example, we'll just simulate a delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Daily Data Recording</CardTitle>
        <CardDescription>Enter today's data for each cow</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="cow-select">Select Cow</Label>
              <Select value={selectedCow} onValueChange={setSelectedCow} required>
                <SelectTrigger id="cow-select">
                  <SelectValue placeholder="Select a cow" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cow1">Bessie (ID: 001)</SelectItem>
                  <SelectItem value="cow2">Daisy (ID: 002)</SelectItem>
                  <SelectItem value="cow3">Molly (ID: 003)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="milk-yield">Milk Yield (L)</Label>
              <Input id="milk-yield" type="number" step="0.1" placeholder="Enter milk yield" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="feed-intake">Feed Intake (kg)</Label>
              <Input id="feed-intake" type="number" step="0.1" placeholder="Enter feed intake" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="health-status">Health Status</Label>
              <Select required>
                <SelectTrigger id="health-status">
                  <SelectValue placeholder="Select health status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="healthy">Healthy</SelectItem>
                  <SelectItem value="sick">Sick</SelectItem>
                  <SelectItem value="injured">Injured</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="notes">Notes</Label>
              <Input id="notes" placeholder="Any additional notes" />
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit Data"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}