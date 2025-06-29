import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Events & Training</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Upcoming opportunities to learn, connect, and grow with NDFN
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-4">
                Featured Event
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Annual Youth in Dairy Conference 2023</h2>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                <span>September 15-16, 2023</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                <span>Kigali Convention Center, Kigali, Rwanda</span>
              </div>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Join us for the largest gathering of young dairy farmers, industry experts, and stakeholders in Rwanda.
                The conference will feature keynote speeches, panel discussions, workshops, and networking opportunities
                focused on the theme "Innovation and Sustainability in Dairy Farming."
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-green-700 hover:bg-green-800">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">View Agenda</Button>
              </div>
            </div>
            <div className="relative lg:order-last">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Youth in Dairy Conference"
                width={800}
                height={600}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Upcoming Events</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed">
              Mark your calendar for these upcoming events and training opportunities
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Dairy Management Workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Dairy Farm Management Workshop</CardTitle>
                <CardDescription className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  August 10, 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>NDFN Training Center, Kigali</span>
                </div>
                <p className="text-muted-foreground">
                  A comprehensive workshop covering all aspects of dairy farm management, from animal health to
                  financial planning.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Register
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Milk Processing Training"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Milk Processing and Value Addition Training</CardTitle>
                <CardDescription className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  August 25-26, 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Nyabihu Dairy Plant, Western Province</span>
                </div>
                <p className="text-muted-foreground">
                  Learn how to process milk into various products such as yogurt, cheese, and butter, and explore
                  opportunities for value addition.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Register
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Dairy Tech Expo"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Dairy Tech Expo 2023</CardTitle>
                <CardDescription className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  September 5, 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Kigali Exhibition Ground</span>
                </div>
                <p className="text-muted-foreground">
                  Explore the latest technologies and innovations in dairy farming, from automated milking systems to
                  digital farm management tools.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Register
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Financial Literacy Workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Financial Literacy for Dairy Farmers</CardTitle>
                <CardDescription className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  September 20, 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>NDFN Training Center, Kigali</span>
                </div>
                <p className="text-muted-foreground">
                  Learn essential financial management skills for your dairy business, including budgeting, record
                  keeping, and accessing finance.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Register
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Dairy Cooperative Formation Workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Dairy Cooperative Formation Workshop</CardTitle>
                <CardDescription className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  October 5, 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Musanze District Office</span>
                </div>
                <p className="text-muted-foreground">
                  Learn how to form and manage a dairy cooperative, including legal requirements, governance structures,
                  and operational best practices.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Register
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Dairy Market Access Forum"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Dairy Market Access Forum</CardTitle>
                <CardDescription className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  October 20, 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Serena Hotel, Kigali</span>
                </div>
                <p className="text-muted-foreground">
                  Connect with processors, retailers, and other market actors to explore opportunities for selling your
                  dairy products.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Register
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Regular Training Programs</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed">
              Our ongoing training programs are designed to equip young farmers with the skills they need to succeed
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Dairy Management Certificate Program</CardTitle>
                <CardDescription>A 12-week comprehensive training program</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  This flagship program covers all aspects of dairy farm management, from animal health and nutrition to
                  business planning and marketing. Participants receive a recognized certificate upon completion.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Next Intake: September 1, 2023</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>Duration: 12 weeks (2 days per week)</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>Location: NDFN Training Centers (Multiple Locations)</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-700 hover:bg-green-800">Apply Now</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Dairy Entrepreneurship Bootcamp</CardTitle>
                <CardDescription>An intensive 2-week business development program</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Designed for young entrepreneurs looking to start or scale dairy businesses, this bootcamp focuses on
                  business model development, financial planning, and market strategy.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Next Intake: August 15, 2023</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>Duration: 2 weeks (full-time)</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>Location: Kigali Innovation Village</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-700 hover:bg-green-800">Apply Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Request a Custom Training</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Can't find what you're looking for? We can develop customized training programs for groups of young
              farmers.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link href="/contact">
                <Button className="bg-green-700 hover:bg-green-800">
                  Contact Us
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
