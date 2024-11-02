'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'

export default function Page() {
  return <Signup/>
}
function Signup() {
  const [userType, setUserType] = useState('farmer')

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 border border-green-200">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-800">Creating account is fast and easy!</h2>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label className="text-green-700">User Type</Label>
            <RadioGroup defaultValue="farmer" onValueChange={setUserType} className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="farmer" id="farmer" className="text-green-600" />
                <Label htmlFor="farmer" className="text-green-700">Farmer</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="buyer" id="buyer" className="text-green-600" />
                <Label htmlFor="buyer" className="text-green-700">Buyer</Label>
              </div>
            </RadioGroup>
          </div>
          <Input type="text" placeholder="Full Name*" required className="border-green-300 focus:border-green-500 focus:ring-green-500" />
          <div className="grid grid-cols-3 gap-2">
            <Select>
              <SelectTrigger className="border-green-300 focus:border-green-500 focus:ring-green-500">
                <SelectValue placeholder="Date" />
              </SelectTrigger>
              <SelectContent>
                {[...Array(31)].map((_, i) => (
                  <SelectItem key={i} value={`${i + 1}`}>{i + 1}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="border-green-300 focus:border-green-500 focus:ring-green-500">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                  <SelectItem key={month} value={month}>{month}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="border-green-300 focus:border-green-500 focus:ring-green-500">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {[...Array(100)].map((_, i) => (
                  <SelectItem key={i} value={`${new Date().getFullYear() - i}`}>{new Date().getFullYear() - i}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <RadioGroup defaultValue="male" className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" className="text-green-600" />
              <Label htmlFor="male" className="text-green-700">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" className="text-green-600" />
              <Label htmlFor="female" className="text-green-700">Female</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" className="text-green-600" />
              <Label htmlFor="other" className="text-green-700">Other</Label>
            </div>
          </RadioGroup>
          <Input type="tel" placeholder="Mobile Number*" required className="border-green-300 focus:border-green-500 focus:ring-green-500" />
          <Input type="email" placeholder="Email ID" className="border-green-300 focus:border-green-500 focus:ring-green-500" />
          {userType === 'farmer' && (
            <Input type="text" placeholder="Aadhaar Number*" required className="border-green-300 focus:border-green-500 focus:ring-green-500" />
          )}
          <Input type="password" placeholder="Set 6 digit security PIN*" required className="border-green-300 focus:border-green-500 focus:ring-green-500" />
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" required className="text-green-600 focus:ring-green-500" />
            <Label htmlFor="terms" className="text-sm text-green-700">
              I agree to the Contract Farming Terms of Service
            </Label>
          </div>
          <Link href="/dashboard-page">
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">Submit</Button>
          </Link>
        </form>
        <p className="mt-4 text-center text-green-800">
          Already have an account? <Link href="/sign_in" className="text-green-600 hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  )
}