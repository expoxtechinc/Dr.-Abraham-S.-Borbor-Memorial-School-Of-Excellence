import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { SectionReveal } from "@/components/SectionReveal";
import { useStoreValue } from "@/hooks/useStore";
import { getActivities, getNews, getGallery, getSchoolInfo, ASSETS } from "@/lib/store";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Calendar, ExternalLink, Newspaper, Trophy, Users } from "lucide-react";

export default function Activities() {
  const school = useStoreValue(getSchoolInfo);
  const activities = useStoreValue(getActivities);
  const news = useStoreValue(getNews);
  const gallery = useStoreValue(getGallery);
  const [active, setActive] = useState<{ url: string; caption: string } | null>(null);
  useDocumentTitle(
    `Activities & News | ${school.name}`,
    "Sports, events, community projects and the latest news from Borbor Memorial.",
  );

  return (
    <Layout>
      <section className="relative pt-24 sm:pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={ASSETS.imgAssembly} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <Badge className="bg-accent/95 text-accent-foreground border-0 uppercase tracking-wider text-xs font-semibold">
            Activities · Events · News
          </Badge>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] max-w-4xl text-balance">
            Life beyond the classroom — where character is built and friendships are forged.
          </h1>
        </div>
      </section>

      {/* Featured Activities */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                Featured Programs
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
                Sports, signature events, and community service.
              </h2>
            </div>
          </SectionReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {activities.map((a, i) => (
              <SectionReveal key={a.id} delay={i * 0.06}>
                <Card className="overflow-hidden h-full hover:shadow-xl transition-all group" data-testid={`card-activity-${i}`}>
                  <div className="grid sm:grid-cols-5 h-full">
                    <div className="sm:col-span-2 aspect-[4/3] sm:aspect-auto overflow-hidden">
                      <img
                        src={a.image || ASSETS.imgClass1}
                        alt={a.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="sm:col-span-3 p-6 flex flex-col">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="secondary" className="text-xs">
                          {a.category}
                        </Badge>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" /> {a.date}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-xl font-bold">{a.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
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

      {/* SPORTS / CO-CURRICULAR pills */}
      <section className="py-16 bg-secondary/40 border-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
              Co-Curricular
            </p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              A place for every passion.
            </h2>
          </SectionReveal>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { icon: Trophy, label: "Football" },
              { icon: Trophy, label: "Kickball" },
              { icon: Trophy, label: "Athletics" },
              { icon: Users, label: "Debate Club" },
              { icon: Users, label: "Drama" },
              { icon: Users, label: "Choir" },
              { icon: Users, label: "Scripture Union" },
              { icon: Users, label: "Computer Club" },
              { icon: Users, label: "Science Fair" },
              { icon: Users, label: "Cultural Day" },
              { icon: Users, label: "Quiz Bowl" },
              { icon: Users, label: "Community Service" },
            ].map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-card border hover-elevate"
              >
                <c.icon className="h-4 w-4 text-accent shrink-0" />
                <span className="text-sm font-medium">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                Photo Gallery
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
                Moments from our campus.
              </h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {gallery.map((g, i) => (
              <SectionReveal key={g.id} delay={i * 0.03}>
                <button
                  onClick={() => setActive({ url: g.url, caption: g.caption })}
                  className="group relative block overflow-hidden rounded-xl aspect-square w-full bg-secondary"
                  aria-label={g.caption}
                  data-testid={`gallery-item-${i}`}
                >
                  <img
                    src={g.url}
                    alt={g.caption}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <p className="text-white text-xs sm:text-sm font-medium leading-snug">
                      {g.caption}
                    </p>
                  </div>
                </button>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-20 sm:py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="max-w-2xl mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
              News & Updates
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              The latest from Borbor Memorial.
            </h2>
          </SectionReveal>
          <div className="grid gap-5 lg:grid-cols-3">
            {news.map((n, i) => (
              <SectionReveal key={n.id} delay={i * 0.06}>
                <Card className="h-full hover:shadow-lg transition-all" data-testid={`news-${i}`}>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Newspaper className="h-4 w-4" />
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
                      {n.date}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold leading-snug">{n.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                      {n.body}
                    </p>
                  </CardContent>
                </Card>
              </SectionReveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href={school.facebook} target="_blank" rel="noreferrer">
              <Button variant="outline" className="font-semibold">
                Follow us on Facebook for live updates
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background">
          <DialogTitle className="sr-only">{active?.caption || "Photo"}</DialogTitle>
          {active && (
            <div>
              <img src={active.url} alt={active.caption} className="w-full max-h-[80vh] object-contain bg-black" />
              <div className="px-5 py-3 text-sm text-muted-foreground">{active.caption}</div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
