'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Globe, Github, Briefcase, Users } from 'lucide-react'
import Link from 'next/link'

export function FeaturedJobs() {
  const jobs = [
    {
      id: 1,
      title: 'Email Marketing',
      company: 'Nestful',
      location: 'Madrid, Spain',
      tags: ['Recruiting', 'Design'],
      icon: '✉️',
    },
    {
      id: 2,
      title: 'Brand Designer',
      company: 'Dropbox',
      location: 'San Francisco, US',
      tags: ['Design', 'Business'],
      icon: '🎨',
    },
    {
      id: 3,
      title: 'Direct Marketer',
      company: 'Pitch',
      location: 'Berlin, Germany',
      tags: ['Marketing'],
      icon: '📍',
    },
    {
      id: 4,
      title: 'Visual Designer',
      company: 'Melon',
      location: 'Granada, Spain',
      tags: ['Design'],
      icon: '🎯',
    },
    {
      id: 5,
      title: 'Product Designer',
      company: 'Classfied',
      location: 'Manchester, UK',
      tags: ['Recruiting', 'Design'],
      icon: '💼',
    },
    {
      id: 6,
      title: 'Lead Designer',
      company: 'Canva',
      location: 'Ontario, Canada',
      tags: ['Design', 'Business'],
      icon: '🚀',
    },
    {
      id: 7,
      title: 'Brand Strategist',
      company: 'Codeably',
      location: 'Marseille, France',
      tags: ['Marketing'],
      icon: '🌟',
    },
    {
      id: 8,
      title: 'Data Analyst',
      company: 'Twitter',
      location: 'San Diego, US',
      tags: ['Technology'],
      icon: '📊',
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Featured <span className="text-accent">jobs</span>
          </h2>
          <Link href="#" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            Show all jobs <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="group rounded-lg border border-border bg-background p-6 transition hover:shadow-md hover:border-primary/30 cursor-pointer"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-xl">
                  {job.icon}
                </div>
               
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{job.title}</h3>
                  <p className="text-xs text-muted-foreground">{job.company}</p>
                </div>
                 <Button
                variant="ghost"
                size="sm"
                className="border border-primary"
              >
                Full Time
              </Button>
              </div>

              <p className="mb-4 text-xs text-muted-foreground flex items-center gap-1">
                📍 {job.location}
              </p>

              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
