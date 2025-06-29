import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Calculator, Lightbulb, Users } from "lucide-react"

export default function CapacityBuildingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*F3RtgM3b6Ifg2F7a3QJgpQ.jpeg"
            alt="Rwandan dairy farmers in training"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-farm-dark/70"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-[800px] space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white text-shadow font-lora">
              Capacity Building & Professional Development
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 text-xl">
              Equipping young dairy farmers with the knowledge and skills they need to succeed
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6 slide-in-left">
              <h2 className="text-3xl font-bold tracking-tighter text-farm-dark font-lora">
                Building the Next Generation of Dairy Professionals
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our capacity building and professional development programs are designed to transform young dairy
                farmers into skilled professionals and successful entrepreneurs.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Through a combination of theoretical training, practical experience, and mentorship, we equip youth with
                the technical, business, and entrepreneurial skills they need to build profitable and sustainable dairy
                enterprises.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our comprehensive approach addresses all aspects of dairy farming, from animal husbandry and milk
                production to business management and market access, ensuring that young farmers have the complete skill
                set needed for success.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl slide-in-right">
              <Image
                src="https://www.enabel.be/app/uploads/2022/07/Headers-website-2-1.jpg"
                alt="Young farmers in a training session"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover hover-grow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Programs Section */}
      <section className="py-20 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-farm-dark font-lora">Key Programs</h2>
            <p className="mx-auto max-w-[700px] text-gray-700 text-lg">
              Our comprehensive approach to capacity building includes four key program areas
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="overflow-hidden border-0 shadow-xl hover-grow">
              <div className="bg-farm-dark p-6 flex justify-center">
                <BookOpen className="h-12 w-12 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-farm-dark font-lora">
                  Dairy Management Certification Program
                </h3>
                <p className="text-gray-700">
                  Training young farmers on best practices in breeding, feeding, disease prevention, and milk quality
                  standards to ensure they have the technical skills needed for successful dairy farming.
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2">•</span>
                    <span>Animal health and nutrition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2">•</span>
                    <span>Milk production and quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2">•</span>
                    <span>Breeding and genetics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl hover-grow">
              <div className="bg-farm-dark p-6 flex justify-center">
                <Calculator className="h-12 w-12 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-farm-dark font-lora">
                  Farm Business and Financial Literacy Training
                </h3>
                <p className="text-gray-700">
                  Helping farmers manage costs, optimize operations, and improve profitability through financial
                  planning, record-keeping, and business management skills.
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2">•</span>
                    <span>Financial record keeping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2">•</span>
                    <span>Cost management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2">•</span>
                    <span>Business planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl hover-grow">
              <div className="bg-farm-dark p-6 flex justify-center">
                <Lightbulb className="h-12 w-12 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-farm-dark font-lora">
                  Entrepreneurship & Dairy Agribusiness Acceleration
                </h3>
                <p className="text-gray-700">
                  Supporting youth to build and scale dairy enterprises through entrepreneurship training, business plan
                  development, and market strategy formulation.
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2">•</span>
                    <span>Business model development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2">•</span>
                    <span>Marketing strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2">•</span>
                    <span>Growth planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl hover-grow">
              <div className="bg-farm-dark p-6 flex justify-center">
                <Users className="h-12 w-12 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-farm-dark font-lora">Workforce Development</h3>
                <p className="text-gray-700">
                  Encouraging youth to take on specialized roles in dairy processing, logistics, and agritech
                  development to create a skilled workforce for the entire dairy value chain.
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2">•</span>
                    <span>Specialized technical training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2">•</span>
                    <span>Job placement support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2">•</span>
                    <span>Career development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Approach Section */}
      <section className="py-20 bg-farm-dark text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white font-lora">
              Our Training Approach
            </h2>
            <p className="mx-auto max-w-[700px] text-white/90 text-lg">
              We use a blend of theoretical and practical training methods to ensure effective learning
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-farm-medium rounded-xl shadow-lg p-6 hover-grow">
              <h3 className="text-xl font-bold mb-3 text-white font-lora">Classroom Training</h3>
              <p className="text-white/90">
                Structured courses on dairy management, animal health, nutrition, and business skills delivered by
                industry experts and experienced trainers.
              </p>
            </div>
            <div className="bg-farm-medium rounded-xl shadow-lg p-6 hover-grow">
              <h3 className="text-xl font-bold mb-3 text-white font-lora">Hands-on Practical Experience</h3>
              <p className="text-white/90">
                On-farm training and demonstrations that allow participants to apply what they've learned in real-world
                settings.
              </p>
            </div>
            <div className="bg-farm-medium rounded-xl shadow-lg p-6 hover-grow">
              <h3 className="text-xl font-bold mb-3 text-white font-lora">Mentorship</h3>
              <p className="text-white/90">
                Pairing young farmers with experienced dairy professionals who provide guidance, advice, and support
                throughout their journey.
              </p>
            </div>
            <div className="bg-farm-medium rounded-xl shadow-lg p-6 hover-grow">
              <h3 className="text-xl font-bold mb-3 text-white font-lora">Peer Learning</h3>
              <p className="text-white/90">
                Creating opportunities for young farmers to learn from each other, share experiences, and collaborate on
                solutions to common challenges.
              </p>
            </div>
            <div className="bg-farm-medium rounded-xl shadow-lg p-6 hover-grow">
              <h3 className="text-xl font-bold mb-3 text-white font-lora">Digital Learning</h3>
              <p className="text-white/90">
                Online courses, webinars, and mobile learning applications that make training accessible to youth in
                remote areas.
              </p>
            </div>
            <div className="bg-farm-medium rounded-xl shadow-lg p-6 hover-grow">
              <h3 className="text-xl font-bold mb-3 text-white font-lora">Field Visits</h3>
              <p className="text-white/90">
                Organized visits to successful dairy farms, processing facilities, and research institutions to expose
                youth to best practices and innovations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-2xl slide-in-left">
              <Image
                src="https://oneacrefund.org/sites/default/files/styles/cta_desktop/public/2022-11/RWA_8175%20%281%29.jpg?h=0f5d0d81&itok=H3Oa01UY"
                alt="Young Rwandan dairy farmer"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover hover-grow"
              />
            </div>
            <div className="space-y-6 slide-in-right">
              <h2 className="text-3xl font-bold tracking-tighter text-farm-dark font-lora">
                Success Story: Jean-Claude's Journey
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Jean-Claude Niyonzima joined NDFN's Dairy Management Certification Program with just one cow and limited
                knowledge of modern dairy practices. Through our comprehensive training, he learned:
              </p>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Improved feeding techniques that doubled his cow's milk production</span>
                </li>
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Disease prevention strategies that reduced veterinary costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Business management skills that helped him reinvest profits</span>
                </li>
              </ul>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, Jean-Claude owns five cows, employs two young assistants, and has become a mentor to other youth
                in his community. His story demonstrates how capacity building can transform lives and create ripple
                effects throughout the dairy value chain.
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
              Ready to Build Your Skills?
            </h2>
            <p className="mx-auto max-w-[700px] text-white/90 text-xl">
              Join our capacity building programs and start your journey to becoming a successful dairy professional
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
