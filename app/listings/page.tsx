"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"


const contracts = [
  {
    crop: "Wheat",
    contracts: [
      { id: 1, company: "GrainCo", logo: "/krishi-connect/app/src/wheat.jpeg", variety: "Hard Red Winter", requirement: "10,000 bushels" },
      { id: 2, company: "WheatWorks", logo: "/src/wheat1.jpeg", variety: "Soft White", requirement: "8,000 bushels" },
      { id: 3, company: "BreadBasket", logo: "/src/wheat.jpeg", variety: "Durum", requirement: "5,000 bushels" },
      { id: 4, company: "WheatFields", logo: "/src/wheat1.jpeg", variety: "Hard White", requirement: "12,000 bushels" },
      { id: 5, company: "GoldenGrain", logo: "/src/wheat.jpeg", variety: "Soft Red Winter", requirement: "7,000 bushels" },
      { id: 6, company: "WheatHarvest", logo: "/src/wheat1.jpeg", variety: "Club", requirement: "6,000 bushels" },
      { id: 7, company: "AmberWaves", logo: "/src/wheat.jpeg", variety: "Spelt", requirement: "4,000 bushels" },
    ]
  },
  {
    crop: "Corn",
    contracts: [
      { id: 8, company: "CornCrops", logo: "/placeholder.svg", variety: "Sweet Corn", requirement: "15,000 bushels" },
      { id: 9, company: "EthanolEnergy", logo: "/placeholder.svg", variety: "Dent Corn", requirement: "20,000 bushels" },
      { id: 10, company: "FeedFarms", logo: "/placeholder.svg", variety: "Flint Corn", requirement: "12,000 bushels" },
      { id: 11, company: "PopcornPals", logo: "/placeholder.svg", variety: "Popcorn", requirement: "8,000 bushels" },
      { id: 12, company: "SilageSolutions", logo: "/placeholder.svg", variety: "Silage Corn", requirement: "25,000 bushels" },
      { id: 13, company: "CornStarch", logo: "/placeholder.svg", variety: "Waxy Corn", requirement: "10,000 bushels" },
      { id: 14, company: "OrganicOasis", logo: "/placeholder.svg", variety: "Organic Sweet Corn", requirement: "5,000 bushels" },
    ]
  },
  {
    crop: "Soybeans",
    contracts: [
      { id: 15, company: "SoySupreme", logo: "/placeholder.svg", variety: "High Protein", requirement: "8,000 bushels" },
      { id: 16, company: "OilPress", logo: "/placeholder.svg", variety: "High Oil", requirement: "10,000 bushels" },
      { id: 17, company: "GreenBean", logo: "/placeholder.svg", variety: "Edamame", requirement: "5,000 bushels" },
      { id: 18, company: "SoyFeed", logo: "/placeholder.svg", variety: "Livestock Feed", requirement: "12,000 bushels" },
      { id: 19, company: "TofuliciousInc", logo: "/placeholder.svg", variety: "Tofu Grade", requirement: "7,000 bushels" },
      { id: 20, company: "SproutCo", logo: "/placeholder.svg", variety: "Sprouting Soybeans", requirement: "3,000 bushels" },
      { id: 21, company: "NattoNation", logo: "/placeholder.svg", variety: "Natto Soybeans", requirement: "2,000 bushels" },
    ]
  }
]

export default function Page() {
    return <ContractPageComponent/>
}
function ContractPageComponent() {
  const scrollContainerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scroll = (cropIndex: number, direction: 'left' | 'right') => {
    const container = scrollContainerRefs.current[cropIndex];
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-green-800">Available Farming Contracts</h1>
      
      {contracts.map((cropGroup, index) => (
        <div key={cropGroup.crop} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">{cropGroup.crop} Contracts</h2>
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
              onClick={() => scroll(index, 'left')}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="overflow-x-auto">
              <div
                // ref={el => scrollContainerRefs.current[index] = el}
                className="flex space-x-4 p-4 w-max"
              >
                {cropGroup.contracts.map((contract) => (
                  <Card key={contract.id} className="w-[250px] shrink-0">
                    <CardContent className="p-4">
                      <div className="aspect-square relative mb-3">
                        <Image
                          src={contract.logo}
                          alt={`${contract.company} logo`}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      <h3 className="font-bold text-lg mb-2 truncate">{contract.company}</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Variety:</span>
                          <Badge variant="secondary">{contract.variety}</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Requirement:</span>
                          <span className="text-sm font-medium">{contract.requirement}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
              onClick={() => scroll(index, 'right')}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}