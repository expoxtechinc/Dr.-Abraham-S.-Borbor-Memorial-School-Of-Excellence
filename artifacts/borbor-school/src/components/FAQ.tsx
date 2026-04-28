import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionReveal } from "./SectionReveal";

const faqs = [
  {
    q: "What ages and grades does Borbor Memorial serve?",
    a: "We serve students from Primary 1 (Grade 1) through Senior High 3 (Grade 12), covering the complete K-12 spectrum.",
  },
  {
    q: "How can I enroll my child?",
    a: "Visit our office Monday through Friday, 8:00 AM – 4:00 PM, or call any of our admissions numbers. You can also send an inquiry through the contact form on this page and we will get back to you within one school day.",
  },
  {
    q: "Are there scholarships or financial assistance?",
    a: "Yes — we offer merit-based scholarships for high-performing applicants and need-based assistance reviewed annually. Reach out to admissions for the current application cycle.",
  },
  {
    q: "What is the school day like?",
    a: "Our school day begins with morning devotion at 7:45 AM and runs through 2:30 PM with structured periods, breaks, and a lunch hour. After-school clubs and sports run on selected weekdays.",
  },
  {
    q: "What curriculum do you follow?",
    a: "We follow the Liberian National Curriculum, aligned with WAEC examination standards at the senior high level, supplemented with computing, languages, and character formation.",
  },
  {
    q: "Do you offer transport?",
    a: "We do not currently operate a school bus service, but many families coordinate shared transport from nearby communities. Our office can help connect you with other parents in your area.",
  },
  {
    q: "How do I stay updated on school events?",
    a: "Follow our Facebook page, save our WhatsApp number, and check the Activities page for the latest news. PTA meetings are announced one to two weeks in advance.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 sm:py-24 bg-secondary/40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            Frequently Asked
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
            Quick answers to the questions we hear most.
          </h2>
        </SectionReveal>
        <SectionReveal>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b">
                <AccordionTrigger className="text-left font-semibold text-base py-5 hover:no-underline hover:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 text-sm leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SectionReveal>
      </div>
    </section>
  );
}
