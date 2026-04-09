import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a3a5c] border-t border-white/5 pt-8 pb-4 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <div className="bg-white p-2 rounded-xl inline-block mb-4 shadow-xl">
            <Image
              src="/images/logo.png"
              alt="Dentesthica"
              width={100}
              height={25}
              className="h-auto w-auto"
            />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed text-xs md:text-sm">
            Dentesthica: Expert Periodontist & Implantologist. Premium dental implants and gum treatments in Greater Kailash-1, New Delhi.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-center md:text-left mb-8">
          <div className="space-y-2">
            <h3 className="font-bold text-white text-base border-b border-gray-700 pb-1">Contact Us</h3>
            <div className="space-y-1 mt-2">
              <a href="tel:+918851202080" className="block text-[#5bb8d4] font-bold text-lg hover:scale-105 transition-transform inline-block">+91 88512 02080</a>
              <br></br>
              <a href="tel:+911145032266" className="block text-[#5bb8d4] font-bold text-base hover:scale-105 transition-transform inline-block">+91 11450 32266</a>
              <p className="text-gray-300 font-medium text-xs">Dentesthica</p>
              <a href="mailto:gk1dental@gmail.com" className="text-xs hover:text-[#5bb8d4] transition-colors block">gk1dental@gmail.com</a>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-white text-base border-b border-gray-700 pb-1">Clinic Hours</h3>
            <div className="flex items-start justify-center md:justify-start gap-2 mt-2">
              <span className="text-[#5bb8d4] text-lg">🕒</span>
              <div className="text-gray-300 space-y-0.5 text-xs">
                <p className="font-bold">Monday – Saturday</p>
                <p>10:00 AM – 7:00 PM</p>
                <p className="font-bold mt-1">Sunday</p>
                <p>Closed</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-white text-base border-b border-gray-700 pb-1">Our Location</h3>
            <a
              href="https://maps.app.goo.gl/PSWdA5E6oWRVKb3Q9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all group block text-xs mt-2"
            >
              <div className="flex items-start justify-center md:justify-start gap-2">
                <span className="text-xl">📍</span>
                <span className="text-gray-300 leading-relaxed group-hover:text-[#5bb8d4] transition-colors">
                  C-38, Lower Ground Floor,<br />
                  Greater Kailash-1, New Delhi<br />
                  (Hansraj Gupta Road, near M Block Market)
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Social Media and Maps Embed */}
        <div className="grid md:grid-cols-2 gap-4 items-start">
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-2 text-sm border-b border-gray-100 pb-1">Follow Us</h3>
            <ul className="grid grid-cols-2 gap-2 mt-2">
              {[
                { name: "Instagram: @dentesthica", icon: "📸" },
                { name: "Facebook", icon: "📘" },
                { name: "Website: gk1dental.com", icon: "🌐" },
                { name: "Call: 8851202080", icon: "📞" }
              ].map((method, idx) => (
                <li key={idx} className="flex items-center gap-1.5 text-gray-600 text-[11px] sm:text-xs">
                  <span>{method.icon}</span>
                  {method.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-100 rounded-xl overflow-hidden h-[160px] shadow-inner border border-gray-200">
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
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-[10px] sm:text-xs">
          <p>&copy; {new Date().getFullYear()} Dentesthica. All rights reserved.</p>
        </div>
      </div>
    </footer>

  );
}

