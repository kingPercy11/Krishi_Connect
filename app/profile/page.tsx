'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, User, Sun, CloudRain} from "lucide-react"
import Link from 'next/link'

export default function Page() {
    return <Profile/>
}
function Profile() {
  const [userType, setUserType] = useState('farmer')
  const [currentDate] = useState('')
  const [weather] = useState({ temp: 28, condition: 'Sunny' })

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
      <div className="container mx-auto p-6 bg-green-50">
        <h1 className="text-3xl font-bold mb-6 text-green-800">Profile Management</h1>
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="col-span-1 border-green-200">
            <CardHeader className="bg-green-100">
              <CardTitle className="text-green-800">Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/placeholder.svg" alt="Profile picture" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Button className="bg-green-500 hover:bg-green-600 text-white">Change Picture</Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-green-700">Name</Label>
                  <Input id="name" placeholder="Your Name" className="border-green-300 focus:border-green-500 focus:ring-green-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-green-700">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="border-green-300 focus:border-green-500 focus:ring-green-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-green-700">Phone</Label>
                  <Input id="phone" type="tel" placeholder="Your phone number" className="border-green-300 focus:border-green-500 focus:ring-green-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="userType" className="text-green-700">User Type</Label>
                  <Select value={userType} onValueChange={setUserType}>
                    <SelectTrigger className="border-green-300 focus:border-green-500 focus:ring-green-500">
                      <SelectValue placeholder="Select user type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="farmer">Farmer</SelectItem>
                      <SelectItem value="buyer">Buyer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-1 md:col-span-2 border-green-200">
            <CardHeader className="bg-green-100">
              <CardTitle className="text-green-800">Role-Specific Details</CardTitle>
            </CardHeader>
            <CardContent>
              {userType === 'farmer' ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="farmSize" className="text-green-700">Farm Size (in acres)</Label>
                    <Input id="farmSize" type="number" placeholder="Farm size" className="border-green-300 focus:border-green-500 focus:ring-green-500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cropTypes" className="text-green-700">Types of Crops</Label>
                    <Input id="cropTypes" placeholder="e.g., Wheat, Rice, Corn" className="border-green-300 focus:border-green-500 focus:ring-green-500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="farmLocation" className="text-green-700">Farm Location</Label>
                    <Input id="farmLocation" placeholder="Farm location" className="border-green-300 focus:border-green-500 focus:ring-green-500" />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName" className="text-green-700">Business Name</Label>
                    <Input id="businessName" placeholder="Your business name" className="border-green-300 focus:border-green-500 focus:ring-green-500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialization" className="text-green-700">Specialization</Label>
                    <Input id="specialization" placeholder="e.g., Grain Buyer, Vegetable Distributor" className="border-green-300 focus:border-green-500 focus:ring-green-500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessLocation" className="text-green-700">Business Location</Label>
                    <Input id="businessLocation" placeholder="Business location" className="border-green-300 focus:border-green-500 focus:ring-green-500" />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          <Card className="col-span-1 md:col-span-3 border-green-200">
            <CardHeader className="bg-green-100">
              <CardTitle className="text-green-800">Payment Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="bankAccount" className="text-green-700">Bank Account Number</Label>
                  <Input id="bankAccount" placeholder="Your bank account number" className="border-green-300 focus:border-green-500 focus:ring-green-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ifsc" className="text-green-700">IFSC Code</Label>
                  <Input id="ifsc" placeholder="Bank IFSC Code" className="border-green-300 focus:border-green-500 focus:ring-green-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="upi" className="text-green-700">UPI ID</Label>
                  <Input id="upi" placeholder="Your UPI ID" className="border-green-300 focus:border-green-500 focus:ring-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-1 md:col-span-3 border-green-200">
            <CardHeader className="bg-green-100">
              <CardTitle className="text-green-800">Contracts</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="running">
                <TabsList className="bg-green-100">
                  <TabsTrigger value="running" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">Running Contracts</TabsTrigger>
                  <TabsTrigger value="history" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">Contract History</TabsTrigger>
                </TabsList>
                <TabsContent value="running">
                  <div className="space-y-4">
                    <Card className="border-green-200">
                      <CardHeader className="bg-green-50">
                        <CardTitle className="text-green-800">Contract #12345</CardTitle>
                        <CardDescription className="text-green-600">Wheat Supply - Expires in 3 months</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-green-700">Details of the running contract...</p>
                      </CardContent>
                    </Card>
                    {/* Add more running contracts here */}
                  </div>
                </TabsContent>
                <TabsContent value="history">
                  <div className="space-y-4">
                    <Card className="border-green-200">
                      <CardHeader className="bg-green-50">
                        <CardTitle className="text-green-800">Contract #98765</CardTitle>
                        <CardDescription className="text-green-600">Rice Supply - Completed on 01/01/2023</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-green-700">Details of the completed contract...</p>
                      </CardContent>
                    </Card>
                    {/* Add more historical contracts here */}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          <Card className="col-span-1 md:col-span-3 border-green-200">
            <CardHeader className="bg-green-100">
              <CardTitle className="text-green-800">Ratings and Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-green-800">Overall Rating: 4.5/5</h3>
                  <p className="text-green-600">Based on 20 reviews</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">Recent Reviews:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-green-600">
                    <li>Great quality products and timely delivery. - Buyer123</li>
                    <li>Excellent communication throughout the contract. - Farmer456</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6">
          <Link href="/dashboard-page">
              <Button className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white">Save Changes</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}