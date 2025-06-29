"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ThumbsUp, Download, Share, Clock, Calendar, Eye } from "lucide-react"

// Mock video data
const videoData = {
  id: 1,
  title: "Modern Milking Techniques Demonstration",
  duration: "18:24",
  category: "Milking",
  thumbnail: "/placeholder.svg?height=600&width=1200",
  description: `
    <p>This comprehensive video demonstrates modern milking techniques that can help dairy farmers maximize efficiency and milk quality.</p>
    
    <p>In this demonstration, we cover:</p>
    <ul>
      <li>Proper pre-milking udder preparation</li>
      <li>Correct attachment of milking units</li>
      <li>Monitoring milk flow and preventing over-milking</li>
      <li>Post-milking teat disinfection</li>
      <li>Cleaning and maintenance of milking equipment</li>
    </ul>
    
    <p>These techniques have been proven to increase milk yield, improve milk quality, and reduce the incidence of mastitis in dairy herds.</p>
  `,
  instructor: "Dr. Emmanuel Habimana",
  instructorTitle: "Dairy Production Specialist",
  instructorAvatar: "/placeholder.svg?height=100&width=100",
  views: 3456,
  likes: 287,
  uploadDate: "May 5, 2023",
  relatedVideos: [
    {
      id: 2,
      title: "Setting Up a Zero-Grazing System",
      duration: "24:15",
      thumbnail: "/placeholder.svg?height=400&width=600",
      views: 2789,
    },
    {
      id: 3,
      title: "Mastitis Detection and Treatment",
      duration: "15:42",
      thumbnail: "/placeholder.svg?height=400&width=600",
      views: 4123,
    },
    {
      id: 4,
      title: "Dairy Cow Nutrition Fundamentals",
      duration: "22:08",
      thumbnail: "/placeholder.svg?height=400&width=600",
      views: 1876,
    },
  ],
  resources: [
    {
      id: 1,
      title: "Milking Techniques Checklist",
      type: "PDF",
      fileSize: "1.2 MB",
    },
    {
      id: 2,
      title: "Equipment Cleaning Schedule Template",
      type: "DOCX",
      fileSize: "0.8 MB",
    },
  ],
}

export default function VideoPage({ params }: { params: { id: string } }) {
  const [liked, setLiked] = useState(false)

  // In a real app, we would fetch the video data based on the ID
  const video = videoData

  return (
    <div className="flex flex-col min-h-screen">
      {/* Video Player Section */}
      <section className="bg-black py-0">
        <div className="container max-w-5xl px-0 md:px-0">
          <div className="aspect-video bg-gray-800 flex items-center justify-center">
            <Image
              src={video.thumbnail || "/placeholder.svg"}
              alt={video.title}
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
            {/* In a real app, this would be a video player */}
            <div className="absolute">
              <Button className="bg-white text-farm-dark hover:bg-white/90 rounded-full w-16 h-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Info Section */}
      <section className="py-8 bg-white">
        <div className="container max-w-5xl px-4 md:px-6">
          <Link href="/resources" className="flex items-center text-farm-dark/80 hover:text-farm-dark mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl font-lora text-farm-dark">
                {video.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500">
                <Badge variant="outline" className="bg-gray-100">
                  {video.category}
                </Badge>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {video.duration}
                </span>
                <span className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  {video.views} views
                </span>
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {video.uploadDate}
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant={liked ? "default" : "outline"}
                className={liked ? "bg-farm-dark hover:bg-farm-dark/90" : ""}
                onClick={() => setLiked(!liked)}
              >
                <ThumbsUp className="mr-2 h-4 w-4" />
                {liked ? "Liked" : "Like"}
              </Button>
              <Button variant="outline">
                <Share className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          <hr className="my-6" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: video.description }} />

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">Resources</h3>
                <div className="space-y-3">
                  {video.resources.map((resource) => (
                    <div key={resource.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{resource.title}</p>
                        <p className="text-sm text-gray-500">
                          {resource.fileSize} • {resource.type}
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={video.instructorAvatar || "/placeholder.svg"}
                    alt={video.instructor}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">{video.instructor}</p>
                  <p className="text-sm text-gray-500">{video.instructorTitle}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Related Videos</h3>
              <div className="space-y-4">
                {video.relatedVideos.map((relatedVideo) => (
                  <Link href={`/resources/videos/${relatedVideo.id}`} key={relatedVideo.id}>
                    <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                      <div className="relative h-32">
                        <Image
                          src={relatedVideo.thumbnail || "/placeholder.svg"}
                          alt={relatedVideo.title}
                          fill
                          className="object-cover"
                        />
                        <Badge className="absolute bottom-2 right-2 bg-black/70">{relatedVideo.duration}</Badge>
                      </div>
                      <CardContent className="p-3">
                        <h4 className="font-medium line-clamp-2">{relatedVideo.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{relatedVideo.views} views</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
