'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, User, Sun, CloudRain, Sprout, TrendingUp, ShieldCheck } from "lucide-react"
import Link from 'next/link'

export function ContractFarmingLandingPageComponent() {
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
            <Link href="/sign_up" className="hover:underline">Listings</Link>
            <Link href="/sign_up" className="hover:underline">Contracts</Link>
          </div>
          <div className="flex items-center space-x-4">
            <CalendarDays className="h-5 w-5" />
            <span>{currentDate}</span>
            {weather.condition === 'Sunny' ? <Sun className="h-5 w-5" /> : <CloudRain className="h-5 w-5" />}
            <span>{weather.temp}°C</span>
            <Link href="/sign_up">
              <User className="h-5 w-5 cursor-pointer" />
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-8">Contract Farming with कृषिConnect</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-green-700">What is Contract Farming?</h2>
            <p className="text-gray-700 mb-4">
              Contract farming is a system where farmers and buyers enter into agreements for the production and supply of agricultural products. This arrangement provides benefits to both parties, ensuring a stable market for farmers and a reliable supply for buyers.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">Learn More</Button>
          </div>
          <div className="flex items-center justify-center">
            <img src="/placeholder.svg" alt="Contract Farming Illustration" className="max-w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Benefits of Contract Farming</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sprout className="mr-2 h-6 w-6 text-green-600" />
                Guaranteed Market
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Secure a buyer for your produce before the growing season even begins, reducing market uncertainties.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-6 w-6 text-green-600" />
                Better Prices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Negotiate fair prices in advance, protecting you from market fluctuations and ensuring profitability.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShieldCheck className="mr-2 h-6 w-6 text-green-600" />
                Access to Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Gain access to quality inputs, technical knowledge, and sometimes even credit through your contract partner.</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-700 mb-6">Join कृषिConnect today and explore contract farming opportunities!</p>
          <Link href="/sign_up">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 mr-4">Sign Up</Button>
          </Link>
          <Link href="/sign_in">
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-100">Sign In</Button>
          </Link>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-green-800">How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Create your कृषिConnect account as a farmer or buyer</li>
              <li>Browse available contracts or post your requirements</li>
              <li>Negotiate terms and finalize the contract</li>
              <li>Receive support throughout the growing season</li>
              <li>Deliver your produce and get paid as per the agreement</li>
            </ol>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-green-800 text-white py-8">
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