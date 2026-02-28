'use client'

import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-950 text-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                <Image src="/logo.png" alt="Quickhire Logo" width={60} height={60} />
              </div>
              <span className="text-lg font-bold">Quickhire</span>
            </div>
            <p className="text-sm text-slate-400">
              Great platform for the job seeker that searching for new career heights and passionate about startups.
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-4 font-semibold">About</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="#" className="hover:text-slate-50 transition">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-50 transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-50 transition">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-50 transition">
                  Advice
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="#" className="hover:text-slate-50 transition">
                  Help Desk
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-50 transition">
                  Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-50 transition">
                  Updates
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-50 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 font-semibold">Get job notifications</h3>
            <p className="mb-4 text-sm text-slate-400">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-slate-900 border-slate-800 text-slate-50 placeholder:text-slate-500"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            2025 © Quickhire. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-slate-400 hover:text-slate-50 transition">
              <Facebook size={18} />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-slate-50 transition">
              <Twitter size={18} />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-slate-50 transition">
              <Linkedin size={18} />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-slate-50 transition">
              <Instagram size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
