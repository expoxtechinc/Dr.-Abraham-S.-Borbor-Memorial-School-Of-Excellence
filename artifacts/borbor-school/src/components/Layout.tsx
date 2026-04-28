import { type ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { WhatsAppButton } from "./WhatsAppButton";

export function Layout({ children, transparentNav = false }: { children: ReactNode; transparentNav?: boolean }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className={transparentNav ? "" : "pt-16 sm:pt-20"}>{children}</main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}
