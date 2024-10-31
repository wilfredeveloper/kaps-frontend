'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { AlertCircle, Droplet, Icon, ThermometerSun } from 'lucide-react'
import { cowHead } from "@lucide/lab"

// Mock data for the chart
const chartData = [
  { date: '2023-01', methane: 120, milk: 2500 },
  { date: '2023-02', methane: 115, milk: 2600 },
  { date: '2023-03', methane: 130, milk: 2400 },
  { date: '2023-04', methane: 100, milk: 2700 },
  { date: '2023-05', methane: 110, milk: 2800 },
  { date: '2023-06', methane: 95, milk: 2900 },
]

export default function DairyFarmDashboard() {
  const [selectedCow, setSelectedCow] = useState('all')

  return (
    <div className="container mx-auto p-4 bg-stone-50">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Dairy Farm Management Dashboard</h1>
      
      {/* Overview Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Methane Emissions</CardTitle>
            <Icon iconNode={cowHead} className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">112 g/day</div>
            <p className="text-xs text-muted-foreground">-5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Milk Yield</CardTitle>
            <Droplet className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28.5 L/day</div>
            <p className="text-xs text-muted-foreground">+3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Herd Health Status</CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Good</div>
            <p className="text-xs text-muted-foreground">2 cows need attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Trends & Analytics */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Methane Emissions & Milk Yield Trends</CardTitle>
          <CardDescription>Historical data over the past 6 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="methane" stroke="#82ca9d" name="Methane (g/day)" />
                <Line yAxisId="right" type="monotone" dataKey="milk" stroke="#8884d8" name="Milk Yield (L/day)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Daily Feed Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Daily Feed Recommendations</CardTitle>
          <CardDescription>Optimize methane reduction and milk yield</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Select value={selectedCow} onValueChange={setSelectedCow}>
              <SelectTrigger>
                <SelectValue placeholder="Select a cow" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cows</SelectItem>
                <SelectItem value="cow1">Cow #1</SelectItem>
                <SelectItem value="cow2">Cow #2</SelectItem>
                <SelectItem value="cow3">Cow #3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-2 bg-green-100 rounded">
              <div>
                <h4 className="font-semibold">Recommended DMI:</h4>
                <p>High-quality alfalfa hay + corn silage</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-green-700">Expected methane reduction: 5%</p>
                <p className="text-sm text-blue-700">Expected milk yield increase: 2%</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-2 bg-yellow-100 rounded">
              <div>
                <h4 className="font-semibold">Recommended Additive:</h4>
                <p>3-NOP (30g/cow/day)</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-green-700">Expected methane reduction: 10%</p>
                <p className="text-sm text-blue-700">No significant change in milk yield</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weather Impact Alert */}
      <Card className="mt-6 bg-orange-100 border-orange-300">
        <CardHeader className="flex flex-row items-center">
          <ThermometerSun className="h-6 w-6 text-orange-600 mr-2" />
          <div>
            <CardTitle>Weather Impact Alert</CardTitle>
            <CardDescription>High temperatures expected this week</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p>Increased temperatures may lead to heat stress. Consider adjusting feeding times and increasing water availability.</p>
        </CardContent>
      </Card>
    </div>
  )
}