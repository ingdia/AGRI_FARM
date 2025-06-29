"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingCart, MapPin, Star, Filter, PlusCircle } from "lucide-react"

// Mock data for marketplace listings
const listings = {
  equipment: [
    {
      id: 1,
      title: "Portable Milking Machine",
      price: 450000,
      location: "Kigali, Rwanda",
      seller: "AgriTech Rwanda",
      rating: 4.8,
      reviews: 24,
      thumbnail: "/placeholder.svg?height=400&width=600",
      description:
        "Single cow portable milking machine with 25L stainless steel bucket. Perfect for small-scale dairy farmers.",
      condition: "New",
      listed: "2 days ago",
    },
    {
      id: 2,
      title: "Milk Cooling Tank - 500L",
      price: 1200000,
      location: "Nyagatare, Rwanda",
      seller: "Dairy Equipment Ltd",
      rating: 4.5,
      reviews: 18,
      thumbnail: "/placeholder.svg?height=400&width=600",
      description:
        "500L milk cooling tank with built-in agitator. Maintains milk at optimal temperature to preserve quality.",
      condition: "New",
      listed: "1 week ago",
    },
    {
      id: 3,
      title: "Feed Mixer - 250kg Capacity",
      price: 380000,
      location: "Musanze, Rwanda",
      seller: "Farm Solutions",
      rating: 4.2,
      reviews: 15,
      thumbnail: "/placeholder.svg?height=400&width=600",
      description:
        "Horizontal feed mixer with 250kg capacity. Ensures uniform mixing of feed ingredients for balanced nutrition.",
      condition: "Used - Like New",
      listed: "3 days ago",
    },
    {
      id: 4,
      title: "Automatic Drinking Bowls (Set of 5)",
      price: 75000,
      location: "Huye, Rwanda",
      seller: "Livestock Supplies",
      rating: 4.7,
      reviews: 32,
      thumbnail: "/placeholder.svg?height=400&width=600",
      description:
        "Cast iron automatic drinking bowls with float valve. Ensures constant water supply for your dairy cows.",
      condition: "New",
      listed: "5 days ago",
    },
  ],
  supplies: [
    {
      id: 5,
      title: "Premium Dairy Cow Feed - 50kg",
      price: 22000,
      location: "Kigali, Rwanda",
      seller: "NutriFeeds Rwanda",
      rating: 4.9,
      reviews: 45,
      thumbnail: "/placeholder.svg?height=400&width=600",
      description:
        "High-quality dairy cow feed with balanced nutrition for optimal milk production. Contains 18% protein.",
      condition: "New",
      listed: "1 day ago",
    },
    {
      id: 6,
      title: "Teat Dip Solution - 5L",
      price: 15000,
      location: "Rwamagana, Rwanda",
      seller: "Dairy Health Products",
      rating: 4.6,
      reviews: 28,
      thumbnail: "/placeholder.svg?height=400&width=600",
      description:
        "Iodine-based teat dip solution for post-milking disinfection. Helps prevent mastitis and other infections.",
      condition: "New",
      listed: "4 days ago",
    },
    {
      id: 7,
      title: "Milk Testing Kit",
      price: 35000,
      location: "Nyagatare, Rwanda",
      seller: "Quality Dairy Supplies",
      rating: 4.4,
      reviews: 19,
      thumbnail: "/placeholder.svg?height=400&width=600",
      description:
        "Comprehensive milk testing kit for measuring fat content, protein, and somatic cell count. Essential for quality control.",
      condition: "New",
      listed: "1 week ago",
    },
    {
      id: 8,
      title: "Silage Plastic Sheets - 10m x 15m",
      price: 28000,
      location: "Musanze, Rwanda",
      seller: "Agro Supplies Rwanda",
      rating: 4.7,
      reviews: 22,
      thumbnail: "/placeholder.svg?height=400&width=600",
      description: "Heavy-duty silage plastic sheets for covering and preserving silage. UV-resistant and durable.",
      condition: "New",
      listed: "3 days ago",
    },
  ],
  livestock: [
    {
      id: 9,
      title: "Jersey Cow - High Milk Producer",
      price: 850000,
      location: "Nyagatare, Rwanda",
      seller: "Premium Livestock Farm",
      rating: 4.8,
      reviews: 15,
      thumbnail: "/placeholder.svg?height=400&width=600",
      description:
        "3-year-old Jersey cow with excellent milk production record (18L/day). Vaccinated and in good health.",
      condition: "N/A",
      listed: "2 days ago",
    },
    {
      id: 10,
      title: "Holstein-Friesian Heifer",
      price: 750000,
      location: "Rwamagana, Rwanda",
      seller: "Elite Dairy Genetics",
      rating: 4.9,
      reviews: 12,
      thumbnail: "/placeholder.svg?height=400&width=600",
      description: "18-month-old Holstein-Friesian heifer from high-producing bloodline. Ready for first breeding.",
      condition: "N/A",
      listed: "1 week ago",
    },
    {
      id: 11,
      title: "Dairy Goats - Saanen Breed (Pair)",
      price: 320000,
      location: "Huye, Rwanda",
      seller: "Diversified Livestock Farm",
      rating: 4.7,
      reviews: 8,
      thumbnail: "/placeholder.svg?height=400&width=600",
      description:
        "Pair of female Saanen dairy goats, known for high milk production. Both are 2 years old and currently milking.",
      condition: "N/A",
      listed: "5 days ago",
    },
    {
      id: 12,
      title: "Brown Swiss Bull Calf",
      price: 450000,
      location: "Musanze, Rwanda",
      seller: "Alpine Dairy Farm",
      rating: 4.6,
      reviews: 7,
      thumbnail: "/placeholder.svg?height=400&width=600",
      description:
        "6-month-old Brown Swiss bull calf from imported genetics. Excellent for breeding to improve milk production.",
      condition: "N/A",
      listed: "3 days ago",
    },
  ],
  services: [
    {
      id: 13,
      title: "Artificial Insemination Services",
      price: 25000,
      location: "Nationwide, Rwanda",
      seller: "Dairy Breeding Solutions",
      rating: 4.9,
      reviews: 56,
      thumbnail: "/placeholder.svg?height=400&width=600",
      description:
        "Professional artificial insemination services with imported semen from top dairy breeds. Includes pregnancy confirmation.",
      condition: "N/A",
      listed: "Ongoing",
    },
    {
      id: 14,
      title: "Dairy Farm Consulting",
      price: 150000,
      location: "Kigali, Rwanda",
      seller: "Dairy Success Consultants",
      rating: 4.8,
      reviews: 32,
      thumbnail: "/placeholder.svg?height=400&width=600",
      description:
        "Comprehensive dairy farm assessment and optimization plan. Includes nutrition, breeding, and business advice.",
      condition: "N/A",
      listed: "Ongoing",
    },
    {
      id: 15,
      title: "Mobile Veterinary Services",
      price: 30000,
      location: "Eastern Province, Rwanda",
      seller: "Dr. Emmanuel Niyonkuru",
      rating: 4.7,
      reviews: 41,
      thumbnail: "/placeholder.svg?height=400&width=600",
      description:
        "On-farm veterinary services including health checks, vaccinations, and treatment. Available 7 days a week.",
      condition: "N/A",
      listed: "Ongoing",
    },
    {
      id: 16,
      title: "Milk Quality Testing Services",
      price: 15000,
      location: "Nationwide, Rwanda",
      seller: "Dairy Quality Labs",
      rating: 4.6,
      reviews: 28,
      thumbnail: "/placeholder.svg?height=400&width=600",
      description:
        "Professional milk quality testing including bacterial count, somatic cell count, and antibiotic residue testing.",
      condition: "N/A",
      listed: "Ongoing",
    },
  ],
}

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter listings based on search query
  const filterListings = (items: any[]) => {
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }

  const filteredEquipment = filterListings(listings.equipment)
  const filteredSupplies = filterListings(listings.supplies)
  const filteredLivestock = filterListings(listings.livestock)
  const filteredServices = filterListings(listings.services)

  // Format price with commas
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-farm-dark text-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-lora">NDFN Marketplace</h1>
            <p className="mx-auto max-w-[700px] text-white/90 text-xl">
              Buy and sell dairy farming equipment, supplies, livestock, and services
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search marketplace..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Link href="/marketplace/new-listing">
                <Button className="bg-white text-farm-dark hover:bg-white/90 flex items-center">
                  <PlusCircle className="mr-2 h-5 w-5" />
                  Post Listing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center">
              <ShoppingCart className="h-5 w-5 mr-2 text-farm-dark" />
              <span className="text-gray-700">
                <strong>1,250+</strong> Active Listings
              </span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-farm-dark" />
              <span className="text-gray-700">
                <strong>All</strong> Provinces Covered
              </span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-2 text-farm-dark" />
              <span className="text-gray-700">
                <strong>Verified</strong> Sellers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Marketplace Content */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="equipment" className="w-full">
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="equipment">Equipment</TabsTrigger>
                <TabsTrigger value="supplies">Supplies</TabsTrigger>
                <TabsTrigger value="livestock">Livestock</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
              </TabsList>

              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>

            {/* Equipment Tab */}
            <TabsContent value="equipment">
              {filteredEquipment.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredEquipment.map((item) => (
                    <Link href={`/marketplace/listing/${item.id}`} key={item.id}>
                      <Card className="overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                        <div className="relative h-48">
                          <Image
                            src={item.thumbnail || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                          <Badge className="absolute top-2 right-2 bg-farm-dark">{item.condition}</Badge>
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg line-clamp-1">{item.title}</CardTitle>
                          <CardDescription className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {item.location}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2 flex-grow">
                          <p className="text-sm text-gray-700 line-clamp-2">{item.description}</p>
                          <div className="flex items-center mt-3">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < Math.floor(item.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500 ml-2">({item.reviews})</span>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-2 border-t flex justify-between items-center">
                          <div className="font-bold text-farm-dark">RWF {formatPrice(item.price)}</div>
                          <div className="text-xs text-gray-500">{item.listed}</div>
                        </CardFooter>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No equipment listings found matching your search criteria.</p>
                  <Button variant="link" className="mt-2 text-farm-dark" onClick={() => setSearchQuery("")}>
                    Clear search
                  </Button>
                </div>
              )}
            </TabsContent>

            {/* Supplies Tab */}
            <TabsContent value="supplies">
              {filteredSupplies.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredSupplies.map((item) => (
                    <Link href={`/marketplace/listing/${item.id}`} key={item.id}>
                      <Card className="overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                        <div className="relative h-48">
                          <Image
                            src={item.thumbnail || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                          <Badge className="absolute top-2 right-2 bg-farm-dark">{item.condition}</Badge>
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg line-clamp-1">{item.title}</CardTitle>
                          <CardDescription className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {item.location}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2 flex-grow">
                          <p className="text-sm text-gray-700 line-clamp-2">{item.description}</p>
                          <div className="flex items-center mt-3">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < Math.floor(item.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500 ml-2">({item.reviews})</span>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-2 border-t flex justify-between items-center">
                          <div className="font-bold text-farm-dark">RWF {formatPrice(item.price)}</div>
                          <div className="text-xs text-gray-500">{item.listed}</div>
                        </CardFooter>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No supplies listings found matching your search criteria.</p>
                  <Button variant="link" className="mt-2 text-farm-dark" onClick={() => setSearchQuery("")}>
                    Clear search
                  </Button>
                </div>
              )}
            </TabsContent>

            {/* Livestock Tab */}
            <TabsContent value="livestock">
              {filteredLivestock.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredLivestock.map((item) => (
                    <Link href={`/marketplace/listing/${item.id}`} key={item.id}>
                      <Card className="overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                        <div className="relative h-48">
                          <Image
                            src={item.thumbnail || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg line-clamp-1">{item.title}</CardTitle>
                          <CardDescription className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {item.location}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2 flex-grow">
                          <p className="text-sm text-gray-700 line-clamp-2">{item.description}</p>
                          <div className="flex items-center mt-3">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < Math.floor(item.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500 ml-2">({item.reviews})</span>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-2 border-t flex justify-between items-center">
                          <div className="font-bold text-farm-dark">RWF {formatPrice(item.price)}</div>
                          <div className="text-xs text-gray-500">{item.listed}</div>
                        </CardFooter>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No livestock listings found matching your search criteria.</p>
                  <Button variant="link" className="mt-2 text-farm-dark" onClick={() => setSearchQuery("")}>
                    Clear search
                  </Button>
                </div>
              )}
            </TabsContent>

            {/* Services Tab */}
            <TabsContent value="services">
              {filteredServices.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredServices.map((item) => (
                    <Link href={`/marketplace/listing/${item.id}`} key={item.id}>
                      <Card className="overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                        <div className="relative h-48">
                          <Image
                            src={item.thumbnail || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg line-clamp-1">{item.title}</CardTitle>
                          <CardDescription className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {item.location}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2 flex-grow">
                          <p className="text-sm text-gray-700 line-clamp-2">{item.description}</p>
                          <div className="flex items-center mt-3">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < Math.floor(item.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500 ml-2">({item.reviews})</span>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-2 border-t flex justify-between items-center">
                          <div className="font-bold text-farm-dark">RWF {formatPrice(item.price)}</div>
                          <div className="text-xs text-gray-500">{item.listed}</div>
                        </CardFooter>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No service listings found matching your search criteria.</p>
                  <Button variant="link" className="mt-2 text-farm-dark" onClick={() => setSearchQuery("")}>
                    Clear search
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Marketplace Guidelines */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6">
            <h2 className="text-2xl font-bold text-center text-farm-dark font-lora">Marketplace Guidelines</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Accurate Listings</h3>
                <p className="text-sm text-gray-700">
                  Provide accurate descriptions, images, and pricing for all items and services.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Safe Transactions</h3>
                <p className="text-sm text-gray-700">
                  Meet in public places for transactions and inspect items before purchasing.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Quality Standards</h3>
                <p className="text-sm text-gray-700">
                  All livestock must be healthy and have proper documentation and vaccination records.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Prohibited Items</h3>
                <p className="text-sm text-gray-700">
                  No illegal items, counterfeit products, or expired medications are allowed.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/marketplace/guidelines">
                <Button variant="outline">View Full Guidelines</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
