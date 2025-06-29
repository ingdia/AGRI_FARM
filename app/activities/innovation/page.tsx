import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Database, LineChart, Zap } from "lucide-react"

export default function InnovationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Productivity Enhancement through Innovation
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Leveraging technology and innovation to increase dairy farm productivity
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Transforming Dairy Farming through Technology</h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Innovation is at the heart of our approach to enhancing productivity in dairy farming. By introducing
                appropriate technologies and innovative practices, we help young farmers increase milk yields, improve
                quality, and reduce costs.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Our innovation programs focus on solutions that are accessible, affordable, and appropriate for the
                local context. We work with technology providers, research institutions, and young innovators to develop
                and adapt technologies that address the specific challenges faced by dairy farmers in Rwanda.
              </p>
            </div>
            <div className="relative lg:order-last">
              <Image
                src="https://ccafs.cgiar.org/sites/default/files/styles/image_full/public/blog/pictures/30947602551_8dc841d01b_z.jpg?itok=1sbhsquv"
                alt="Farmer using a digital farm management app"
                width={800}
                height={600}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Technologies Section */}
      <section className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Key Technologies</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed">
              Innovative solutions that are transforming dairy farming
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="overflow-hidden">
              <div className="bg-green-100 p-6 flex justify-center">
                <Smartphone className="h-12 w-12 text-green-700" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Digital Farm Management</h3>
                <p className="text-muted-foreground">
                  Mobile applications and software that help farmers track milk production, monitor animal health,
                  manage feeding schedules, and keep financial records.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="bg-green-100 p-6 flex justify-center">
                <Database className="h-12 w-12 text-green-700" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Automated Milking Systems</h3>
                <p className="text-muted-foreground">
                  Technologies that automate the milking process, improving efficiency, reducing labor requirements, and
                  ensuring consistent milk quality.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="bg-green-100 p-6 flex justify-center">
                <LineChart className="h-12 w-12 text-green-700" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Precision Feeding Systems</h3>
                <p className="text-muted-foreground">
                  Technologies that optimize feed formulation and delivery based on individual animal needs, maximizing
                  milk production while minimizing feed costs.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="bg-green-100 p-6 flex justify-center">
                <Zap className="h-12 w-12 text-green-700" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Renewable Energy Solutions</h3>
                <p className="text-muted-foreground">
                  Solar-powered cooling systems, biogas digesters, and other renewable energy technologies that reduce
                  operating costs and environmental impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation Programs Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Innovation Programs</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed">
              How we support the adoption of innovative technologies and practices
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2">Technology Demonstration Farms</h3>
              <p className="text-muted-foreground mb-4">
                We operate demonstration farms where young farmers can see innovative technologies and practices in
                action. These farms serve as learning centers where farmers can gain hands-on experience with new
                technologies before implementing them on their own farms.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Practical demonstrations of technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Training on technology implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance data collection and analysis</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2">Innovation Challenges</h3>
              <p className="text-muted-foreground mb-4">
                We organize innovation challenges that encourage young people to develop solutions to specific problems
                in the dairy sector. Winners receive support to develop and commercialize their innovations.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Problem identification and definition</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mentorship and technical support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Funding for prototype development</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2">Technology Adoption Support</h3>
              <p className="text-muted-foreground mb-4">
                We provide technical and financial support to help young farmers adopt innovative technologies. This
                includes training, subsidies, and access to financing options specifically for technology investments.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Technology needs assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Implementation planning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Post-implementation support</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2">Research Partnerships</h3>
              <p className="text-muted-foreground mb-4">
                We collaborate with research institutions to develop and adapt technologies that are appropriate for
                young dairy farmers in Rwanda. These partnerships ensure that our innovation programs are based on sound
                scientific principles and local realities.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Collaborative research projects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Technology adaptation and localization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Knowledge dissemination</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Success Stories</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed">
              Young farmers who have transformed their operations through innovation
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg overflow-hidden border">
              <div className="relative h-48">
                <Image
                  src="https://www.dpi.nsw.gov.au/__data/assets/image/0007/1595671/AMS-robot-attachment-card-700x500.png"
                  alt="Jean-Pierre Uwimana with his automated milking system"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Jean-Pierre Uwimana: Automated Milking Pioneer</h3>
                <p className="text-muted-foreground mb-4">
                  Jean-Pierre, a young farmer from Nyagatare, implemented an automated milking system that increased his
                  milk yield by 30% and reduced labor costs by 40%. The system also improved milk quality by ensuring
                  consistent milking procedures and hygiene standards.
                </p>
                <p className="text-muted-foreground">
                  "The automated milking system has transformed my farm. I now have more time to focus on other aspects
                  of my business, and the increased milk yield has significantly improved my income." - Jean-Pierre
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Marie Mukeshimana using a digital farm management app"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Marie Mukeshimana: Digital Farm Management</h3>
                <p className="text-muted-foreground mb-4">
                  Marie, a dairy farmer from Rwamagana, adopted a digital farm management app that helped her track
                  individual cow performance, optimize feeding, and manage health records. The app has helped her
                  increase milk production by 25% and reduce feed costs by 15%.
                </p>
                <p className="text-muted-foreground">
                  "The digital farm management app has given me insights into my farm that I never had before. I can now
                  make data-driven decisions that have improved my farm's performance and profitability." - Marie
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
