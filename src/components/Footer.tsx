import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1a3a5c] to-[#0d2840] pt-12 pb-6 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top section */}
        <div className="text-center mb-10">
          <div className="bg-white p-2 rounded-xl inline-block mb-4 shadow-lg">
            <Image
              src="/images/logo.png"
              alt="Dentesthica"
              width={100}
              height={25}
              className="h-auto w-auto"
            />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed text-sm">
            Expert Periodontist &amp; Implantologist. Premium dental implants and gum treatments in Greater Kailash-1, New Delhi.
          </p>
        </div>

        {/* Info grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-10">
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="tel:+918851202080" className="flex items-center gap-2 justify-center md:justify-start text-[#5bb8d4] font-bold text-lg hover:text-white transition-colors group">
                <span className="group-hover:scale-110 transition-transform">📞</span>
                +91 88512 02080
              </a>
              <a href="tel:+911145032266" className="flex items-center gap-2 justify-center md:justify-start text-[#5bb8d4] font-semibold text-base hover:text-white transition-colors group">
                <span className="group-hover:scale-110 transition-transform">📞</span>
                +91 11450 32266
              </a>
              <a href="mailto:gk1dental@gmail.com" className="flex items-center gap-2 justify-center md:justify-start text-gray-400 text-sm hover:text-[#5bb8d4] transition-colors">
                <span>✉️</span>
                gk1dental@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Clinic Hours</h3>
            <div className="inline-flex items-start gap-3 text-left">
              <span className="text-lg mt-0.5">🕒</span>
              <div className="text-sm space-y-1">
                <div>
                  <p className="font-bold text-white">Monday – Saturday</p>
                  <p className="text-gray-400">10:00 AM – 7:00 PM</p>
                </div>
                <div className="mt-2">
                  <p className="font-bold text-white">Sunday</p>
                  <p className="text-gray-400">Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Our Location</h3>
            <a
              href="https://maps.app.goo.gl/PSWdA5E6oWRVKb3Q9"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-start gap-3 text-left"
            >
              <span className="text-lg mt-0.5">📍</span>
              <span className="text-sm text-gray-400 group-hover:text-[#5bb8d4] transition-colors leading-relaxed">
                C-38, Lower Ground Floor,<br />
                Greater Kailash-1, New Delhi<br />
                (Hansraj Gupta Road, near M Block Market)
              </span>
            </a>
          </div>
        </div>

        {/* Social + Map row */}
        <div className="grid md:grid-cols-2 gap-5 items-start mb-10">
          <div className="glass-dark p-5 rounded-2xl">
            <h3 className="font-bold text-white text-sm mb-4">Follow Us</h3>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://www.instagram.com/dentesthica"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-gray-400 hover:text-[#5bb8d4] text-sm transition-colors p-2 rounded-lg hover:bg-white/5"
              >
                <span>📸</span> @dentesthica
              </a>
              <a
                href="https://www.facebook.com/dentesthica"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-gray-400 hover:text-[#5bb8d4] text-sm transition-colors p-2 rounded-lg hover:bg-white/5"
              >
                <span>📘</span> Facebook
              </a>
              <a
                href="https://www.gk1dental.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-gray-400 hover:text-[#5bb8d4] text-sm transition-colors p-2 rounded-lg hover:bg-white/5"
              >
                <span>🌐</span> gk1dental.com
              </a>
              <a
                href="https://wa.me/918851202080?text=Hi%20Dr.%20Vipin%2C%20I%27d%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-gray-400 hover:text-green-400 text-sm transition-colors p-2 rounded-lg hover:bg-white/5"
              >
                <span>💬</span> WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-[180px] shadow-3d-dark border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.3589968945496!2d77.23669476441985!3d28.548194960519155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a75af09381%3A0x37a724094a4b4952!2sDENTESTHICA!5e0!3m2!1sen!2sin!4v1775654988079!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dentesthica - Greater Kailash 1, New Delhi"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-5 text-center">
          <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} Dentesthica. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
