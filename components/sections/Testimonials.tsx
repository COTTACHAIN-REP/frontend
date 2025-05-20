'use client'
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const testimonials = [
  {
    name: "Alice W.",
    role: "DAO Contributor",
    text: "COTTACHAIN lets me prove my reputation across DAOs. No more starting from scratch!",
    avatar: "/sideimage.png",
  },
  {
    name: "Ben K.",
    role: "Marketplace Seller",
    text: "My trust score follows me everywhere. Buyers trust me instantly.",
    avatar: "/sideimage.png",
  },
  {
    name: "Priya S.",
    role: "Freelancer",
    text: "I can finally own my work history and reputation. Game changer!",
    avatar: "/sideimage.png",
  },
  {
    name: "Leo M.",
    role: "Content Creator",
    text: "COTTACHAIN makes my digital identity portable and credible.",
    avatar: "/sideimage.png",
  },
];

const AUTO_ADVANCE_INTERVAL = 3500;

const getVisibleCount = () => {
  if (typeof window === 'undefined') return 1;
  if (window.innerWidth >= 1024) return 3; // md/lg screens
  if (window.innerWidth >= 640) return 2; // sm screens
  return 1; // mobile
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTO_ADVANCE_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, visibleCount]);

  // Calculate the sliding window of testimonials
  const getVisibleTestimonials = () => {
    const arr = [];
    for (let i = 0; i < testimonials.length; i++) {
      arr.push(testimonials[(index + i) % testimonials.length]);
    }
    return arr;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="w-full flex flex-col items-center mt-16">
      <div className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <Icon icon="mdi:comment-quote-outline" width={32} />
        What People Are Saying
      </div>
      <div className="relative w-full max-w-[1200px] h-[260px] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / visibleCount)}%)`,
            width: `${(testimonials.length / visibleCount) * 100}%`,
          }}
        >
          {visibleTestimonials.map((t, i) => (
            <div
              key={i}
              className="group w-full max-w-[380px] flex-shrink-0 flex flex-col items-center justify-center bg-white/90 rounded-3xl shadow-2xl p-8 mx-4 border border-blue-100 scale-100 group-hover:scale-105 transition-transform duration-300 hover:shadow-blue-200"
              style={{ minWidth: `calc(100% / ${visibleCount})` }}
            >
              <div className="relative mb-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={72}
                  height={72}
                  className="w-20 h-20 rounded-full border-4 border-blue-400 shadow-lg object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full p-1 shadow-md">
                  <Icon icon="mdi:star" width={18} />
                </span>
              </div>
              <div className="text-lg font-semibold text-blue-900 mb-1">{t.name}</div>
              <div className="text-sm text-blue-600 mb-2">{t.role}</div>
              <div className="text-gray-700 text-center italic">“{t.text}”</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${i === index ? "bg-blue-600" : "bg-blue-200"} transition-all`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
