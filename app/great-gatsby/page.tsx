import Image from "next/image"
import { Sparkles, Quote } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ParallaxSection } from "@/components/parallax-section"

export default function GreatGatsbyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <ParallaxSection speed={0.3}>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1920&text=Art+Deco+1920s+Skyline')] bg-cover bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900"></div>
          </div>
        </ParallaxSection>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="font-serif text-5xl md:text-6xl mb-6 text-gradient-emerald">The Great Gatsby</h1>
          </div>
          <ScrollAnimation delay={300}>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The journey of Jay Gatsby, and his pursuit of the elusive American Dream through the eyes of Nick Carraway
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
                <h2 className="font-serif text-4xl mb-6 text-gradient-emerald">The Novel</h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                F. Scott Fitzgerald's 1925 novel "The Great Gatsby" is his masterpiece and has been labeled by many as the defining novel of the Jazz Age. 
                The novel is set in the summer of 1922 and represents a tragic romance between Jay Gatsby, a rich self-made man, and Daisy Buchanan, 
                a wealthy young woman he idealized in his youth.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                Through the perspective of narrator Nick Carraway, Fitzgerald paints a picture of unparalleled affluence, lavish parties, 
                illicit romance, and ultimately, the decay and shallowness that can lie underneath the veil of the American Dream.
                </p>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Sparkles className="h-5 w-5 animate-float" />
                  <span className="font-serif italic">A defining novel of the Jazz Age</span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-emerald-400/20 rounded-lg blur-xl animate-pulse-glow"></div>
                <div className="relative aspect-[100/90] rounded-lg overflow-hidden border border-emerald-400/30 hover-lift">
                  <Image
                    src="/image7.webp"
                    alt="The Great Gatsby original 1925 book cover"
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
              <h2 className="font-serif text-4xl mb-8 text-gradient-emerald text-center">Memorable Quotes</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-effect p-8 rounded-lg border border-emerald-400/20 flex flex-col items-center hover-lift quote-card">
                  <Quote className="h-10 w-10 text-emerald-400 mb-4 animate-float" />
                  <p className="text-slate-200 mb-4 italic font-serif">
                  "Can't repeat the past? Why of course you can!"
                  </p>
                  <span className="text-emerald-400 font-light">— Jay Gatsby</span>
                </div>

                <div className="glass-effect p-8 rounded-lg border border-emerald-400/20 flex flex-col items-center hover-lift quote-card">
                  <Quote className="h-10 w-10 text-emerald-400 mb-4 animate-float" />
                  <p className="text-slate-200 mb-4 italic font-serif">
                    "He had one of those rare smiles with a quality of eternal reassurance in it, that you may come across four or five times in life."
                  </p>
                  <span className="text-emerald-400 font-light">— Nick Carraway</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Characters Section */}
          <ScrollAnimation delay={300}>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1 relative">
                <div className="absolute -inset-4 bg-emerald-400/10 rounded-lg blur-xl"></div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-emerald-400/30 hover-lift">
                  <Image
                    src="/image8.jpg"
                    alt="Gatsby's mansion in West Egg, Long Island"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="font-serif text-4xl mb-6 text-gradient-emerald">The Characters</h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                The central figure of the novel is Jay Gatsby, once James Gatz, who remade his life through sheer drive and willpower 
                (and illegal means) into a wealthy man worthy of winning Daisy Buchanan's love. This self-made man is his 
                reinvention, which is the very core of the American Dream.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                Some of the other major players of the novel are Nick Carraway, the moral observer; Daisy Buchanan, Gatsby's "dream"; Tom Buchanan, her wealthy husband; Jordan Baker, 
                the golfer; and Myrtle and George Wilson, the 
                working class figures trapped in the "valley of ashes".
                </p>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Sparkles className="h-5 w-5 animate-float" />
                  <span className="font-serif italic">"Can't repeat the past? Why of course you can!"</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* More Quotes */}
          <ScrollAnimation delay={400}>
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-effect p-8 rounded-lg border border-emerald-400/20 flex flex-col items-center hover-lift quote-card">
                  <Quote className="h-10 w-10 text-emerald-400 mb-4 animate-float" />
                  <p className="text-slate-200 mb-4 italic font-serif">
                  "The truth was that Jay Gatsby, of West Egg, Long Island, sprang from his Platonic conception of himself. He was a son of God—a phrase which, if it means anything, means just that—and he must be about His Fathers business, the service of a vast, vulgar, and meretricious beauty."
                  </p>
                  <span className="text-emerald-400 font-light">— Nick Carraway</span>
                </div>

                <div className="glass-effect p-8 rounded-lg border border-emerald-400/20 flex flex-col items-center hover-lift quote-card">
                  <Quote className="h-10 w-10 text-emerald-400 mb-4 animate-float" />
                  <p className="text-slate-200 mb-4 italic font-serif">
                    "I hope she'll be a fool—that's the best thing a girl can be in this world, a beautiful little
                    fool."
                  </p>
                  <span className="text-emerald-400 font-light">— Daisy Buchanan</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Symbols Section */}
          <ScrollAnimation delay={500}>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-serif text-4xl mb-6 text-gradient-emerald">Powerful Symbols</h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                The green light on the end of Daisy's dock represents the aspirations and ideals of Gatsby, forever enticingly near 
                and yet hopelessly out of reach. It represents the promise of the American Dream—constantly just out of reach.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                The Valley of Ashes is a bleak wasteland of industry half way between New York City and West Egg, 
                symbolizing the moral decay beneath the beautiful veneer of wealth. The gaze of Doctor T.J. Eckleburg, 
                a faded advertisement on a dilapidated billboard, looks out over the wasteland like the very eyes of God, 
                seeing the moral decay of the area.
                </p>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Sparkles className="h-5 w-5 animate-float" />
                  <span className="font-serif italic">The green light: hope, promise, and illusion</span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-emerald-400/20 rounded-lg blur-xl animate-pulse-glow"></div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-emerald-400/30 hover-lift">
                  <Image
                    src="/image9.jpg"
                    alt="The green light at the end of Daisy's dock"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Connection to Humanities Section */}
          <ScrollAnimation delay={600}>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1 relative">
                <div className="absolute -inset-4 bg-emerald-400/10 rounded-lg blur-xl"></div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-emerald-400/30 hover-lift">
                  <Image
                    src="/image10.webp"
                    alt="Jazz Age cultural scene representing humanities context"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="font-serif text-4xl mb-6 text-gradient-emerald">Connections</h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                The Great Gatsby provides a deep glimpse into humanitites that probes the tension between public morality and 
                individual ambition. It is a critique of the American Dream illusion, how the pursuit of status and money has the ability to 
                corrupt moral character and human relationships.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                Both symbols of the novel, the green light and the Valley of Ashes, serve to highlight the disparity between desire and 
                actuality, causing one to reflect on class, identity, and the ethical cost of material wealth—all themes central to human history and culture.
                </p>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Sparkles className="h-5 w-5 animate-float" />
                  <span className="font-serif italic">A timeless exploration of human values</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* My Perspective Section */}
          <ScrollAnimation delay={700}>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-serif text-4xl mb-6 text-gradient-emerald">My Perspective</h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                I find The Great Gatsby to be a hauntingly timeless cautionary tale. The stubborn pursuit by Gatsby of a 
                past-oriented ideal resonates with me as a reminder of how we're trapped by our own illusions and strive after ideals that are 
                never going to fulfill us.

                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                The author's depiction of barren wealth made me re-evaluate the definition of success and happiness and rather put 
                meaningfulness above superficial success.

                </p>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Sparkles className="h-5 w-5 animate-float" />
                  <span className="font-serif italic">A personal reflection on illusion and reality</span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-emerald-400/20 rounded-lg blur-xl animate-pulse-glow"></div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-emerald-400/30 hover-lift">
                  <Image
                    src="/image11.jpg"
                    alt="The Valley of Ashes representing moral decay"
                    fill
                    className="object-cover"
                  />
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
            <h2 className="font-serif text-3xl mb-8 text-center text-gradient-emerald">Continue Exploring</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/dream" className="group">
                <div className="glass-effect border border-amber-400/20 rounded-lg p-6 h-full group-hover:border-amber-400/50 transition-all hover-lift quote-card">
                  <h3 className="font-serif text-2xl mb-2 text-gradient">The American Dream</h3>
                  <p className="text-slate-300 mb-4">Explore the concept of the American Dream and its evolution.</p>
                  <span className="text-amber-400 font-light group-hover:underline">Read more →</span>
                </div>
              </Link>

              <Link href="/runner" className="group">
                <div className="glass-effect border border-blue-400/20 rounded-lg p-6 h-full group-hover:border-blue-400/50 transition-all hover-lift quote-card">
                  <h3 className="font-serif text-2xl mb-2 text-gradient-blue">The Runner</h3>
                  <p className="text-slate-300 mb-4">Discover the true story of James Hogue, a modern Gatsby.</p>
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
