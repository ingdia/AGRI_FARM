"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, Video, Download, BookOpen, FileImage, Calendar } from "lucide-react"

// Mock data for resources
const resources = {
  guides: [
    {
      id: 1,
      title: "Comprehensive Guide to Dairy Farm Management",
      type: "PDF",
      category: "Farm Management",
      thumbnail: "/placeholder.svg?height=400&width=600",
      description:
        "A complete guide covering all aspects of dairy farm management, from animal health to business planning.",
      fileSize: "4.2 MB",
      downloadCount: 1245,
      date: "Jan 15, 2023",
    },
    {
      id: 2,
      title: "Milk Quality Assurance Handbook",
      type: "PDF",
      category: "Quality Control",
      thumbnail: "/placeholder.svg?height=400&width=600",
      description:
        "Learn how to ensure high milk quality from production to processing, including testing methods and standards.",
      fileSize: "3.8 MB",
      downloadCount: 987,
      date: "Mar 22, 2023",
    },
    {
      id: 3,
      title: "Financial Management for Dairy Farmers",
      type: "PDF",
      category: "Business",
      thumbnail: "/placeholder.svg?height=400&width=600",
      description:
        "Essential financial management practices for dairy farmers, including budgeting, record keeping, and financial planning.",
      fileSize: "2.5 MB",
      downloadCount: 756,
      date: "Apr 10, 2023",
    },
    {
      id: 4,
      title: "Dairy Cow Health and Disease Prevention",
      type: "PDF",
      category: "Animal Health",
      thumbnail: "/placeholder.svg?height=400&width=600",
      description: "A comprehensive guide to common dairy cow diseases, prevention strategies, and treatment options.",
      fileSize: "5.1 MB",
      downloadCount: 1102,
      date: "Feb 8, 2023",
    },
  ],
  videos: [
    {
      id: 1,
      title: "Modern Milking Techniques Demonstration",
      duration: "18:24",
      category: "Milking",
      thumbnail: "/placeholder.svg?height=400&width=600",
      description: "Step-by-step demonstration of modern milking techniques to maximize efficiency and milk quality.",
      views: 3456,
      date: "May 5, 2023",
    },
    {
      id: 2,
      title: "Setting Up a Zero-Grazing System",
      duration: "24:15",
      category: "Farm Setup",
      thumbnail: "/placeholder.svg?height=400&width=600",
      description:
        "Learn how to set up an efficient zero-grazing system for your dairy farm, including housing and feeding infrastructure.",
      views: 2789,
      date: "Jun 12, 2023",
    },
    {
      id: 3,
      title: "Dairy Farm Business Planning Workshop",
      duration: "45:30",
      category: "Business",
      thumbnail: "/placeholder.svg?height=400&width=600",
      description: "A recorded workshop on creating a comprehensive business plan for your dairy farm enterprise.",
      views: 1987,
      date: "Apr 28, 2023",
    },
    {
      id: 4,
      title: "Mastitis Detection and Treatment",
      duration: "15:42",
      category: "Animal Health",
      thumbnail: "/placeholder.svg?height=400&width=600",
      description: "Learn how to detect early signs of mastitis and implement effective treatment protocols.",
      views: 4123,
      date: "Mar 17, 2023",
    },
  ],
  templates: [
    {
      id: 1,
      title: "Dairy Farm Business Plan Template",
      type: "DOCX",
      category: "Business",
      thumbnail: "/placeholder.svg?height=400&width=600",
      description: "A customizable business plan template specifically designed for dairy farm enterprises.",
      fileSize: "1.2 MB",
      downloadCount: 2345,
      date: "Feb 3, 2023",
    },
    {
      id: 2,
      title: "Milk Production Record Keeping Spreadsheet",
      type: "XLSX",
      category: "Record Keeping",
      thumbnail: "/placeholder.svg?height=400&width=600",
      description: "A comprehensive spreadsheet for tracking daily milk production, quality parameters, and trends.",
      fileSize: "0.8 MB",
      downloadCount: 3156,
      date: "Jan 25, 2023",
    },
    {
      id: 3,
      title: "Feed Formulation Calculator",
      type: "XLSX",
      category: "Nutrition",
      thumbnail: "/placeholder.svg?height=400&width=600",
      description:
        "A spreadsheet tool to help you formulate balanced feed rations for your dairy cows based on nutritional requirements.",
      fileSize: "1.5 MB",
      downloadCount: 1876,
      date: "Mar 8, 2023",
    },
    {
      id: 4,
      title: "Dairy Farm Financial Analysis Tool",
      type: "XLSX",
      category: "Finance",
      thumbnail: "/placeholder.svg?height=400&width=600",
      description:
        "A comprehensive financial analysis tool to track income, expenses, and profitability of your dairy farm.",
      fileSize: "2.1 MB",
      downloadCount: 1543,
      date: "Apr 15, 2023",
    },
  ],
  presentations: [
    {
      id: 1,
      title: "Introduction to Dairy Value Chain",
      type: "PPTX",
      category: "Value Chain",
      thumbnail: "/placeholder.svg?height=400&width=600",
      description: "A comprehensive presentation on the dairy value chain, from production to consumption.",
      fileSize: "3.5 MB",
      downloadCount: 876,
      date: "May 20, 2023",
    },
    {
      id: 2,
      title: "Technology Adoption in Dairy Farming",
      type: "PPTX",
      category: "Technology",
      thumbnail: "/placeholder.svg?height=400&width=600",
      description: "An overview of modern technologies that can enhance productivity and efficiency in dairy farming.",
      fileSize: "4.2 MB",
      downloadCount: 1234,
      date: "Jun 5, 2023",
    },
  ],
}

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter resources based on search query and active category
  const filterResources = (items: any[]) => {
    return items.filter(
      (item) =>
        (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (activeCategory === "all" || item.category.toLowerCase() === activeCategory.toLowerCase()),
    )
  }

  const filteredGuides = filterResources(resources.guides)
  const filteredVideos = filterResources(resources.videos)
  const filteredTemplates = filterResources(resources.templates)
  const filteredPresentations = filterResources(resources.presentations)

  // Categories for filtering
  const categories = [
    { id: "all", name: "All Categories" },
    { id: "farm-management", name: "Farm Management" },
    { id: "animal-health", name: "Animal Health" },
    { id: "business", name: "Business" },
    { id: "nutrition", name: "Nutrition" },
    { id: "milking", name: "Milking" },
    { id: "technology", name: "Technology" },
    { id: "value-chain", name: "Value Chain" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-farm-dark text-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-lora">
              NDFN Resource Library
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 text-xl">
              Access guides, videos, templates, and more to help you succeed in dairy farming
            </p>

            <div className="relative max-w-md mx-auto mt-8">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search resources..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={activeCategory === category.id ? "bg-farm-dark hover:bg-farm-dark/90" : ""}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="guides" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="guides" className="flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Guides
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center">
                <Video className="h-4 w-4 mr-2" />
                Videos
              </TabsTrigger>
              <TabsTrigger value="templates" className="flex items-center">
                <FileImage className="h-4 w-4 mr-2" />
                Templates
              </TabsTrigger>
              <TabsTrigger value="presentations" className="flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                Presentations
              </TabsTrigger>
            </TabsList>

            {/* Guides Tab */}
            <TabsContent value="guides">
              {filteredGuides.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredGuides.map((guide) => (
                    <Card key={guide.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={guide.thumbnail || "/placeholder.svg"}
                          alt={guide.title}
                          fill
                          className="object-cover"
                        />
                        <Badge className="absolute top-2 right-2 bg-farm-dark">{guide.type}</Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{guide.title}</CardTitle>
                        <CardDescription>{guide.category}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-gray-700 line-clamp-2">{guide.description}</p>
                        <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {guide.date}
                          </span>
                          <span>{guide.fileSize}</span>
                          <span>{guide.downloadCount} downloads</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-farm-dark hover:bg-farm-dark/90 flex items-center">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No guides found matching your search criteria.</p>
                  <Button
                    variant="link"
                    className="mt-2 text-farm-dark"
                    onClick={() => {
                      setSearchQuery("")
                      setActiveCategory("all")
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos">
              {filteredVideos.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredVideos.map((video) => (
                    <Card key={video.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-48 group">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button className="bg-white text-farm-dark hover:bg-white/90">Play Video</Button>
                        </div>
                        <Badge className="absolute top-2 right-2 bg-farm-dark">{video.duration}</Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{video.title}</CardTitle>
                        <CardDescription>{video.category}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-gray-700 line-clamp-2">{video.description}</p>
                        <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {video.date}
                          </span>
                          <span>{video.views} views</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link href={`/resources/videos/${video.id}`} className="w-full">
                          <Button className="w-full bg-farm-dark hover:bg-farm-dark/90">Watch Video</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No videos found matching your search criteria.</p>
                  <Button
                    variant="link"
                    className="mt-2 text-farm-dark"
                    onClick={() => {
                      setSearchQuery("")
                      setActiveCategory("all")
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </TabsContent>

            {/* Templates Tab */}
            <TabsContent value="templates">
              {filteredTemplates.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredTemplates.map((template) => (
                    <Card key={template.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={template.thumbnail || "/placeholder.svg"}
                          alt={template.title}
                          fill
                          className="object-cover"
                        />
                        <Badge className="absolute top-2 right-2 bg-farm-dark">{template.type}</Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{template.title}</CardTitle>
                        <CardDescription>{template.category}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-gray-700 line-clamp-2">{template.description}</p>
                        <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {template.date}
                          </span>
                          <span>{template.fileSize}</span>
                          <span>{template.downloadCount} downloads</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-farm-dark hover:bg-farm-dark/90 flex items-center">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No templates found matching your search criteria.</p>
                  <Button
                    variant="link"
                    className="mt-2 text-farm-dark"
                    onClick={() => {
                      setSearchQuery("")
                      setActiveCategory("all")
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </TabsContent>

            {/* Presentations Tab */}
            <TabsContent value="presentations">
              {filteredPresentations.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredPresentations.map((presentation) => (
                    <Card key={presentation.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={presentation.thumbnail || "/placeholder.svg"}
                          alt={presentation.title}
                          fill
                          className="object-cover"
                        />
                        <Badge className="absolute top-2 right-2 bg-farm-dark">{presentation.type}</Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{presentation.title}</CardTitle>
                        <CardDescription>{presentation.category}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-gray-700 line-clamp-2">{presentation.description}</p>
                        <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {presentation.date}
                          </span>
                          <span>{presentation.fileSize}</span>
                          <span>{presentation.downloadCount} downloads</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-farm-dark hover:bg-farm-dark/90 flex items-center">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No presentations found matching your search criteria.</p>
                  <Button
                    variant="link"
                    className="mt-2 text-farm-dark"
                    onClick={() => {
                      setSearchQuery("")
                      setActiveCategory("all")
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Request Resources Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center">
            <h2 className="text-2xl font-bold text-farm-dark font-lora">Can't Find What You Need?</h2>
            <p className="text-gray-700">
              If you're looking for specific resources that aren't available in our library, let us know and we'll try
              to help.
            </p>
            <Link href="/contact">
              <Button className="bg-farm-dark hover:bg-farm-dark/90">Request Resources</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
