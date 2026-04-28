import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, MessageCircle, ExternalLink } from "lucide-react";
import { SchoolCrest } from "./SchoolCrest";
import { useStoreValue } from "@/hooks/useStore";
import { getSchoolInfo } from "@/lib/store";

export function Footer() {
  const school = useStoreValue(getSchoolInfo);
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-radial text-white" data-testid="footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <SchoolCrest className="h-14 w-14" />
              <div>
                <p className="font-display text-lg font-bold leading-tight">
                  Dr. Abraham S. Borbor
                </p>
                <p className="text-sm text-accent uppercase tracking-[0.18em]">
                  Memorial School of Excellence
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-white/75 leading-relaxed text-sm">
              {school.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={school.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Facebook page"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={`https://wa.me/${school.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="WhatsApp chat"
                data-testid="link-whatsapp-footer"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${school.email}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Email"
                data-testid="link-email-footer"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/academics", "Academics"],
                ["/activities", "Activities"],
                ["/events", "Events"],
                ["/staff", "Staff"],
                ["/contact", "Contact"],
                ["/admin", "Admin Panel"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-white/75 hover:text-accent transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 text-accent">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span className="text-white/80">
                  {school.address}, {school.city}, {school.country}
                </span>
              </li>
              {school.phones.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                  <a
                    href={`tel:${p.replace(/\s+/g, "")}`}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {p}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <a
                  href={`mailto:${school.email}`}
                  className="text-white/80 hover:text-accent transition-colors break-all"
                >
                  {school.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            © {year} Dr. Abraham S. Borbor Memorial School of Excellence. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built by{" "}
            <a
              href="https://sastechinc-bp.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-accent hover:underline inline-flex items-center gap-1"
            >
              SAS Tech Inc <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
