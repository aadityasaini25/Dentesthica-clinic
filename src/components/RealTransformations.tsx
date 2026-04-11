'use client';

import Image from 'next/image';
import { useAnimationFrame, useMotionValue, motion } from 'framer-motion';
import { useRef, useState } from 'react';

type TransformationItem = {
  type: 'transformation';
  before?: string;
  after: string;
  title: string;
  description: string;
  badgeText?: string;
};

type Item = TransformationItem;

const TRANSFORMATION_ITEMS: Item[] = [
  { type: 'transformation', after: '/images/gallery/implant.jpg', title: 'Dental Implant', description: 'Permanent tooth replacement' },
  { type: 'transformation', after: '/images/gallery/smile-makeover.jpg', title: 'Smile Makeover', description: 'Complete smile transformation' },
  { type: 'transformation', after: '/images/gallery/bone-grafting.jpg', title: 'Bone Grafting', description: 'Foundation for implants' },
  { type: 'transformation', after: '/images/gallery/comp-laminates.jpg', title: 'Composite Laminates', description: 'Natural-looking veneers' },
  { type: 'transformation', after: '/images/gallery/full-mouth-rehab.jpg', title: 'Full Mouth Rehab', description: 'Complete oral restoration' },
  { type: 'transformation', after: '/images/gallery/zoom-whitening.jpg', title: 'Zoom Whitening', description: 'Brighter, whiter smile' },
  { type: 'transformation', after: '/images/gallery/veneers.jpg', title: 'Veneers', description: 'Perfect smile design' },
  { type: 'transformation', after: '/images/gallery/single-implant.jpg', title: 'Single Implant', description: 'Individual tooth replacement' },
  { type: 'transformation', after: '/images/gallery/scaling.jpg', title: 'Scaling & Polishing', description: 'Deep cleaning treatment' },
  { type: 'transformation', after: '/images/gallery/rct.jpg', title: 'Root Canal', description: 'Pain-free root treatment' },
  { type: 'transformation', after: '/images/gallery/gingivectomy.jpg', title: 'Gingivectomy', description: 'Laser gum contouring' },
  { type: 'transformation', after: '/images/gallery/recession-coverage-1.jpg', title: 'Recession Coverage', description: 'Gum restoration surgery' },
  { type: 'transformation', after: '/images/gallery/recession-coverage-2.jpg', title: 'Gum Treatment', description: 'Periodontal care' },
  { type: 'transformation', after: '/images/gallery/depigmentation.jpg', title: 'Depigmentation', description: 'Laser gum lightening' },
  { type: 'transformation', after: '/images/gallery/tongue-tie-laser.jpg', title: 'Tongue Tie Laser', description: 'Minimally invasive procedure' },
  { type: 'transformation', after: '/images/gallery/anterior-implant.jpg', title: 'Anterior Implant', description: 'Front tooth implant' },
  { type: 'transformation', after: '/images/gallery/tooth-filling.jpg', title: 'Tooth Filling', description: 'Tooth-coloured restoration' },
  { type: 'transformation', after: '/images/gallery/ridge-augmentation.jpg', title: 'Ridge Augmentation', description: 'Jawbone enhancement' },
  { type: 'transformation', after: '/images/gallery/implant-denture.jpg', title: 'Implant Denture', description: 'Implant-supported prosthesis' },
  { type: 'transformation', after: '/images/gallery/oral-screening.jpg', title: 'Oral Screening', description: 'Comprehensive examination' }
];

export default function RealTransformations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const [isHovered, setIsHovered] = useState(false);
  const lastInteractionTime = useRef(0);
  const resumeDelay = 2000;
  const baseVelocity = -2.8;

  useAnimationFrame((time, delta) => {
    const timeSinceInteraction = Date.now() - lastInteractionTime.current;
    if (!isHovered && timeSinceInteraction > resumeDelay) {
      const moveBy = baseVelocity * (delta / 16);
      x.set(x.get() + moveBy);
    }
    if (containerRef.current) {
      const singleSetWidth = containerRef.current.scrollWidth / 2;
      const currentX = x.get();
      if (currentX <= -singleSetWidth) x.set(currentX + singleSetWidth);
      else if (currentX > 0) x.set(currentX - singleSetWidth);
    }
  });

  const handleWheel = (e: React.WheelEvent) => {
    lastInteractionTime.current = Date.now();
    const delta = e.deltaX || e.deltaY;
    x.set(x.get() - delta);
  };

  const allItems = [...TRANSFORMATION_ITEMS, ...TRANSFORMATION_ITEMS];

  return (
    <section className="py-14 md:py-20 bg-[#f8fafb] overflow-hidden relative" id="transformations">
      {/* 3D decorative shapes */}
      <div className="absolute top-10 left-10 w-[80px] h-[80px] shape-3d-cube float-3d-slow opacity-10 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-10 right-20 w-[100px] h-[100px] shape-3d-ring float-3d opacity-8 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="text-center">
          <div className="section-badge mb-3 mx-auto w-fit">Patient Gallery</div>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4 tracking-tight text-gray-900 leading-tight">
            Real <span className="text-gradient-teal">Results</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            From dental implants and gum treatments to smile makeovers — see the impact of expert periodontal care.
          </p>
        </div>
      </div>

      <div className="relative w-full py-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#f8fafb] via-[#f8fafb]/80 to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#f8fafb] via-[#f8fafb]/80 to-transparent z-30 pointer-events-none" />

        <div
          className="flex overflow-hidden active:cursor-grabbing perspective-1500"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onWheel={handleWheel}
        >
          <motion.div
            ref={containerRef}
            className="flex gap-6 px-3 py-6 cursor-grab"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -10000, right: 10000 }}
            onDragStart={() => { lastInteractionTime.current = Date.now(); }}
            onDrag={() => { lastInteractionTime.current = Date.now(); }}
            onDragEnd={() => { lastInteractionTime.current = Date.now(); }}
          >
            {allItems.map((item, idx) => (
              <div
                key={`${item.title}-${idx}`}
                className="flex-shrink-0 w-[240px] md:w-[320px]"
                onDragStart={(e) => e.preventDefault()}
              >
                <div className="bg-white rounded-[24px] shadow-3d hover:shadow-3d-teal transition-all duration-700 hover:-translate-y-4 hover:rotate-[-1deg] border border-gray-100/80 overflow-hidden h-full group select-none pointer-events-none md:pointer-events-auto flex flex-col inner-glow"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="p-3 md:p-4 flex flex-col flex-grow">
                    <div className="relative aspect-square rounded-[18px] overflow-hidden bg-gray-50 border border-gray-50">
                      <div className="relative h-full bg-white">
                        <Image draggable={false} src={item.after} alt={item.title} fill className="object-contain p-1 group-hover:scale-110 transition-transform duration-1000" sizes="(max-width: 1024px) 480px, 680px" quality={75} loading={idx < 4 ? "eager" : "lazy"} />
                        {item.badgeText !== 'none' && (
                          <div className="absolute top-3 left-3 glass-card text-[#1a3a5c] text-[10px] px-3 py-1 rounded-full font-poppins font-bold uppercase tracking-wider shadow-sm z-10">
                            {item.badgeText || 'Result'}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* 3D gradient footer */}
                  <div className="bg-gradient-to-r from-[#2a7ab5] to-[#1a5a8c] py-4 px-4 mt-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent" />
                    <h4 className="text-white font-poppins font-bold text-sm md:text-base text-center uppercase tracking-wide truncate relative z-10">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-10 text-center overflow-hidden">
        <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full shadow-3d inner-glow">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-[#2a7ab5]/20 to-[#1a3a5c]/10 overflow-hidden shadow-sm">
                <div className="w-full h-full flex items-center justify-center text-[10px] font-bold text-[#1a3a5c]">{i}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm font-poppins font-medium">
            <span className="text-gray-900 font-bold">Thousands of</span> Happy Patients
          </p>
        </div>
      </div>
    </section>
  );
}
