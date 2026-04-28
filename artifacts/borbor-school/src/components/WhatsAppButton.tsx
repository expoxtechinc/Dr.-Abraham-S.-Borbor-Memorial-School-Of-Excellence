import { MessageCircle } from "lucide-react";
import { useStoreValue } from "@/hooks/useStore";
import { getSchoolInfo } from "@/lib/store";

export function WhatsAppButton() {
  const school = useStoreValue(getSchoolInfo);
  return (
    <a
      href={`https://wa.me/${school.whatsapp}?text=${encodeURIComponent(
        "Hello, I would like to learn more about Dr. Abraham S. Borbor Memorial School of Excellence.",
      )}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 left-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 transition-transform animate-pulse-ring"
      aria-label="Chat on WhatsApp"
      data-testid="button-whatsapp-fab"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" />
    </a>
  );
}
