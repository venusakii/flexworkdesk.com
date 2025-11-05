import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-primary rounded-3xl p-12 lg:p-16 text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
            Ready to transform your workspace?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Join thousands of professionals who have upgraded their productivity with FlexWorkDesk solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base">
              Browse Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
