import Image from "next/image"
import { Sparkles, Quote } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ParallaxSection } from "@/components/parallax-section"

export default function RunnerPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <ParallaxSection speed={0.3}>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1920&text=Running+Track+Stadium')] bg-cover bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900"></div>
          </div>
        </ParallaxSection>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="font-serif text-5xl md:text-6xl mb-6 text-gradient-blue">The Runner</h1>
          </div>
          <ScrollAnimation delay={300}>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The true story of James Hogue, the Ivy League impostor who reinvented himself to chase his own American
              Dream
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-slate-900 relative">
        <div className="absolute inset-0 art-deco-pattern opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-serif text-4xl mb-6 text-gradient-blue">The Master of Reinvention</h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                The Runner: A True Account of the Amazing Lies and Fantastical Adventures of the Ivy League Impostor James Hogue is a book that tells of James Hogue, who reinvented himself in pursuit of the American Dream. Hogue pretended to be a self-taught orphan by the name of Alexi Santana to gain admission to attend Princeton University in the late 1980s, after he pretended to be a high school student at Palo High School in his mid-20s. The story of his deception is a reinvention of a sort that is reminiscent of the story of Jay Gatsby.
                </p>
                <div className="flex items-center gap-2 text-blue-400">
                  <Sparkles className="h-5 w-5 animate-float" />
                  <span className="font-serif italic">A modern Gatsby in pursuit of reinvention</span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-400/20 rounded-lg blur-xl animate-pulse-glow"></div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-blue-400/30 hover-lift">
                  <Image
                    src="/image12.jpg"
                    alt="James Hogue - the Ivy League impostor"
                   fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Quotes Section */}
          <ScrollAnimation delay={200}>
            <div className="mb-16">
              <h2 className="font-serif text-4xl mb-8 text-gradient-blue text-center">Memorable Quotes</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-effect p-8 rounded-lg border border-blue-400/20 flex flex-col items-center hover-lift quote-card">
                  <Quote className="h-10 w-10 text-blue-400 mb-4 animate-float" />
                  <p className="text-slate-200 mb-4 italic font-serif">
                    "He was whoever he needed to be, whoever you wanted him to be. He was a mirror that reflected your
                    own desires."
                  </p>
                  <span className="text-blue-400 font-light">— Anonymous</span>
                </div>

                <div className="glass-effect p-8 rounded-lg border border-blue-400/20 flex flex-col items-center hover-lift quote-card">
                  <Quote className="h-10 w-10 text-blue-400 mb-4 animate-float" />
                  <p className="text-slate-200 mb-4 italic font-serif">
                    "Hogue's life was a series of performances, each one more elaborate than the last. He didn't just
                    tell lies; he lived them completely."
                  </p>
                  <span className="text-blue-400 font-light">— David Samuels</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Parallels Section */}
          <ScrollAnimation delay={300}>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1 relative">
                <div className="absolute -inset-4 bg-blue-400/10 rounded-lg blur-xl"></div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-blue-400/30 hover-lift">
                  <Image
                    src="/image13.jpeg"
                    alt="Princeton University campus - Gothic architecture"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="font-serif text-4xl mb-6 text-gradient-blue">Parallels with Gatsby</h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                Like Jay Gatsby, James Hogue understood that identity in America is fluid and that reinvention is possible. Both created fictions around the past, assumed new identities, and created personas meant to gain access to upper social circles.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  "In America, you can be whoever you say you are." Hogue pushed that notion to the limit, testing our popular beliefs in second chances and the ability to reinvent ourselves.
                </p>
                <div className="flex items-center gap-2 text-blue-400">
                  <Sparkles className="h-5 w-5 animate-float" />
                  <span className="font-serif italic">The dark side of reinvention</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Connection to Humanities Section */}
          <ScrollAnimation delay={400}>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-serif text-4xl mb-6 text-gradient-blue">Connection to Humanities</h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                The Runner intersects with humanities in that it takes on the fluidity of identity and those social institutions that promote or resist self-reinvention. Hogue's work is a consideration of the myth of meritocracy, problematizing how access to elite institutions reshapes our notion of privilege and access.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                It is a call to explore the ethics, the identity, and the human desire to belong, and to the extremes to which humans will go to try to transcend their circumstances and the ethics thereof.
                </p>
                <div className="flex items-center gap-2 text-blue-400">
                  <Sparkles className="h-5 w-5 animate-float" />
                  <span className="font-serif italic">Identity, ethics, and social structures</span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-400/20 rounded-lg blur-xl animate-pulse-glow"></div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-blue-400/30 hover-lift">
                  <Image
                    src="/image14.jpg"
                    alt="Elite university admissions representing institutional access"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* More Quotes */}
          <ScrollAnimation delay={500}>
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-effect p-8 rounded-lg border border-blue-400/20 flex flex-col items-center hover-lift quote-card">
                  <Quote className="h-10 w-10 text-blue-400 mb-4 animate-float" />
                  <p className="text-slate-200 mb-4 italic font-serif">
                    "The truly remarkable thing about Hogue wasn't just his ability to deceive others, but his
                    commitment to the deception. He ran track at Princeton with the same dedication as if he truly were
                    the self-taught orphan from Utah he claimed to be."
                  </p>
                  <span className="text-blue-400 font-light">— David Samuels</span>
                </div>

                <div className="glass-effect p-8 rounded-lg border border-blue-400/20 flex flex-col items-center hover-lift quote-card">
                  <Quote className="h-10 w-10 text-blue-400 mb-4 animate-float" />
                  <p className="text-slate-200 mb-4 italic font-serif">
                    "What makes a person real? Is it their past, their credentials, their connections? Or is it simply
                    their ability to convince others of who they claim to be? Hogue's story forces us to confront these
                    questions."
                  </p>
                  <span className="text-blue-400 font-light">— Anonymous</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* The American Dream Section */}
          <ScrollAnimation delay={600}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-4xl mb-6 text-gradient-blue">The American Dream Deconstructed</h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                The Runner showcases how our collective myth of meritocracy and self-making can also be manipulated. Hogue wasn't just wanting the trappings of success—he was wanting the story, the story of getting there from the ground up through talent and grit.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                Similarly to how Fitzgerald used Gatsby to denounce the American Dream, Hogue's story exposes the vulnerability of our institutions and the oft-too-empty character of status and achievement. His dishonesty was possible because others wanted to believe in the inspiring story he was selling.
                </p>
                <div className="flex items-center gap-2 text-blue-400">
                  <Sparkles className="h-5 w-5 animate-float" />
                  <span className="font-serif italic">"He didn't just chase the American Dream—he hacked it."</span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-400/20 rounded-lg blur-xl animate-pulse-glow"></div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-blue-400/30 hover-lift">
                  <Image
                    src="/image15.png"
                    alt="Fake identification documents representing identity deception"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* My Perspective Section */}
          <ScrollAnimation delay={700}>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1 relative">
                <div className="absolute -inset-4 bg-blue-400/10 rounded-lg blur-xl"></div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-blue-400/30 hover-lift">
                  <Image
                    src="/image16.jpeg"
                    alt="Mirror reflection representing questions of identity and authenticity"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="font-serif text-4xl mb-6 text-gradient-blue">My Perspective</h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                I found it interesting and unsettling to read The Runner's story of James Hogue. It reminded me of how a fine line exists between ambition and lying, and how far someone will go in order to escape the past.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                I admire his boldness, but I must admit that his story betrays a deeper flaw in our society--where ambition to succeed compels us to sacrifice our honesty, leaving me to ponder what true cost of chasing an idealized persona is.
                </p>
                <div className="flex items-center gap-2 text-blue-400">
                  <Sparkles className="h-5 w-5 animate-float" />
                  <span className="font-serif italic">Ambition, identity, and moral compromise</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Next Pages Navigation */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="font-serif text-3xl mb-8 text-center text-gradient-blue">Continue Exploring</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/dream" className="group">
                <div className="glass-effect border border-amber-400/20 rounded-lg p-6 h-full group-hover:border-amber-400/50 transition-all hover-lift quote-card">
                  <h3 className="font-serif text-2xl mb-2 text-gradient">The American Dream</h3>
                  <p className="text-slate-300 mb-4">Explore the concept of the American Dream and its evolution.</p>
                  <span className="text-amber-400 font-light group-hover:underline">Read more →</span>
                </div>
              </Link>

              <Link href="/great-gatsby" className="group">
                <div className="glass-effect border border-emerald-400/20 rounded-lg p-6 h-full group-hover:border-emerald-400/50 transition-all hover-lift quote-card">
                  <h3 className="font-serif text-2xl mb-2 text-gradient-emerald">The Great Gatsby</h3>
                  <p className="text-slate-300 mb-4">
                    Discover Fitzgerald's masterpiece about wealth and the American Dream.
                  </p>
                  <span className="text-emerald-400 font-light group-hover:underline">Read more →</span>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
