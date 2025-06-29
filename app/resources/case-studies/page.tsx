import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function SuccessStoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Inspiring stories of youth-led dairy enterprises making an impact
            </p>
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-4">
                Featured Story
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Milk Marvels Cooperative</h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Founded by a group of five young graduates from the University of Rwanda, Milk Marvels Cooperative has
                transformed dairy farming in the Eastern Province through innovative practices and strong market
                linkages.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Starting with just 10 cows in 2018, the cooperative now manages over 100 cows and processes 2,000 liters
                of milk daily. Their success is attributed to the adoption of modern farming techniques, strategic
                partnerships with processors, and a strong focus on quality.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                "NDFN provided us with the training, mentorship, and market connections we needed to turn our passion
                into a profitable business," says Jean-Claude Mutabazi, the cooperative's chairperson.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-green-700 hover:bg-green-800">
                  Read Full Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Members of Milk Marvels Cooperative with their dairy cows"
                width={800}
                height={600}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">More Success Stories</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed">
              Discover how young farmers are transforming the dairy sector across Rwanda
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Marie Uwimana with her dairy cows"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Marie Uwimana: From Student to Dairy Entrepreneur</CardTitle>
                <CardDescription>Nyagatare District, Eastern Province</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  After completing her studies in veterinary medicine, Marie started a small dairy farm that now
                  produces premium yogurt for local markets.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Read Story
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Tech Dairy Solutions team with their mobile app"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Tech Dairy Solutions: Digitizing Dairy Management</CardTitle>
                <CardDescription>Kigali, Rwanda</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A team of young tech enthusiasts developed a mobile app that helps small-scale dairy farmers track
                  production, manage health records, and access markets.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Read Story
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Gahanga Youth Dairy Cooperative members"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Gahanga Youth Dairy Cooperative</CardTitle>
                <CardDescription>Gahanga Sector, Kicukiro District</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Twenty young farmers pooled their resources to establish a cooperative that now supplies milk to
                  schools and hospitals in Kigali.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Read Story
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Eric Niyonzima in his modern dairy farm"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Eric Niyonzima: Zero-Grazing Innovation</CardTitle>
                <CardDescription>Musanze District, Northern Province</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Eric developed a space-efficient zero-grazing system that allows for dairy farming on small plots of
                  land, making it accessible to youth with limited land resources.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Read Story
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Cheese production at Ingabo Dairy Products"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Ingabo Dairy Products: Value Addition Success</CardTitle>
                <CardDescription>Huye District, Southern Province</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A group of young entrepreneurs established a small-scale cheese production facility, adding value to
                  milk from local farmers and creating a premium product for urban markets.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Read Story
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Claudine Mukeshimana with her award-winning jersey cows"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Claudine Mukeshimana: Breeding Excellence</CardTitle>
                <CardDescription>Rwamagana District, Eastern Province</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Claudine specializes in breeding high-quality jersey cows, providing genetic improvement services to
                  other farmers and contributing to increased milk production in her region.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Read Story
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Share Your Success Story</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Are you a young dairy farmer with a success story to share? We'd love to hear from you and feature your
              story on our website.
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
