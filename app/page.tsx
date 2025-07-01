"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Award,
  Lightbulb,
  BarChart3,
  Leaf,
  Globe,
} from "lucide-react";

import { useEffect, useState } from "react";
import KeyActivities from "@/components/KeyActivities";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.1 } },
});

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

  const [currentObjectiveIndex, setCurrentObjectiveIndex] = useState<number>(0);

const objectives = [
  {
    image: "https://i.pinimg.com/1200x/0e/e7/c4/0ee7c41463fc0789a51e1f624be74af0.jpg",
    title: "Professionalizing Dairy Farming",
    text: "Providing structured training, certification, and business support for young farmers."
  },
  {
    image: "https://i.pinimg.com/1200x/14/58/b8/1458b8c0998873b2b971b59399e2bf47.jpg",
    title: "Increasing Productivity",
    text: "Enhancing efficiency through modern dairy management, smart feeding systems, and precision breeding."
  },
  {
    image: "https://i.pinimg.com/1200x/8b/30/d1/8b30d19b4095c0e4a0eca970eff7aeec.jpg",
    title: "Promoting Technology",
    text: "Encouraging adoption of automated milking systems, AI-powered monitoring, and digital farm management tools."
  },
  {
    image: "https://i.pinimg.com/1200x/0e/e7/c4/0ee7c41463fc0789a51e1f624be74af0.jpg",
    title: "Facilitating Finance Access",
    text: "Connecting youth-led dairy enterprises with financial institutions, cooperatives, and impact investors."
  },
  {
    image: "https://i.pinimg.com/1200x/14/58/b8/1458b8c0998873b2b971b59399e2bf47.jpg",
    title: "Strengthening Value Chains",
    text: "Linking young farmers to processors, retailers, and export markets."
  },
  {
    image: "https://i.pinimg.com/1200x/8b/30/d1/8b30d19b4095c0e4a0eca970eff7aeec.jpg",
    title: "Supporting Sustainability",
    text: "Promoting climate-smart dairy practices to enhance resilience and reduce environmental impact."
  }
];

// Add this useEffect for automatic cycling through objectives
useEffect(() => {
  const objectivesInterval = setInterval(() => {
    setCurrentObjectiveIndex((prevIndex) => (prevIndex + 1) % objectives.length);
  }, 2000); // Change every 2 seconds

  return () => clearInterval(objectivesInterval);
}, [objectives.length]);

  return (
    <div className="flex flex-col min-h-screen ">
      {/* Hero Section */}
     <section className="relative min-h-[90vh] flex items-center ">
  <div className="absolute inset-0 z-0">
    {heroImages.map((src: string, index: number) => (
      <Image
        key={index}
        src={src}
        alt={`Hero background ${index + 1}`}
        fill
        priority={index === 0}
        className={`object-cover transition-opacity duration-1000 ease-in  inset-0 ${
          index === currentImageIndex ? "opacity-100 z-0" : "opacity-0 z-0"
        }`}
      />
    ))}
    <div className="absolute inset-0 bg-farm-dark/70 z-10"></div>
  </div>

  <div className="container px-4 md:px-6 relative z-10 flex flex-col lg:flex-row mr-9 ml-9 justify-between items-center w-full gap-12">
    {/* Text Content (Left) */}
    
<div className="space-y-6 max-w-xl text-left">
  <motion.div
    variants={fadeIn(0.1)}
    initial="hidden"
    animate="visible"
    className="inline-block rounded-lg bg-white/10 backdrop-blur-sm px-3 py-1 text-sm text-white mb-4"
  >
    Youth-Focused Initiative
  </motion.div>

  <motion.h1
    variants={fadeIn(0.3)}
    initial="hidden"
    animate="visible"
    className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white text-shadow"
  >
    NexGen Dairy Farmers Network
  </motion.h1>

  <motion.p
    variants={fadeIn(0.5)}
    initial="hidden"
    animate="visible"
    className="text-xl text-white/90 md:text-2xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed"
  >
    Empowering Youth in Dairy Farming through Professionalization,
    Technology, and Market Access
  </motion.p>

  <motion.div
    variants={fadeIn(0.7)}
    initial="hidden"
    animate="visible"
    className="flex flex-col gap-4 min-[400px]:flex-row"
  >
    <Link href="/about">
      <button className="bg-white text-farm-dark hover:bg-gray-100 font-lora px-4 py-2 rounded">
        Learn More <ArrowRight className="ml-2 h-4 w-4 inline" />
      </button>
    </Link>
    <Link href="/join">
      <button className="border border-white text-white bg-white/10 font-lora px-4 py-2 rounded">
        Join the Network
      </button>
    </Link>
  </motion.div>
</div>


   {/* Images (Right) */}
<div className="flex flex-col gap-4 mt-8">
  {/* Upper row */}
  <div className="flex flex-row gap-4">
    <motion.div
      variants={fadeIn(1)}
      initial="hidden"
      animate="visible"
      className="relative w-[180px] h-[250px]"
    >
      <Image
        src="https://i.pinimg.com/1200x/4c/8d/1c/4c8d1cd7fcd518a2ce41418bfaa907e3.jpg"
        alt="Image1"
        fill
        className="object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
      />
    </motion.div>

    <motion.div
      variants={fadeIn(1.2)}
      initial="hidden"
      animate="visible"
      className="relative w-[200px] h-[150px] mt-24"
    >
      <Image
        src="https://i.pinimg.com/1200x/8b/30/d1/8b30d19b4095c0e4a0eca970eff7aeec.jpg"
        alt="Image2"
        fill
        className="object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
      />
    </motion.div>
  </div>

  {/* Lower row */}
  <div className="flex flex-row gap-4 -ml-[70px]">
    <motion.div
      variants={fadeIn(1.4)}
      initial="hidden"
      animate="visible"
      className="relative w-[150px] h-[100px]"
    >
      <Image
        src="https://i.pinimg.com/1200x/0e/e7/c4/0ee7c41463fc0789a51e1f624be74af0.jpg"
        alt="Image3"
        fill
        className="object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
      />
    </motion.div>

    <motion.div
      variants={fadeIn(1.6)}
      initial="hidden"
      animate="visible"
      className="relative w-[300px] h-[200px]"
    >
      <Image
        src="https://i.pinimg.com/1200x/14/58/b8/1458b8c0998873b2b971b59399e2bf47.jpg"
        alt="Image4"
        fill
        className="object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
      />
    </motion.div>
  </div>
</div>

  </div>

  {/* Scroll Down Indicator */}
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
    <a title="Scroll down" href="#introduction" className="text-white">
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
      <section id="introduction" className="py-20 md:py-28 bg-white mr-9 ml-9">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6 slide-in-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-farm-dark font-lora">
                Transforming Livestock Farming
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed ">
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
<section
  className="relative py-20 text-white bg-fixed bg-cover bg-center "
  style={{
    backgroundImage: "url('https://foodtank.com/wp-content/uploads/2022/12/U.N.-Decade-of-Family-Farming-UNDFF-small-scale-farmers-FAO_social.png')", // Make sure this image is inside your /public/images/ folder
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


{/* Objectives Preview */}
<section className="py-20 md:py-28 bg-white mx-9">
  <div className="container px-4 md:px-6">
    <div className="mx-auto max-w-[800px] space-y-6 text-center mb-16 slide-up">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-farm-dark font-lora">
        Our Objectives
      </h2>
      <p className="mx-auto max-w-[700px] text-gray-700 text-lg">
        We aim to revolutionize the dairy sector through six key objectives
      </p>
    </div>

    {/* Staircase sliding layout */}
    <div className="max-w-6xl mx-auto relative">
      <div className="flex items-center justify-between">
        
        {/* Left side - Staircase cards */}
        <div className="w-1/2 relative h-[600px] overflow-hidden">
          {objectives.map((item, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-[2000ms] ease-out rounded-xl shadow-lg overflow-hidden ${
                index === currentObjectiveIndex
                  ? 'w-72 h-48 z-20 left-0'
                  : index < currentObjectiveIndex
                  ? `w-64 h-40 z-${15 - index} left-${(index + 1) * 8} top-${(currentObjectiveIndex - index) * 12} opacity-70`
                  : `w-56 h-36 z-${10 - Math.abs(index - currentObjectiveIndex)} left-${(objectives.length - index) * 12} top-${(index - currentObjectiveIndex) * 16} opacity-50`
              }`}
              style={{
                top: index === currentObjectiveIndex 
                  ? '50%' 
                  : index < currentObjectiveIndex
                  ? `${20 + (currentObjectiveIndex - index) * 60}px`
                  : `${300 + (index - currentObjectiveIndex) * 80}px`,
                left: index === currentObjectiveIndex
                  ? '0px'
                  : index < currentObjectiveIndex
                  ? `${(index + 1) * 40}px`
                  : `${(objectives.length - index) * 60}px`,
                transform: index === currentObjectiveIndex ? 'translateY(-50%)' : 'none',
                zIndex: index === currentObjectiveIndex ? 20 : 15 - Math.abs(index - currentObjectiveIndex)
              }}
            >
              {/* Small card image */}
              <div className="w-full h-full relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover transition-all duration-[2000ms] ease-out ${
                    index === currentObjectiveIndex
                      ? 'scale-100 brightness-100'
                      : 'scale-105 brightness-75'
                  }`}
                />
                
                {/* Card overlay */}
                <div className={`absolute inset-0 transition-all duration-[2000ms] ${
                  index === currentObjectiveIndex
                    ? 'bg-gradient-to-t from-farm-dark/80 via-farm-dark/40 to-transparent'
                    : 'bg-gradient-to-t from-black/60 via-black/30 to-transparent'
                }`} />

                {/* Card number */}
                <div className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-[2000ms] ${
                  index === currentObjectiveIndex
                    ? 'bg-white text-farm-dark shadow-md scale-110'
                    : 'bg-white/80 text-gray-700 scale-90'
                }`}>
                  {index + 1}
                </div>

                {/* Card title for non-active */}
                {index !== currentObjectiveIndex && (
                  <div className="absolute bottom-2 left-2 right-2">
                    <h4 className="text-white text-xs font-semibold font-lora truncate">
                      {item.title}
                    </h4>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Content display */}
        <div className="w-1/2 pl-12">
          <div className="transition-all duration-[2000ms] ease-out">
            {/* Active objective number */}
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-farm-dark text-white flex items-center justify-center font-bold text-2xl font-lora shadow-lg">
                {currentObjectiveIndex + 1}
              </div>
              <div className="ml-4 h-px flex-1 bg-gradient-to-r from-farm-dark to-transparent"></div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-4xl font-bold font-lora text-farm-dark leading-tight">
                {objectives[currentObjectiveIndex]?.title}
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {objectives[currentObjectiveIndex]?.text}
              </p>

              {/* Progress indicator */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Progress</span>
                  <span>{currentObjectiveIndex + 1} of {objectives.length}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-farm-dark h-2 rounded-full transition-all duration-[2000ms] ease-out"
                    style={{ width: `${((currentObjectiveIndex + 1) / objectives.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Simple dot indicators */}
    <div className="flex justify-center mt-16 space-x-4">
      {objectives.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentObjectiveIndex(index)}
          className={`rounded-full transition-all duration-700 focus:outline-none focus:ring-2 focus:ring-farm-dark focus:ring-offset-2 ${
            index === currentObjectiveIndex
              ? 'w-4 h-4 bg-farm-dark shadow-md scale-125'
              : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-110'
          }`}
        />
      ))}
    </div>

    {/* Timeline visualization */}
    <div className="flex justify-center mt-8 max-w-md mx-auto">
      {objectives.map((_, index) => (
        <div
          key={index}
          className={`flex-1 h-1 mx-1 rounded transition-all duration-[2000ms] ${
            index <= currentObjectiveIndex
              ? 'bg-farm-dark'
              : 'bg-gray-300'
          }`}
        />
      ))}
    </div>

    {/* Call to action */}
    <div className="mt-16 text-center">
      <Link href="/objectives">
        <Button
          variant="outline"
          className="border-2 border-farm-dark text-farm-dark hover:bg-farm-dark hover:text-white font-lora px-8 py-3 text-lg rounded-full transition-all duration-500 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-farm-dark focus:ring-offset-2"
        >
          Explore All Objectives
        </Button>
      </Link>
    </div>
  </div>
</section>

      {/* Key Activities Preview */}
       <KeyActivities />

      {/* Testimonial Section */}
      <section   className="relative py-20 text-white bg-fixed bg-cover bg-center"
  style={{
    backgroundImage: "url('https://foodtank.com/wp-content/uploads/2022/12/U.N.-Decade-of-Family-Farming-UNDFF-small-scale-farmers-FAO_social.png')", // Make sure this image is inside your /public/images/ folder
  }}>
     <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
        <div className="container px-4 md:px-6 ">
          <div className="mx-auto max-w-[800px] space-y-6 text-center mb-12">
            <h2 className="text-3xl  tracking-tighter sm:text-4xl text-white/90 font-lora  drop-shadow-lg">
              Success Stories
            </h2>
            <p className="mx-auto max-w-[700px] text-white/80 text-lg  drop-shadow-lg">
              Hear from young farmers who have transformed their lives through
              NDFN
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 mr-9 ml-9">
            <div className="bg-white/10 p-8 rounded-full shadow-lg backdrop-blur-sm scale-in text-center">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 ml-20">
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
            <div className="bg-white/10 p-8 rounded-full shadow-lg backdrop-blur-sm scale-in text-center">
              <div className="flex items-center mb-6 ">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 ml-20">
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
