import { ASSETS } from "@/lib/store";
import { cn } from "@/lib/utils";

export function SchoolCrest({ className, withRing = false }: { className?: string; withRing?: boolean }) {
  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      {withRing && (
        <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl" aria-hidden />
      )}
      <img
        src={ASSETS.logo}
        alt="Dr. Abraham S. Borbor Memorial School of Excellence crest"
        className="relative h-full w-full rounded-full object-cover ring-2 ring-white/20 shadow-lg"
        loading="eager"
      />
    </div>
  );
}
