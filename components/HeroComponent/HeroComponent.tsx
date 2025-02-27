import React from "react";
import SocialAnimation from "./SocialAnimation"; // ✅ Lazy-loaded for performance

export const HeroComponent = () => {
  return (
    <header 
      className="relative flex flex-col items-center lg:flex-row justify-between container mx-auto max-w-7xl px-4 md:px-10 pt-32 pb-16" // Increased pt-32
      aria-labelledby="hero-heading"
    >
      <main className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-1/2">
        {/* ✅ SEO-Optimized & Compact H1 */}
        <h1 
          id="hero-heading" 
          className="text-4xl md:text-5xl font-bold text-center lg:text-left text-gray-900 leading-snug"
          aria-label="Catination - AI-Powered CRM for Sales & Lead Management"
        >
          Close More Deals with <span className="text-blue-600">Catination</span> – The AI-Powered CRM
        </h1>
        
        {/* ✅ Compact & Justified SEO Content */}
        <p className="lg:w-3/4 text-center lg:text-left text-gray-600 text-base leading-relaxed lg:text-justify">
          <strong>Catination is an advanced AI-powered CRM</strong> built for  
          <strong> businesses, sales teams, and marketers</strong> to  
          <strong> automate lead management</strong>, improve customer engagement,  
          and drive more revenue. With <strong>smart lead distribution</strong>,  
          <strong> real-time tracking</strong>, and <strong>AI-driven automation</strong>,  
          Catination helps you <strong>grow faster</strong>.
        </p>

        {/* ✅ Compact CTA Buttons */}
        <nav aria-label="Call to action links">
          <div className="flex flex-wrap gap-3 mt-2">
            <a 
              href="https://crm.catination.com"
              className="bg-black hover:bg-gray-800 px-5 py-2 rounded-full text-white text-xs transition-all shadow-lg"
              title="Start using Catination CRM today for free"
            >
              Try for Free
            </a>
            <a 
              href="/demo"
              className="border border-black hover:bg-black hover:text-white px-5 py-2 rounded-full text-black text-xs transition-all shadow-lg"
              title="Book a demo of Catination CRM"
            >
              Request a Demo
            </a>
          </div>
        </nav>

        {/* ✅ Social Animation (Mobile Position Adjusted) */}
        <div className="w-full flex justify-center lg:hidden mt-16 md:mt-14"> {/* Increased margin for better spacing on mobile */}
          <SocialAnimation />
        </div>
      </main>

      {/* ✅ Right Content (Compact Social Animation) */}
      <aside className="w-full lg:w-1/2 flex items-center justify-center pt-16 lg:pt-16 hidden lg:flex" aria-hidden="true"> {/* Adjusted padding for spacing */}
        <SocialAnimation />
      </aside>
    </header>
  );
};
