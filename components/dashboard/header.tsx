"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Menu, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DashboardNav } from "@/components/dashboard/nav"

export function DashboardHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-4 md:gap-8">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <DashboardNav />
            </SheetContent>
          </Sheet>
          <Link href="/dashboard" className="hidden items-center space-x-2 md:flex">
            <span className="hidden font-bold sm:inline-block">NDFN Dashboard</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/dashboard"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/dashboard" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Overview
            </Link>
            <Link
              href="/dashboard/forum"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/dashboard/forum" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Forum
            </Link>
            <Link
              href="/dashboard/resources"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/dashboard/resources" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Resources
            </Link>
            <Link
              href="/dashboard/marketplace"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/dashboard/marketplace" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Marketplace
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/">Sign out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
