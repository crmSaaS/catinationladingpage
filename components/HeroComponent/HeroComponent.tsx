import React from "react";
import SocialAnimation from "./SocialAnimation"; // Import the animation component

export const HeroComponent = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 md:gap-0 items-center lg:min-h-[calc(100vh-112px)] px-6 md:px-12">
      {/* Left Content */}
      <div className="flex flex-col items-center lg:items-start justify-start gap-8 w-full lg:w-1/2">
        <h1 className="text-4xl md:text-6xl font-semibold lg:text-left text-center text-gray-900">
        Convert Leads, Close Deals
        </h1>
        <h3 className="lg:w-2/3 text-center text-base lg:text-left text-gray-400">
          Manage and streamline your leads, automate distribution, and enhance marketing 
          campaigns—all from one powerful CRM platform.
        </h3>

      

        <button className="bg-[black] hover:opacity-80 px-6 py-2.5 w-auto rounded-full text-sm text-white">
          Get Started
        </button>
      </div>

      {/* Right Content (Replacing Image with Animation) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <SocialAnimation /> {/* Using animation instead of an image */}
      </div>
    </div>
  );
};
