"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo({
      top: 0,
      behavior: "instant", // Use "instant" instead of "smooth" to avoid animation conflicts
    })
  }, [pathname])

  return null // This component doesn't render anything
}
