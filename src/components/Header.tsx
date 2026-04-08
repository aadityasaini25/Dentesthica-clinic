'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-header scrolled py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-8">
          <div className="bg-white p-1.5 rounded-xl shadow-lg border border-gray-100">
            <Image
              src="/images/logo.png"
              alt="Dentesthica"
              width={140}
              height={45}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </div>
          <div className="hidden lg:block">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-0.5">Location</p>
            <p className="text-xs font-semibold text-gray-700">Greater Kailash-1, New Delhi</p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden sm:block text-right">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-0.5">Call Specialist</p>
            <a href="tel:+918851202080" className="text-sm font-bold text-[#1a3a5c] hover:text-[#2a7ab5] transition-colors">
              +91 88512 02080
            </a>
          </div>
          <button
            onClick={onBookAppointment}
            className="bg-[#2a7ab5] text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[#1a5a8c] hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-md"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
}
