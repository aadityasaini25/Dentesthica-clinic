"use client";

interface StickyCtaProps {
  isVisible: boolean;
  onBookAppointment: () => void;
}

export default function StickyCTA({ isVisible, onBookAppointment }: StickyCtaProps) {
  if (!isVisible) return null;

  return (
    <>
      {/* Mobile: simple full-width bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1a3a5c]/95 backdrop-blur-lg border-t border-white/10 px-4 py-3 safe-area-pb">
        <div className="flex gap-2">
          <button
            onClick={onBookAppointment}
            className="flex-1 bg-[#d4af37] text-gray-900 py-3 rounded-full font-bold text-sm active:scale-95 transition-transform"
          >
            Book Free Consultation
          </button>
          <a
            href="tel:+918851202080"
            className="flex items-center justify-center bg-white/10 text-white w-12 rounded-full text-lg"
            aria-label="Call"
          >
            📞
          </a>
        </div>
      </div>

      {/* Desktop: floating bar */}
      <div className="hidden md:block fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-3xl glass-premium shadow-2xl rounded-full px-6 py-3.5 z-50 border border-white/50 backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-6">
          <div>
            <h3 className="font-bold text-base text-gray-900 leading-tight">Book Free Consultation</h3>
            <p className="text-gray-500 text-xs">Dr. Vipin Kumar — 15 yrs exp.</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onBookAppointment}
              className="bg-[#1a3a5c] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:-translate-y-0.5 transition-all"
            >
              Book Now
            </button>
            <a
              href="tel:+918851202080"
              className="flex items-center justify-center bg-white text-[#1a3a5c] border border-gray-200 w-10 h-10 rounded-full text-sm font-bold hover:bg-blue-50 transition-colors"
            >
              📞
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
