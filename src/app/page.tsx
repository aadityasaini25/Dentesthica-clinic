'use client';

import { useEffect, useState, useCallback, useRef } from "react";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import DoctorProfile from "@/components/DoctorProfile";
import ServiceHighlights from "@/components/ServiceHighlights";
import FAQSection from "@/components/FAQSection";
import RealTransformations from "@/components/RealTransformations";
import ClinicPhotos from "@/components/ClinicPhotos";
import GoogleReviews from "@/components/GoogleReviews";
import CTABox from "@/components/CTABox";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import PopupForm from "@/components/PopupForm";
import BackgroundGraphics from "@/components/BackgroundGraphics";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(19 * 60 + 49);
  const observerSetup = useRef(false);

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  useEffect(() => {
    if (!showPopup) return;
    const timer = setInterval(() => {
      setRemainingSeconds((prev) => (prev > 0 ? prev - 1 : 19 * 60 + 49));
    }, 1000);
    return () => clearInterval(timer);
  }, [showPopup]);

  useEffect(() => {
    const handleScroll = () => setShowStickyCta(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 12000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showPopup) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [showPopup]);

  useEffect(() => {
    if (observerSetup.current) return;
    observerSetup.current = true;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: '0px', threshold: 0.05 });
    const timeout = setTimeout(() => {
      document.querySelectorAll('section, .fade-up').forEach((el) => observer.observe(el));
    }, 100);
    return () => { clearTimeout(timeout); observer.disconnect(); };
  }, []);

  const openPopup = useCallback(() => setShowPopup(true), []);
  const closePopup = useCallback(() => setShowPopup(false), []);

  return (
    <div className="bg-medical-light min-h-screen">
      <BackgroundGraphics />

      <div className="relative z-10">
        {/* 1. Hero — core value + CTA + social proof */}
        <Header onBookAppointment={openPopup} />
        <HeroSection onBookAppointment={openPopup} />

        {/* 2. Social proof — trust signals */}
        <GoogleReviews />

        {/* 3. Why choose us — build trust */}
        <WhyChooseUs />

        {/* 4. Doctor profile — credibility */}
        <DoctorProfile onBookAppointment={openPopup} />

        {/* 5. How it works — reduce complexity */}
        <HowItWorks onBookAppointment={openPopup} />

        {/* 6. Services — the solution */}
        <ServiceHighlights />

        {/* 6. Patient gallery — proof it works */}
        <RealTransformations />

        {/* 7. Clinic photos — facility trust */}
        <ClinicPhotos onBookAppointment={openPopup} />

        {/* 8. FAQ — handle objections */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent max-w-4xl mx-auto opacity-50" />
        <FAQSection />

        {/* 9. Final CTA — capture remainders with urgency */}
        <CTABox onBookAppointment={openPopup} />

        <Footer />
      </div>

      <StickyCTA isVisible={showStickyCta} onBookAppointment={openPopup} />
      <PopupForm
        isOpen={showPopup}
        onClose={closePopup}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  );
}
