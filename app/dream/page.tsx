import Image from "next/image"
import { Sparkles, Quote, TrendingUp, Users, Globe } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ParallaxSection } from "@/components/parallax-section"

export default function DreamPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <ParallaxSection speed={0.3}>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1920&text=Ellis+Island+Immigration')] bg-cover bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900"></div>
          </div>
        </ParallaxSection>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="font-serif text-5xl md:text-6xl mb-6 text-gradient">The American Dream</h1>
          </div>
          <ScrollAnimation delay={300}>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The enduring ideal that has shaped American identity, culture, and aspirations across centuries
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Philosophical Foundations */}
      <section className="py-16 bg-slate-900 relative">
        <div className="absolute inset-0 art-deco-pattern opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-serif text-4xl mb-6 text-gradient">Philosophical Foundations</h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  <span className="drop-cap text-gradient">T</span>he American Dream is based on Enlightenment philosophy, namely John 
                  Locke's theory of natural rights and theory of social contract. It merges Protestant work ethic, democratic idealism, 
                  and capitalist opportunity into a unique American mythology of self-determination.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                It is not just economic improvement—it is the notion that a person is able to transcend boundaries through virtue of work and will.
                </p>
                <div className="flex items-center gap-2 text-amber-400">
                  <Sparkles className="h-5 w-5 animate-float" />
                  <span className="font-serif italic">From Enlightenment ideals to American mythology</span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-amber-400/20 rounded-lg blur-xl animate-pulse-glow"></div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-amber-400/30 hover-lift">
                  <Image
                    src="/image4.jpg"
                    alt="Declaration of Independence - founding document of American ideals"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Historical Evolution Timeline */}
          <ScrollAnimation delay={200}>
            <div className="mb-16">
              <h2 className="font-serif text-4xl mb-8 text-gradient text-center">Historical Evolution</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="glass-effect p-6 rounded-lg hover-lift quote-card">
                  <TrendingUp className="h-10 w-10 text-amber-400 mb-4 animate-float" />
                  <h3 className="font-serif text-xl mb-3 text-amber-400">Colonial Era (1600s-1700s)</h3>
                  <p className="text-slate-300 text-sm">
                    Religious freedom and land ownership as pathways to prosperity. Existing work ethic establishes the moral
                    framework for "material" success.
                  </p>
                </div>

                <div className="glass-effect p-6 rounded-lg hover-lift quote-card">
                  <Users className="h-10 w-10 text-amber-400 mb-4 animate-float" />
                  <h3 className="font-serif text-xl mb-3 text-amber-400">Industrial Age (1800s-1920s)</h3>
                  <p className="text-slate-300 text-sm">
                    Mass immigration and urbanization redefine the dream. Horatio Alger narratives popularize "rags to
                    riches" mythology.
                  </p>
                </div>

                <div className="glass-effect p-6 rounded-lg hover-lift quote-card">
                  <Globe className="h-10 w-10 text-amber-400 mb-4 animate-float" />
                  <h3 className="font-serif text-xl mb-3 text-amber-400">Modern Era (1950s-Present)</h3>
                  <p className="text-slate-300 text-sm">
                    Suburban homeownership and consumer culture. Civil rights movements challenge various practices
                    and expand access.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Quotes Section */}
          <ScrollAnimation delay={300}>
            <div className="mb-16">
              <h2 className="font-serif text-4xl mb-8 text-gradient text-center">Perspectives on the Dream</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-effect p-8 rounded-lg border border-amber-400/20 flex flex-col items-center hover-lift quote-card">
                  <Quote className="h-10 w-10 text-amber-400 mb-4 animate-float" />
                  <p className="text-slate-200 mb-4 italic font-serif text-center">
                    "The American Dream is that dream of a land in which life should be better and richer and fuller for
                    everyone, with opportunity for each according to ability or achievement."
                  </p>
                  <span className="text-amber-400 font-light">— James Truslow Adams, 1931</span>
                </div>

                <div className="glass-effect p-8 rounded-lg border border-amber-400/20 flex flex-col items-center hover-lift quote-card">
                  <Quote className="h-10 w-10 text-amber-400 mb-4 animate-float" />
                  <p className="text-slate-200 mb-4 italic font-serif text-center">
                    "The American Dream has become a death trap of betrayal, murder, and revenge, and I want to wake
                    up."
                  </p>
                  <span className="text-amber-400 font-light">— Bakari Kitwana</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Critical Analysis Section */}
          <ScrollAnimation delay={400}>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1 relative">
                <div className="absolute -inset-4 bg-amber-400/10 rounded-lg blur-xl"></div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-amber-400/30 hover-lift">
                  <Image
                    src="/image5.webp"
                    alt="Income inequality statistics showing challenges to the American Dream"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="font-serif text-4xl mb-6 text-gradient">Critical Analysis</h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                Scholarship also confirms how the American Dream functions not just as a mythology of liberation, but also a limiting ideology. Cultural capital theory by Pierre Bourdieu describes how seemingly meritocratic systems reproduce class divisions through hidden privilege.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                The dream's emphasis on individual responsibility blinds us to structural inequalities, producing what sociologists term "meritocratic legitimacy"—the belief that outcomes are a result of individual merit rather than of systemic processes.
                </p>
                <div className="flex items-center gap-2 text-amber-400">
                  <Sparkles className="h-5 w-5 animate-float" />
                  <span className="font-serif italic">Ideology, meritocracy, and social reproduction</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Contemporary Relevance */}
          <ScrollAnimation delay={500}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-4xl mb-6 text-gradient">Contemporary Challenges</h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                Increasing income inequality, declining social mobility, and increasing education cost undermine traditional American Dream narratives. Economic indicators show that mobility over a span of multiple generations decreased significantly after the 1940s, by and large within working-class families.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                And the dream persists, taking on new contexts: the entrepreneurship of tech start-ups, social media influence, and gig economy narratives create new narratives of self-made achievement with the same underlying narratives of individual agency and material advancement.
                </p>
                <div className="flex items-center gap-2 text-amber-400">
                  <Sparkles className="h-5 w-5 animate-float" />
                  <span className="font-serif italic">Adaptation and persistence in changing times</span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-amber-400/20 rounded-lg blur-xl animate-pulse-glow"></div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-amber-400/30 hover-lift">
                  <Image
                    src="/image6.jpg"
                    alt="Modern Silicon Valley representing contemporary American Dream"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Final Quote Section */}
      <section className="py-16 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 animate-gradient opacity-50"></div>

        <ScrollAnimation>
          <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
            <div className="glass-effect p-10 rounded-lg border border-amber-400/30 hover-lift">
              <Quote className="h-16 w-16 text-amber-400 mx-auto mb-6 animate-float" />
              <p className="text-slate-200 mb-6 italic font-serif text-xl md:text-2xl">
                "The American Dream is not a sprint, or even a marathon, but a relay. Our families don't always cross
                the finish line in the span of one generation. But each generation passes on to the next the fruits of
                their labor."
              </p>
              <span className="text-amber-400 font-light">— Julian Castro</span>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Next Pages Navigation */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="font-serif text-3xl mb-8 text-center text-gradient">Continue Exploring</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/great-gatsby" className="group">
                <div className="glass-effect border border-emerald-400/20 rounded-lg p-6 h-full group-hover:border-emerald-400/50 transition-all hover-lift quote-card">
                  <h3 className="font-serif text-2xl mb-2 text-gradient-emerald">The Great Gatsby</h3>
                  <p className="text-slate-300 mb-4">
                    Explore Fitzgerald's modernist critique of American capitalism and social stratification.
                  </p>
                  <span className="text-emerald-400 font-light group-hover:underline">Read next →</span>
                </div>
              </Link>

              <Link href="/runner" className="group">
                <div className="glass-effect border border-blue-400/20 rounded-lg p-6 h-full group-hover:border-blue-400/50 transition-all hover-lift quote-card">
                  <h3 className="font-serif text-2xl mb-2 text-gradient-blue">The Runner</h3>
                  <p className="text-slate-300 mb-4">
                    Discover contemporary identity performance and institutional vulnerability.
                  </p>
                  <span className="text-blue-400 font-light group-hover:underline">Read next →</span>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
