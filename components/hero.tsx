
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, MapPin } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-28">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute left-1/4 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Left Content */}
          <div>
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-foreground">
              Discover more than <span className="text-accent">5000+ Jobs</span>
            </h1>

            <p className="mb-8 text-lg text-muted-foreground">
              Great platform for the job seeker that searching for new career heights and passionate about startups.
            </p>

            {/* Search Bar */}
            <div className="mb-6 flex flex-col gap-3 sm:flex-row rounded-lg border border-border bg-background p-3">
              <div className="flex flex-1 items-center gap-2 border-r border-border pr-3">
                <Search size={20} className="text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex flex-1 items-center gap-2">
                <MapPin size={20} className="text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Florence, Italy"
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap">
                Search my job
              </Button>
            </div>

            {/* Popular Tags */}
            <p className="mb-3 text-sm text-muted-foreground">
              Popular: UI Designer, UX Researcher, Android, Admin
            </p>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center bg-[url('/Pattern.png')] bg-cover bg-center rounded-lg">
            <div className="relative h-96 w-full md:h-[500px]">
              <Image
                src="/hero.png"
                alt="Professional male with glasses"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
