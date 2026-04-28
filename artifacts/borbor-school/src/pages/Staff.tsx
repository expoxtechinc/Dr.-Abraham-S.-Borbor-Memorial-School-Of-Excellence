import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionReveal } from "@/components/SectionReveal";
import { useStoreValue } from "@/hooks/useStore";
import { getSchoolInfo, ASSETS } from "@/lib/store";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Mail, Phone, Award } from "lucide-react";

const teachers = [
  { name: "Mr. James K. Toe", subject: "Mathematics & Further Mathematics", level: "Senior High" },
  { name: "Madam Esther W. Garlawolu", subject: "English Language & Literature", level: "Senior High" },
  { name: "Mr. Daniel S. Pewu", subject: "Integrated Science", level: "Junior High" },
  { name: "Madam Hawa B. Kollie", subject: "Social Studies & History", level: "Junior High" },
  { name: "Mr. Patrick N. Yarsiah", subject: "Information & Communication Technology", level: "All Levels" },
  { name: "Madam Lorpu M. Sirleaf", subject: "Primary Class Teacher", level: "Primary" },
  { name: "Mr. Solomon T. Kpaka", subject: "Physical & Health Education", level: "All Levels" },
  { name: "Madam Christiana D. Massaquoi", subject: "Religious & Moral Education", level: "Junior & Senior High" },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter((p) => !/^(mr|mrs|madam|ms|dr|prof)\.?$/i.test(p))
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export default function Staff() {
  const school = useStoreValue(getSchoolInfo);
  useDocumentTitle(
    `Leadership & Staff | ${school.name}`,
    "Meet the principal, vice principal, and teachers of Dr. Abraham S. Borbor Memorial School of Excellence.",
  );

  return (
    <Layout>
      <section className="relative pt-24 sm:pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={ASSETS.imgGrad2} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <Badge className="bg-accent/95 text-accent-foreground border-0 uppercase tracking-wider text-xs font-semibold">
            Leadership & Staff
          </Badge>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] max-w-4xl text-balance">
            The educators behind every Borbor success story.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl">
            A dedicated leadership team and a committed faculty — every member chosen for their
            passion to teach, mentor, and inspire.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 sm:py-24 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className="grid lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <img
                    src={ASSETS.imgFounder}
                    alt="Founder portrait"
                    className="h-full w-full object-cover aspect-[4/5] lg:aspect-auto"
                  />
                </div>
                <div className="lg:col-span-7 bg-brand-radial text-white p-8 sm:p-12 flex flex-col justify-center">
                  <Badge className="bg-accent text-accent-foreground border-0 w-fit uppercase tracking-wider text-xs">
                    In Loving Memory
                  </Badge>
                  <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">
                    Dr. Abraham S. Borbor
                  </h2>
                  <p className="text-accent text-sm uppercase tracking-[0.18em] mt-1">
                    Namesake & Inspiration
                  </p>
                  <p className="mt-5 text-white/85 leading-relaxed">
                    Our school proudly carries the name of Dr. Abraham S. Borbor — a Liberian
                    leader whose conviction was simple and unshakable: nothing transforms a
                    nation faster than a truly educated child. Every classroom, every assembly,
                    every graduation ceremony stands as a tribute to his vision.
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-sm text-white/70">
                    <Award className="h-4 w-4 text-accent" />
                    <span>Established in honor of his enduring legacy, 2019.</span>
                  </div>
                </div>
              </div>
            </Card>
          </SectionReveal>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
              School Leadership
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Meet our principal and vice principal.
            </h2>
          </SectionReveal>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <SectionReveal>
              <LeaderCard
                name="Cecelia F. Ndomahun"
                role="Principal"
                tag="Lead Educator"
                bio="With more than two decades of experience in Liberian education, Principal Ndomahun leads with grace, conviction, and an unrelenting belief in every student's potential. She sets the academic tone for the school and personally mentors graduating seniors each year."
                accent="primary"
                photo={ASSETS.imgGrad2}
              />
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <LeaderCard
                name="Edwin Kwakpae"
                role="Vice Principal"
                tag="Operations & Discipline"
                bio="Vice Principal Kwakpae partners closely with the Principal on academic standards, daily operations, and student discipline. He champions the values culture that defines life at Borbor Memorial."
                accent="accent"
                photo={ASSETS.imgPodium}
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="py-20 sm:py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
              Our Faculty
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              The teachers who make every day matter.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A multidisciplinary faculty serving Primary, Junior High and Senior High — committed
              to knowing each student by name and helping them grow.
            </p>
          </SectionReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((t, i) => (
              <SectionReveal key={t.name} delay={i * 0.04}>
                <Card className="h-full hover:shadow-lg hover:-translate-y-0.5 transition-all" data-testid={`teacher-${i}`}>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto h-20 w-20 rounded-full bg-brand-gradient text-white flex items-center justify-center font-display text-2xl font-bold shadow-md">
                      {initials(t.name)}
                    </div>
                    <h3 className="mt-4 font-semibold text-base">{t.name}</h3>
                    <p className="mt-1 text-sm text-primary font-medium">{t.subject}</p>
                    <Badge variant="secondary" className="mt-3 text-[10px] uppercase tracking-wider">
                      {t.level}
                    </Badge>
                  </CardContent>
                </Card>
              </SectionReveal>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Faculty names listed above are placeholders — to add real teachers, sign in to the
            Admin Panel and update the staff roster.
          </p>
        </div>
      </section>
    </Layout>
  );
}

function LeaderCard({
  name,
  role,
  tag,
  bio,
  photo,
  accent,
}: {
  name: string;
  role: string;
  tag: string;
  bio: string;
  photo: string;
  accent: "primary" | "accent";
}) {
  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all">
      <div className="grid sm:grid-cols-5">
        <div className="sm:col-span-2 relative bg-secondary aspect-square sm:aspect-auto">
          <img src={photo} alt={name} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
        </div>
        <CardContent className="sm:col-span-3 p-7 flex flex-col">
          <Badge
            className={`w-fit text-xs uppercase tracking-wider border-0 ${accent === "accent" ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}`}
          >
            {role}
          </Badge>
          <h3 className="mt-4 font-display text-2xl font-bold">{name}</h3>
          <p className="text-sm text-muted-foreground">{tag}</p>
          <p className="mt-4 text-sm text-foreground/85 leading-relaxed flex-1">{bio}</p>
          <div className="mt-5 pt-5 border-t flex flex-wrap gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" /> office@dasbmse.edu
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" /> +231 886 633 880
            </span>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
