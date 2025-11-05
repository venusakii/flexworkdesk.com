"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Sparkles } from "lucide-react"

const products = [
  {
    title: "Standing Desks",
    description:
      "Electric height-adjustable desks with memory presets for seamless transitions between sitting and standing.",
    icon: Zap,
    image: "/electric-standing-desk-white-background.jpg",
    delay: "animate-delay-100",
  },
  {
    title: "Ergonomic Chairs",
    description: "Premium seating solutions with lumbar support and adjustable features for all-day comfort.",
    icon: Shield,
    image: "/ergonomic-office-chair-modern-design.jpg",
    delay: "animate-delay-200",
  },
  {
    title: "Desk Accessories",
    description: "Monitor arms, cable management, and organizational tools to optimize your workspace.",
    icon: Sparkles,
    image: "/desk-accessories-monitor-arm-cable-management.jpg",
    delay: "animate-delay-300",
  },
]

export function ProductCards() {
  return (
    <section id="products" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Designed for productivity</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Every product is engineered with precision to enhance your workflow and support your health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-border hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in-up ${product.delay}`}
            >
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden bg-secondary">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{product.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                  <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary/80">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
