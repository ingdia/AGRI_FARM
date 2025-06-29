import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Download, FileText } from "lucide-react"

export default function PublicationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Publications</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Research, insights, and resources on dairy farming and youth engagement
            </p>
          </div>
        </div>
      </section>

      {/* Featured Publication */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-4">
                Featured Publication
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Youth in Dairy: Opportunities and Challenges in Rwanda
              </h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                This comprehensive report examines the current state of youth participation in Rwanda's dairy sector,
                identifying key opportunities and challenges for young farmers.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                The research, conducted in collaboration with the University of Rwanda and the Ministry of Agriculture,
                provides valuable insights into the factors that influence youth engagement in dairy farming and offers
                recommendations for increasing participation.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-green-700 hover:bg-green-800">
                  Download Report
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative lg:order-last">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Cover of the Youth in Dairy report"
                width={800}
                height={600}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Research & Reports</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed">
              Explore our collection of research papers, reports, and case studies
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Modern Dairy Farming Techniques for Youth</CardTitle>
                <CardDescription>Published: March 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A comprehensive guide to modern dairy farming techniques suitable for young farmers with limited
                  resources and experience.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Read Online
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Financing Options for Youth in Dairy</CardTitle>
                <CardDescription>Published: November 2022</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  An analysis of various financing options available to young dairy farmers in Rwanda, including loans,
                  grants, and cooperative financing models.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Read Online
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Technology Adoption in Rwandan Dairy Farms</CardTitle>
                <CardDescription>Published: July 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A study on the adoption of technology among dairy farmers in Rwanda, with a focus on barriers and
                  enablers for youth.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Read Online
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Market Analysis: Dairy Products in East Africa</CardTitle>
                <CardDescription>Published: February 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  An in-depth analysis of the market for dairy products in East Africa, including trends, opportunities,
                  and challenges for new entrants.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Read Online
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Climate-Smart Dairy Farming Practices</CardTitle>
                <CardDescription>Published: April 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A guide to climate-smart dairy farming practices that can help young farmers build resilient and
                  sustainable enterprises.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Read Online
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Value Addition in Dairy: A Guide for Young Entrepreneurs</CardTitle>
                <CardDescription>Published: September 2022</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A practical guide to value addition in dairy, including product development, processing techniques,
                  and marketing strategies.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Read Online
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Guides & Resources Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Guides & Resources</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed">
              Practical guides and resources to help you succeed in dairy farming
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <FileText className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Dairy Farm Business Plan Template</h3>
                <p className="text-muted-foreground mb-2">
                  A comprehensive template to help you develop a business plan for your dairy farm.
                </p>
                <Button variant="link" className="p-0 h-auto text-green-700">
                  Download Template
                </Button>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <FileText className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Dairy Cow Health Management Guide</h3>
                <p className="text-muted-foreground mb-2">
                  A practical guide to managing the health of your dairy cows, including common diseases and preventive
                  measures.
                </p>
                <Button variant="link" className="p-0 h-auto text-green-700">
                  Download Guide
                </Button>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <FileText className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Milk Quality Assurance Handbook</h3>
                <p className="text-muted-foreground mb-2">
                  A comprehensive guide to ensuring milk quality from production to processing.
                </p>
                <Button variant="link" className="p-0 h-auto text-green-700">
                  Download Handbook
                </Button>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <FileText className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Dairy Farm Record Keeping Templates</h3>
                <p className="text-muted-foreground mb-2">
                  Templates for keeping records of milk production, feed consumption, health treatments, and financial
                  transactions.
                </p>
                <Button variant="link" className="p-0 h-auto text-green-700">
                  Download Templates
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Stay Updated</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Subscribe to our newsletter to receive the latest publications, research findings, and resources
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link href="/contact">
                <Button className="bg-green-700 hover:bg-green-800">
                  Subscribe Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
