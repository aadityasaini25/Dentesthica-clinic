"use client";

interface StickyCtaProps {
  isVisible: boolean;
  onBookAppointment: () => void;
}

export default function StickyCTA({ isVisible, onBookAppointment }: StickyCtaProps) {
  return (
    <>
      {/* Mobile: bottom bar */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}>
        <div className="bg-[#1a3a5c]/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 safe-area-pb shadow-3d-dark">
          <div className="flex gap-2">
            <button
              onClick={onBookAppointment}
              className="flex-1 bg-gradient-to-r from-[#d4af37] to-[#f0d060] text-gray-900 py-3 rounded-full font-bold text-sm active:scale-95 transition-transform shadow-lg shadow-[#d4af37]/25"
            >
              Book Free Consultation
            </button>
            <a
              href="tel:+918851202080"
              className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white w-12 rounded-full text-lg transition-colors backdrop-blur-sm"
              aria-label="Call"
            >
              📞
            </a>
          </div>
        </div>
      </div>

      {/* Desktop: 3D floating bar */}
      <div className={`hidden md:block fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-3xl z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
      }`}>
        <div className="glass-card shadow-3d inner-glow rounded-2xl px-6 py-4 border border-white/60">
          <div className="flex items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-base text-gray-900 leading-tight">Book Free Consultation</h3>
              <p className="text-gray-400 text-xs mt-0.5">Dr. Vipin Kumar — 15 yrs exp. | GK-1, Delhi</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={onBookAppointment}
                className="bg-gradient-to-r from-[#1a3a5c] to-[#0d2840] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:-translate-y-0.5 hover:shadow-3d-dark transition-all"
              >
                Book Now
              </button>
              <a
                href="tel:+918851202080"
                className="flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-[#1a3a5c] border border-gray-200 w-10 h-10 rounded-full text-sm transition-all hover:shadow-md"
                aria-label="Call"
              >
                📞
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
