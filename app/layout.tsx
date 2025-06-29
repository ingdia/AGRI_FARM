import type React from "react"
import "@/app/globals.css"
import { Lora } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
})

export const metadata = {
  title: "NexGen Dairy Farmers Network (NDFN)",
  description: "Empowering Youth in Dairy Farming through Professionalization, Technology, and Market Access. Join our network of innovative dairy farmers.",
  keywords: "dairy farming, youth empowerment, agriculture technology, market access, dairy innovation",
  authors: [{ name: "NDFN Team" }],
  openGraph: {
    title: "NexGen Dairy Farmers Network (NDFN)",
    description: "Empowering Youth in Dairy Farming through Professionalization, Technology, and Market Access",
    url: "https://ndfn.org",
    siteName: "NexGen Dairy Farmers Network",
    images: ["/logo.svg"],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon.svg",
    },
  },
  robots: "index, follow",
  generator: "Next.js"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lora.className} ${lora.variable} overflow-x-hidden`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          storageKey="ndfn-theme"
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
