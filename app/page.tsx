"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronRight,
  Award,
  Lightbulb,
  BarChart3,
  Leaf,
  Globe,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const heroImages: string[] = [
    "https://i.pinimg.com/1200x/14/58/b8/1458b8c0998873b2b971b59399e2bf47.jpg",
    "https://i.pinimg.com/1200x/0e/e7/c4/0ee7c41463fc0789a51e1f624be74af0.jpg",
    "https://i.pinimg.com/1200x/14/58/b8/1458b8c0998873b2b971b59399e2bf47.jpg",
    "https://i.pinimg.com/1200x/8b/30/d1/8b30d19b4095c0e4a0eca970eff7aeec.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          {heroImages.map((src: string, index: number) => (
            <Image
              key={index}
              src={src}
              alt={`Hero background ${index + 1}`}
              fill
              priority={index === 0}
              className={`object-cover transition-opacity duration-1000 ease-in absolute inset-0 ${
                index === currentImageIndex
                  ? "opacity-100 z-0"
                  : "opacity-0 z-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-farm-dark/70 z-10"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10 flex">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6 fade-in">
              <div className="inline-block rounded-lg bg-white/10 backdrop-blur-sm px-3 py-1 text-sm text-white mb-4 ">
                Youth-Focused Initiative
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white text-shadow">
                NexGen Dairy Farmers Network
              </h1>
              <p className="text-xl text-white/90 md:text-2xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
                Empowering Youth in Dairy Farming through Professionalization,
                Technology, and Market Access
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link href="/about">
                  <Button className="bg-white text-farm-dark hover:bg-gray-100 font-lora">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/join">
                  <Button
                    variant="outline"
                    className="border-white text-white bg-white/10 font-lora"
                  >
                    Join the Network
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 lg:mt-0 max-w-md mx-auto">
            <div className="grid grid-cols-2 gap-x-8 mt-8 lg:mt-0 max-w-md mx-auto">
              <div className="flex flex-col gap-3 spcace-y-20">
                <div className="relative w-[100px] h-[100px]">
                  <Image
                    src="https://i.pinimg.com/1200x/4c/8d/1c/4c8d1cd7fcd518a2ce41418bfaa907e3.jpg"
                    alt="Image1"
                    fill
                    className="object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative w-[200px] h-[300px]">
                  <Image
                    src="https://i.pinimg.com/1200x/8b/30/d1/8b30d19b4095c0e4a0eca970eff7aeec.jpg"
                    alt="Image2"
                    fill
                    className="object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
              </div>

              <div className="flex flex-col gap-4">
                <div className="relative w-[300px] h-[200px]">
                  <Image
                    src="https://i.pinimg.com/1200x/0e/e7/c4/0ee7c41463fc0789a51e1f624be74af0.jpg"
                    alt="Image3"
                    fill
                    className="object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative w-[150px] h-[250px]">
                  <Image
                    src="https://i.pinimg.com/1200x/14/58/b8/1458b8c0998873b2b971b59399e2bf47.jpg"
                    alt="Image4"
                    fill
                    className="object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a title="title" href="#introduction" className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6 slide-in-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-farm-dark font-lora">
                Transforming Livestock Farming
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Livestock farming is a vital component of the agricultural
                sector, contributing significantly to food security, economic
                growth, and rural livelihoods. However, the sector faces
                numerous challenges, including low productivity, limited access
                to finance and technology, and a lack of skilled labor.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The NexGen Dairy Farmers Network (NDFN) is a youth-focused
                initiative designed to transform the dairy sector by empowering
                young farmers with the knowledge, skills, and resources they
                need to succeed.
              </p>
              <Link href="/about">
                <Button className="bg-farm-dark hover:bg-farm-medium mt-4 font-lora">
                  About Our Initiative
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl slide-in-right">
              <Image
                src="https://africa.cgtn.com/wp-content/uploads/2023/06/COWS.png"
                alt="Rwandan dairy farm"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover hover-grow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-farm-dark text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="bg-farm-medium p-8 rounded-xl shadow-lg scale-in">
              <h3 className="text-2xl font-bold mb-4 font-lora">Mission</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                To equip young dairy farmers with the skills, technology, and
                resources needed to build sustainable, productive, and
                commercially successful dairy enterprises.
              </p>
            </div>
            <div className="bg-farm-medium p-8 rounded-xl shadow-lg scale-in">
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

      {/* Objectives Preview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center mb-16 slide-up">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-farm-dark font-lora">
              Our Objectives
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 text-lg">
              We aim to revolutionize the dairy sector through six key
              objectives
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 hover-grow">
              <Award className="h-10 w-10 text-farm-dark mb-4" />
              <h3 className="text-xl font-bold mb-3 text-farm-dark font-lora">
                Professionalizing Dairy Farming
              </h3>
              <p className="text-gray-700">
                Providing structured training, certification, and business
                support for young farmers.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 hover-grow">
              <BarChart3 className="h-10 w-10 text-farm-dark mb-4" />
              <h3 className="text-xl font-bold mb-3 text-farm-dark font-lora">
                Increasing Productivity
              </h3>
              <p className="text-gray-700">
                Enhancing efficiency through modern dairy management, smart
                feeding systems, and precision breeding.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 hover-grow">
              <Lightbulb className="h-10 w-10 text-farm-dark mb-4" />
              <h3 className="text-xl font-bold mb-3 text-farm-dark font-lora">
                Promoting Technology
              </h3>
              <p className="text-gray-700">
                Encouraging adoption of automated milking systems, AI-powered
                monitoring, and digital farm management tools.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 hover-grow">
              <BarChart3 className="h-10 w-10 text-farm-dark mb-4" />
              <h3 className="text-xl font-bold mb-3 text-farm-dark font-lora">
                Facilitating Finance Access
              </h3>
              <p className="text-gray-700">
                Connecting youth-led dairy enterprises with financial
                institutions, cooperatives, and impact investors.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 hover-grow">
              <Globe className="h-10 w-10 text-farm-dark mb-4" />
              <h3 className="text-xl font-bold mb-3 text-farm-dark font-lora">
                Strengthening Value Chains
              </h3>
              <p className="text-gray-700">
                Linking young farmers to processors, retailers, and export
                markets.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 hover-grow">
              <Leaf className="h-10 w-10 text-farm-dark mb-4" />
              <h3 className="text-xl font-bold mb-3 text-farm-dark font-lora">
                Supporting Sustainability
              </h3>
              <p className="text-gray-700">
                Promoting climate-smart dairy practices to enhance resilience
                and reduce environmental impact.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/objectives">
              <Button
                variant="outline"
                className="border-farm-dark text-farm-dark hover:bg-farm-dark hover:text-white font-lora"
              >
                Learn more about our objectives
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-20 bg-gray-100">
        <div className="container px-4 md:px-6">
          
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[300px] hover-grow">
              <Image
                src="https://pbs.twimg.com/media/GkpvYAfWQAAGs0H?format=jpg&name=900x900"
                alt="Rwandan dairy cow"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[300px] hover-grow">
              <Image
                src="https://www.wfp.org/sites/default/files/styles/media_embed/public/2021-12/For%20Story%205a.jpg?itok=8QmJuhkp"
                alt="Rwandan dairy farmer"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[300px] hover-grow">
              <Image
                src="https://www.bothar.ie/sites/default/files/styles/widescreen_television/public/media/images/2019-01/Milk%20Rwanda.jpg?itok=27cuDbRF"
                alt="Rwandan dairy products"
                fill
                className="object-cover"
              />
            </div>
          
        </div>
      </section>

      {/* Key Activities Preview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center mb-16 slide-up">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-farm-dark font-lora">
              Key Activities
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 text-lg">
              Our comprehensive approach includes five key activity areas
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/activities/capacity-building"
              className="group bg-white rounded-xl border border-gray-200 shadow-lg p-8 hover:border-farm-dark hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-farm-dark group-hover:text-farm-medium font-lora">
                Capacity Building & Professional Development
              </h3>
              <p className="text-gray-700 mb-4">
                Training programs on dairy management, farm business, and
                entrepreneurship.
              </p>
              <div className="flex items-center text-farm-dark group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
            <Link
              href="/activities/innovation"
              className="group bg-white rounded-xl border border-gray-200 shadow-lg p-8 hover:border-farm-dark hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-farm-dark group-hover:text-farm-medium font-lora">
                Productivity Enhancement through Innovation
              </h3>
              <p className="text-gray-700 mb-4">
                Smart dairy farming, data-driven optimization, and genetic
                improvement.
              </p>
              <div className="flex items-center text-farm-dark group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
            <Link
              href="/activities/market-access"
              className="group bg-white rounded-xl border border-gray-200 shadow-lg p-8 hover:border-farm-dark hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-farm-dark group-hover:text-farm-medium font-lora">
                Market Access & Value Chain Development
              </h3>
              <p className="text-gray-700 mb-4">
                Cooperatives, offtake agreements, and digital sales channels.
              </p>
              <div className="flex items-center text-farm-dark group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
            <Link
              href="/activities/financial-support"
              className="group bg-white rounded-xl border border-gray-200 shadow-lg p-8 hover:border-farm-dark hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-farm-dark group-hover:text-farm-medium font-lora">
                Financial Support & Investment
              </h3>
              <p className="text-gray-700 mb-4">
                Loan schemes, impact investment, and cooperative-based credit
                facilities.
              </p>
              <div className="flex items-center text-farm-dark group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
            <Link
              href="/activities/networking"
              className="group bg-white rounded-xl border border-gray-200 shadow-lg p-8 hover:border-farm-dark hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-farm-dark group-hover:text-farm-medium font-lora">
                Networking, Mentorship & Policy Engagement
              </h3>
              <p className="text-gray-700 mb-4">
                Mentorship programs, annual forums, and youth-inclusive policy
                advocacy.
              </p>
              <div className="flex items-center text-farm-dark group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-farm-dark text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white font-lora">
              Success Stories
            </h2>
            <p className="mx-auto max-w-[700px] text-white/80 text-lg">
              Hear from young farmers who have transformed their lives through
              NDFN
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-farm-medium p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://gfair.network/sites/default/files/inline-images/IDA%20internal.png"
                    alt="Young dairy farmer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-lora">Jean Mugisha</h4>
                  <p className="text-white/80">Dairy Entrepreneur, Nyagatare</p>
                </div>
              </div>
              <p className="text-white/90 italic">
                "Before joining NDFN, I struggled with low milk production and
                limited market access. Through their training and support, I've
                increased my herd from 3 to 12 cows and now supply milk to a
                major processor. My income has tripled, and I've hired two young
                assistants."
              </p>
            </div>
            <div className="bg-farm-medium p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://oneacrefund.org/sites/default/files/styles/single_narrow_banner_desktop_x2/public/2025-04/TZN_4323%20%281%29.webp?itok=PYdAlLOl"
                    alt="Young dairy farmer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-lora">Marie Uwimana</h4>
                  <p className="text-white/80">Dairy Technologist, Musanze</p>
                </div>
              </div>
              <p className="text-white/90 italic">
                "NDFN's technology adoption program helped me establish a small
                dairy processing unit. I now produce yogurt and cheese from
                local milk, creating value and employment in my community. The
                business mentorship was invaluable in helping me develop a
                sustainable business model."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-farm-light text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white font-lora">
              Join the NexGen Dairy Farmers Network
            </h2>
            <p className="mx-auto max-w-[700px] text-white/90 text-xl">
              Be part of the movement transforming dairy farming for the next
              generation
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link href="/join">
                <Button className="bg-white text-farm-dark hover:bg-gray-100 font-lora">
                  Join Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white text-whitebg-white/10 font-lora"
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
