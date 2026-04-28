import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionReveal } from "@/components/SectionReveal";
import { ASSETS, getSchoolInfo } from "@/lib/store";
import { useStoreValue } from "@/hooks/useStore";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { BookOpen, FlaskConical, Globe2, Calculator, Palette, Cpu, Languages, HeartHandshake, Check } from "lucide-react";

const programs = [
  {
    id: "primary",
    name: "Primary School",
    grades: "Grades 1 – 6",
    image: ASSETS.imgAssembly,
    blurb:
      "Our primary years build the foundation of every Borbor scholar — strong literacy, confident numeracy, and a love of learning that lasts a lifetime.",
    subjects: [
      "English Language & Reading",
      "Mathematics",
      "General Science",
      "Social Studies",
      "Bible Knowledge & Moral Education",
      "Physical Education",
      "Arts & Crafts",
      "Computer Basics",
      "Health & Hygiene",
    ],
    highlights: [
      "Small class sizes with attentive homeroom teachers",
      "Daily devotion and structured character formation",
      "Phonics-based reading and times-table mastery",
      "Weekly creative arts and physical activity",
    ],
  },
  {
    id: "jhs",
    name: "Junior High",
    grades: "Grades 7 – 9",
    image: ASSETS.imgClass1,
    blurb:
      "A rigorous middle-years program that sharpens core academics, introduces laboratory science, and prepares students to thrive in senior high and beyond.",
    subjects: [
      "English Language & Literature",
      "Mathematics",
      "Integrated Science (Biology · Chemistry · Physics)",
      "Social Studies & Civic Education",
      "Geography",
      "Liberian History",
      "French (Introductory)",
      "Information & Communication Technology",
      "Agriculture & Practical Skills",
      "Religious & Moral Education",
      "Physical & Health Education",
    ],
    highlights: [
      "Hands-on lab experiments in our new science room",
      "Computer lab access for every Junior High student",
      "Inter-class debate, sports, and academic competitions",
      "Counseling and study-skills coaching",
    ],
  },
  {
    id: "shs",
    name: "Senior High",
    grades: "Grades 10 – 12",
    image: ASSETS.imgGrad4,
    blurb:
      "A WAEC-aligned senior program with science and arts tracks, mentoring, and intensive preparation for the West African Senior School Certificate Examination.",
    subjects: [
      "English Language",
      "Mathematics & Further Mathematics",
      "Biology · Chemistry · Physics",
      "Economics",
      "Geography",
      "Government & Civics",
      "Literature in English",
      "History",
      "Agricultural Science",
      "Information & Communication Technology",
      "French",
      "Religious & Moral Education",
    ],
    highlights: [
      "Choice of Science track or Arts/General track",
      "Dedicated WAEC preparation in Grade 12",
      "University and scholarship application guidance",
      "Senior project work and graduation ceremony",
    ],
  },
];

const subjectIcons = [
  { icon: BookOpen, label: "Language Arts" },
  { icon: Calculator, label: "Mathematics" },
  { icon: FlaskConical, label: "Sciences" },
  { icon: Globe2, label: "Social Studies" },
  { icon: Cpu, label: "Computing" },
  { icon: Languages, label: "Languages" },
  { icon: Palette, label: "Arts" },
  { icon: HeartHandshake, label: "Civics & Ethics" },
];

export default function Academics() {
  const school = useStoreValue(getSchoolInfo);
  useDocumentTitle(
    `Academics | ${school.name}`,
    "Explore our Primary, Junior High, and Senior High programs at Dr. Abraham S. Borbor Memorial School of Excellence.",
  );
  return (
    <Layout>
      <section className="relative pt-24 sm:pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={ASSETS.imgClass2} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <Badge className="bg-accent/95 text-accent-foreground border-0 uppercase tracking-wider text-xs font-semibold">
            Academics
          </Badge>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] max-w-4xl text-balance">
            A complete K-12 path designed to take your child further.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl">
            From the joy of first reading to the discipline of senior examinations — three programs,
            one shared standard of excellence.
          </p>
        </div>
      </section>

      {/* Subject pills */}
      <section className="py-12 bg-secondary/30 border-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold text-center">
              Subjects We Teach
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {subjectIcons.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2.5 rounded-lg border bg-card px-4 py-3 hover-elevate transition-colors"
                >
                  <s.icon className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          {programs.map((p, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <SectionReveal key={p.id}>
                <div
                  id={p.id}
                  className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className="lg:col-span-5">
                    <div className="relative">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="rounded-2xl shadow-2xl object-cover aspect-[4/3] w-full"
                      />
                      <div className="absolute -bottom-5 right-5 sm:right-auto sm:left-5 bg-card border rounded-xl shadow-xl px-5 py-3">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">Stage</p>
                        <p className="font-display text-lg font-bold">{p.grades}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <Badge variant="secondary" className="text-xs uppercase tracking-wider">
                      {p.grades}
                    </Badge>
                    <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
                      {p.name}
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {p.blurb}
                    </p>

                    <div className="mt-6 grid sm:grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-3">
                          Curriculum / Subjects
                        </p>
                        <ul className="space-y-2">
                          {p.subjects.map((s) => (
                            <li key={s} className="flex gap-2 items-start text-sm">
                              <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-3">
                          What Makes It Special
                        </p>
                        <ul className="space-y-2">
                          {p.highlights.map((s) => (
                            <li key={s} className="flex gap-2 items-start text-sm">
                              <span className="h-1.5 w-1.5 mt-2 rounded-full bg-primary shrink-0" />
                              <span className="text-foreground/85">{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </section>

      {/* Calendar / structure */}
      <section className="py-20 sm:py-24 bg-secondary/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
              Academic Year
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              How a Borbor school year is shaped.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Three terms of structured learning, with built-in time for assessment, sports, and
              community service.
            </p>
          </SectionReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { name: "Term I", months: "September – December", focus: "Foundation, baseline tests, midterm and end-of-term examinations." },
              { name: "Term II", months: "January – April", focus: "Core curriculum delivery, science fair, inter-class sports." },
              { name: "Term III", months: "April – July", focus: "Senior exam push, end-of-year tests, graduation, awards ceremony." },
            ].map((t, i) => (
              <SectionReveal key={t.name} delay={i * 0.06}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <p className="font-display text-2xl font-bold text-primary">{t.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {t.months}
                    </p>
                    <p className="mt-4 text-sm text-foreground/85 leading-relaxed">{t.focus}</p>
                  </CardContent>
                </Card>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
