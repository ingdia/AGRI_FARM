import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Lightbulb, Tractor } from "lucide-react"

export default function TargetAudiencePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image src="/images/youth-hands.png" alt="Young Rwandan dairy farmers" fill className="object-cover" />
          <div className="absolute inset-0 bg-farm-dark/70"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-[800px] space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white text-shadow font-lora">
              Target Audience
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 text-xl">
              The NDFN focuses on youth aged 18-35 years who are passionate about dairy farming
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="overflow-hidden border-0 shadow-xl hover-grow">
              <div className="bg-farm-dark p-6 flex justify-center">
                <Tractor className="h-12 w-12 text-white" />
              </div>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-3 text-farm-dark font-lora">Existing Small-Scale Dairy Farmers</h2>
                <p className="text-gray-700">
                  Young farmers who are already engaged in dairy farming but are looking to scale their operations,
                  improve productivity, and increase profitability.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl hover-grow">
              <div className="bg-farm-dark p-6 flex justify-center">
                <GraduationCap className="h-12 w-12 text-white" />
              </div>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-3 text-farm-dark font-lora">Students and Graduates</h2>
                <p className="text-gray-700">
                  Young people with education in agriculture, veterinary sciences, and agribusiness who are interested
                  in applying their knowledge to dairy farming.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl hover-grow">
              <div className="bg-farm-dark p-6 flex justify-center">
                <Lightbulb className="h-12 w-12 text-white" />
              </div>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-3 text-farm-dark font-lora">Aspiring Dairy Entrepreneurs</h2>
                <p className="text-gray-700">
                  Youth who are looking to enter the dairy sector as entrepreneurs, creating innovative business models
                  and value-added products.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl hover-grow">
              <div className="bg-farm-dark p-6 flex justify-center">
                <Users className="h-12 w-12 text-white" />
              </div>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-3 text-farm-dark font-lora">Technology Innovators</h2>
                <p className="text-gray-700">
                  Young tech enthusiasts working on smart dairy solutions, digital platforms, and other innovations that
                  can transform the dairy sector.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Youth Cooperatives Section */}
     <section className="py-20 bg-gray-100 px-4 md:px-6">
  <div className="max-w-4xl mx-auto text-center">
    <div className="space-y-6 slide-in-left">
      <h2 className="text-3xl font-bold tracking-tighter text-farm-dark font-lora">
        Youth Cooperatives and Startups
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        The NDFN also supports youth cooperatives and dairy business startups that require technical and
        financial support to establish and grow their operations.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed">
        By working together in cooperatives, young farmers can pool resources, share knowledge, and access
        markets more effectively. This collaborative approach helps overcome the challenges of limited land,
        capital, and experience that individual youth often face.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed">
        NDFN provides specialized support to these groups, including organizational development, governance
        training, and cooperative business management.
      </p>
    </div>
  </div>
</section>


      {/* Why Youth Section */}
      <section className="py-20 bg-farm-dark text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white font-lora">
              Why Focus on Youth?
            </h2>
            <p className="mx-auto max-w-[700px] text-white/80 text-lg">
              Youth are the future of agriculture and have the potential to transform the dairy sector
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-farm-medium rounded-xl shadow-lg p-6 hover-grow">
              <h3 className="text-xl font-bold mb-3 text-white font-lora">Innovation & Adaptability</h3>
              <p className="text-white/90">
                Young people are more likely to embrace new technologies and innovative approaches to dairy farming,
                driving modernization in the sector.
              </p>
            </div>
            <div className="bg-farm-medium rounded-xl shadow-lg p-6 hover-grow">
              <h3 className="text-xl font-bold mb-3 text-white font-lora">Long-term Sustainability</h3>
              <p className="text-white/90">
                Investing in youth ensures the long-term sustainability of the dairy sector, as they will carry forward
                and build upon the knowledge and practices developed.
              </p>
            </div>
            <div className="bg-farm-medium rounded-xl shadow-lg p-6 hover-grow">
              <h3 className="text-xl font-bold mb-3 text-white font-lora">Employment Creation</h3>
              <p className="text-white/90">
                Youth engagement in dairy farming creates employment opportunities not only for the farmers themselves
                but also along the entire value chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section
  className="relative py-20 text-white bg-fixed bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/cow-beside-milk.png')", // Replace with a suitable image path
  }}
>
  {/* Dark overlay */}
  <div className="absolute bg-black bg-opacity-80 inset-0 z-0"></div>

  {/* Content */}
  <div className="relative z-10 container px-4 md:px-6">
    <div className="mx-auto max-w-[800px] text-center space-y-6 mb-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white font-lora">
        Success Stories
      </h2>
      <p className="text-white/90 text-lg">
        Meet some of the young farmers who have benefited from NDFN's programs
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2">
      {/* Card 1 */}
      <div className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-sm text-center transform transition-all duration-500 hover:scale-105 hover:bg-white/15 hover:shadow-3xl">
        <div className="flex items-center justify-center mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="https://www.iied.org/sites/default/files/styles/scale_md/public/images/2013/03/06/Rwanda_farmer_0.jpg"
              alt="Young dairy farmer"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <h4 className="text-lg font-bold text-white font-lora">
          Emmanuel Niyonkuru
        </h4>
        <p className="text-white/80 mb-4">Dairy Entrepreneur, Nyagatare</p>
        <p className="text-white/90 italic">
          "NDFN's training program gave me the skills and confidence to expand my dairy farm from 2 to 8 cows. The business management training was particularly valuable, helping me to track costs and maximize profits."
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-sm text-center transform transition-all duration-500 hover:scale-105 hover:bg-white/15 hover:shadow-3xl">
        <div className="flex items-center justify-center mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="https://alliancebioversityciat.org/sites/default/files/styles/1920_scale/public/images/rwanda-alliance-bioversity-international-ciat.jpg?itok=-5QpFyLt"
              alt="Young dairy farmer"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <h4 className="text-lg font-bold text-white font-lora">
          Claudine Mukamana
        </h4>
        <p className="text-white/80 mb-4">Dairy Technologist, Musanze</p>
        <p className="text-white/90 italic">
          "As a veterinary graduate, I wanted to apply my knowledge in the dairy sector. NDFN connected me with a mentor and helped me secure financing to start a mobile veterinary service for dairy farmers in my region."
        </p>
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 bg-farm-light text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white font-lora">
              Are You Our Next Success Story?
            </h2>
            <p className="mx-auto max-w-[700px] text-white/90 text-xl">
              Join the NexGen Dairy Farmers Network and start your journey to success in dairy farming
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link href="/join">
                <Button className="bg-white text-farm-dark hover:bg-gray-100 font-lora">Join NDFN</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white bg-white/10 font-lora">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}