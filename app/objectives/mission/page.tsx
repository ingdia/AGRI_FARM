"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  Lightbulb,
  HandHeart,
  Award,
  Leaf,
  Shield,
} from "lucide-react";

export default function MissionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-900 to-emerald-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2),transparent_50%)]"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-[900px] space-y-8 text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-white mb-6 font-lora">
                Our Mission
                <span className="block text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-green-300 to-emerald-200 bg-clip-text text-transparent">
                  & Vision
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-white/90 text-xl md:text-2xl leading-relaxed">
                Transforming the dairy sector by empowering the next generation
                of farmers
              </p>
            </div>
            <div className="animate-fade-in-up animation-delay-300">
              <div className="flex justify-center gap-4 pt-6">
                <div className="w-20 h-1 bg-gradient-to-r from-green-300 to-emerald-200 rounded-full"></div>
                <div className="w-12 h-1 bg-white/30 rounded-full"></div>
                <div className="w-8 h-1 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section
        className="relative py-20 text-white bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://foodtank.com/wp-content/uploads/2022/12/U.N.-Decade-of-Family-Farming-UNDFF-small-scale-farmers-FAO_social.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 z-0"></div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
            <div className="group animate-fade-in-left">
              <div className="bg-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-md border border-white/20 text-center transform transition-all duration-500 hover:scale-105 hover:bg-white/15 hover:shadow-3xl">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-6 font-lora bg-gradient-to-r from-green-600 to-emerald-200 bg-clip-text text-transparent">
                    Our Mission
                  </h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  To equip young dairy farmers with the skills, technology, and
                  resources needed to build sustainable, productive, and
                  commercially successful dairy enterprises.
                </p>
              </div>
            </div>

            <div className="group animate-fade-in-right">
              <div className="bg-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-md border border-white/20 text-center transform transition-all duration-500 hover:scale-105 hover:bg-white/15 hover:shadow-3xl">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-6 font-lora bg-gradient-to-r from-green-600 to-emerald-200 bg-clip-text text-transparent">
                    Our Vision
                  </h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  A future where youth drive innovation and growth in the dairy
                  industry, contributing to food security, economic prosperity,
                  and environmental sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center mb-16">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 text-lg leading-relaxed">
                The principles that guide our work and define our organizational
                culture
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Youth Empowerment",
                description:
                  "We believe in the potential of young people to transform the dairy sector and are committed to providing them with the tools, knowledge, and opportunities they need to succeed.",
                color: "from-green-600 to-emerald-500",
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Innovation",
                description:
                  "We embrace new ideas, technologies, and approaches that can enhance productivity, efficiency, and sustainability in dairy farming.",
                color: "from-green-600 to-emerald-500",
              },
              {
                icon: <HandHeart className="w-8 h-8" />,
                title: "Collaboration",
                description:
                  "We work closely with partners across sectors to create a supportive ecosystem for young dairy farmers, recognizing that collective action is essential for transformative change.",
                color: "from-green-600 to-emerald-500",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Excellence",
                description:
                  "We strive for the highest standards in all our activities, from the quality of our training programs to the impact of our interventions.",
                color: "from-green-600 to-emerald-500",
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Sustainability",
                description:
                  "We promote environmentally sustainable practices in dairy farming and ensure that our interventions have lasting positive impacts on farmers, communities, and the environment.",
                color: "from-green-600 to-emerald-500",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Inclusivity",
                description:
                  "We are committed to ensuring that our programs and services are accessible to all young people interested in dairy farming, regardless of their background, gender, or location.",
                color: "from-green-600 to-emerald-500",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-green-300 transform hover:-translate-y-2 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-white">{value.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Goals Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.2),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_70%)]"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-[800px] space-y-4 text-center mb-16">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-green-300 to-emerald-200 bg-clip-text text-transparent">
                Strategic Goals
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 text-lg leading-relaxed">
                Our key objectives for the next five years
              </p>
            </div>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                title: "Increase Youth Participation",
                description:
                  "Engage 10,000 young people in dairy farming activities by 2028, with at least 40% being women and 10% from marginalized communities.",
                number: "01",
              },
              {
                title: "Enhance Productivity",
                description:
                  "Increase the average milk yield per cow among youth-led dairy farms by 50% through the adoption of improved breeds, better feeding practices, and modern management techniques.",
                number: "02",
              },
              {
                title: "Promote Technology Adoption",
                description:
                  "Facilitate the adoption of at least one modern technology by 70% of young dairy farmers in our network, with a focus on digital farm management tools, automated milking systems, and renewable energy solutions.",
                number: "03",
              },
              {
                title: "Strengthen Market Linkages",
                description:
                  "Establish reliable market connections for 80% of young dairy farmers in our network, ensuring fair prices and consistent demand for their products.",
                number: "04",
              },
              {
                title: "Improve Access to Finance",
                description:
                  "Facilitate access to appropriate financial services for 60% of young dairy farmers in our network, including loans, insurance, and savings products.",
                number: "05",
              },
            ].map((goal, index) => (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 hover:bg-white/15 transition-all duration-500 transform hover:scale-105">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                        {goal.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-white">
                        {goal.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed text-lg">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-8 text-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Join Our Mission
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 text-xl leading-relaxed">
                Be part of the movement to transform dairy farming and create
                opportunities for youth
              </p>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center pt-4">
                <Link href="/join">
                  <Button className="bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Join NDFN
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}