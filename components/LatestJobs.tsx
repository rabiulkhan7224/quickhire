'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function LatestJobs() {
  const jobs = [
    {
      id: 1,
      title: 'Social Media Assistant',
      company: 'Sociaf',
      location: 'Paris, France',
      tags: ['Full-time', 'Recruiting', 'Design'],
      icon: '📱',
      featured: false,
    },
    {
      id: 2,
      title: 'Social Media Assistant',
      company: 'Notify',
      location: 'Paris, France',
      tags: ['Full-time', 'Recruiting', 'Design'],
      icon: '🔔',
      featured: false,
    },
    {
      id: 3,
      title: 'Brand Designer',
      company: 'Dropbox',
      location: 'San Francisco, US',
      tags: ['Full-time', 'Recruiting', 'Design'],
      icon: '🎨',
      featured: false,
    },
    {
      id: 4,
      title: 'Brand Designer',
      company: 'Moto',
      location: 'San Francisco, US',
      tags: ['Full-time', 'Recruiting', 'Design'],
      icon: '🚗',
      featured: false,
    },
    {
      id: 5,
      title: 'Interactive Developer',
      company: 'TeleComm',
      location: 'Hamburg, Germany',
      tags: ['Full-time', 'Recruiting', 'Design'],
      icon: '⚡',
      featured: false,
    },
    {
      id: 6,
      title: 'Interactive Developer',
      company: 'Velocity',
      location: 'Hamburg, Germany',
      tags: ['Full-time', 'Recruiting', 'Design'],
      icon: '⚙️',
      featured: false,
    },
    {
      id: 7,
      title: 'HR Manager',
      company: 'Pipeteer',
      location: 'Lucern, Switzerland',
      tags: ['Full-time', 'Recruiting', 'Design'],
      icon: '👥',
      featured: false,
    },
    {
      id: 8,
      title: 'HR Manager',
      company: 'Pipeteer',
      location: 'Lucern, Switzerland',
      tags: ['Full-time', 'Recruiting', 'Design'],
      icon: '💼',
      featured: false,
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Latest <span className="text-accent">jobs open</span>
          </h2>
          <Link href="#" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            Show all jobs <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="rounded-lg border border-border bg-background p-6 transition hover:shadow-md hover:border-primary/30 cursor-pointer"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-xl">
                    {job.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                  </div>
                </div>
              </div>

              <p className="mb-4 text-sm text-muted-foreground flex items-center gap-1">
                 {job.location}
              </p>

              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant={index === 0 ? 'default' : 'secondary'}
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
