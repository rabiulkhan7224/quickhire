'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center ">
            <Image 
            src={'/Logo.png'}
            alt='logo'
                width={16}
                height={16}
            ></Image>
          </div>
          <span className="hidden text-lg font-bold text-foreground sm:inline-block">Quickhire</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-sm text-foreground hover:text-primary transition">
            Find Jobs
          </Link>
          <Link href="#" className="text-sm text-foreground hover:text-primary transition">
            Browse Companies
          </Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <Link href="#" className="text-sm text-foreground hover:text-primary transition">
              Find Jobs
            </Link>
            <Link href="#" className="text-sm text-foreground hover:text-primary transition">
              Browse Companies
            </Link>
            <div className="flex gap-2 pt-4 border-t border-border">
              <Button variant="ghost" size="sm" className="flex-1">
                Login
              </Button>
              <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
