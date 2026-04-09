interface CTABoxProps {
  onBookAppointment: () => void;
}

export default function CTABox({ onBookAppointment }: CTABoxProps) {
  return (
    <section className="bg-[#1a3a5c] py-14 md:py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#5bb8d4] text-xs font-bold uppercase tracking-[0.2em] mb-3">
          Limited Slots Available This Week
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
          Get Your Free Consultation Today
        </h2>
        <p className="text-white/80 text-base md:text-lg mb-8 max-w-xl mx-auto">
          Comprehensive evaluation by Dr. Vipin Kumar — 15 years experience. No obligation, no hidden charges.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={onBookAppointment}
            className="bg-[#d4af37] text-gray-900 py-4 px-10 rounded-full font-bold text-base hover:bg-[#c9a227] transition-all shadow-lg hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            Book Free Consultation
          </button>
          <a
            href="tel:+918851202080"
            className="text-white/80 font-medium text-sm hover:text-white transition-colors"
          >
            or call +91 88512 02080
          </a>
        </div>
      </div>
    </section>
  );
}
