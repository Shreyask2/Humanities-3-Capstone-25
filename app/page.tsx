import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Sparkles, BookOpen, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ParallaxSection } from "@/components/parallax-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden animate-gradient">
        <ParallaxSection speed={0.3}>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=American+Flag+Waving')] bg-cover bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
          </div>
        </ParallaxSection>

        <div className="container relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
              <span className="block text-gradient animate-shimmer">The American</span>
              <span className="block text-white animate-float">Dream</span>
            </h1>
          </div>

          <ScrollAnimation delay={500}>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              "So we beat on, boats against the current, borne back ceaselessly into the past."
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-amber-400 hover:bg-amber-500 text-slate-900 hover-lift animate-pulse-glow">
                <Link href="/dream">Begin Journey</Link>
              </Button>
              <Button variant="outline" className="border-white/20 glass-effect hover-lift" asChild>
                <Link href="/great-gatsby">Explore Gatsby</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <Link href="/dream">
            <ChevronDown className="h-8 w-8 text-amber-400" />
          </Link>
        </div>
      </section>

      {/* Humanities Context Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 art-deco-pattern opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-gradient">A Humanities Exploration</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                This project synthesizes cultural, historical, and literary analysis to examine how the American Dream
                has evolved as both an ideal and an illusion across different eras of American society.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ScrollAnimation delay={200}>
              <div className="glass-effect p-8 rounded-lg hover-lift quote-card">
                <BookOpen className="h-12 w-12 text-amber-400 mb-4 animate-float" />
                <h3 className="font-serif text-2xl mb-4 text-amber-400">Literary Analysis</h3>
                <p className="text-slate-300">
                  Examining how Fitzgerald's modernist techniques reveal the psychological and social complexities of
                  post-WWI American society through symbolism, narrative structure, and character development.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="glass-effect p-8 rounded-lg hover-lift quote-card">
                <Users className="h-12 w-12 text-emerald-400 mb-4 animate-float" />
                <h3 className="font-serif text-2xl mb-4 text-emerald-400">Cultural Context</h3>
                <p className="text-slate-300">
                  Analyzing the socioeconomic tensions of the Jazz Age and how they parallel contemporary issues of
                  class mobility, identity construction, and institutional access in American society.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={600}>
              <div className="glass-effect p-8 rounded-lg hover-lift quote-card">
                <Sparkles className="h-12 w-12 text-blue-400 mb-4 animate-float" />
                <h3 className="font-serif text-2xl mb-4 text-blue-400">Historical Synthesis</h3>
                <p className="text-slate-300">
                  Connecting the mythologies of self-reinvention from the 1920s to contemporary cases, exploring how
                  American meritocratic ideals both enable and constrain individual agency.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Featured Section Preview */}
      <section className="py-24 bg-slate-950 relative">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="font-serif text-4xl md:text-5xl mb-12 text-gradient">Explore The Journey</h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation delay={200}>
              <div className="glass-effect p-6 rounded-lg border border-amber-400/20 group hover:border-amber-400/50 transition-all hover-lift quote-card">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-amber-400/30 mb-4 group-hover:border-amber-400/60 transition-all">
                  <Image
                    src="/image1.jpeg"
                    alt="The American Dream - Statue of Liberty"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="font-serif text-2xl mb-2 text-gradient">The American Dream</h3>
                <p className="text-slate-300 mb-4 line-clamp-2">
                  Explore the philosophical foundations and historical evolution of America's defining mythology.
                </p>
                <Button variant="link" className="text-amber-400 p-0 hover:text-amber-300" asChild>
                  <Link href="/dream">Discover More</Link>
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="glass-effect p-6 rounded-lg border border-emerald-400/20 group hover:border-emerald-400/50 transition-all hover-lift quote-card">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-emerald-400/30 mb-4 group-hover:border-emerald-400/60 transition-all">
                  <Image
                    src="/image2.jpeg"
                    alt="The Great Gatsby - 1920s mansion party scene"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="font-serif text-2xl mb-2 text-gradient-emerald">The Great Gatsby</h3>
                <p className="text-slate-300 mb-4 line-clamp-2">
                  Analyze Fitzgerald's modernist critique of American capitalism and social stratification.
                </p>
                <Button variant="link" className="text-emerald-400 p-0 hover:text-emerald-300" asChild>
                  <Link href="/great-gatsby">Discover More</Link>
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={600}>
              <div className="glass-effect p-6 rounded-lg border border-blue-400/20 group hover:border-blue-400/50 transition-all hover-lift quote-card">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-blue-400/30 mb-4 group-hover:border-blue-400/60 transition-all">
                  <Image
                    src="/image3.webp"
                    alt="The Runner - Princeton University campus"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="font-serif text-2xl mb-2 text-gradient-blue">The Runner</h3>
                <p className="text-slate-300 mb-4 line-clamp-2">
                  Examine contemporary identity performance and institutional vulnerability in elite education.
                </p>
                <Button variant="link" className="text-blue-400 p-0 hover:text-blue-300" asChild>
                  <Link href="/runner">Discover More</Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
