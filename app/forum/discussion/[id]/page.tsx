"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { ArrowLeft, ThumbsUp, Flag, Share, Clock, Eye } from "lucide-react"

// Mock data for the discussion
const discussion = {
  id: 1,
  title: "Best practices for zero-grazing systems",
  category: "Dairy Management",
  author: "Jean-Pierre Uwimana",
  authorAvatar: "/placeholder.svg?height=100&width=100",
  authorRole: "Verified Farmer",
  date: "2 hours ago",
  content: `
    <p>Hello fellow dairy farmers,</p>
    
    <p>I've been implementing a zero-grazing system on my small farm (2 acres) for the past six months, and I wanted to share some experiences and get advice from others who have been doing this longer.</p>
    
    <p>So far, I've noticed several benefits:</p>
    <ul>
      <li>Better control over feed quality and quantity</li>
      <li>Reduced parasite problems</li>
      <li>Increased milk production (about 15% more than when my cows were grazing)</li>
      <li>More efficient use of land and resources</li>
    </ul>
    
    <p>However, I've also encountered some challenges:</p>
    <ul>
      <li>Higher initial costs for setting up the system</li>
      <li>Need for consistent monitoring and management of the feed</li>
    </ul>
    
    <p>Would love to hear your thoughts and experiences with zero-grazing systems!</p>
  `,
}

const DiscussionPage = () => {
  const [comment, setComment] = useState("")

  const handleCommentSubmit = () => {
    if (comment.trim() === "") {
      toast({
        title: "Comment cannot be empty",
        description: "Please enter a valid comment.",
        variant: "destructive",
      })
      return
    }
    // Logic to submit comment
    setComment("")
    toast({
      title: "Comment submitted",
      description: "Your comment has been successfully posted.",
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl p-4">
        <Link href="/forum" className="flex items-center gap-2 text-sm font-medium hover:underline">
          <ArrowLeft className="h-4 w-4" />
          Back to Forum
        </Link>
        <Card className="mt-4">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Image
                src={discussion.authorAvatar || "/placeholder.svg"}
                alt={discussion.author}
                width={100}
                height={100}
                className="rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold">{discussion.title}</h1>
                <Badge variant="outline" className="mt-2">
                  {discussion.category}
                </Badge>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <ThumbsUp className="h-4 w-4" />
                  10
                  <Flag className="h-4 w-4" />
                  2
                  <Share className="h-4 w-4" />
                  5
                  <Clock className="h-4 w-4" />
                  {discussion.date}
                  <Eye className="h-4 w-4" />
                  500
                </div>
              </div>
            </div>
            <div className="mt-6" dangerouslySetInnerHTML={{ __html: discussion.content }} />
            <div className="mt-8">
              <h2 className="text-xl font-bold">Leave a Comment</h2>
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your comment here..."
                className="mt-2"
              />
              <Button className="mt-4" onClick={handleCommentSubmit}>
                Submit Comment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DiscussionPage
