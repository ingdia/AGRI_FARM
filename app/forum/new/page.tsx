"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { ArrowLeft } from "lucide-react"

export default function NewDiscussionPage() {
  const [formState, setFormState] = useState({
    title: "",
    category: "",
    content: "",
    tags: "",
  })

  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, category: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Discussion submitted:", formState)
    setSubmitting(false)

    toast({
      title: "Discussion Created",
      description: "Your discussion has been posted successfully.",
    })

    // In a real app, we would redirect to the new discussion
    window.location.href = "/forum"
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-farm-dark text-white py-8">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px]">
            <Link href="/forum" className="flex items-center text-white/80 hover:text-white mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Forum
            </Link>
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl font-lora">Start a New Discussion</h1>
            <p className="text-white/80 mt-2">Share your questions, insights, or experiences with the NDFN community</p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px]">
            <Card>
              <CardHeader>
                <CardTitle>New Discussion</CardTitle>
                <CardDescription>Fill out the form below to create a new discussion topic</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        name="title"
                        value={formState.title}
                        onChange={handleChange}
                        placeholder="Enter a descriptive title for your discussion"
                        className="border-gray-300 focus:border-farm-dark focus:ring-farm-dark"
                        required
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="category">Category</Label>
                      <Select value={formState.category} onValueChange={handleSelectChange} required>
                        <SelectTrigger id="category" className="border-gray-300 focus:ring-farm-dark">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dairy-management">Dairy Management</SelectItem>
                          <SelectItem value="technology-innovation">Technology & Innovation</SelectItem>
                          <SelectItem value="market-access">Market Access</SelectItem>
                          <SelectItem value="training-education">Training & Education</SelectItem>
                          <SelectItem value="financial-support">Financial Support</SelectItem>
                          <SelectItem value="networking">Networking & Collaboration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="content">Content</Label>
                      <Textarea
                        id="content"
                        name="content"
                        value={formState.content}
                        onChange={handleChange}
                        placeholder="Share your question, experience, or insights in detail"
                        className="min-h-[200px] border-gray-300 focus:border-farm-dark focus:ring-farm-dark"
                        required
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="tags">Tags (optional)</Label>
                      <Input
                        id="tags"
                        name="tags"
                        value={formState.tags}
                        onChange={handleChange}
                        placeholder="Enter tags separated by commas (e.g., milk production, feed, technology)"
                        className="border-gray-300 focus:border-farm-dark focus:ring-farm-dark"
                      />
                      <p className="text-sm text-gray-500">Tags help others find your discussion more easily</p>
                    </div>
                  </div>
                  <CardFooter className="flex justify-end px-0 pt-6">
                    <div className="flex gap-3">
                      <Link href="/forum">
                        <Button variant="outline">Cancel</Button>
                      </Link>
                      <Button type="submit" className="bg-farm-dark hover:bg-farm-dark/90" disabled={submitting}>
                        {submitting ? "Posting..." : "Post Discussion"}
                      </Button>
                    </div>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-lg mb-4">Posting Guidelines</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Be clear and specific in your title and content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Include relevant details to help others understand your question or insight</span>
                </li>
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Use respectful language and be considerate of others</span>
                </li>
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Check if a similar discussion already exists before posting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Add tags to help categorize your discussion and make it more discoverable</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
