import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Users, TrendingUp, Globe } from "lucide-react"

export default function MarketAccessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Market Access & Value Chain Development
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Connecting young dairy farmers to reliable markets and strengthening value chains
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Ensuring Reliable Markets for Young Farmers</h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Access to reliable markets is essential for the success of young dairy farmers. Without assured markets,
                even the most productive farms struggle to generate sustainable income and grow their businesses.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Our market access programs focus on connecting young farmers to processors, retailers, and consumers,
                ensuring fair prices and consistent demand for their products. We also work to strengthen the entire
                dairy value chain, addressing bottlenecks and creating opportunities for value addition.
              </p>
            </div>
            <div className="relative lg:order-last">
              <Image
                src="https://foodtank.com/wp-content/uploads/2016/01/12122698_986458064753729_5749487298006158601_n-770x516.jpg"
                alt="Farmer delivering milk to a collection center"
                width={800}
                height={600}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Market Access Strategies Section */}
      <section className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Market Access Strategies</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed">
              Our approach to connecting young farmers with markets
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="overflow-hidden">
              <div className="bg-green-100 p-6 flex justify-center">
                <Users className="h-12 w-12 text-green-700" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Cooperative Formation</h3>
                <p className="text-muted-foreground">
                  We support young farmers in forming and strengthening cooperatives that can aggregate milk, negotiate
                  better prices, and access larger markets that individual farmers cannot reach on their own.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="bg-green-100 p-6 flex justify-center">
                <ShoppingCart className="h-12 w-12 text-green-700" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Buyer Linkages</h3>
                <p className="text-muted-foreground">
                  We facilitate connections between young farmers and reliable buyers, including processors, retailers,
                  hotels, schools, and hospitals, often through formal offtake agreements.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="bg-green-100 p-6 flex justify-center">
                <TrendingUp className="h-12 w-12 text-green-700" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Value Addition</h3>
                <p className="text-muted-foreground">
                  We support young farmers in adding value to their milk through processing into products like yogurt,
                  cheese, and butter, which can fetch higher prices and access different market segments.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="bg-green-100 p-6 flex justify-center">
                <Globe className="h-12 w-12 text-green-700" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
                <p className="text-muted-foreground">
                  We help young farmers leverage digital platforms to market their products directly to consumers,
                  bypassing intermediaries and capturing more value from the supply chain.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Chain Development Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Value Chain Development</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed">
              Strengthening the entire dairy value chain to create opportunities for young farmers
            </p>
          </div>
          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Collection Centers</h3>
                <p className="text-muted-foreground">
                  We support the establishment and upgrading of milk collection centers that serve as aggregation points
                  for milk from small-scale farmers. These centers are equipped with cooling facilities to maintain milk
                  quality and serve as hubs for other services such as input supply and extension.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Quality testing and grading</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Cooling and storage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Transport coordination</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Milk collection center with cooling tanks"
                  width={600}
                  height={400}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="relative order-last md:order-first">
                <Image
                  src="https://www.spartancontrols.com/website/media/impact-partner/Industries/Oil%20Sands/CentralProcessingFacility_T-M.jpg"
                  alt="Small-scale dairy processing unit"
                  width={600}
                  height={400}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Processing Facilities</h3>
                <p className="text-muted-foreground">
                  We support the development of small and medium-scale processing facilities that can transform raw milk
                  into value-added products. These facilities create additional market opportunities for farmers and
                  capture more value within local communities.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Yogurt and cheese production</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Packaging and branding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Quality assurance systems</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Distribution Networks</h3>
                <p className="text-muted-foreground">
                  We work to strengthen distribution networks that connect dairy farmers and processors with retailers
                  and consumers. This includes supporting the development of cold chains, transport systems, and retail
                  partnerships.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Cold chain development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Transport coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Retail partnerships</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="https://www.spartancontrols.com/website/media/impact-partner/Industries/Oil%20Sands/CentralProcessingFacility_T-M.jpg"
                  alt="Refrigerated transport for dairy products"
                  width={600}
                  height={400}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
