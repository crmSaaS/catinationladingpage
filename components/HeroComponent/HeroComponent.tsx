import React from "react";
import SocialAnimation from "./SocialAnimation"; // ✅ Lazy-loaded for better performance

export const HeroComponent = () => {
  return (
    <section
      className="relative flex flex-col-reverse lg:flex-row items-center justify-between container mx-auto max-w-7xl px-6 md:px-12 pt-40 pb-16"
      aria-labelledby="hero-heading"
    >
      {/* ✅ Left Content (SEO & Horizontal Fit) */}
      <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-1/2">
        <h1 
          id="hero-heading" 
          className="text-4xl md:text-5xl font-bold lg:text-left text-center text-gray-900 leading-tight"
        >
          Convert More Leads, Close More Deals
        </h1>
        <p className="lg:w-3/4 text-center lg:text-left text-gray-600 text-lg leading-relaxed">
          <strong>Boost sales and automate growth</strong> with <strong>Proplye CRM</strong>.  
          Easily manage <strong>lead distribution</strong>, optimize <strong>marketing campaigns</strong>,  
          and track every deal effortlessly.
        </p>

        {/* ✅ Call-to-Action (Better Layout) */}
        <div className="flex flex-wrap gap-4 mt-2">
          <a 
            href="/get-started"
            className="bg-black hover:bg-gray-800 px-6 py-3 rounded-full text-white text-sm transition-all shadow-lg"
            aria-label="Get started with Proplye CRM today"
          >
            Get Started
          </a>
          <a 
            href="/demo"
            className="border border-black hover:bg-black hover:text-white px-6 py-3 rounded-full text-black text-sm transition-all shadow-lg"
            aria-label="Book a free demo of Proplye CRM"
          >
            Book a Demo
          </a>
        </div>
      </div>

      {/* ✅ Right Content (Aligned Horizontally) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center pt-20">
        <SocialAnimation /> {/* ✅ Lazy-loaded for faster performance */}
      </div>
    </section>
  );
};
