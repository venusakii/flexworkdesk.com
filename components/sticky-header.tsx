"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-foreground">FlexWorkDesk</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#solutions" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Solutions
            </a>
            <a href="#ergonomics" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Ergonomics
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Products
              </a>
              <a href="#solutions" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Solutions
              </a>
              <a
                href="#ergonomics"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Ergonomics
              </a>
              <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About
              </a>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
