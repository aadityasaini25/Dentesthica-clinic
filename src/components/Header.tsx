'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-header scrolled py-2' : 'bg-white/60 backdrop-blur-sm py-3 md:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4 md:gap-8">
            <div className="bg-white p-1.5 rounded-xl shadow-md border border-gray-100/80">
              <Image
                src="/images/logo.png"
                alt="Dentesthica"
                width={140}
                height={45}
                className="h-8 md:h-10 w-auto"
                priority
              />
            </div>
            <div className="hidden lg:flex flex-col">
              <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400">Location</p>
              <p className="text-xs font-semibold text-gray-700">Greater Kailash-1, New Delhi</p>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="text-right">
              <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400">Call Specialist</p>
              <a href="tel:+918851202080" className="text-sm font-bold text-[#1a3a5c] hover:text-[#2a7ab5] transition-colors">
                +91 88512 02080
              </a>
            </div>
            <button
              onClick={onBookAppointment}
              className="relative overflow-hidden bg-gradient-to-r from-[#2a7ab5] to-[#1a5a8c] text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all shadow-md"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-[#1a3a5c] rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-[#1a3a5c] rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-[#1a3a5c] rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-0 right-0 w-72 h-full bg-white shadow-2xl p-6 pt-24 flex flex-col gap-6">
            <a href="tel:+918851202080" className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <span className="text-lg">📞</span>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Call Now</p>
                <p className="font-bold text-[#1a3a5c]">+91 88512 02080</p>
              </div>
            </a>
            <a
              href="https://wa.me/918851202080?text=Hi%20Dr.%20Vipin%2C%20I%27d%20like%20to%20book%20a%20consultation%20at%20Dentesthica."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-green-50 hover:bg-green-100 transition-colors"
            >
              <span className="text-lg">💬</span>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">WhatsApp</p>
                <p className="font-bold text-green-700">Message Us</p>
              </div>
            </a>
            <button
              onClick={() => { onBookAppointment(); setMobileMenuOpen(false); }}
              className="w-full bg-gradient-to-r from-[#2a7ab5] to-[#1a5a8c] text-white py-3.5 rounded-xl font-bold text-sm shadow-lg"
            >
              Book Free Consultation
            </button>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-400 text-center">Mon–Sat, 10 AM–7 PM</p>
              <p className="text-xs text-gray-400 text-center mt-1">GK-1, New Delhi</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
