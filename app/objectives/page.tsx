import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, BarChart3, Lightbulb, DollarSign, Globe, Leaf } from "lucide-react"

export default function ObjectivesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image src="/images/cows-field-1.png" alt="Rwandan dairy farm" fill className="object-cover" />
          <div className="absolute inset-0 bg-farm-dark/70"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-[800px] space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white text-shadow font-lora">
              Our Objectives
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 text-xl">
              Six key goals driving the NexGen Dairy Farmers Network
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 hover-grow slide-up">
              <div className="flex items-center mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-farm-dark text-white mr-4">
                  <Award className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-farm-dark font-lora">Professionalizing Dairy Farming</h2>
              </div>
              <p className="text-gray-700 text-lg mb-6">
                Providing structured training, certification, and business support for young farmers to transform dairy
                farming from a subsistence activity to a professional business enterprise.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Standardized training curriculum</span>
                </li>
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Professional certification programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Business development support</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 hover-grow slide-up">
              <div className="flex items-center mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-farm-dark text-white mr-4">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-farm-dark font-lora">Increasing Productivity and Efficiency</h2>
              </div>
              <p className="text-gray-700 text-lg mb-6">
                Implementing modern dairy management techniques, smart feeding systems, and precision breeding to
                maximize output while minimizing resource use.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Modern dairy management practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Smart feeding systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Precision breeding techniques</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 hover-grow slide-up">
              <div className="flex items-center mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-farm-dark text-white mr-4">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-farm-dark font-lora">Promoting Technology Adoption</h2>
              </div>
              <p className="text-gray-700 text-lg mb-6">
                Encouraging the use of automated milking systems, AI-powered herd monitoring, and digital farm
                management tools to enhance productivity and reduce labor requirements.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Automated milking systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>AI-powered herd monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Digital farm management tools</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 hover-grow slide-up">
              <div className="flex items-center mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-farm-dark text-white mr-4">
                  <DollarSign className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-farm-dark font-lora">Facilitating Access to Finance</h2>
              </div>
              <p className="text-gray-700 text-lg mb-6">
                Connecting youth-led dairy enterprises with financial institutions, cooperatives, and impact investors
                to secure the capital needed for growth and innovation.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Partnerships with financial institutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Cooperative financing models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Impact investment opportunities</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 hover-grow slide-up">
              <div className="flex items-center mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-farm-dark text-white mr-4">
                  <Globe className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-farm-dark font-lora">Strengthening Value Chain Integration</h2>
              </div>
              <p className="text-gray-700 text-lg mb-6">
                Linking young farmers to processors, retailers, and export markets to ensure consistent demand and fair
                pricing for their products.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Processor partnerships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Retail market access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Export market development</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 hover-grow slide-up">
              <div className="flex items-center mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-farm-dark text-white mr-4">
                  <Leaf className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-farm-dark font-lora">Supporting Sustainable Practices</h2>
              </div>
              <p className="text-gray-700 text-lg mb-6">
                Promoting climate-smart dairy practices to enhance resilience to climate change and reduce the
                environmental footprint of dairy farming.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Climate-smart dairy techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Waste management solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Renewable energy integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-farm-dark font-lora">Our Impact</h2>
            <p className="mx-auto max-w-[700px] text-gray-700 text-lg">
              Through our objectives, we're creating a sustainable and profitable dairy sector led by the next
              generation of farmers
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[300px] hover-grow">
              <Image
                src="/people.png"
                alt="Young farmers receiving training"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-farm-dark/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-bold text-center px-4">Professional Development</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[300px] hover-grow">
              <Image
                src="/images/technology-cows.png"
                alt="Modern dairy farm with technology"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-farm-dark/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-bold text-center px-4">Technology Adoption</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[300px] hover-grow">
              <Image
                src="/images/Production-milk.png"
                alt="Farmers at a market selling dairy products"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-farm-dark/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-bold text-center px-4">Market Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-farm-dark text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white font-lora">
              Ready to Transform Dairy Farming?
            </h2>
            <p className="mx-auto max-w-[700px] text-white/90 text-xl">
              Join us in our mission to revolutionize the dairy sector through youth empowerment
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