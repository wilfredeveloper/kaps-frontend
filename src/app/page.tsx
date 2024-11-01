import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronRight,
  BarChart2,
  Leaf,
  Droplet,
  ThermometerSun,
  Bell,
  Icon,
} from "lucide-react";

import { cowHead } from "@lucide/lab";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 px-40">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center justify-center flex-col">
            <Link
              href="/"
              className="text-2xl flex items-center font-bold text-green-800 p-4"
            >
              <Image
                src="/logo.png"
                alt="EcoDairy.AI"
                width={100}
                height={100}
                className="rounded-full"
              />
              <p className="text-sm text-green-500">Ecodairy.AI</p>
            </Link>
          </div>
          <div className="space-x-4">
            <Link
              href="#features"
              className="text-green-700 hover:text-green-900"
            >
              Features
            </Link>
            <Link
              href="#benefits"
              className="text-green-700 hover:text-green-900"
            >
              Benefits
            </Link>
          </div>
          <Button asChild>
            <Link href="/dashboard">Try Demo</Link>
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-800 mb-4">
            Revolutionize Your Dairy Farm Management
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Optimize milk production, reduce methane emissions, and improve herd
            health with our cutting-edge technology.
          </p>
          <Button size="lg" asChild>
            <Link href="/register/farmer">
              Get Started <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>
        <section id="features" className="mb-16">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Icon
                  iconNode={cowHead}
                  className="h-8 w-8 text-yellow-600 mb-2"
                />
                <CardTitle>Individual Cow Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                Monitor each cow's health, milk production, and feed efficiency
                in real-time.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BarChart2 className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                Gain insights from comprehensive data analysis to make informed
                decisions.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Leaf className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Methane Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                Implement strategies to reduce methane emissions and improve
                sustainability.
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="benefits" className="mb-16">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Droplet className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Increased Milk Yield</CardTitle>
              </CardHeader>
              <CardContent>
                Optimize feeding and health management to boost milk production
                by up to 15%.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <ThermometerSun className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Improved Herd Health</CardTitle>
              </CardHeader>
              <CardContent>
                Early detection of health issues leads to faster treatment and
                reduced veterinary costs.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Leaf className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent>
                Reduce methane emissions by up to 30% through optimized feed
                management and additives.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Bell className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Real-time Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                Receive instant notifications for critical events, allowing for
                timely interventions.
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Ready to Transform Your Dairy Farm?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied farmers who have increased productivity
            and sustainability.
          </p>
          <Button size="lg" asChild>
            <Link href="/signup">
              Start Your Free Trial <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8 px-12 rounded-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Ecodairy.AI</h3>
              <p>
                Empowering dairy farmers with innovative technology solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <p>Follow us on social media for the latest updates and tips.</p>
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="hover:text-green-300">
                  Facebook
                </Link>
                <Link href="#" className="hover:text-green-300">
                  Twitter
                </Link>
                <Link href="#" className="hover:text-green-300">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted">
            <p>&copy; 2024 Ecodairy.AI . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
