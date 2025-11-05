import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 opacity-0 animate-fade-in-up">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                New: Height-Adjustable Collection
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              Work smarter with ergonomic design
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
              Transform your workspace with flexible desks and accessories designed for maximum productivity and
              comfort. Experience the perfect balance of form and function.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">4.9/5</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
            </div>
          </div>

          <div className="relative opacity-0 animate-fade-in-up animate-delay-200">
            <div className="aspect-square bg-card rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/modern-ergonomic-standing-desk-in-minimalist-offic.jpg"
                alt="FlexWorkDesk ergonomic standing desk"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <div className="text-sm font-medium">Adjustable Height</div>
              <div className="text-2xl font-bold">60-125cm</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
