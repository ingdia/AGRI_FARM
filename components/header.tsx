"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import Image from "next/image"

export function Header() {
  const isMobile = useMobile()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/nexgenlogo.png" alt="NDFN Logo" className="h-24 w-24" />
        </Link>

        {isMobile ? <MobileNav /> : <DesktopNav />}
      </div>
    </header>
  )
}

function DesktopNav() {
  return (
    <div className="flex items-center gap-6">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-lora")}>Home</NavigationMenuLink>
            </Link>
            </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-lora">About</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-farm-dark to-farm-medium p-6 no-underline outline-none focus:shadow-md"
                      href="/about"
                    >
                      <div className="mt-4 mb-2 text-lg font-medium text-white">About NDFN</div>
                      <p className="text-sm leading-tight text-white/90">
                        Learn about our mission, vision, and how we're transforming dairy farming
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/mission" title="Mission & Vision">
                  Our guiding principles and future aspirations
                </ListItem>
                <ListItem href="/objectives" title="Objectives">
                  The six key goals driving our initiative
                </ListItem>
                <ListItem href="/target-audience" title="Target Audience">
                  Who we serve and support in the dairy sector
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-lora">Activities</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                <ListItem href="/activities/capacity-building" title="Capacity Building">
                  Professional development and training programs
                </ListItem>
                <ListItem href="/activities/innovation" title="Innovation & Technology">
                  Smart farming and productivity enhancement
                </ListItem>
                <ListItem href="/activities/market-access" title="Market Access">
                  Value chain development and market linkages
                </ListItem>
                <ListItem href="/activities/financial-support" title="Financial Support">
                  Investment opportunities and funding schemes
                </ListItem>
                <ListItem href="/activities/networking" title="Networking & Policy">
                  Mentorship and advocacy initiatives
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-lora">Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem href="/resources/value-chain" title="Value Chain Solutions">
                  Addressing challenges in dairy farming
                </ListItem>
                <ListItem href="/resources/case-studies" title="Success Stories">
                  Youth-led dairy enterprises making an impact
                </ListItem>
                <ListItem href="/resources/publications" title="Publications">
                  Research and insights on dairy farming
                </ListItem>
                <ListItem href="/resources/events" title="Events & Training">
                  Upcoming opportunities to learn and connect
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-lora")}>Contact</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Link href="/join">
        <Button className="bg-farm-dark hover:bg-farm-medium font-lora">Join NDFN</Button>
      </Link>
    </div>
  )
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="h-10 w-10">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-white">
        <nav className="flex flex-col gap-4 mt-8">
          <Link href="/" className="text-lg font-semibold font-lora">
            Home
          </Link>
          <Link href="/about" className="text-lg font-semibold font-lora">
            About
          </Link>
          <Link href="/objectives" className="text-lg font-semibold font-lora">
            Objectives
          </Link>
          <Link href="/target-audience" className="text-lg font-semibold font-lora">
            Target Audience
          </Link>
          <Link href="/activities/capacity-building" className="text-lg font-semibold font-lora">
            Key Activities
          </Link>
          <Link href="/resources/value-chain" className="text-lg font-semibold font-lora">
            Value Chain
          </Link>
          <Link href="/contact" className="text-lg font-semibold font-lora">
            Contact
          </Link>
          <Link href="/join" className="mt-4">
            <Button className="w-full bg-farm-dark hover:bg-farm-medium font-lora">Join NDFN</Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none font-lora">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
