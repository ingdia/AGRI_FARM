import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ValueChainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image src="/images/rwandan-cow-1.png" alt="Rwandan dairy farm" fill className="object-cover" />
          <div className="absolute inset-0 bg-farm-dark/70"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-[800px] space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white text-shadow font-lora">
              Value Chain Challenges and Solutions
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 text-xl">
              Addressing key challenges in the dairy value chain with innovative solutions
            </p>
          </div>
        </div>
      </section>

      {/* Value Chain Overview */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6 slide-in-left">
              <h2 className="text-3xl font-bold tracking-tighter text-farm-dark font-lora">
                Understanding the Dairy Value Chain
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                The dairy value chain encompasses all activities from milk production to consumption, including input
                supply, production, collection, processing, distribution, and marketing of milk and dairy products.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Each stage of the value chain presents unique challenges, particularly for young farmers who often lack
                resources, experience, and connections. NDFN works to address these challenges through targeted
                interventions and innovative solutions.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                By strengthening the entire value chain, we create a more supportive ecosystem for youth in dairy
                farming, enhancing their chances of success and sustainability.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl slide-in-right">
              <Image
                src="/images/rwandan-farm-2.png"
                alt="Rwandan dairy value chain"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover hover-grow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Chain Section */}
      <section className="py-20 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-farm-dark font-lora">
              Challenges and Solutions
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 text-lg">
              Innovative approaches to overcome key barriers in the dairy sector
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-xl hover-grow">
              <CardHeader className="bg-farm-dark text-white">
                <CardTitle className="font-lora">Lack of Land for Dairy Farming</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3 text-farm-dark font-lora">Challenges</h3>
                <p className="text-gray-700 mb-6">
                  Limited access to suitable land for dairy farming, especially for young farmers who are just starting
                  out.
                </p>
                <h3 className="text-lg font-bold mb-3 text-farm-dark font-lora">Solutions</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2 font-bold">1.</span>
                    <span>Promote Zero-Grazing Systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2 font-bold">2.</span>
                    <span>Land Leasing and Cooperatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2 font-bold">3.</span>
                    <span>Vertical Farming Innovations (vertical fodder production systems like hydroponics)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover-grow">
              <CardHeader className="bg-farm-dark text-white">
                <CardTitle className="font-lora">Limited Access to Finance and Market</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3 text-farm-dark font-lora">Challenges</h3>
                <p className="text-gray-700 mb-6">
                  Difficulty accessing affordable financing and reliable markets for dairy products.
                </p>
                <h3 className="text-lg font-bold mb-3 text-farm-dark font-lora">Solutions</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2 font-bold">1.</span>
                    <span>Market Linkages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2 font-bold">2.</span>
                    <span>Dairy Cooperatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2 font-bold">3.</span>
                    <span>Youth-Centered Financial Support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover-grow">
              <CardHeader className="bg-farm-dark text-white">
                <CardTitle className="font-lora">Knowledge and Skills Gaps</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3 text-farm-dark font-lora">Challenges</h3>
                <p className="text-gray-700 mb-6">
                  Lack of technical knowledge and business skills needed for successful dairy farming.
                </p>
                <h3 className="text-lg font-bold mb-3 text-farm-dark font-lora">Solutions</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2 font-bold">1.</span>
                    <span>Farmer Field Schools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2 font-bold">2.</span>
                    <span>Hands-on Training & Advisory</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2 font-bold">3.</span>
                    <span>Entrepreneurship Skills</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover-grow">
              <CardHeader className="bg-farm-dark text-white">
                <CardTitle className="font-lora">Adoption of Modern Technology</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3 text-farm-dark font-lora">Challenges</h3>
                <p className="text-gray-700 mb-6">
                  Slow adoption of modern technologies that could improve productivity and efficiency.
                </p>
                <h3 className="text-lg font-bold mb-3 text-farm-dark font-lora">Solutions</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2 font-bold">1.</span>
                    <span>Technology Demonstration Farms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2 font-bold">2.</span>
                    <span>Subsidies and Grants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2 font-bold">3.</span>
                    <span>Digital solutions (Gemura application)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover-grow">
              <CardHeader className="bg-farm-dark text-white">
                <CardTitle className="font-lora">Milk Storage and Transportation</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3 text-farm-dark font-lora">Challenges</h3>
                <p className="text-gray-700 mb-6">
                  Inadequate facilities for storing and transporting milk, leading to spoilage and quality issues.
                </p>
                <h3 className="text-lg font-bold mb-3 text-farm-dark font-lora">Solutions</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2 font-bold">1.</span>
                    <span>Solar-Powered Cooling Units</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2 font-bold">2.</span>
                    <span>Insulated Transport Systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover-grow">
              <CardHeader className="bg-farm-dark text-white">
                <CardTitle className="font-lora">Lack of Relevant Technologies</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3 text-farm-dark font-lora">Challenges</h3>
                <p className="text-gray-700 mb-6">
                  Limited access to technologies specifically designed for productive dairy farming.
                </p>
                <h3 className="text-lg font-bold mb-3 text-farm-dark font-lora">Solutions</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2 font-bold">1.</span>
                    <span>Breeding Programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2 font-bold">2.</span>
                    <span>Feed Production Technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-farm-dark mr-2 font-bold">3.</span>
                    <span>Data-Driven Decision Support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-2xl slide-in-left order-2 lg:order-1">
              <Image
                src="/images/rwandan-milk-1.png"
                alt="Rwandan dairy products"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover hover-grow"
              />
            </div>
            <div className="space-y-6 slide-in-right order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter text-farm-dark font-lora">
                Success Story: Maraba Dairy Cooperative
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                The Maraba Youth Dairy Cooperative faced challenges with milk storage and market access. Through NDFN's
                support, they were able to:
              </p>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Install a solar-powered milk cooling tank</span>
                </li>
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Establish direct supply contracts with hotels and restaurants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Start producing yogurt and cheese to add value to their milk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-farm-dark mr-2">•</span>
                  <span>Increase member incomes by over 40%</span>
                </li>
              </ul>
              <p className="text-gray-700 text-lg leading-relaxed">
                This success demonstrates how addressing value chain challenges can transform dairy farming from a
                subsistence activity to a profitable business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Approach Section */}
      <section className="py-20 bg-farm-dark text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white font-lora">
              Integrated Approach
            </h2>
            <p className="mx-auto max-w-[700px] text-white/90 text-lg leading-relaxed">
              The NDFN takes an integrated approach to addressing these challenges, working across the entire dairy
              value chain to create sustainable solutions that benefit young farmers.
            </p>
            <p className="mx-auto max-w-[700px] text-white/90 text-lg leading-relaxed">
              By combining technical training, access to finance, market linkages, and policy advocacy, we create a
              supportive ecosystem that enables youth to succeed in dairy farming.
            </p>
            <div className="mt-8">
              <Link href="/join">
                <Button className="bg-white text-farm-dark hover:bg-gray-100 font-lora">Join Our Network</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
