'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'

export default function Page() {
    return <Signin/>
}
function Signin() {
  const [loginMethod, setLoginMethod] = useState('mobile')
  const [mobileNumber, setMobileNumber] = useState('')
  const [username, setUsername] = useState('')
  const [aadhaar, setAadhaar] = useState('')
  const [pin, setPin] = useState('')
  const [otp, setOtp] = useState('')
  const [showOtp, setShowOtp] = useState(false)
  const [showPin, setShowPin] = useState(false)
  const [forgotPin, setForgotPin] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (loginMethod === 'mobile') {
      setShowOtp(true)
    } else if (loginMethod === 'username') {
      setShowPin(true)
    } else if (loginMethod === 'aadhaar') {
      setShowOtp(true)
    }
  }

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('OTP submitted:', otp)
  }

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('PIN submitted:', pin)
  }

  const handleForgotPin = () => {
    setForgotPin(true)
    setShowOtp(true)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 border border-green-200">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-800">Sign In to your account!</h2>
        <Tabs value={loginMethod} onValueChange={(value) => { setLoginMethod(value); setShowOtp(false); setShowPin(false); setForgotPin(false); }} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-green-100">
            <TabsTrigger value="mobile" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">Mobile</TabsTrigger>
            <TabsTrigger value="username" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">Username</TabsTrigger>
            <TabsTrigger value="aadhaar" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">Aadhaar</TabsTrigger>
          </TabsList>
          <TabsContent value="mobile">
            <form onSubmit={handleSubmit}>
              <Input 
                type="tel" 
                placeholder="Mobile Number*" 
                className="mb-4 border-green-300 focus:border-green-500 focus:ring-green-500" 
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required 
              />
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
                Get OTP
              </Button>
            </form>
            {showOtp && (
              <form onSubmit={handleOtpSubmit} className="mt-4">
                <Input 
                  type="text" 
                  placeholder="Enter OTP" 
                  className="mb-4 border-green-300 focus:border-green-500 focus:ring-green-500" 
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required 
                />
                <Link href="/dashboard-page">
                  <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Submit OTP
                  </Button>
                </Link>
              </form>
            )}
          </TabsContent>
          <TabsContent value="username">
            <form onSubmit={handleSubmit}>
              <Input 
                type="text" 
                placeholder="Username*" 
                className="mb-4 border-green-300 focus:border-green-500 focus:ring-green-500" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
              />
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
                Next
              </Button>
            </form>
            {showPin && !forgotPin && (
              <form onSubmit={handlePinSubmit} className="mt-4">
                <Input 
                  type="password" 
                  placeholder="Enter PIN" 
                  className="mb-4 border-green-300 focus:border-green-500 focus:ring-green-500" 
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  required 
                />
                <Link href="/dashboard-page">
                  <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Submit PIN
                  </Button>
                </Link>
                <Button type="button" onClick={handleForgotPin} className="w-full mt-2 bg-green-100 hover:bg-green-200 text-green-800">
                  Forgot PIN
                </Button>
              </form>
            )}
            {forgotPin && showOtp && (
              <form onSubmit={handleOtpSubmit} className="mt-4">
                <Input 
                  type="text" 
                  placeholder="Enter OTP" 
                  className="mb-4 border-green-300 focus:border-green-500 focus:ring-green-500" 
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required 
                />
                <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
                  Reset PIN
                </Button>
              </form>
            )}
          </TabsContent>
          <TabsContent value="aadhaar">
            <form onSubmit={handleSubmit}>
              <Input 
                type="text" 
                placeholder="Aadhaar Number*" 
                className="mb-4 border-green-300 focus:border-green-500 focus:ring-green-500" 
                value={aadhaar}
                onChange={(e) => setAadhaar(e.target.value)}
                required 
              />
              
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
                Get OTP
              </Button>
            </form>
            {showOtp && (
              <form onSubmit={handleOtpSubmit} className="mt-4">
                <Input 
                  type="text" 
                  placeholder="Enter OTP" 
                  className="mb-4 border-green-300 focus:border-green-500 focus:ring-green-500" 
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required 
                />
                <Link href="/dashboard-page">
                  <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Submit OTP
                  </Button>
                </Link>
              </form>
            )}
          </TabsContent>
        </Tabs>
        <p className="mt-4 text-center text-green-800">
          Do not have an account? <Link href="/sign_up" className="text-green-600 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}