import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SchoolCrest } from "./SchoolCrest";
import { cn } from "@/lib/utils";
import { useStoreValue } from "@/hooks/useStore";
import { getSchoolInfo } from "@/lib/store";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/activities", label: "Activities" },
  { href: "/events", label: "Events" },
  { href: "/staff", label: "Staff" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const school = useStoreValue(getSchoolInfo);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent",
      )}
      data-testid="navbar"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3 min-w-0" data-testid="link-home">
            <SchoolCrest className="h-10 w-10 sm:h-12 sm:w-12 shrink-0" />
            <div className="min-w-0">
              <p
                className={cn(
                  "font-display text-sm sm:text-base font-bold leading-tight truncate transition-colors",
                  scrolled ? "text-foreground" : "text-white drop-shadow-sm",
                )}
              >
                Dr. A. S. Borbor Memorial School
              </p>
              <p
                className={cn(
                  "text-[10px] sm:text-xs uppercase tracking-[0.18em] truncate transition-colors",
                  scrolled ? "text-muted-foreground" : "text-accent",
                )}
              >
                of Excellence · Est. {school.established}
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = l.href === location || (l.href !== "/" && location.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  data-testid={`link-${l.label.toLowerCase()}`}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    active
                      ? scrolled
                        ? "text-primary bg-primary/10"
                        : "text-accent"
                      : scrolled
                        ? "text-foreground/80 hover:text-primary hover:bg-primary/5"
                        : "text-white/90 hover:text-white hover:bg-white/10",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link href="/contact">
              <Button
                size="sm"
                className="ml-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-md"
                data-testid="button-enroll-nav"
              >
                Enroll Now
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </nav>

          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "h-10 w-10",
                    scrolled ? "text-foreground" : "text-white hover:bg-white/15 hover:text-white",
                  )}
                  data-testid="button-menu"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[88%] sm:w-[380px] p-0">
                <SheetHeader className="p-6 pb-4 border-b">
                  <SheetTitle className="flex items-center gap-3 text-left">
                    <SchoolCrest className="h-10 w-10" />
                    <span className="font-display text-base">Dr. A. S. Borbor Memorial</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="p-4 flex flex-col gap-1">
                  {links.map((l) => {
                    const active = l.href === location || (l.href !== "/" && location.startsWith(l.href));
                    return (
                      <Link
                        key={l.href}
                        href={l.href}
                        data-testid={`mobile-link-${l.label.toLowerCase()}`}
                        className={cn(
                          "flex items-center justify-between px-4 py-3 rounded-md text-base font-medium",
                          active
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-secondary text-foreground",
                        )}
                      >
                        {l.label}
                        <ChevronRight className="h-4 w-4 opacity-60" />
                      </Link>
                    );
                  })}
                  <div className="my-3 h-px bg-border" />
                  <Link href="/admin">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      data-testid="mobile-link-admin"
                    >
                      Admin Panel
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                      data-testid="button-enroll-mobile"
                    >
                      Enroll Now
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
