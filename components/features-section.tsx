import { Ruler, Zap, Leaf, Headphones } from "lucide-react"

const features = [
  {
    icon: Ruler,
    title: "Precision Engineering",
    description: "Built with high-quality materials and tested for durability to last years of daily use.",
  },
  {
    icon: Zap,
    title: "Smart Technology",
    description: "Integrated memory presets and collision detection for seamless height adjustments.",
  },
  {
    icon: Leaf,
    title: "Sustainable Materials",
    description: "Eco-friendly production with responsibly sourced materials and minimal waste.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Dedicated customer service team ready to help with setup and any questions.",
  },
]

export function FeaturesSection() {
  return (
    <section id="solutions" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Built for the modern workspace
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Our products combine cutting-edge technology with timeless design principles to create workspaces that
              inspire productivity and promote well-being.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-card rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/modern-office-workspace-with-standing-desk-and-erg.jpg"
                alt="Modern workspace setup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <div className="text-sm font-medium">Warranty</div>
              <div className="text-3xl font-bold">10 Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
