"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { GlassesIcon, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    { name: "The American Dream", path: "/dream" },
    { name: "The Great Gatsby", path: "/great-gatsby" },
    { name: "The Runner", path: "/runner" },
  ]

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <GlassesIcon className="h-6 w-6 text-amber-400" />
            <span className="font-serif text-lg tracking-wider text-amber-400">The American Dream</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-amber-400",
                isActive(route.path) ? "text-amber-400" : "text-slate-300",
              )}
            >
              {route.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 p-4 bg-slate-950 border-t border-slate-800">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-amber-400 p-2",
                  isActive(route.path) ? "text-amber-400 bg-slate-900/50 rounded-md" : "text-slate-300",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {route.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
