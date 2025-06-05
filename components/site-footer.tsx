import Link from "next/link"
import { GlassesIcon } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GlassesIcon className="h-6 w-6 text-amber-400" />
              <span className="font-serif text-lg tracking-wider text-amber-400">The American Dream</span>
            </div>
            <p className="text-slate-400 text-sm">
              Exploring the American Dream through the lens of The Great Gatsby and The Runner.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4 text-white">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dream" className="text-slate-400 hover:text-amber-400 text-sm">
                  The American Dream
                </Link>
              </li>
              <li>
                <Link href="/great-gatsby" className="text-slate-400 hover:text-amber-400 text-sm">
                  The Great Gatsby
                </Link>
              </li>
              <li>
                <Link href="/runner" className="text-slate-400 hover:text-amber-400 text-sm">
                  The Runner
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.britannica.com/biography/F-Scott-Fitzgerald" target="_blank" className="text-slate-400 hover:text-amber-400 text-sm">
                  About F. Scott Fitzgerald
                </a>
              </li>
              <li>
                <a href="https://www.britannica.com/topic/Roaring-Twenties" target="_blank" className="text-slate-400 hover:text-amber-400 text-sm">
                  The Roaring Twenties
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <div className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Shreyas Korithiwada. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}