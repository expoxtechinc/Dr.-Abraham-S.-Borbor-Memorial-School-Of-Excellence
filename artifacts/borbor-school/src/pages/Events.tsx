import { useMemo, useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/SectionReveal";
import { useStoreValue } from "@/hooks/useStore";
import { getEvents, getSchoolInfo, ASSETS, type EventItem } from "@/lib/store";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { ChevronLeft, ChevronRight, MapPin, CalendarDays, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function ymd(d: Date) {
  return d.toISOString().slice(0, 10);
}

function eventsOnDate(items: EventItem[], iso: string) {
  return items.filter((e) => {
    const start = e.date;
    const end = e.endDate || e.date;
    return iso >= start && iso <= end;
  });
}

function formatLong(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Events() {
  const school = useStoreValue(getSchoolInfo);
  const events = useStoreValue(getEvents);
  useDocumentTitle(
    `Events Calendar | ${school.name}`,
    "View upcoming events, exams, holidays, and ceremonies at Dr. Abraham S. Borbor Memorial School of Excellence.",
  );

  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [selected, setSelected] = useState<string | null>(ymd(now));

  function shift(delta: number) {
    let m = month + delta;
    let y = year;
    while (m < 0) { m += 12; y -= 1; }
    while (m > 11) { m -= 12; y += 1; }
    setMonth(m); setYear(y);
  }

  const grid = useMemo(() => {
    const first = new Date(year, month, 1);
    const startWeekday = first.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells: { iso: string | null; day: number | null }[] = [];
    for (let i = 0; i < startWeekday; i++) cells.push({ iso: null, day: null });
    for (let d = 1; d <= daysInMonth; d++) {
      const iso = ymd(new Date(year, month, d));
      cells.push({ iso, day: d });
    }
    while (cells.length % 7 !== 0) cells.push({ iso: null, day: null });
    return cells;
  }, [year, month]);

  const upcoming = useMemo(
    () => [...events].sort((a, b) => a.date.localeCompare(b.date)).filter((e) => (e.endDate || e.date) >= ymd(now)),
    [events, now],
  );
  const selectedEvents = selected ? eventsOnDate(events, selected) : [];
  const todayIso = ymd(now);

  return (
    <Layout>
      <section className="relative pt-24 sm:pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={ASSETS.imgAssembly} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <Badge className="bg-accent/95 text-accent-foreground border-0 uppercase tracking-wider text-xs font-semibold">
            School Calendar
          </Badge>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] max-w-4xl text-balance">
            Every important date — exams, holidays, and ceremonies.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl">
            Browse the calendar month by month. Tap any highlighted day for full details.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Calendar */}
            <SectionReveal className="lg:col-span-7 xl:col-span-8">
              <Card className="shadow-lg">
                <CardContent className="p-5 sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                        {year}
                      </p>
                      <h2 className="font-display text-2xl sm:text-3xl font-bold">{MONTHS[month]}</h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="icon" variant="outline" onClick={() => shift(-1)} aria-label="Previous month" data-testid="button-prev-month">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          const d = new Date();
                          setYear(d.getFullYear()); setMonth(d.getMonth()); setSelected(ymd(d));
                        }}
                        data-testid="button-today"
                      >
                        Today
                      </Button>
                      <Button size="icon" variant="outline" onClick={() => shift(1)} aria-label="Next month" data-testid="button-next-month">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-7 gap-1 text-center text-xs uppercase tracking-wider text-muted-foreground">
                    {WEEKDAYS.map((d) => <div key={d} className="py-2">{d}</div>)}
                  </div>
                  <div className="grid grid-cols-7 gap-1.5">
                    {grid.map((c, i) => {
                      if (!c.iso) return <div key={i} className="aspect-square" />;
                      const onDay = eventsOnDate(events, c.iso);
                      const isToday = c.iso === todayIso;
                      const isSelected = c.iso === selected;
                      return (
                        <button
                          key={i}
                          onClick={() => setSelected(c.iso)}
                          className={cn(
                            "relative aspect-square rounded-lg border text-sm flex flex-col items-center justify-start py-1.5 px-1 transition-all hover-elevate",
                            isSelected ? "border-primary ring-2 ring-primary/30 bg-primary/5" : "border-border bg-card",
                            isToday && !isSelected && "border-accent",
                          )}
                          data-testid={`day-${c.iso}`}
                        >
                          <span className={cn("font-semibold", isToday && "text-accent")}>{c.day}</span>
                          {onDay.length > 0 && (
                            <div className="mt-auto flex gap-0.5 pb-0.5">
                              {onDay.slice(0, 3).map((_, j) => (
                                <span key={j} className="h-1.5 w-1.5 rounded-full bg-primary" />
                              ))}
                              {onDay.length > 3 && (
                                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                              )}
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Selected day */}
              {selected && (
                <Card className="mt-6">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-primary">
                      <CalendarDays className="h-4 w-4" />
                      <p className="text-sm font-semibold">{formatLong(selected)}</p>
                    </div>
                    {selectedEvents.length === 0 ? (
                      <p className="mt-3 text-sm text-muted-foreground">
                        No events scheduled for this day.
                      </p>
                    ) : (
                      <ul className="mt-4 space-y-3">
                        {selectedEvents.map((e) => (
                          <li key={e.id} className="rounded-lg border bg-secondary/30 p-4">
                            <div className="flex items-center gap-2 flex-wrap">
                              <Badge variant="secondary" className="text-xs">{e.category}</Badge>
                              {e.location && (
                                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                                  <MapPin className="h-3 w-3" /> {e.location}
                                </span>
                              )}
                            </div>
                            <p className="mt-2 font-semibold">{e.title}</p>
                            <p className="text-sm text-muted-foreground mt-1">{e.description}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              )}
            </SectionReveal>

            {/* Upcoming list */}
            <SectionReveal className="lg:col-span-5 xl:col-span-4" delay={0.1}>
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                Upcoming
              </p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold">
                Coming up at Borbor Memorial
              </h2>
              <div className="mt-6 space-y-3">
                {upcoming.length === 0 && (
                  <Card><CardContent className="p-6 text-sm text-muted-foreground">No upcoming events scheduled.</CardContent></Card>
                )}
                {upcoming.slice(0, 8).map((e) => {
                  const d = new Date(e.date + "T00:00:00");
                  return (
                    <Card key={e.id} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelected(e.date)}>
                      <CardContent className="p-4 flex gap-4 items-start">
                        <div className="shrink-0 text-center bg-primary text-primary-foreground rounded-lg px-3 py-2 min-w-[58px]">
                          <p className="text-[10px] uppercase tracking-wider opacity-80">
                            {MONTHS[d.getMonth()].slice(0, 3)}
                          </p>
                          <p className="font-display text-2xl font-bold leading-none">{d.getDate()}</p>
                          <p className="text-[10px] opacity-80 mt-0.5">{d.getFullYear()}</p>
                        </div>
                        <div className="min-w-0 flex-1">
                          <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">{e.category}</Badge>
                          <p className="mt-1.5 font-semibold leading-snug">{e.title}</p>
                          <p className="mt-0.5 text-xs text-muted-foreground inline-flex items-center gap-1">
                            {e.location && <><MapPin className="h-3 w-3" /> {e.location}</>}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <div className="mt-6 rounded-lg border bg-secondary/40 p-4 text-xs text-muted-foreground">
                <p className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Calendar managed from the Admin Panel.</p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
