"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { ArrowLeft, ThumbsUp, Flag, Share, Clock, Eye } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// This would normally come from a database
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
      <li>More efficient use of land</li>
    </ul>
    
    <p>What are your thoughts on zero-grazing systems? Have you tried it on your farm? I'm particularly interested in hearing about any challenges you've faced and how you've overcome them.</p>
    
    <p>Thanks!</p>
  `,
  replies: 12,
  views: 234,
}

const repliesData = [
  {
    id: 1,
    author: {
      name: "Marie Uwimana",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MU",
      joined: "Member since 2020",
    },
    content: `
      <p>Hi Jean-Pierre,</p>
      
      <p>I've been considering a zero-grazing system for my farm too. It sounds like a great way to improve efficiency and control feed quality.</p>
      
      <p>Have you had any issues with the initial setup? I'm curious about the cost-effectiveness and how much time it takes to manage compared to traditional grazing.</p>
    `,
    datePosted: "June 15, 2023",
    likes: 8,
  },
  {
    id: 2,
    author: {
      name: "Emmanuel Niyonkuru",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "EN",
      joined: "Member since 2022",
    },
    content: `
      <p>Jean-Pierre, I've been using zero-grazing for a few years now. It's definitely more efficient, but it requires a good understanding of fodder management.</p>
      
      <p>One challenge I faced was ensuring a consistent supply of fresh fodder. I had to invest in a good silage-making system to overcome this.</p>
      
      <p>Overall, it's been worth it for the increased milk production and reduced labor.</p>
    `,
    datePosted: "June 16, 2023",
    likes: 5,
  },
]

export default function DiscussionPageClient() {
  const [replyContent, setReplyContent] = useState("")

  const handleReplySubmit = () => {
    if (replyContent.trim() === "") {
      toast({
        title: "Reply cannot be empty",
        description: "Please enter your thoughts before posting.",
        variant: "destructive",
      })
      return
    }

    // Mock adding a reply
    const newReply = {
      id: replies.length + 1,
      author: {
        name: "Jean Mugabo",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "JM",
        joined: "Member since 2021",
      },
      content: replyContent,
      datePosted: "Just now",
      likes: 0,
    }

    setReplies([...replies, newReply])
    setReplyContent("")
    toast({
      title: "Reply posted",
      description: "Your reply has been successfully added to the discussion.",
    })
  }

  const [replies, setReplies] = useState(repliesData)

  return (
    <div className="container py-10">
      <Button variant="ghost" size="sm" className="mb-6" asChild>
        <Link href="/forum">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Forum
        </Link>
      </Button>

      <Card className="mb-8">
        <CardHeader className="space-y-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <Badge variant="outline" className="mb-2">
                {discussion.category}
              </Badge>
              <h1 className="text-2xl font-bold">{discussion.title}</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Share className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button variant="ghost" size="icon">
                <Clock className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={discussion.authorAvatar || "/placeholder.svg"} alt={discussion.author} />
              <AvatarFallback>{discussion.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{discussion.author}</p>
              <p className="text-sm text-muted-foreground">{discussion.authorRole}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div
            className="prose prose-stone dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: discussion.content }}
          />
        </CardContent>
      </Card>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Replies ({replies.length})</h2>
        <div className="space-y-6">
          {replies.map((reply) => (
            <Card key={reply.id}>
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={reply.author.avatar || "/placeholder.svg"} alt={reply.author.name} />
                    <AvatarFallback>{reply.author.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{reply.author.name}</p>
                    <p className="text-sm text-muted-foreground">{reply.author.joined}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div
                  className="prose prose-stone dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: reply.content }}
                />
              </CardContent>
              <CardFooter className="flex justify-between border-t p-4">
                <div className="text-sm text-muted-foreground">Posted on {reply.datePosted}</div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    Like ({reply.likes})
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Flag className="mr-2 h-4 w-4" />
                    Report
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Add Your Reply</h2>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Share your thoughts, experiences, or advice..."
            className="min-h-[150px]"
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
          />
        </CardContent>
        <CardFooter className="flex justify-end border-t p-4">
          <Button onClick={handleReplySubmit}>Post Reply</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
