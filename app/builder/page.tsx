'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Chart, registerables } from 'chart.js'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Sun, Moon, User, Upload } from 'lucide-react'

Chart.register(...registerables)

export default function Page() {
    return <ContractBuilderComponent/>
}
function ContractBuilderComponent() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [contractDetails, setContractDetails] = useState({
    profession: '',
    farmerName: '',
    contractorName: '',
    email: '',
    address: '',
    bankName: '',
    accountNumber: '',
    businessName: '',
    licenseNumber: '',
    produceType: '',
    quantity: '',
    qualityStandards: '',
    pricePerUnit: '',
    totalPayment: '',
    deliveryDate: '',
    deliveryLocation: '',
    paymentTerms: '',
    transportation: '',
    includeInsurance: false,
    insuranceType: '',
    coverageAmount: '',
    premium: '',
    digitalSignature: '',
    signatureFile: null as File | null,
  })
  const [contractorMaxPrice, setContractorMaxPrice] = useState(100)
  const [farmerMinPrice, setFarmerMinPrice] = useState(80)
  const chartRef = useRef<HTMLCanvasElement | null>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext('2d')
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
              {
                label: 'Contractor Max Price',
                data: Array(12).fill(contractorMaxPrice),
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: false
              },
              {
                label: 'Farmer Min Price',
                data: Array(12).fill(farmerMinPrice),
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 2,
                fill: false
              },
              {
                label: 'MSP',
                data: Array(12).fill(70),
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 2,
                fill: false
              },
              {
                label: 'Market Prices',
                data: [85, 88, 92, 89, 86, 90, 93, 91, 87, 89, 92, 94],
                borderColor: 'rgb(153, 102, 255)',
                borderDash: [5, 5],
                borderWidth: 2,
                fill: false
              },
              {
                label: 'Contract Prices',
                data: [87, 89, 91, 90, 88, 92, 94, 93, 89, 91, 93, 95],
                borderColor: 'rgb(255, 159, 64)',
                borderWidth: 2,
                fill: false
              }
            ]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Price'
                }
              },
              x: {
                title: {
                  display: true,
                  text: 'Month'
                }
              }
            }
          }
        })
      }
    }
  }, [contractorMaxPrice, farmerMinPrice])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setContractDetails(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string) => (checked: boolean) => {
    setContractDetails(prev => ({ ...prev, [name]: checked }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && (file.type === 'image/png' || file.type === 'application/pdf')) {
      setContractDetails(prev => ({ ...prev, signatureFile: file }))
    } else {
      alert('Please upload a PNG or PDF file.')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contract submitted:', contractDetails)
    // Here you would typically send the data to your backend
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <nav className="bg-green-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold">कृषिConnect</span>
          <Link href="/listings" className="hover:underline">Listings</Link>
          <Link href="/your-contracts" className="hover:underline">Your Contracts</Link>
        </div>
        <div className="flex items-center space-x-4">
          <span>4 September 2024</span>
          <span>28°C</span>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Build Your Contract</h1>

        <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
          <div>
            <Label className="text-lg font-semibold">Select your profession</Label>
            <RadioGroup value={contractDetails.profession} onValueChange={(value) => setContractDetails(prev => ({ ...prev, profession: value }))} className="flex space-x-4 mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="farmer" id="farmer" />
                <Label htmlFor="farmer">Farmer</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="buyer" id="buyer" />
                <Label htmlFor="buyer">Buyer</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Personal Details</h2>
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="farmerName" value={contractDetails.farmerName} onChange={handleInputChange} placeholder="Enter your full name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={contractDetails.email} onChange={handleInputChange} placeholder="Enter your email" />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" name="address" value={contractDetails.address} onChange={handleInputChange} placeholder="Enter your full address" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Bank Details</h2>
            <div>
              <Label htmlFor="bank-name">Bank Name</Label>
              <Input id="bank-name" name="bankName" value={contractDetails.bankName} onChange={handleInputChange} placeholder="Enter your bank name" />
            </div>
            <div>
              <Label htmlFor="account-number">Account Number</Label>
              <Input id="account-number" name="accountNumber" value={contractDetails.accountNumber} onChange={handleInputChange} placeholder="Enter your account number" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">{contractDetails.profession === 'farmer' ? 'Farm Details' : 'Business Details'}</h2>
            <div>
              <Label htmlFor="business-name">{contractDetails.profession === 'farmer' ? 'Farm Name' : 'Business Name'}</Label>
              <Input id="business-name" name="businessName" value={contractDetails.businessName} onChange={handleInputChange} placeholder={`Enter your ${contractDetails.profession === 'farmer' ? 'farm' : 'business'} name`} />
            </div>
            <div>
              <Label htmlFor="license-number">License Number</Label>
              <Input id="license-number" name="licenseNumber" value={contractDetails.licenseNumber} onChange={handleInputChange} placeholder="Enter your license number" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Price Finalization</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <canvas ref={chartRef} className="w-full h-64" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <Label htmlFor="contractor-max-price">Contractor Max Price</Label>
              <Slider
                id="contractor-max-price"
                min={0}
                max={200}
                step={1}
                value={[contractorMaxPrice]}
                onValueChange={(value) => setContractorMaxPrice(value[0])}
              />
              <Input
                type="number"
                value={contractorMaxPrice}
                onChange={(e) => setContractorMaxPrice(Number(e.target.value))}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="farmer-min-price">Farmer Min Price</Label>
              <Slider
                id="farmer-min-price"
                min={0}
                max={200}
                step={1}
                value={[farmerMinPrice]}
                onValueChange={(value) => setFarmerMinPrice(value[0])}
              />
              <Input
                type="number"
                value={farmerMinPrice}
                onChange={(e) => setFarmerMinPrice(Number(e.target.value))}
                className="mt-2"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Contract Details</h2>
            <div>
              <Label htmlFor="produce-type">Type of Produce</Label>
              <Input id="produce-type" name="produceType" value={contractDetails.produceType} onChange={handleInputChange} placeholder="Enter type of crop/produce" />
            </div>
            <div>
              <Label htmlFor="quantity">Quantity</Label>
              <Input id="quantity" name="quantity" type="number" value={contractDetails.quantity} onChange={handleInputChange} placeholder="Enter quantity" />
            </div>
            <div>
              <Label htmlFor="quality-standards">Quality Standards</Label>
              <Textarea id="quality-standards" name="qualityStandards" value={contractDetails.qualityStandards} onChange={handleInputChange} placeholder="Describe quality standards" />
            </div>
            <div>
              <Label htmlFor="price-per-unit">Price per Unit</Label>
              <Input id="price-per-unit" name="pricePerUnit" type="number" value={contractDetails.pricePerUnit} onChange={handleInputChange} placeholder="Enter price per unit" />
            </div>
            <div>
              <Label htmlFor="delivery-date">Delivery Date</Label>
              <Input id="delivery-date" name="deliveryDate" type="date" value={contractDetails.deliveryDate} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="delivery-location">Delivery Location</Label>
              <Input id="delivery-location" name="deliveryLocation" value={contractDetails.deliveryLocation} onChange={handleInputChange} placeholder="Enter delivery location" />
            </div>
            <div>
              <Label htmlFor="payment-terms">Payment Terms</Label>
              <Input id="payment-terms" name="paymentTerms" value={contractDetails.paymentTerms} onChange={handleInputChange} placeholder="Enter payment terms (e.g., within 30 days)" />
            </div>
            <div>
              <Label htmlFor="transportation">Transportation Responsibility</Label>
              <Select name="transportation" value={contractDetails.transportation} onValueChange={(value) => setContractDetails(prev => ({ ...prev, transportation: value }))}>
                <SelectTrigger id="transportation">
                  <SelectValue placeholder="Select transportation responsibility" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="farmer">Farmer</SelectItem>
                  <SelectItem value="contractor">Contractor</SelectItem>
                  <SelectItem value="shared">Shared</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Insurance Options</h2>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="include-insurance"
                checked={contractDetails.includeInsurance}
                onCheckedChange={handleCheckboxChange('includeInsurance')}
              
              />
              <Label htmlFor="include-insurance">Include Insurance</Label>
            </div>
            {contractDetails.includeInsurance && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="insurance-type">Insurance Type</Label>
                  <Select name="insuranceType" value={contractDetails.insuranceType} onValueChange={(value) => setContractDetails(prev => ({ ...prev, insuranceType: value }))}>
                    <SelectTrigger id="insurance-type">
                      <SelectValue placeholder="Select insurance type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="crop">Crop Insurance</SelectItem>
                      <SelectItem value="weather">Weather Insurance</SelectItem>
                      <SelectItem value="price">Price Protection Insurance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="coverage-amount">Coverage Amount</Label>
                  <Input id="coverage-amount" name="coverageAmount" type="number" value={contractDetails.coverageAmount} onChange={handleInputChange} placeholder="Enter coverage amount" />
                </div>
                <div>
                  <Label htmlFor="premium">Premium</Label>
                  <Input id="premium" name="premium" type="number" value={contractDetails.premium} onChange={handleInputChange} placeholder="Enter premium amount" />
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Digital Signature</h2>
            <Textarea 
              placeholder="Please type your signature here..." 
              name="digitalSignature"
              value={contractDetails.digitalSignature}
              onChange={handleInputChange}
            />
            <div className="flex items-center space-x-2">
              <Input
                type="file"
                id="signature-file"
                accept=".png,.pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
              <Button 
                type="button"
                onClick={() => document.getElementById('signature-file')?.click()}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload Signature (PNG or PDF)
              </Button>
              {contractDetails.signatureFile && (
                <span className="text-sm text-green-600">
                  {contractDetails.signatureFile.name} uploaded
                </span>
              )}
            </div>
          </div>

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">Secure and Build Contract</Button>
        </form>

        <div className="space-y-4 mt-8">
          <h2 className="text-2xl font-semibold">Contract Preview</h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Contract for the Sale of Agricultural Produce</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <strong>Farmer:</strong> {contractDetails.farmerName}
              </div>
              <div>
                <strong>Contractor:</strong> {contractDetails.contractorName}
              </div>
              <div>
                <strong>Produce:</strong> {contractDetails.produceType}
              </div>
              <div>
                <strong>Quantity:</strong> {contractDetails.quantity}
              </div>
              <div>
                <strong>Quality Standards:</strong> {contractDetails.qualityStandards}
              </div>
              <div>
                <strong>Price per Unit:</strong> ₹{contractDetails.pricePerUnit}
              </div>
              <div>
                <strong>Total Payment:</strong> ₹{contractDetails.totalPayment}
              </div>
              <div>
                <strong>Delivery Date:</strong> {contractDetails.deliveryDate}
              </div>
              <div>
                <strong>Delivery Location:</strong> {contractDetails.deliveryLocation}
              </div>
              <div>
                <strong>Payment Terms:</strong> {contractDetails.paymentTerms}
              </div>
              <div>
                <strong>Transportation:</strong> {contractDetails.transportation}
              </div>
            </div>

            {contractDetails.includeInsurance && (
              <div className="mt-4">
                <strong>Insurance:</strong>
                <ul className="list-disc list-inside">
                  <li>Type: {contractDetails.insuranceType}</li>
                  <li>Coverage Amount: ₹{contractDetails.coverageAmount}</li>
                  <li>Premium: ₹{contractDetails.premium}</li>
                </ul>
              </div>
            )}

            <div className="mt-4">
              <p>By signing below, both parties agree to the terms and conditions outlined in this contract.</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <strong>Farmer Signature:</strong>
                  <div className="h-16 bg-white border rounded-md mt-2 flex items-center justify-center">
                    {contractDetails.digitalSignature || (contractDetails.signatureFile && 'Signature Uploaded')}
                  </div>
                </div>
                <div>
                  <strong>Contractor Signature:</strong>
                  <div className="h-16 bg-white border rounded-md mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}