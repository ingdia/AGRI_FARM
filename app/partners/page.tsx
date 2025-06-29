import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function PartnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Partners</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Collaborating with organizations across sectors to transform dairy farming
            </p>
          </div>
        </div>
      </section>

      {/* Partners Overview */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Collaborative Approach</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed">
              The NexGen Dairy Farmers Network (NDFN) works with a diverse range of partners to create a supportive
              ecosystem for young dairy farmers. Our partners include government agencies, financial institutions,
              academic and research institutions, private sector companies, and development organizations.
            </p>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed">
              Through these partnerships, we are able to provide comprehensive support to young farmers, from training
              and mentorship to market access and financing.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Our Partner Network</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed">
              Meet the organizations that make our work possible
            </p>
          </div>

          {/* Government Partners */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Government Partners</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <div className="p-6 flex justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80"
                    alt="Ministry of Agriculture and Animal Resources"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Ministry of Agriculture and Animal Resources</CardTitle>
                  <CardDescription>Government of Rwanda</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Provides policy support, technical guidance, and resources for the development of the dairy sector.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <div className="p-6 flex justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80"
                    alt="Rwanda Agriculture and Animal Resources Development Board"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Rwanda Agriculture and Animal Resources Development Board</CardTitle>
                  <CardDescription>RAB</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Provides technical support, research, and extension services to dairy farmers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <div className="p-6 flex justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80"
                    alt="Ministry of Youth and Culture"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Ministry of Youth and Culture</CardTitle>
                  <CardDescription>Government of Rwanda</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Supports youth engagement in agriculture and provides resources for youth-led initiatives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Financial Partners */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Financial Partners</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <div className="p-6 flex justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80"
                    alt="Bank of Kigali"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Bank of Kigali</CardTitle>
                  <CardDescription>Financial Institution</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Provides financial services and loan products specifically designed for young farmers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <div className="p-6 flex justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80"
                    alt="Business Development Fund"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Business Development Fund</CardTitle>
                  <CardDescription>BDF</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Provides guarantees, grants, and advisory services to young entrepreneurs in the dairy sector.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <div className="p-6 flex justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80"
                    alt="Rwanda Development Bank"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Rwanda Development Bank</CardTitle>
                  <CardDescription>BRD</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Offers long-term financing for agricultural projects, including dairy farming initiatives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Academic and Research Partners */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Academic and Research Partners</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <div className="p-6 flex justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80"
                    alt="University of Rwanda"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle>University of Rwanda</CardTitle>
                  <CardDescription>College of Agriculture, Animal Sciences and Veterinary Medicine</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Collaborates on research, training, and extension services for dairy farming.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <div className="p-6 flex justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80"
                    alt="Rwanda Polytechnic"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Rwanda Polytechnic</CardTitle>
                  <CardDescription>IPRC Musanze</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Provides technical training and skills development for young dairy farmers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <div className="p-6 flex justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80"
                    alt="International Livestock Research Institute"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle>International Livestock Research Institute</CardTitle>
                  <CardDescription>ILRI</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Collaborates on research and innovation in dairy farming practices and technologies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Private Sector Partners */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Private Sector Partners</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <div className="p-6 flex justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80"
                    alt="Inyange Industries"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Inyange Industries</CardTitle>
                  <CardDescription>Dairy Processor</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Provides market access for young dairy farmers and supports quality improvement initiatives.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <div className="p-6 flex justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80"
                    alt="Rwanda Dairy Development Project"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Rwanda Dairy Development Project</CardTitle>
                  <CardDescription>RDDP</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Supports the development of the dairy value chain and provides resources for young farmers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <div className="p-6 flex justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80"
                    alt="AgriTech Rwanda"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle>AgriTech Rwanda</CardTitle>
                  <CardDescription>Technology Provider</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Provides digital solutions and technology support for dairy farm management and market access.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Become a Partner</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              We are always looking for new partners who share our vision of transforming the dairy sector through youth
              engagement. If your organization is interested in partnering with NDFN, please get in touch.
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
