"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";
import ParallaxDepth from "./ParallaxDepth";

const testimonials = [
  {
    rating: 4.9,
    text: "We full service digital agency that build's fascinating users experiences...",
    name: "CEYHAN ÖZÇIVIT",
    role: "Mid-Level Developer",
    avatar: "👨‍💻",
  },
  {
    rating: 5.0,
    text: "An incredible team that delivers beyond expectations every single time...",
    name: "SARAH JOHNSON",
    role: "Product Manager",
    avatar: "👩‍💼",
  },
  {
    rating: 4.8,
    text: "Their attention to detail and design quality is truly unmatched in the industry...",
    name: "MARK WILLIAMS",
    role: "Senior Designer",
    avatar: "🧑‍🎨",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <ParallaxDepth
      backgroundSpeed={0.1}
      foregroundSpeed={0.65}
      className="w-full bg-white px-12 py-20 flex items-center gap-16 overflow-hidden"
      background={
        <FadeUp className="left-col flex flex-col gap-8 max-w-xs shrink-0">
          <div className="headline">
            <div className="overflow-hidden">
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black uppercase leading-none tracking-tight text-black">
                TRUSTED CLIENTS
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black uppercase leading-none tracking-tight text-black">
                TESTIMONIAL
              </h2>
            </div>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed">
            Consumers today rely heavily on digital means to research products. We research a brand of bldend
          </p>

          <a
            href="#"
            className="explore-cta w-fit flex items-center gap-2 border border-gray-200 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-widest text-black hover:border-black transition-colors"
          >
            EXPLORE US MORE
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </FadeUp>
      }
      foreground={
        <FadeUp delay={0.2} className="right-col flex-1 flex flex-col items-center gap-6">

        {/* Card stack */}
        <div className="card-stack relative w-full max-w-md h-72">
          {/* Back cards */}
          <div className="absolute inset-0 bg-gray-100 rounded-2xl translate-x-3 translate-y-3 rotate-1" />
          <div className="absolute inset-0 bg-gray-200 rounded-2xl translate-x-1.5 translate-y-1.5" />

          {/* Front card */}
          <div className="testimonial-card absolute inset-0 bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">
            <div className="flex-1 p-8 flex flex-col gap-4">
              {/* Rating */}
              <div className="rating flex items-baseline gap-2">
                <span className="text-4xl font-black text-black">{t.rating}</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-xs text-gray-400">(out of 5 stars)</span>
              </div>

              {/* Quote text */}
              <p className="text-sm font-semibold text-gray-800 leading-relaxed flex-1">
                {t.text}
              </p>

              {/* Quote icon */}
              <div className="self-end flex gap-0.5">
                <div className="w-3 h-4 bg-black rounded-sm" />
                <div className="w-3 h-4 bg-black rounded-sm" />
              </div>
            </div>

            {/* Author bar */}
            <div className="author-bar bg-black flex items-center gap-4 px-6 py-4">
              <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-lg shrink-0">
                {t.avatar}
              </div>
              <div>
                <p className="text-white text-xs font-black uppercase tracking-wide">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="nav-controls flex items-center gap-4">
          <div className="w-6 h-0.5 bg-black" />
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-black transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-black transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </FadeUp>
      }
    />
  );
}
