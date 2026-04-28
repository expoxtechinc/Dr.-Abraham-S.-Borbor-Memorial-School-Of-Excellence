import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionReveal } from "@/components/SectionReveal";
import { FAQ } from "@/components/FAQ";
import { useStoreValue } from "@/hooks/useStore";
import { getSchoolInfo, addMessage, ASSETS } from "@/lib/store";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Phone, Mail, MessageCircle, MapPin, Facebook, Send, CheckCircle2, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const school = useStoreValue(getSchoolInfo);
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  useDocumentTitle(
    `Contact | ${school.name}`,
    `Reach Dr. Abraham S. Borbor Memorial School of Excellence in ${school.address}, ${school.country}.`,
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      phone: String(form.get("phone") || "").trim() || undefined,
      subject: String(form.get("subject") || "").trim(),
      message: String(form.get("message") || "").trim(),
    };
    if (!payload.name || !payload.email || !payload.message || !payload.subject) {
      toast({ title: "Please complete required fields", variant: "destructive" });
      setSubmitting(false);
      return;
    }
    addMessage(payload);
    e.currentTarget.reset();
    setSubmitted(true);
    setSubmitting(false);
    toast({
      title: "Message sent",
      description: "Thank you. Our office will reach out shortly.",
    });
  }

  const phoneClean = (p: string) => p.replace(/\s+/g, "");

  return (
    <Layout>
      <section className="relative pt-24 sm:pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={ASSETS.imgClass2} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <Badge className="bg-accent/95 text-accent-foreground border-0 uppercase tracking-wider text-xs font-semibold">
            Contact · Visit · Enroll
          </Badge>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] max-w-4xl text-balance">
            Let's start a conversation about your child's future.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl">
            Call any of our published numbers, send us a message, drop in for a campus tour, or
            chat with us instantly on WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Quick contact */}
            <SectionReveal className="lg:col-span-5 space-y-4">
              <a
                href={`https://wa.me/${school.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="block"
                data-testid="link-whatsapp-card"
              >
                <Card className="bg-[#25D366] text-white border-0 hover:scale-[1.01] transition-transform shadow-lg">
                  <CardContent className="p-6 flex items-center gap-5">
                    <div className="h-14 w-14 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                      <MessageCircle className="h-7 w-7" fill="currentColor" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/80">Fastest Reply</p>
                      <p className="font-display text-xl font-bold">Chat on WhatsApp</p>
                      <p className="text-sm text-white/85 mt-0.5">Tap to message admissions now.</p>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {school.phones.map((p) => (
                <Card key={p} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                      <a
                        href={`tel:${phoneClean(p)}`}
                        className="font-semibold text-base hover:text-primary transition-colors"
                        data-testid={`link-phone-${phoneClean(p)}`}
                      >
                        {p}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                    <a
                      href={`mailto:${school.email}`}
                      className="font-semibold hover:text-primary transition-colors break-all"
                    >
                      {school.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Address</p>
                    <p className="font-semibold">{school.address}</p>
                    <p className="text-sm text-muted-foreground">
                      {school.city}, {school.country}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Office Hours</p>
                    <p className="font-semibold">Monday – Friday</p>
                    <p className="text-sm text-muted-foreground">8:00 AM – 4:00 PM</p>
                  </div>
                </CardContent>
              </Card>

              <a href={school.facebook} target="_blank" rel="noreferrer" className="block">
                <Card className="bg-[#1877F2] text-white border-0 hover:scale-[1.01] transition-transform shadow-lg">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                      <Facebook className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-wider text-white/80">Follow Us</p>
                      <p className="font-semibold">facebook.com/DASBMSE</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </SectionReveal>

            {/* Form */}
            <SectionReveal className="lg:col-span-7" delay={0.1}>
              <Card className="border-card-border shadow-xl">
                <CardContent className="p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                    Send Us a Message
                  </p>
                  <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold">
                    We typically respond within one school day.
                  </h2>

                  {submitted && (
                    <div className="mt-5 p-4 rounded-lg bg-accent/15 border border-accent/30 flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <p className="text-sm">
                        Thank you for reaching out. Your message has been received and our office
                        will get back to you very soon.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" required data-testid="input-name" placeholder="Your name" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          data-testid="input-email"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" data-testid="input-phone" placeholder="+231 ..." />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          required
                          data-testid="input-subject"
                          placeholder="Admissions, tour, etc."
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        data-testid="input-message"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting}
                      className="w-full sm:w-auto font-semibold"
                      data-testid="button-submit-contact"
                    >
                      {submitting ? "Sending..." : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </SectionReveal>
          </div>
        </div>
      </section>

      <FAQ />

      {/* Map */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-6">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
              Find Us
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold">
              Visit our campus in Mount Barclay.
            </h2>
          </SectionReveal>
          <SectionReveal>
            <Card className="overflow-hidden border shadow-lg">
              <div className="aspect-[16/10] sm:aspect-[16/8] w-full">
                <iframe
                  title="Borbor Memorial School Location Map"
                  src="https://www.google.com/maps?q=Mount+Barclay,+Lower+Johnsonville,+Liberia&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Card>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
}
