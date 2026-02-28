
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function CTA() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 md:grid-cols-2 md:gap-12 md:p-12 lg:p-16">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Start posting jobs today
            </h2>
            <p className="mb-6 text-primary-foreground/90">
              Sign up for free and unlock all the benefits of Quickhire
            </p>
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Sign Up for Free
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative  bottom-0 h-64 ">
           <Image
           src={'/cta-image.png'}
           alt='cta-image'
              fill
           className=''
           />
          </div>
        </div>
      </div>
    </section>
  )
}
