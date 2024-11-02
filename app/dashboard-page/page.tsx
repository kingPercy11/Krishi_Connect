'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CalendarDays, User, Sun, CloudRain, TrendingUp, FileText, Wallet, ArrowRight } from "lucide-react"
import Link from 'next/link'

// Mock data (in a real app, this would come from an API)

export default function Page() {
  return <DashboardPageComponent/>
  
}

const user = {
  name: "Rajesh Kumar",
  type: "Farmer",
  balance: 50000
}

const contract = {
  id: "C001",
  farmer: "Rajesh Kumar",
  company: "AgriCorp",
  completion: 75,
  lastUpdate: "2023-09-01",
  escrow: 25000
}

const newListings = [
  { id: "L001", title: "Wheat Contract", company: "GrainCo", quantity: "500 quintals", price: "₹2000/quintal" },
  { id: "L002", title: "Tomato Supply", company: "FreshVeggies", quantity: "200 quintals", price: "₹1500/quintal" },
]

const latestNews = [
  { id: "N001", title: "Government Announces New Subsidy for Organic Farming", date: "2023-09-04" },
  { id: "N002", title: "Record Wheat Production Expected This Year", date: "2023-09-03" },
  { id: "N003", title: "New Pest-Resistant Rice Variety Developed", date: "2023-09-02" },
]

const cropPrices = [
  { crop: "Wheat", price: "₹2000/quintal", change: "+2%" },
  { crop: "Rice", price: "₹2500/quintal", change: "-1%" },
  { crop: "Corn", price: "₹1800/quintal", change: "+3%" },
  { crop: "Soybean", price: "₹3500/quintal", change: "0%" },
]

function DashboardPageComponent() {
  const [currentDate, setCurrentDate] = useState('')
  const [weather] = useState({ temp: 28, condition: 'Sunny' })

  useEffect(() => {
    const now = new Date()
    setCurrentDate(now.toLocaleDateString('hi-IN', { day: 'numeric', month: 'long', year: 'numeric' }))
    // In a real app, you would fetch the weather data here
  }, [])

  return (
    <div className="min-h-screen bg-green-50">
      <nav className="bg-green-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-xl font-bold hover:underline">कृषिConnect</Link>
            <Link href="/listings" className="hover:underline">Listings</Link>
            <Link href="/contracts" className="hover:underline">Contracts</Link>
          </div>
          <div className="flex items-center space-x-4">
            <CalendarDays className="h-5 w-5" />
            <span>{currentDate}</span>
            {weather.condition === 'Sunny' ? <Sun className="h-5 w-5" /> : <CloudRain className="h-5 w-5" />}
            <span>{weather.temp}°C</span>
            <Link href="./profile">
              <User className="h-5 w-5 cursor-pointer"/>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-green-800">Hi, {user.name}</h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-green-200 shadow-md">
            <CardHeader className="bg-green-100">
              <CardTitle className="flex items-center text-green-800">
                <FileText className="mr-2 h-5 w-5" />
                New Listings
              </CardTitle>
            </CardHeader>
            <CardContent>
              {newListings.map(listing => (
                <div key={listing.id} className="mb-4 last:mb-0">
                  <h3 className="font-semibold text-green-700">{listing.title}</h3>
                  <p className="text-sm text-gray-600">Company: {listing.company}</p>
                  <p className="text-sm text-gray-600">Quantity: {listing.quantity}</p>
                  <p className="text-sm text-gray-600">Price: {listing.price}</p>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Link href="/listings" >
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  View All Listings
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              </CardFooter>
          </Card>

          <Card className="border-green-200 shadow-md">
            <CardHeader className="bg-green-100">
              <CardTitle className="flex items-center text-green-800">
                <TrendingUp className="mr-2 h-5 w-5" />
                Running Contract
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-green-700">Contract ID: {contract.id}</h3>
              <p className="text-sm text-gray-600">Company: {contract.company}</p>
              <p className="text-sm text-gray-600">Last Update: {contract.lastUpdate}</p>
              <p className="text-sm text-gray-600">Escrow: ₹{contract.escrow}</p>
              <div className="mt-2">
                <Progress value={contract.completion} className="w-full bg-green-200"  />
                <p className="text-xs text-gray-500 mt-1">Completion: {contract.completion}%</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                View All Contracts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Card className="mb-8 border-green-200 shadow-md">
          <CardHeader className="bg-green-100">
            <CardTitle className="flex items-center text-green-800">
              <Wallet className="mr-2 h-5 w-5" />
              Bank Account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-700">Balance: ₹{user.balance.toLocaleString()}</p>
            <Button className="mt-4 bg-green-600 hover:bg-green-700">Access Bank Account</Button>
          </CardContent>
        </Card>

        <Card className="mb-8 border-green-200 shadow-md">
          <CardHeader className="bg-green-100">
            <CardTitle className="text-green-800">Latest News</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              {latestNews.map(news => (
                <div key={news.id} className="mb-4 last:mb-0">
                  <h3 className="font-semibold text-green-700">{news.title}</h3>
                  <p className="text-sm text-gray-600">{news.date}</p>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <Link href="/news-page">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Read More News
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="mb-8 border-green-200 shadow-md">
          <CardHeader className="bg-green-100">
            <CardTitle className="text-green-800">Latest Crop Prices</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="bg-green-50">
                  <TableHead>Crop</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Change</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cropPrices.map((crop, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? 'bg-green-50' : ''}>
                    <TableCell>{crop.crop}</TableCell>
                    <TableCell>{crop.price}</TableCell>
                    <TableCell className={crop.change.startsWith('+') ? 'text-green-600' : crop.change.startsWith('-') ? 'text-red-600' : ''}>
                      {crop.change}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-green-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 कृषिConnect. All rights reserved.</p>
          <div className="mt-4">
            <Link href="/about" className="hover:underline mr-4">About Us</Link>
            <Link href="/contact" className="hover:underline mr-4">Contact</Link>
            <Link href="/privacy" className="hover:underline mr-4">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}