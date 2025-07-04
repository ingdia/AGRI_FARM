import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://www.wfp.org/sites/default/files/styles/media_embed/public/2021-12/For%20Story%202a.jpg?itok=5zCCQ4Q4"
            alt="Rwandan dairy farm"
            fill
            className="object-cover fixed"
          />
          <div className="absolute inset-0 bg-farm-dark/70"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-[800px] space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white text-shadow font-lora">
              About NDFN
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 text-xl">
              Transforming the dairy sector by empowering the next generation of
              farmers
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6 slide-in-left">
              <h2 className="text-3xl font-bold tracking-tighter text-farm-dark font-lora">
                Our Story
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Livestock farming is a vital component of the agricultural
                sector, contributing significantly to food security, economic
                growth, and rural livelihoods. However, the sector faces
                numerous challenges, including low productivity, limited access
                to finance and technology, and a lack of skilled labor.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                To address these challenges and unlock the full potential of
                livestock farming, it is essential to promote modernization,
                innovation, and youth engagement.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                The NexGen Dairy Farmers Network (NDFN) is a youth-focused
                initiative designed to transform the dairy sector by empowering
                young farmers with the knowledge, skills, and resources they
                need to succeed. By providing training, mentorship, and access
                to finance, the NDFN aims to increase youth participation in
                dairy farming and promote the adoption of modern farming
                practices.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                The NDFN also works to create a supportive ecosystem for young
                farmers by fostering collaboration, networking, and market
                linkages.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl slide-in-right">
              <Image
                src="https://media.istockphoto.com/id/471497123/photo/the-famous-rwandan-royal-cows.jpg?s=612x612&w=0&k=20&c=_vb42E7PL5cBUAnb-1IwUZvklrP9vhQDliaL4em8E44="
                alt="Rwandan dairy cow"
                width={600}
                height={400}
                className="w-full h-[500px] object-cover hover-grow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section
        className="relative py-20 text-white bg-fixed bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://foodtank.com/wp-content/uploads/2022/12/U.N.-Decade-of-Family-Farming-UNDFF-small-scale-farmers-FAO_social.png')", // Make sure this image is inside your /public/images/ folder
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        {/* Content */}
        <div className="relative z-10 container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="bg-white/10 p-8 rounded-full shadow-lg backdrop-blur-sm scale-in text-center">
              <h3 className="text-2xl font-bold mb-4 font-lora">Mission</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                To equip young dairy farmers with the skills, technology, and
                resources needed to build sustainable, productive, and
                commercially successful dairy enterprises.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-full shadow-lg backdrop-blur-sm scale-in text-center">
              <h3 className="text-2xl font-bold mb-4 font-lora">Vision</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                A future where youth drive innovation and growth in the dairy
                industry, contributing to food security, economic prosperity,
                and environmental sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Core Values Section */}
<section className="py-20 bg-farm-dark">
  <div className="container px-4 md:px-6">
    <div className="mx-auto max-w-[800px] space-y-6 text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white font-lora animate-fade-down">
        Core Values
      </h2>
      <p className="mx-auto max-w-[700px] text-white text-lg animate-fade-down delay-100">
        The principles that guide our work and relationships
      </p>
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        { title: "Innovation", desc: "Embracing new ideas, technologies, and approaches to transform dairy farming." },
        { title: "Sustainability", desc: "Promoting practices that are environmentally responsible and economically viable." },
        { title: "Inclusivity", desc: "Creating opportunities for all youth, regardless of background or resources." },
        { title: "Excellence", desc: "Striving for the highest standards in all aspects of dairy farming and business." },
        { title: "Collaboration", desc: "Working together with partners, stakeholders, and communities to achieve shared goals." },
        { title: "Empowerment", desc: "Building the capacity of young farmers to take control of their own development." },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-gray-200 rounded-xl border border-gray-200 shadow-lg p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <h3 className="text-xl font-bold mb-2 text-farm-dark font-lora">{item.title}</h3>
          <p className="text-gray-700">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-farm-dark font-lora">
              Our Impact
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 text-lg">
              See how we're transforming dairy farming across Rwanda
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[250px] hover-grow">
              <Image
                src="https://www.pih.org/sites/default/files/styles/article_xlarge/public/2023-07/Rwanda_20230606_GreenHouse_AHabinshuti081.jpg?itok=qtM1iOZU"
                alt="Young Rwandan dairy farmer"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[250px] hover-grow">
              <Image
                src="https://media.istockphoto.com/id/473607510/photo/mixed-breed-cattle-ankole-hostein-and-jersey-rwanda-africa.jpg?s=612x612&w=0&k=20&c=6E8HRhg5xUnMn0DTpUM7Cdi2PzsS93GuRDGFNtDQNqM="
                alt="Rwandan dairy cow"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[250px] hover-grow">
              <Image
                src="https://furtherafrica.com/content-files/uploads/2017/06/milk.jpg"
                alt="Rwandan dairy products"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[250px] md:col-span-2 hover-grow">
              <Image
                src="https://www.worldbank.org/content/dam/photos/780x439/2019/nov-2/from-subsistence-to-commercial-farming-in-rwanda-780x439.jpg"
                alt="Rwandan dairy farm"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[250px] hover-grow">
              <Image
                src="https://www.fh.org/wp-content/uploads/2023/08/2023.02_Rwanda_UPSCALE-PROJECT_MUSENGIMANA-Jean-Marie_008.jpg"
                alt="Rwandan dairy farmer with cattle"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-farm-light text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white font-lora">
              Ready to Join Us?
            </h2>
            <p className="mx-auto max-w-[700px] text-white/90 text-xl">
              Become part of the NexGen Dairy Farmers Network and help shape the
              future of dairy farming
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link href="/join">
                <Button className="bg-white text-farm-dark hover:bg-gray-100 font-lora">
                  Join NDFN
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white text-white bg-white/10 font-lora"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
