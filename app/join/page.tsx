"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ChevronRight, Users, Award, Lightbulb } from "lucide-react"

export default function JoinPage() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    category: "",
    location: "",
    experience: "",
    interests: "",
    agreeToTerms: false,
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Form submitted:", formState)
    setSubmitting(false)
    setSubmitted(true)

    toast({
      title: "Application Submitted",
      description: "Thank you for your interest in joining NDFN. We will contact you soon!",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image src="/images/rwandan-cow-2.png" alt="Rwandan dairy farm" fill className="object-cover" />
          <div className="absolute inset-0 bg-farm-dark/70"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-[800px] space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white text-shadow font-lora">
              Join NDFN
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 text-xl">
              Become part of the movement transforming dairy farming for the next generation
            </p>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[1000px]">
            <h2 className="text-3xl font-bold text-center mb-12 text-farm-dark font-lora">Why Join NDFN?</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-farm-dark card-shadow-hover">
                <div className="mb-4 text-farm-dark">
                  <Award size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-farm-dark">Professional Development</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-farm-dark flex-shrink-0 mt-0.5" />
                    <span>Specialized training programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-farm-dark flex-shrink-0 mt-0.5" />
                    <span>Certification opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-farm-dark flex-shrink-0 mt-0.5" />
                    <span>Mentorship from experts</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-farm-medium card-shadow-hover">
                <div className="mb-4 text-farm-medium">
                  <Users size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-farm-dark">Network & Community</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-farm-medium flex-shrink-0 mt-0.5" />
                    <span>Connect with like-minded farmers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-farm-medium flex-shrink-0 mt-0.5" />
                    <span>Industry events & conferences</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-farm-medium flex-shrink-0 mt-0.5" />
                    <span>Collaborative opportunities</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-farm-light card-shadow-hover">
                <div className="mb-4 text-farm-light">
                  <Lightbulb size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-farm-dark">Resources & Support</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-farm-light flex-shrink-0 mt-0.5" />
                    <span>Access to funding opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-farm-light flex-shrink-0 mt-0.5" />
                    <span>Market linkages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-farm-light flex-shrink-0 mt-0.5" />
                    <span>Technical advisory services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[1000px]">
            <h2 className="text-3xl font-bold text-center mb-12 text-farm-dark font-lora">Membership Options</h2>

            <Tabs defaultValue="individual" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="individual">Individual</TabsTrigger>
                <TabsTrigger value="cooperative">Cooperative</TabsTrigger>
                <TabsTrigger value="student">Student</TabsTrigger>
              </TabsList>

              <TabsContent value="individual" className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-farm-dark">Individual Membership</h3>
                <p className="mb-4 text-gray-700">For dairy farmers and entrepreneurs operating independently.</p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-farm-dark flex-shrink-0 mt-0.5" />
                    <span>Full access to training programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-farm-dark flex-shrink-0 mt-0.5" />
                    <span>One-on-one mentorship</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-farm-dark flex-shrink-0 mt-0.5" />
                    <span>Market linkage support</span>
                  </li>
                </ul>
              </TabsContent>

              <TabsContent value="cooperative" className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-farm-dark">Cooperative Membership</h3>
                <p className="mb-4 text-gray-700">For dairy cooperatives and farmer groups.</p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-farm-dark flex-shrink-0 mt-0.5" />
                    <span>Group training sessions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-farm-dark flex-shrink-0 mt-0.5" />
                    <span>Cooperative development support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-farm-dark flex-shrink-0 mt-0.5" />
                    <span>Bulk market access</span>
                  </li>
                </ul>
              </TabsContent>

              <TabsContent value="student" className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-farm-dark">Student Membership</h3>
                <p className="mb-4 text-gray-700">For students interested in dairy farming.</p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-farm-dark flex-shrink-0 mt-0.5" />
                    <span>Discounted training programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-farm-dark flex-shrink-0 mt-0.5" />
                    <span>Internship opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-farm-dark flex-shrink-0 mt-0.5" />
                    <span>Networking with industry professionals</span>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Join Form Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px]">
            <h2 className="text-3xl font-bold text-center mb-12 text-farm-dark font-lora">Apply for Membership</h2>

            {submitted ? (
              <div className="text-center p-8 bg-green-50 rounded-xl">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-farm-dark">Application Submitted!</h3>
                <p className="text-gray-700 mb-6">
                  Thank you for applying to join NDFN. We've received your application and will review it shortly.
                  You'll receive a confirmation email with next steps.
                </p>
                <Button onClick={() => setSubmitted(false)} className="bg-farm-dark hover:bg-farm-dark/90">
                  Submit Another Application
                </Button>
              </div>
            ) : (
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-farm-dark text-white">
                  <CardTitle className="font-lora text-2xl">Membership Application</CardTitle>
                  <CardDescription className="text-white/80">
                    Please complete all fields to apply for NDFN membership
                  </CardDescription>

                  <div className="flex justify-between items-center mt-4">
                    <div className={`flex items-center ${currentStep >= 1 ? "text-white" : "text-white/50"}`}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${currentStep >= 1 ? "bg-white/20" : "bg-white/10"}`}
                      >
                        1
                      </div>
                      <span className="hidden sm:inline">Personal Info</span>
                    </div>
                    <div className={`h-0.5 w-12 ${currentStep >= 2 ? "bg-white/60" : "bg-white/20"}`}></div>
                    <div className={`flex items-center ${currentStep >= 2 ? "text-white" : "text-white/50"}`}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${currentStep >= 2 ? "bg-white/20" : "bg-white/10"}`}
                      >
                        2
                      </div>
                      <span className="hidden sm:inline">Experience</span>
                    </div>
                    <div className={`h-0.5 w-12 ${currentStep >= 3 ? "bg-white/60" : "bg-white/20"}`}></div>
                    <div className={`flex items-center ${currentStep >= 3 ? "text-white" : "text-white/50"}`}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${currentStep >= 3 ? "bg-white/20" : "bg-white/10"}`}
                      >
                        3
                      </div>
                      <span className="hidden sm:inline">Interests</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit}>
                    {currentStep === 1 && (
                      <div className="space-y-6 animate-in fade-in duration-500">
                        <div className="grid gap-3">
                          <Label htmlFor="fullName" className="font-lora">
                            Full Name
                          </Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formState.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="border-gray-300 focus:border-farm-dark focus:ring-farm-dark"
                            required
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="email" className="font-lora">
                            Email
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="border-gray-300 focus:border-farm-dark focus:ring-farm-dark"
                            required
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="phone" className="font-lora">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="border-gray-300 focus:border-farm-dark focus:ring-farm-dark"
                            required
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="age" className="font-lora">
                            Age
                          </Label>
                          <Input
                            id="age"
                            name="age"
                            type="number"
                            min="18"
                            max="35"
                            value={formState.age}
                            onChange={handleChange}
                            placeholder="Enter your age (18-35)"
                            className="border-gray-300 focus:border-farm-dark focus:ring-farm-dark"
                            required
                          />
                        </div>

                        <div className="flex justify-end">
                          <Button
                            type="button"
                            onClick={nextStep}
                            className="bg-farm-dark hover:bg-farm-dark/90 flex items-center"
                          >
                            Next Step
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-6 animate-in fade-in duration-500">
                        <div className="grid gap-3">
                          <Label htmlFor="category" className="font-lora">
                            Category
                          </Label>
                          <Select
                            value={formState.category}
                            onValueChange={(value) => handleSelectChange("category", value)}
                            required
                          >
                            <SelectTrigger id="category" className="border-gray-300 focus:ring-farm-dark">
                              <SelectValue placeholder="Select your category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="existing-farmer">Existing Small-Scale Dairy Farmer</SelectItem>
                              <SelectItem value="student">Student/Graduate in Agriculture</SelectItem>
                              <SelectItem value="entrepreneur">Aspiring Dairy Entrepreneur</SelectItem>
                              <SelectItem value="tech-innovator">Technology Innovator</SelectItem>
                              <SelectItem value="cooperative">Youth Cooperative/Startup</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="location" className="font-lora">
                            Location
                          </Label>
                          <Input
                            id="location"
                            name="location"
                            value={formState.location}
                            onChange={handleChange}
                            placeholder="Enter your location"
                            className="border-gray-300 focus:border-farm-dark focus:ring-farm-dark"
                            required
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label className="font-lora">Experience in Dairy Farming</Label>
                          <RadioGroup
                            value={formState.experience}
                            onValueChange={(value) => handleSelectChange("experience", value)}
                            className="space-y-3"
                            required
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="none" id="none" />
                              <Label htmlFor="none">No experience</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="less-than-1" id="less-than-1" />
                              <Label htmlFor="less-than-1">Less than 1 year</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="1-3" id="1-3" />
                              <Label htmlFor="1-3">1-3 years</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="more-than-3" id="more-than-3" />
                              <Label htmlFor="more-than-3">More than 3 years</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="flex justify-between">
                          <Button type="button" variant="outline" onClick={prevStep}>
                            Previous
                          </Button>
                          <Button
                            type="button"
                            onClick={nextStep}
                            className="bg-farm-dark hover:bg-farm-dark/90 flex items-center"
                          >
                            Next Step
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-6 animate-in fade-in duration-500">
                        <div className="grid gap-3">
                          <Label htmlFor="interests" className="font-lora">
                            What aspects of dairy farming are you most interested in?
                          </Label>
                          <Textarea
                            id="interests"
                            name="interests"
                            value={formState.interests}
                            onChange={handleChange}
                            placeholder="Tell us about your interests in dairy farming"
                            className="min-h-[100px] border-gray-300 focus:border-farm-dark focus:ring-farm-dark"
                            required
                          />
                        </div>

                        <div className="flex items-start space-x-2">
                          <input
                            type="checkbox"
                            id="agreeToTerms"
                            name="agreeToTerms"
                            checked={formState.agreeToTerms as boolean}
                            onChange={handleChange}
                            className="mt-1"
                            required
                          />
                          <Label htmlFor="agreeToTerms" className="text-sm">
                            I agree to the NDFN{" "}
                            <a href="#" className="text-farm-dark underline">
                              Terms and Conditions
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-farm-dark underline">
                              Privacy Policy
                            </a>
                          </Label>
                        </div>

                        <div className="flex justify-between">
                          <Button type="button" variant="outline" onClick={prevStep}>
                            Previous
                          </Button>
                          <Button type="submit" className="bg-farm-dark hover:bg-farm-dark/90" disabled={submitting}>
                            {submitting ? "Submitting..." : "Submit Application"}
                          </Button>
                        </div>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-farm-dark font-lora">What Our Members Say</h2>
            <p className="mx-auto max-w-[700px] text-gray-700 text-lg">
              Hear from young farmers who have benefited from NDFN membership
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Member" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Jean-Pierre Uwimana</h4>
                  <p className="text-sm text-gray-600">Dairy Farmer, Nyagatare</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Joining NDFN was the best decision I made for my dairy business. The training and mentorship helped me
                increase my milk production by 40% in just six months."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Member" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Marie Mukamana</h4>
                  <p className="text-sm text-gray-600">Dairy Entrepreneur, Musanze</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The network of fellow young farmers I've built through NDFN has been invaluable. We share knowledge,
                resources, and even equipment, making it easier for all of us to succeed."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Member" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Emmanuel Niyonkuru</h4>
                  <p className="text-sm text-gray-600">Student Member, Kigali</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "As a student, NDFN has given me practical experience that complements my theoretical knowledge. The
                internship opportunities have been eye-opening and prepared me for a career in dairy farming."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
