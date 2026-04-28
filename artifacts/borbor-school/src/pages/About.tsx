import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionReveal } from "@/components/SectionReveal";
import { useStoreValue } from "@/hooks/useStore";
import { getSchoolInfo, ASSETS } from "@/lib/store";
import { Target, Eye, Heart, GraduationCap, Award, Sparkles } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const timeline = [
  {
    year: "2019",
    title: "Our Doors Opened",
    body: "Founded in honor of Dr. Abraham S. Borbor, the school welcomed its first cohort of primary students in Mount Barclay, Lower Johnsonville.",
  },
  {
    year: "2021",
    title: "Junior High Launches",
    body: "We expanded into Junior High, adding labs, sports facilities, and a full secondary curriculum to serve our growing community.",
  },
  {
    year: "2023",
    title: "Senior High Begins",
    body: "Senior High classes opened with WAEC-aligned tracks in science and arts, and our first graduating class began their journey.",
  },
  {
    year: "2025",
    title: "A Class to Celebrate",
    body: "The Class of 2025 graduated with record honors, with twelve students earning distinction in their WAEC examinations.",
  },
];

export default function About() {
  const school = useStoreValue(getSchoolInfo);
  useDocumentTitle(
    `About | ${school.name}`,
    "Learn the history, mission, and vision of Dr. Abraham S. Borbor Memorial School of Excellence.",
  );

  return (
    <Layout>
      <PageHero
        eyebrow="About Our School"
        title="More than a school — a place where futures are forged."
        subtitle={school.tagline}
        bg={ASSETS.imgGrad2}
      />

      {/* Description */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <SectionReveal className="lg:col-span-5">
              <div className="relative">
                <img
                  src={ASSETS.imgGrad1}
                  alt="Class of 2025 on graduation day"
                  className="rounded-2xl shadow-2xl object-cover aspect-[4/5] w-full"
                />
                <div className="absolute -bottom-5 -left-5 bg-accent text-accent-foreground rounded-xl shadow-xl px-5 py-4">
                  <p className="font-display text-3xl font-bold leading-none">{school.established}</p>
                  <p className="text-xs uppercase tracking-wider mt-1">Established</p>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal className="lg:col-span-7" delay={0.15}>
              <Badge variant="secondary" className="uppercase tracking-wider text-xs">Our Story</Badge>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance">
                Built to inspire — every day, in every classroom.
              </h2>
              <div className="mt-6 prose prose-lg max-w-none text-foreground/85">
                <p>{school.about}</p>
                <p>
                  We honor the memory of Dr. Abraham S. Borbor by raising up scholars who will
                  carry his vision forward — young Liberians who lead with humility, serve with
                  excellence, and never stop learning.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 sm:py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
              Our Compass
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              The mission and vision that guide us.
            </h2>
          </SectionReveal>
          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            <SectionReveal>
              <Card className="h-full border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold">Our Mission</h3>
                  <p className="mt-3 text-base leading-relaxed text-foreground/80">
                    {school.mission}
                  </p>
                </CardContent>
              </Card>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <Card className="h-full border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold">Our Vision</h3>
                  <p className="mt-3 text-base leading-relaxed text-foreground/80">
                    {school.vision}
                  </p>
                </CardContent>
              </Card>
            </SectionReveal>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { icon: Heart, title: "Values", body: "Faith · Integrity · Service · Diligence · Respect" },
              { icon: GraduationCap, title: "Academic Standard", body: "WAEC-aligned curriculum, rigorous assessments, and personalized mentoring." },
              { icon: Award, title: "Recognition", body: "Graduates earning admission and scholarship across leading institutions." },
            ].map((v, i) => (
              <SectionReveal key={v.title} delay={0.05 * i}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <v.icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-4 font-display text-lg font-bold">{v.title}</h4>
                    <p className="mt-1.5 text-sm text-muted-foreground">{v.body}</p>
                  </CardContent>
                </Card>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY TIMELINE */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
              Our Journey
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              From a single classroom to a graduating class.
            </h2>
          </SectionReveal>
          <div className="mt-14 relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-1/2" aria-hidden />
            <ol className="space-y-10 sm:space-y-14">
              {timeline.map((t, i) => {
                const left = i % 2 === 0;
                return (
                  <li key={t.year} className="relative">
                    <SectionReveal>
                      <div className={`grid sm:grid-cols-2 gap-6 ${left ? "" : "sm:[&>*:first-child]:order-2"}`}>
                        <div className={`pl-12 sm:pl-0 ${left ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                          <span className="inline-block text-accent font-display text-3xl sm:text-4xl font-bold">
                            {t.year}
                          </span>
                          <h3 className="mt-1 font-display text-xl font-bold">{t.title}</h3>
                          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.body}</p>
                        </div>
                        <div className="hidden sm:block" />
                      </div>
                      <div className="absolute left-4 sm:left-1/2 top-3 -translate-x-1/2 h-4 w-4 rounded-full bg-accent ring-4 ring-background shadow" />
                    </SectionReveal>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="py-20 sm:py-24 bg-brand-radial text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              At a Glance
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              The Borbor Memorial difference.
            </h2>
          </SectionReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Location", body: `${school.address}, ${school.city}, ${school.country}` },
              { title: "Founded", body: `${school.established} — in honor of Dr. Abraham S. Borbor` },
              { title: "Programs", body: "Primary · Junior High · Senior High" },
              { title: "Curriculum", body: "Liberian National Curriculum, WAEC-aligned" },
              { title: "Languages", body: "English instruction with Liberian context" },
              { title: "Community", body: "Active parent partnership and outreach programs" },
            ].map((f, i) => (
              <SectionReveal key={f.title} delay={i * 0.04}>
                <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent/20 text-accent">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <p className="mt-4 text-xs uppercase tracking-wider text-white/60">
                    {f.title}
                  </p>
                  <p className="mt-1 text-base font-medium">{f.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function PageHero({
  eyebrow,
  title,
  subtitle,
  bg,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  bg: string;
}) {
  return (
    <section className="relative pt-24 sm:pt-32 pb-20 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={bg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
        <Badge className="bg-accent/95 text-accent-foreground border-0 uppercase tracking-wider text-xs font-semibold">
          {eyebrow}
        </Badge>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] max-w-4xl text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
