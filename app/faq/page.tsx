"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search } from "lucide-react"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is the NexGen Dairy Farmers Network (NDFN)?",
          answer:
            "The NexGen Dairy Farmers Network (NDFN) is a youth-focused initiative designed to transform the dairy sector by empowering young farmers with the knowledge, skills, and resources they need to succeed. We provide training, mentorship, access to finance, and market linkages to help young people build sustainable and profitable dairy enterprises.",
        },
        {
          question: "Who can join NDFN?",
          answer:
            "NDFN is open to youth aged 18-35 years who are interested in dairy farming. This includes existing small-scale dairy farmers, students and graduates in agriculture-related fields, aspiring dairy entrepreneurs, and technology innovators working on solutions for the dairy sector.",
        },
        {
          question: "Is there a membership fee to join NDFN?",
          answer:
            "No, there is no membership fee to join NDFN. However, some of our training programs and events may have participation fees, which are always clearly communicated in advance.",
        },
        {
          question: "Where is NDFN located?",
          answer:
            "NDFN is headquartered in Kigali, Rwanda, but we operate throughout the country. We have training centers in various districts and work with partners across Rwanda to ensure our services are accessible to young farmers in all regions.",
        },
      ],
    },
    {
      category: "Training and Capacity Building",
      questions: [
        {
          question: "What types of training does NDFN offer?",
          answer:
            "NDFN offers a range of training programs, including the Dairy Management Certificate Program, which covers technical aspects of dairy farming; Farm Business and Financial Literacy Training, which focuses on business management; Entrepreneurship and Dairy Agribusiness Acceleration, which supports youth in developing and scaling dairy enterprises; and specialized workshops on topics such as milk processing, feed production, and digital farm management.",
        },
        {
          question: "How long do the training programs last?",
          answer:
            "The duration of our training programs varies. The Dairy Management Certificate Program runs for 12 weeks, with sessions held twice a week. The Dairy Entrepreneurship Bootcamp is a full-time, two-week program. We also offer shorter workshops and seminars that may last from a few hours to a few days.",
        },
        {
          question: "Are the training programs certified?",
          answer:
            "Yes, our flagship Dairy Management Certificate Program is certified by the Rwanda TVET Board and recognized by the Ministry of Agriculture and Animal Resources. Participants who successfully complete the program receive a certificate that is valued by employers and financial institutions.",
        },
        {
          question: "Can I request a customized training for my group?",
          answer:
            "Yes, we can develop customized training programs for groups of young farmers or organizations working with youth in the dairy sector. Please contact us with your specific requirements, and our training team will work with you to design a program that meets your needs.",
        },
      ],
    },
    {
      category: "Financial Support",
      questions: [
        {
          question: "Does NDFN provide loans or grants to young farmers?",
          answer:
            "NDFN does not directly provide loans or grants, but we work with financial partners who offer various financing options for young dairy farmers. We help young farmers develop bankable business plans and connect them with appropriate financial institutions, cooperatives, and impact investors.",
        },
        {
          question: "What types of financing are available for young dairy farmers?",
          answer:
            "Through our financial partners, young dairy farmers can access various types of financing, including start-up loans, equipment financing, working capital loans, and in some cases, grants for innovative projects. The specific options available depend on the farmer's needs, experience, and business plan.",
        },
        {
          question: "What are the requirements to access financing through NDFN's partners?",
          answer:
            "Requirements vary depending on the financial partner and the type of financing sought. Generally, young farmers need to have a viable business plan, some form of collateral or guarantee, and in many cases, completion of relevant training programs. NDFN provides support in meeting these requirements through our training and mentorship programs.",
        },
        {
          question: "How does NDFN help young farmers access financing?",
          answer:
            "NDFN helps young farmers access financing in several ways: we provide financial literacy training to help them understand and manage finances; we support the development of bankable business plans; we connect them with appropriate financial partners; and in some cases, we provide guarantees or recommendations to financial institutions.",
        },
      ],
    },
    {
      category: "Market Access",
      questions: [
        {
          question: "How does NDFN help young farmers access markets?",
          answer:
            "NDFN helps young farmers access markets through various initiatives: we facilitate connections with processors, retailers, and other buyers; we support the formation of cooperatives to enhance bargaining power; we provide training on quality standards and market requirements; and we organize market forums where farmers can meet potential buyers.",
        },
        {
          question: "Does NDFN buy milk from young farmers?",
          answer:
            "NDFN does not directly buy milk from farmers, but we connect them with reliable buyers such as processors, cooperatives, and retail outlets. We also support young farmers in developing value-added products that can be sold directly to consumers at premium prices.",
        },
        {
          question: "How can I find buyers for my dairy products through NDFN?",
          answer:
            "You can find buyers for your dairy products by participating in our market access programs, attending our market forums, joining one of our partner cooperatives, or contacting our market linkage team directly. We maintain a database of buyers and can help match you with those looking for the products you offer.",
        },
        {
          question: "Does NDFN help with export markets?",
          answer:
            "Yes, NDFN works with partners to help young farmers access export markets, particularly in neighboring countries. This typically requires meeting higher quality standards and having sufficient production volume, which is often achieved through cooperative arrangements.",
        },
      ],
    },
    {
      category: "Technology and Innovation",
      questions: [
        {
          question: "What technologies does NDFN promote for dairy farming?",
          answer:
            "NDFN promotes a range of technologies for dairy farming, including automated milking systems, digital farm management tools, AI-powered herd monitoring, solar-powered cooling systems, and mobile applications for market access and information sharing. We focus on technologies that are appropriate for the local context and accessible to young farmers.",
        },
        {
          question: "How can I access these technologies as a young farmer?",
          answer:
            "You can access these technologies through our technology demonstration farms, where you can see them in action; through our partnerships with technology providers, who often offer special terms for NDFN members; and through our technology adoption support programs, which may include subsidies, financing options, or shared ownership arrangements.",
        },
        {
          question: "Does NDFN support young innovators developing solutions for the dairy sector?",
          answer:
            "Yes, NDFN actively supports young innovators developing solutions for the dairy sector. We provide mentorship, technical guidance, connections to potential users and investors, and in some cases, small grants or access to innovation facilities. We also organize innovation challenges and hackathons focused on dairy sector issues.",
        },
        {
          question: "What digital tools does NDFN recommend for dairy farm management?",
          answer:
            "NDFN recommends several digital tools for dairy farm management, including the Gemura app for record keeping and market access; DigiCow for herd management and health monitoring; and various financial management apps. The specific recommendations depend on the farmer's needs, scale of operation, and technical capacity.",
        },
      ],
    },
  ]

  const filteredFAQs = searchQuery
    ? faqs
        .map((category) => ({
          ...category,
          questions: category.questions.filter(
            (faq) =>
              faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((category) => category.questions.length > 0)
    : faqs

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Find answers to common questions about NDFN and dairy farming
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for questions..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px]">
            {filteredFAQs.map((category, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${index}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            {filteredFAQs.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground text-lg">No questions found matching your search.</p>
                <Button variant="link" className="mt-2 text-green-700" onClick={() => setSearchQuery("")}>
                  Clear search
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Still Have Questions?</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              If you couldn't find the answer to your question, please don't hesitate to contact us directly.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link href="/contact">
                <Button className="bg-green-700 hover:bg-green-800">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
