import { WHATSAPP_DIRECT_URL } from '../data/agencyData';

export function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.344 5l-1.406 5.156 5.281-1.375c1.469.797 3.109 1.219 4.75 1.219 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.813 14.125c-.25.703-1.438 1.344-2 1.422-.516.078-1.172.109-1.891-.125-.438-.141-1-.328-1.719-.641-3.016-1.297-4.984-4.344-5.141-4.547-.141-.203-1.234-1.641-1.234-3.125s.781-2.219 1.063-2.516c.281-.297.609-.375.813-.375.203 0 .406 0 .578.016.188 0 .438-.078.688.516.25.609.859 2.094.938 2.25.078.156.125.344.031.547-.094.203-.141.328-.281.5-.141.172-.297.375-.422.5-.141.141-.297.297-.125.594.172.297.766 1.266 1.641 2.047 1.125 1 2.078 1.313 2.375 1.453.297.141.469.125.641-.078.172-.203.75-.875.953-1.172.203-.297.406-.25.672-.141.266.094 1.703.813 1.984.953.297.141.484.219.563.344.078.125.078.719-.172 1.422z" />
    </svg>
  );
}

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={WHATSAPP_DIRECT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat directly with Ayush on WhatsApp"
      className="fixed bottom-5 right-5 z-40 group inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-4 py-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_14px_34px_rgba(37,211,102,0.45)] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
    >
      <WhatsAppIcon className="w-5 h-5 shrink-0" />
      <span className="text-xs sm:text-sm whitespace-nowrap tracking-tight">
        Chat with Ayush
      </span>
    </a>
  );
}
