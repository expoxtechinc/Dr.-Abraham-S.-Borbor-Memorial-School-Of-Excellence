import { Card, CardContent } from "@/components/ui/card";
import { SectionReveal } from "./SectionReveal";
import { Quote } from "lucide-react";
import { useStoreValue } from "@/hooks/useStore";
import { getTestimonials } from "@/lib/store";

export function Testimonials() {
  const items = useStoreValue(getTestimonials);
  if (items.length === 0) return null;
  return (
    <section className="py-20 sm:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            Voices From Our Community
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            What parents and alumni say.
          </h2>
        </SectionReveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <SectionReveal key={t.id} delay={i * 0.06}>
              <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-accent">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="h-7 w-7 text-accent" />
                  <p className="mt-4 text-foreground/85 leading-relaxed flex-1">"{t.quote}"</p>
                  <div className="mt-6 pt-5 border-t">
                    <p className="font-semibold">{t.author}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
