'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Palette, TrendingUp, Target, DollarSign, Monitor, Code, Briefcase, Users } from 'lucide-react'
import Link from 'next/link'

export function Categories() {
  const categories = [
    { id: 1, name: 'Design', icon: Palette, jobs: 235, color: 'bg-blue-50 dark:bg-blue-950' },
    { id: 2, name: 'Sales', icon: TrendingUp, jobs: 758, color: 'bg-blue-50 dark:bg-blue-950' },
    { id: 3, name: 'Marketing', icon: Target, jobs: 140, color: 'bg-primary text-primary-foreground' },
    { id: 4, name: 'Finance', icon: DollarSign, jobs: 325, color: 'bg-blue-50 dark:bg-blue-950' },
    { id: 5, name: 'Technology', icon: Monitor, jobs: 438, color: 'bg-blue-50 dark:bg-blue-950' },
    { id: 6, name: 'Engineering', icon: Code, jobs: 640, color: 'bg-blue-50 dark:bg-blue-950' },
    { id: 7, name: 'Business', icon: Briefcase, jobs: 201, color: 'bg-blue-50 dark:bg-blue-950' },
    { id: 8, name: 'Human Resource', icon: Users, jobs: 346, color: 'bg-blue-50 dark:bg-blue-950' },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Explore by <span className="text-accent">category</span>
          </h2>
          <Link href="#" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            Show all jobs <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.id}
                className={` p-6 border transition hover:shadow-lg hover:bg-primary cursor-pointer ${category.color}`}
              >
                <Icon size={32} className={category.id === 3 ? 'text-primary-foreground mb-4' : 'text-primary mb-4'} />
                <h3 className={`mb-1 text-lg font-semibold ${category.id === 3 ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {category.name}
                </h3>
                <p className={`text-sm ${category.id === 3 ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                  {category.jobs} jobs available
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
