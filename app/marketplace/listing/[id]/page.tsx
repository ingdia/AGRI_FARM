"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, MapPin, Star, Phone, Mail, Flag, Share, Heart, Calendar, User } from "lucide-react"

// Mock listing data
const listingData = {
  id: 1,
  title: "Portable Milking Machine",
  price: 450000,
  location: "Kigali, Rwanda",
  seller: {
    name: "AgriTech Rwanda",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
    reviews: 24,
    memberSince: "January 2020",
    verified: true,
    phone: "+250 788 123 456",
    email: "sales@agritech.rw",
  },
  description: `
    <p>Single cow portable milking machine with 25L stainless steel bucket. Perfect for small-scale dairy farmers.</p>
    
    <p><strong>Features:</strong></p>
    <ul>
      <li>Vacuum pump: 250L/min</li>
      <li>Motor power: 0.75kW</li>
      <li>Bucket capacity: 25L</li>
      <li>Pulsation rate: 60/min</li>
      <li>Vacuum pressure: 48kPa</li>
      <li>Single milking unit</li>
      <li>Stainless steel construction</li>
      <li>Easy to clean and maintain</li>
    </ul>
    
    <p><strong>Benefits:</strong></p>
    <ul>
      <li>Saves time and labor</li>
      <li>Improves milk hygiene</li>
      <li>Reduces risk of mastitis</li>
      <li>Portable and easy to move between cows</li>
      <li>Suitable for small herds (1-10 cows)</li>
    </ul>
    
    <p>The machine comes with a 1-year warranty and free delivery within Kigali. Installation and training available at an additional cost.</p>
  `,
  condition: "New",
  listed: "2 days ago",
  images: [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ],
  specifications: [
    { name: "Brand", value: "DairyTech" },
    { name: "Model", value: "PT-25" },
    { name: "Condition", value: "New" },
    { name: "Motor Power", value: "0.75kW" },
    { name: "Voltage", value: "220V/50Hz" },
    { name: "Weight", value: "35kg" },
    { name: "Warranty", value: "1 Year" },
  ],
  similarListings: [
    {
      id: 2,
      title: "Milk Cooling Tank - 500L",
      price: 1200000,
      thumbnail: "/placeholder.svg?height=400&width=600",
      location: "Nyagatare, Rwanda",
    },
    {
      id: 3,
      title: "Feed Mixer - 250kg Capacity",
      price: 380000,
      thumbnail: "/placeholder.svg?height=400&width=600",
      location: "Musanze, Rwanda",
    },
    {
      id: 4,
      title: "Another Portable Milking Machine",
      price: 500000,
      thumbnail: "/placeholder.svg?height=400&width=600",
      location: "Gasabo, Rwanda",
    },
  ],
}

const ListingPage = () => {
  const [tab, setTab] = useState("description")

  return (
    <div className="p-4">
      <Link href="/marketplace" className="flex items-center gap-2 text-sm font-medium hover:underline">
        <ArrowLeft className="h-4 w-4" />
        Back to Marketplace
      </Link>
      <div className="mt-4 flex flex-col gap-4 md:flex-row">
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            {listingData.images.map((image, index) => (
              <Image key={index} src={image || "/placeholder.svg"} alt={`Image ${index + 1}`} className="rounded-lg" />
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <Card>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">{listingData.title}</h1>
                <Badge variant="outline" className="bg-green-100 text-green-800">
                  {listingData.condition}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{listingData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm text-muted-foreground">{listingData.seller.rating}</span>
                <span className="text-sm text-muted-foreground">({listingData.seller.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Listed {listingData.listed}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{listingData.seller.name}</span>
                {listingData.seller.verified && <Flag className="h-4 w-4 text-blue-500" title="Verified Seller" />}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{listingData.seller.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{listingData.seller.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Save this listing</span>
              </div>
              <div className="flex items-center gap-2">
                <Share className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Share this listing</span>
              </div>
              <Tabs value={tab} onValueChange={setTab}>
                <TabsList>
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                  <TabsTrigger value="similarListings">Similar Listings</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-4">
                  <div dangerouslySetInnerHTML={{ __html: listingData.description }} />
                </TabsContent>
                <TabsContent value="specifications" className="mt-4">
                  <ul className="list-disc pl-4">
                    {listingData.specifications.map((spec) => (
                      <li key={spec.name}>
                        <strong>{spec.name}:</strong> {spec.value}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="similarListings" className="mt-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {listingData.similarListings.map((listing) => (
                      <Card key={listing.id} className="flex flex-col gap-4">
                        <Image
                          src={listing.thumbnail || "/placeholder.svg"}
                          alt={listing.title}
                          className="rounded-lg"
                        />
                        <CardContent className="flex flex-col gap-2">
                          <h2 className="text-lg font-bold">{listing.title}</h2>
                          <span className="text-sm text-muted-foreground">Price: {listing.price}</span>
                          <span className="text-sm text-muted-foreground">Location: {listing.location}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ListingPage
