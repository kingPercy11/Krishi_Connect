'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, User, Sun, CloudRain } from "lucide-react"
import Link from 'next/link'

const articles = [
  { id: 1, title: "Sustainable Farming Practices for Better Yield", category: "Farming Practices", image: "/placeholder.svg", date: "2023-09-04" },
  { id: 2, title: "Organic Pest Control Methods for Your Crops", category: "Pest Control", image: "/placeholder.svg", date: "2023-09-03" },
  { id: 3, title: "Water Conservation Techniques in Agriculture", category: "Water Management", image: "/placeholder.svg", date: "2023-09-02" },
  { id: 4, title: "The Benefits of Crop Rotation", category: "Farming Practices", image: "/placeholder.svg", date: "2023-09-01" },
  { id: 5, title: "Latest Advancements in Agricultural Technology", category: "Technology", image: "/placeholder.svg", date: "2023-08-31" },
]

export default function Page() {
  return <FarmingNewsPageComponent/>
}
function FarmingNewsPageComponent() {
  const [weather] = useState({ temp: 28, condition: 'Sunny' })
  const currentDate = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-green-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <CalendarDays className="h-5 w-5" />
            <span>{currentDate}</span>
            {weather.condition === 'Sunny' ? <Sun className="h-5 w-5" /> : <CloudRain className="h-5 w-5" />}
            <span>{weather.temp}°C</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="hover:underline">कृषिConnect</Link>
            <Link href="/contracts" className="hover:underline">Contracts</Link>
            <Link href="/your-contracts" className="hover:underline">Your Contracts</Link>
            <User className="h-5 w-5 cursor-pointer" />
          </div>
        </div>
      </nav>

      <main className="container mx-auto mt-8 flex">
        <aside className="w-1/4 pr-8">
          <Card>
            <CardHeader>
              <CardTitle>Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li><Button variant="link">Blogs</Button></li>
                <li><Button variant="link">Articles</Button></li>
                <li><Button variant="link">Latest News</Button></li>
                <li><Button variant="link">Prices</Button></li>
              </ul>
            </CardContent>
          </Card>
        </aside>

        <div className="w-3/4">
          <h1 className="text-3xl font-bold mb-6">Farming News and Articles</h1>
          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="blogs">Blogs</TabsTrigger>
              <TabsTrigger value="articles">Articles</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map(article => (
              <Card key={article.id}>
                <CardContent className="p-4">
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover mb-4 rounded" />
                  <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">{article.category}</p>
                  <p className="text-sm text-gray-500">{article.date}</p>
                  <Button className="mt-4">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}