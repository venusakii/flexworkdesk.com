import { Card, CardContent } from "@/components/ui/card"
import { Activity, Eye, Heart } from "lucide-react"

const benefits = [
  {
    icon: Activity,
    title: "Improved Posture",
    stat: "87%",
    description: "Users report better posture and reduced back pain after switching to our ergonomic solutions.",
  },
  {
    icon: Eye,
    title: "Reduced Eye Strain",
    stat: "92%",
    description: "Proper monitor positioning and lighting reduce eye fatigue during long work sessions.",
  },
  {
    icon: Heart,
    title: "Better Health",
    stat: "78%",
    description: "Standing desk users experience improved circulation and increased energy levels.",
  },
]

export function ErgonomicsSection() {
  return (
    <section id="ergonomics" className="py-20 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">Your health is our priority</h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto text-pretty">
            Backed by ergonomic research and designed with your well-being in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-background/5 border-background/10 backdrop-blur-sm">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="text-5xl font-bold text-background">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-background">{benefit.title}</h3>
                <p className="text-background/70 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
