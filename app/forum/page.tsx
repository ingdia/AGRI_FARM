"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, MessageSquare, Users, Clock, PlusCircle, TrendingUp, BookOpen, Tractor, Lightbulb } from "lucide-react"

// Mock data for forum categories
const categories = [
  {
    id: 1,
    name: "Dairy Management",
    description: "Discussions about dairy farm management practices",
    icon: <Tractor className="h-6 w-6" />,
    color: "bg-farm-dark",
    topics: 156,
    posts: 1243,
  },
  {
    id: 2,
    name: "Technology & Innovation",
    description: "Explore new technologies and innovations in dairy farming",
    icon: <Lightbulb className="h-6 w-6" />,
    color: "bg-farm-medium",
    topics: 89,
    posts: 734,
  },
  {
    id: 3,
    name: "Market Access",
    description: "Discussions about accessing markets and pricing",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "bg-farm-light",
    topics: 112,
    posts: 876,
  },
  {
    id: 4,
    name: "Training & Education",
    description: "Resources and discussions about learning opportunities",
    icon: <BookOpen className="h-6 w-6" />,
    color: "bg-green-700",
    topics: 67,
    posts: 543,
  },
]

// Mock data for recent discussions
const recentDiscussions = [
  {
    id: 1,
    title: "Best practices for zero-grazing systems",
    category: "Dairy Management",
    author: "Jean-Pierre Uwimana",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "2 hours ago",
    replies: 12,
    views: 156,
    excerpt:
      "I've been implementing a zero-grazing system on my small farm and wanted to share some experiences and get advice from others...",
  },
  {
    id: 2,
    title: "Experience with solar-powered milk cooling systems?",
    category: "Technology & Innovation",
    author: "Marie Mukamana",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "Yesterday",
    replies: 8,
    views: 94,
    excerpt:
      "I'm considering investing in a solar-powered milk cooling system for my farm. Has anyone here used one? What are the pros and cons?",
  },
  {
    id: 3,
    title: "Negotiating better prices with processors",
    category: "Market Access",
    author: "Emmanuel Niyonkuru",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "2 days ago",
    replies: 15,
    views: 203,
    excerpt:
      "Our cooperative is in talks with a new processor, and I wanted to get some advice on negotiating favorable terms...",
  },
  {
    id: 4,
    title: "Upcoming training on mastitis prevention",
    category: "Training & Education",
    author: "Claudine Mukeshimana",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "3 days ago",
    replies: 5,
    views: 87,
    excerpt:
      "I'm organizing a training session on mastitis prevention techniques next month and wanted to gauge interest...",
  },
]

// Mock data for popular discussions
const popularDiscussions = [
  {
    id: 5,
    title: "Comparing different feed formulations for maximum milk yield",
    category: "Dairy Management",
    author: "Pascal Habimana",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "1 week ago",
    replies: 45,
    views: 512,
    excerpt:
      "I've been experimenting with different feed formulations to optimize milk yield. Here are my findings so far...",
  },
  {
    id: 6,
    title: "Digital farm management apps - which one do you use?",
    category: "Technology & Innovation",
    author: "Diane Uwase",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "2 weeks ago",
    replies: 37,
    views: 423,
    excerpt:
      "There are several farm management apps available now. I'd like to hear which ones other farmers are using and why...",
  },
  {
    id: 7,
    title: "Success story: How our cooperative secured a contract with a major hotel chain",
    category: "Market Access",
    author: "Jean-Claude Mutabazi",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "3 weeks ago",
    replies: 29,
    views: 378,
    excerpt:
      "After months of negotiation, our cooperative secured a contract to supply dairy products to a major hotel chain. Here's how we did it...",
  },
]

export default function ForumPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-farm-dark text-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-lora">
              NDFN Community Forum
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 text-xl">
              Connect, share knowledge, and learn from fellow dairy farmers
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search discussions..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Link href="/forum/new">
                <Button className="bg-white text-farm-dark hover:bg-white/90 flex items-center">
                  <PlusCircle className="mr-2 h-5 w-5" />
                  New Discussion
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Forum Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-farm-dark" />
              <span className="text-gray-700">
                <strong>1,250</strong> Discussions
              </span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-farm-dark" />
              <span className="text-gray-700">
                <strong>3,456</strong> Members
              </span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-farm-dark" />
              <span className="text-gray-700">
                <strong>42</strong> Online Now
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Forum Content */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Sidebar - Categories */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6 text-farm-dark font-lora">Categories</h2>

              <div className="space-y-4">
                {categories.map((category) => (
                  <Link href={`/forum/category/${category.id}`} key={category.id}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4 flex items-start">
                        <div className={`${category.color} text-white p-3 rounded-lg mr-4`}>{category.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{category.name}</h3>
                          <p className="text-sm text-gray-600">{category.description}</p>
                          <div className="flex gap-4 mt-2 text-xs text-gray-500">
                            <span>{category.topics} topics</span>
                            <span>{category.posts} posts</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Content - Discussions */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="recent" className="w-full">
                <div className="flex justify-between items-center mb-6">
                  <TabsList>
                    <TabsTrigger value="recent">Recent Discussions</TabsTrigger>
                    <TabsTrigger value="popular">Popular Discussions</TabsTrigger>
                    <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
                  </TabsList>

                  <Link href="/forum/new">
                    <Button className="bg-farm-dark hover:bg-farm-dark/90">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      New Discussion
                    </Button>
                  </Link>
                </div>

                <TabsContent value="recent" className="space-y-6">
                  {recentDiscussions.map((discussion) => (
                    <Link href={`/forum/discussion/${discussion.id}`} key={discussion.id}>
                      <Card className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="font-bold text-xl text-farm-dark">{discussion.title}</h3>
                            <Badge variant="outline" className="bg-gray-100">
                              {discussion.category}
                            </Badge>
                          </div>

                          <p className="text-gray-700 mb-4 line-clamp-2">{discussion.excerpt}</p>

                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                                <Image
                                  src={discussion.authorAvatar || "/placeholder.svg"}
                                  alt={discussion.author}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <span className="text-sm font-medium">{discussion.author}</span>
                                <p className="text-xs text-gray-500">{discussion.date}</p>
                              </div>
                            </div>

                            <div className="flex gap-4 text-sm text-gray-500">
                              <span className="flex items-center">
                                <MessageSquare className="h-4 w-4 mr-1" />
                                {discussion.replies}
                              </span>
                              <span>{discussion.views} views</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </TabsContent>

                <TabsContent value="popular" className="space-y-6">
                  {popularDiscussions.map((discussion) => (
                    <Link href={`/forum/discussion/${discussion.id}`} key={discussion.id}>
                      <Card className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="font-bold text-xl text-farm-dark">{discussion.title}</h3>
                            <Badge variant="outline" className="bg-gray-100">
                              {discussion.category}
                            </Badge>
                          </div>

                          <p className="text-gray-700 mb-4 line-clamp-2">{discussion.excerpt}</p>

                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                                <Image
                                  src={discussion.authorAvatar || "/placeholder.svg"}
                                  alt={discussion.author}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <span className="text-sm font-medium">{discussion.author}</span>
                                <p className="text-xs text-gray-500">{discussion.date}</p>
                              </div>
                            </div>

                            <div className="flex gap-4 text-sm text-gray-500">
                              <span className="flex items-center">
                                <MessageSquare className="h-4 w-4 mr-1" />
                                {discussion.replies}
                              </span>
                              <span>{discussion.views} views</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </TabsContent>

                <TabsContent value="unanswered" className="space-y-6">
                  <div className="text-center py-12">
                    <p className="text-gray-500">No unanswered discussions at the moment.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6">
            <h2 className="text-2xl font-bold text-center text-farm-dark font-lora">Community Guidelines</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Be Respectful</h3>
                <p className="text-sm text-gray-700">
                  Treat others with respect. No personal attacks, harassment, or discrimination.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Share Knowledge</h3>
                <p className="text-sm text-gray-700">
                  Contribute constructively to discussions and help fellow farmers.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Stay On Topic</h3>
                <p className="text-sm text-gray-700">Keep discussions relevant to dairy farming and related topics.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">No Spam</h3>
                <p className="text-sm text-gray-700">
                  Avoid promotional content without prior approval from moderators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
