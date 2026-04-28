import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Users,
  ArrowRight,
  Quote,
  BookOpen,
  Trophy,
  Heart,
  ChevronRight,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SchoolCrest } from "@/components/SchoolCrest";
import { SectionReveal } from "@/components/SectionReveal";
import { StatCounter } from "@/components/StatCounter";
import { Testimonials } from "@/components/Testimonials";
import { useStoreValue } from "@/hooks/useStore";
import { getSchoolInfo, getNews, getActivities, ASSETS } from "@/lib/store";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const highlights = [
  {
    icon: GraduationCap,
    title: "Quality Education",
    description:
      "A rigorous curriculum from Primary through Senior High, taught by dedicated educators committed to every learner's progress.",
  },
  {
    icon: ShieldCheck,
    title: "Discipline & Character",
    description:
      "Daily practices that build integrity, respect, and self-reliance — the foundation of every successful Liberian leader.",
  },
  {
    icon: Sparkles,
    title: "A Culture of Excellence",
    description:
      "Where ambition is celebrated, excellence is the standard, and every student is encouraged to reach further.",
  },
  {
    icon: Heart,
    title: "Community & Belonging",
    description:
      "A close-knit family of students, parents and teachers — every child is known by name and seen for who they are.",
  },
];

const stats = [
  { label: "Established", value: 2019, suffix: "" },
  { label: "Students Enrolled", value: 480, suffix: "+" },
  { label: "Academic Programs", value: 3, suffix: "" },
  { label: "Graduates Inspired", value: 250, suffix: "+" },
];

export default function Home() {
  const school = useStoreValue(getSchoolInfo);
  const news = useStoreValue(getNews);
  const activities = useStoreValue(getActivities);
  useDocumentTitle(
    `${school.name} | Mount Barclay, Liberia`,
    school.tagline,
  );

  return (
    <Layout transparentNav>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={ASSETS.imgGrad2}
            alt="Senior class with Principal Cecelia F. Ndomahun on graduation day"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-24 w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-white">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Badge className="bg-accent/95 text-accent-foreground hover:bg-accent border-0 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  Established 2019 · Mount Barclay, Liberia
                </Badge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance"
              >
                Dr. Abraham S. Borbor{" "}
                <span className="text-accent">Memorial School</span> of Excellence
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 text-lg sm:text-xl text-white/90 font-display italic"
              >
                "{school.motto}."
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-4 max-w-xl text-base sm:text-lg text-white/80 leading-relaxed"
              >
                {school.tagline}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-xl text-base h-12 px-7"
                    data-testid="button-enroll-hero"
                  >
                    Enroll Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white font-semibold backdrop-blur-sm text-base h-12 px-7"
                    data-testid="button-learn-more"
                  >
                    Learn About Us
                  </Button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="hidden lg:flex lg:col-span-5 justify-center relative"
            >
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-accent/20 blur-3xl" />
                <SchoolCrest className="relative h-72 w-72 xl:h-80 xl:w-80 animate-float" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom marquee */}
        <div className="absolute bottom-0 inset-x-0 bg-primary/95 backdrop-blur border-t border-white/10 py-3 overflow-hidden">
          <div className="flex animate-scroll-x whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-12 px-6 text-white/80 text-sm font-medium uppercase tracking-[0.18em]">
                <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-accent" /> Excellence in Every Lesson</span>
                <span className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-accent" /> Primary · Junior High · Senior High</span>
                <span className="flex items-center gap-2"><Trophy className="h-4 w-4 text-accent" /> Award-Winning Graduates</span>
                <span className="flex items-center gap-2"><Users className="h-4 w-4 text-accent" /> A Family of Learners</span>
                <span className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-accent" /> Faith · Discipline · Knowledge</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WELCOME / HIGHLIGHTS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
              Why Families Choose Us
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
              An education built on{" "}
              <span className="text-primary">excellence, discipline, and inspiration.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
              For over half a decade, Borbor Memorial has been more than a school — it has been a
              second home where character is shaped, dreams are sharpened, and futures take form.
            </p>
          </SectionReveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <SectionReveal key={h.title} delay={i * 0.06}>
                <Card
                  className="h-full border-card-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
                  data-testid={`card-highlight-${i}`}
                >
                  <CardContent className="p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <h.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold">{h.title}</h3>
                    <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                      {h.description}
                    </p>
                  </CardContent>
                </Card>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-brand-radial text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">
            {stats.map((s) => (
              <SectionReveal key={s.label}>
                <div>
                  <p className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-accent">
                    <StatCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/75">
                    {s.label}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT — about preview */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <SectionReveal>
              <div className="relative">
                <img
                  src={ASSETS.imgClass2}
                  alt="A whole-class portrait of senior students"
                  className="rounded-2xl shadow-2xl object-cover aspect-[4/3] w-full"
                />
                <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-accent text-accent-foreground rounded-2xl shadow-xl px-5 py-4">
                  <p className="font-display text-3xl font-bold leading-none">6+</p>
                  <p className="text-xs uppercase tracking-wider mt-1">Years Inspiring</p>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                About Borbor Memorial
              </p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance">
                Rooted in faith. Driven by purpose. Devoted to every learner.
              </h2>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Founded in 2019 in Mount Barclay, Lower Johnsonville, Borbor Memorial honors the
                legacy of a leader who believed that nothing transforms a nation faster than a
                truly educated child. Today our halls are filled with that same conviction.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Strong national curriculum from Primary through Senior High",
                  "Dedicated, experienced teachers who know every student by name",
                  "Daily values formation rooted in integrity, respect and service",
                  "A safe, modern campus with active sports and community programs",
                ].map((line) => (
                  <li key={line} className="flex gap-3 items-start">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-foreground/90">{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/about">
                  <Button size="lg" className="font-semibold" data-testid="button-about-more">
                    Read Our Story <ChevronRight className="ml-1.5 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-20 sm:py-28 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
              Our Academic Programs
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
              Education for every stage of your child's journey.
            </h2>
          </SectionReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Primary School",
                level: "Grades 1 – 6",
                image: ASSETS.imgAssembly,
                blurb:
                  "A joyful, structured foundation in literacy, numeracy and curiosity, where every child learns to love learning.",
              },
              {
                title: "Junior High",
                level: "Grades 7 – 9",
                image: ASSETS.imgClass1,
                blurb:
                  "A rigorous middle-years program in core sciences, humanities and emerging digital skills, preparing scholars for senior high.",
              },
              {
                title: "Senior High",
                level: "Grades 10 – 12",
                image: ASSETS.imgGrad4,
                blurb:
                  "A WAEC-aligned senior program with science and arts tracks, mentoring, and graduation-ready preparation for university.",
              },
            ].map((p, i) => (
              <SectionReveal key={p.title} delay={i * 0.08}>
                <Card
                  className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 group"
                  data-testid={`card-program-${i}`}
                >
                  <div className="aspect-[5/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="text-xs">
                      {p.level}
                    </Badge>
                    <h3 className="mt-3 font-display text-2xl font-bold">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {p.blurb}
                    </p>
                    <Link href="/academics">
                      <Button variant="ghost" className="mt-4 -ml-3 text-primary hover:text-primary">
                        Explore Curriculum <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / QUOTE */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <Card className="bg-brand-radial text-white border-0 shadow-2xl overflow-hidden relative">
              <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
              <CardContent className="p-8 sm:p-12 lg:p-16 relative">
                <Quote className="h-10 w-10 text-accent" />
                <p className="mt-6 font-display text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance">
                  "Go and inspire the Liberia we have not yet seen. You are not just graduates — you
                  are evidence that excellence is possible from Mount Barclay to anywhere on earth."
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                    CN
                  </div>
                  <div>
                    <p className="font-semibold">Cecelia F. Ndomahun</p>
                    <p className="text-sm text-white/70">Principal · Class of 2025 Graduation Address</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </SectionReveal>
        </div>
      </section>

      {/* RECENT NEWS */}
      <section className="py-20 sm:py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                Latest News
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
                What's happening on campus.
              </h2>
            </div>
            <Link href="/activities">
              <Button variant="outline" className="font-semibold">
                All Updates <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </Link>
          </SectionReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {news.slice(0, 3).map((n, i) => (
              <SectionReveal key={n.id} delay={i * 0.08}>
                <Card className="h-full hover:shadow-lg transition-all" data-testid={`card-news-${i}`}>
                  <CardContent className="p-6 flex flex-col h-full">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {n.date}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold leading-snug">{n.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                      {n.excerpt}
                    </p>
                    <Link href="/activities" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all">
                      Read more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITIES PREVIEW */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="max-w-2xl mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
              Beyond the Classroom
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Sports, service, and signature programs.
            </h2>
          </SectionReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {activities.slice(0, 2).map((a, i) => (
              <SectionReveal key={a.id} delay={i * 0.1}>
                <Card className="overflow-hidden hover:shadow-xl transition-all group" data-testid={`card-activity-home-${i}`}>
                  <div className="grid sm:grid-cols-5">
                    <div className="sm:col-span-2 aspect-[4/3] sm:aspect-auto overflow-hidden">
                      <img
                        src={a.image || ASSETS.imgClass1}
                        alt={a.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="sm:col-span-3 p-6">
                      <Badge variant="secondary" className="text-xs">
                        {a.category} · {a.date}
                      </Badge>
                      <h3 className="mt-3 font-display text-xl font-bold">{a.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {a.description}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA STRIP */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={ASSETS.imgGrad3}
            alt="Graduates celebrating"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <SectionReveal>
            <Badge className="bg-accent text-accent-foreground border-0 px-3 py-1 uppercase tracking-wider text-xs font-semibold">
              Enrollment Open
            </Badge>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance">
              Your child's brightest chapter starts here.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl mx-auto">
              Limited seats remain across Primary, Junior High and Senior High for the new academic
              year. Visit our campus, call us, or send a message — we would love to meet you.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-12 px-7"
                  data-testid="button-enroll-cta"
                >
                  Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href={`tel:+231886633880`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white font-semibold h-12 px-7"
                >
                  Call Admissions
                </Button>
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
}
