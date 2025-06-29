import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function MissionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mission & Vision</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Our guiding principles and aspirations for the future of dairy farming
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                To equip young dairy farmers with the skills, technology, and resources needed to build sustainable,
                productive, and commercially successful dairy enterprises.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                We are committed to transforming dairy farming from a subsistence activity to a professional business
                enterprise by providing structured training, certification, and business support for young farmers.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Through our comprehensive approach, we aim to increase youth participation in dairy farming, promote the
                adoption of modern farming practices, and create a supportive ecosystem for young farmers by fostering
                collaboration, networking, and market linkages.
              </p>
            </div>
            <div className="relative lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Young dairy farmers working together"
                width={800}
                height={600}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative order-last lg:order-first">
              <Image
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Modern dairy farm with innovative technology"
                width={800}
                height={600}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Vision</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                A future where youth drive innovation and growth in the dairy industry, contributing to food security,
                economic prosperity, and environmental sustainability.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                We envision a dairy sector that is characterized by high productivity, efficiency, and profitability,
                where young farmers leverage modern technologies and sustainable practices to build thriving
                enterprises.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                In our vision, dairy farming is recognized as a prestigious and rewarding career choice for youth, with
                clear pathways for professional development and business growth. The sector is a significant contributor
                to Rwanda's economy, providing quality products for domestic consumption and export.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Our Core Values</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed">
              The principles that guide our work and define our organizational culture
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2">Youth Empowerment</h3>
              <p className="text-muted-foreground">
                We believe in the potential of young people to transform the dairy sector and are committed to providing
                them with the tools, knowledge, and opportunities they need to succeed.
              </p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace new ideas, technologies, and approaches that can enhance productivity, efficiency, and
                sustainability in dairy farming.
              </p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                We work closely with partners across sectors to create a supportive ecosystem for young dairy farmers,
                recognizing that collective action is essential for transformative change.
              </p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for the highest standards in all our activities, from the quality of our training programs to
                the impact of our interventions.
              </p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                We promote environmentally sustainable practices in dairy farming and ensure that our interventions have
                lasting positive impacts on farmers, communities, and the environment.
              </p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
              <p className="text-muted-foreground">
                We are committed to ensuring that our programs and services are accessible to all young people
                interested in dairy farming, regardless of their background, gender, or location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Goals Section */}
      <section className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Strategic Goals</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed">
              Our key objectives for the next five years
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2">1. Increase Youth Participation</h3>
              <p className="text-muted-foreground">
                Engage 10,000 young people in dairy farming activities by 2028, with at least 40% being women and 10%
                from marginalized communities.
              </p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2">2. Enhance Productivity</h3>
              <p className="text-muted-foreground">
                Increase the average milk yield per cow among youth-led dairy farms by 50% through the adoption of
                improved breeds, better feeding practices, and modern management techniques.
              </p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2">3. Promote Technology Adoption</h3>
              <p className="text-muted-foreground">
                Facilitate the adoption of at least one modern technology by 70% of young dairy farmers in our network,
                with a focus on digital farm management tools, automated milking systems, and renewable energy
                solutions.
              </p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2">4. Strengthen Market Linkages</h3>
              <p className="text-muted-foreground">
                Establish reliable market connections for 80% of young dairy farmers in our network, ensuring fair
                prices and consistent demand for their products.
              </p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2">5. Improve Access to Finance</h3>
              <p className="text-muted-foreground">
                Facilitate access to appropriate financial services for 60% of young dairy farmers in our network,
                including loans, insurance, and savings products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Mission</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Be part of the movement to transform dairy farming and create opportunities for youth
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link href="/join">
                <Button className="bg-green-700 hover:bg-green-800">
                  Join NDFN
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
