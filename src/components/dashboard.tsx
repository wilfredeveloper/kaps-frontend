"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts";
import {
  AlertCircle,
  Droplet,
  ThermometerSun,
  Bell,
  BarChart as BarChartIcon,
  Icon,
  TrendingUp,
} from "lucide-react";
import { cowHead } from "@lucide/lab";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Toast } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { MethaneTrendsGraph } from "./methane-trends-graph";

// Mock data generation functions
const generateChartData = (startDate: Date, days: number): any[] => {
  const data = [];
  for (let i = 0; i < days; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    data.push({
      date: date.toLocaleDateString(),
      methane: Math.floor(Math.random() * (150 - 80) + 80),
      milk: Math.floor(Math.random() * (35 - 20) + 20),
    });
  }
  return data;
};

const cowsData = [
  {
    id: "cow1",
    name: "Bessie",
    age: 5,
    weight: 257,
    lactationStage: "Mid",
    milkYield: Math.floor(Math.random() * (35 - 20) + 20),
    feedIntake: Math.floor(Math.random() * (50 - 30) + 30),
  },
  {
    id: "cow2",
    name: "Daisy",
    age: 3,
    weight: 300,
    lactationStage: "Early",
    milkYield: Math.floor(Math.random() * (35 - 20) + 20),
    feedIntake: Math.floor(Math.random() * (50 - 30) + 30),
  },
  {
    id: "cow3",
    name: "Molly",
    age: 7,
    weight: 337,
    lactationStage: "Late",
    milkYield: Math.floor(Math.random() * (35 - 20) + 20),
    feedIntake: Math.floor(Math.random() * (50 - 30) + 30),
  },
];

export function Dashboard() {
  const [selectedCow, setSelectedCow] = useState("all");
  const [chartData, setChartData] = useState(
    generateChartData(new Date("2023-01-01"), 14)
  );
  const { toast } = useToast();

  // Simulating real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newChartData = generateChartData(new Date("2023-01-01"), 14);
      setChartData(newChartData);
    }, 100000);

    return () => clearInterval(interval);
  }, []);

  const generateFullReport = () => {
    return {
      milkProduction: {
        total: 8550,
        average: 28.5,
        topProducer: "Bessie",
      },
      methaneEmissions: {
        total: 33600,
        average: 112,
        lowestEmitter: "Daisy",
      },
      feedEfficiency: {
        average: 1.8,
        bestPerformer: "Molly",
      },
      healthIncidents: [
        { cow: "Bessie", issue: "Mild fever", status: "Resolved" },
        { cow: "Daisy", issue: "Lameness", status: "Ongoing" },
        { cow: "Molly", issue: "Mastitis", status: "Resolved" },
      ],
    };
  };

  const chartConfig = {
    methane: {
      label: "Methane",
      color: "hsl(var(--chart-1))",
    },
    milk: {
      label: "Milk",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  console.log("====> chart data: ", chartData);

  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-green-800">
        Dairy Farm Management Dashboard
      </h1>

      {/* Overview Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Methane Emissions
            </CardTitle>
            <Icon iconNode={cowHead} className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">112 g/day</div>
            <p className="text-xs text-muted-foreground">-5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Milk Yield
            </CardTitle>
            <Droplet className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28.5 L/day</div>
            <p className="text-xs text-muted-foreground">+3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Herd Health Status
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Good</div>
            <p className="text-xs text-muted-foreground">
              2 cows need attention
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Cow Selection Dropdown */}
        <Card className="">
          <CardHeader>
            <CardTitle>Cow Selection</CardTitle>
            <CardDescription>
              Select a cow to view detailed data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Select value={selectedCow} onValueChange={setSelectedCow}>
              <SelectTrigger className="w-[12rem]">
                <SelectValue placeholder="Select a cow" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cows</SelectItem>
                {cowsData.map((cow) => (
                  <SelectItem key={cow.id} value={cow.id}>
                    {cow.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Daily Feed Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle>Daily Feed Recommendations</CardTitle>
            <CardDescription>
              Optimize methane reduction and milk yield
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-between flex-col items-start p-4 bg-green-100 rounded">
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">
                    Recommended Feed for{" "}
                    {selectedCow === "all"
                      ? "All Cows"
                      : cowsData.find((cow) => cow.id === selectedCow)?.name}
                    :
                  </h4>
                  <p className="text-sm">
                    {selectedCow === "all"
                      ? "High-quality alfalfa hay + corn silage"
                      : "Customized feed mix based on lactation stage and weight"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-green-700">
                    Expected methane reduction:{" "}
                    {selectedCow === "all" ? "5%" : "7%"}
                  </p>
                  <p className="text-sm text-blue-700">
                    Expected milk yield increase:{" "}
                    {selectedCow === "all" ? "2%" : "3%"}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-start flex-col p-4 bg-yellow-100 rounded">
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Recommended Additive:</h4>
                  <p className="text-sm">3-NOP (30g/cow/day)</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-green-700">
                    Expected methane reduction: 10%
                  </p>
                  <p className="text-sm text-blue-700">
                    No significant change in milk yield
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Trends & Analytics and Feed Efficiency Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Trends & Analytics */}
        <Card>
          <CardHeader>
            <CardTitle>Methane Emissions & Milk Yield Trends</CardTitle>
            <CardDescription>
              Historical data with date range selection
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <ChartLegend content={<ChartLegendContent />} />
                <XAxis dataKey={"date"} tickLine={false} axisLine={false} tickMargin={8} angle={45} />
                <defs>
                  <linearGradient id="fillMethane" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-methane)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-methane)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                  <linearGradient id="fillMilk" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-milk)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-milk)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="methane"
                  type="natural"
                  fill="url(#fillMethane)"
                  fillOpacity={0.4}
                  stroke="var(--color-methane)"
                  stackId="a"
                />
                <Area
                  dataKey="milk"
                  type="natural"
                  fill="url(#fillMilk)"
                  fillOpacity={0.4}
                  stroke="var(--color-milk)"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
        {/* <MethaneTrendsGraph /> */}

        {/* Feed Efficiency Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Feed Efficiency Analysis</CardTitle>
            <CardDescription>Milk yield per kg of feed intake</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={cowsData.map((cow) => ({
                    name: cow.name,
                    efficiency: cow.milkYield / cow.feedIntake,
                  }))}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="efficiency"
                    fill="#8884d8"
                    name="Milk (L) per kg Feed"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Cow Data */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Detailed Cow Data</CardTitle>
          <CardDescription>
            Individual cow statistics and comparisons
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Weight (kg)</TableHead>
                <TableHead>Lactation Stage</TableHead>
                <TableHead>Today's Methane (g)</TableHead>
                <TableHead>Today's Milk (L)</TableHead>
                <TableHead>Feed Efficiency</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cowsData.map((cow) => (
                <TableRow key={cow.id}>
                  <TableCell>{cow.name}</TableCell>
                  <TableCell>{cow.age}</TableCell>
                  <TableCell>{cow.weight}</TableCell>
                  <TableCell>{cow.lactationStage}</TableCell>
                  <TableCell>
                    {Math.floor(Math.random() * (150 - 80) + 80)}
                  </TableCell>
                  <TableCell>
                    {Math.floor(Math.random() * (35 - 20) + 20)}
                  </TableCell>
                  <TableCell>{(Math.random() * 2 + 1).toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* IoT Integration & Notifications */}
      <Card className="mt-6">
        <CardHeader className="flex flex-row items-center">
          <Bell className="h-6 w-6 text-blue-600 mr-2" />
          <div>
            <CardTitle>IoT Notifications</CardTitle>
            <CardDescription>
              Real-time updates from connected devices
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Badge variant="outline" className="text-green-600 bg-green-100">
              All systems operational
            </Badge>
            <p>Monitoring 3 connected devices. Last update: 13 days ago</p>
          </div>
        </CardContent>
      </Card>

      {/* Weather Impact Alert */}
      <Card className="mt-6 bg-orange-100 border-orange-300">
        <CardHeader className="flex flex-row items-center">
          <ThermometerSun className="h-6 w-6 text-orange-600 mr-2" />
          <div>
            <CardTitle>Weather Impact Alert</CardTitle>
            <CardDescription>
              High temperatures expected this week
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p>
            Increased temperatures may lead to heat stress. Consider adjusting
            feeding times and increasing water availability.
          </p>
        </CardContent>
      </Card>

      {/* Monthly Report Summary */}
      <Card className="mt-6">
        <CardHeader className="flex flex-row items-center">
          <BarChartIcon className="h-6 w-6 text-purple-600 mr-2" />
          <div>
            <CardTitle>Monthly Report Summary</CardTitle>
            <CardDescription>
              Key performance indicators for the past month
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p>
              <strong>Average Daily Milk Yield:</strong> 28.5 L/cow
            </p>
            <p>
              <strong>Average Methane Emissions:</strong> 112 g/cow/day
            </p>
            <p>
              <strong>Feed Efficiency:</strong> 1.8 L milk / kg feed
            </p>
            <p>
              <strong>Health Incidents:</strong> 3 (2 resolved, 1 ongoing)
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-2">View Full Report</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] lg:max-w-[800px]">
                <DialogHeader>
                  <DialogTitle>Monthly Full Report</DialogTitle>
                  <DialogDescription>
                    Detailed performance metrics for the past month
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 items-start gap-20">
                    <div className="grid grid-cols-2 items-center gap-4">
                      <h3 className="font-semibold col-span-2">
                        Milk Production
                      </h3>
                      <p className="text-sm text-muted-foreground">Total:</p>
                      <p>8,550 L</p>
                      <p className="text-sm text-muted-foreground">Average:</p>
                      <p>28.5 L/cow/day</p>
                      <p className="text-sm text-muted-foreground">
                        Top Producer:
                      </p>
                      <p>Bessie</p>
                    </div>

                    <div className="grid grid-cols-2 items-center gap-4">
                      <h3 className="font-semibold col-span-2">
                        Methane Emissions
                      </h3>
                      <p className="text-sm text-muted-foreground">Total:</p>
                      <p>33,600 g</p>
                      <p className="text-sm text-muted-foreground">Average:</p>
                      <p>112 g/cow/day</p>
                      <p className="text-sm text-muted-foreground">
                        Lowest Emitter:
                      </p>
                      <p>Daisy</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 items-start lg:mt-4 gap-20">
                    <div className="grid grid-cols-2 items-center gap-4">
                      <h3 className="font-semibold col-span-2">
                        Feed Efficiency
                      </h3>
                      <p className="text-sm text-muted-foreground">Average:</p>
                      <p>1.8 L milk / kg feed</p>
                      <p className="text-sm text-muted-foreground">
                        Best Performer:
                      </p>
                      <p>Molly</p>
                    </div>

                    <div className="grid grid-cols-2 items-center gap-4">
                      <h3 className="font-semibold col-span-2">
                        Health Incidents
                      </h3>
                      <p className="text-sm text-muted-foreground">Bessie:</p>
                      <p>Mild fever (Resolved)</p>
                      <p className="text-sm text-muted-foreground">Daisy:</p>
                      <p>Lameness (Ongoing)</p>
                      <p className="text-sm text-muted-foreground">Molly:</p>
                      <p>Mastitis (Resolved)</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      <Toast />
    </div>
  );
}
