"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import { NavProps, ButtonProps } from "./Navbar.interface";
import Link from "next/link";

// Logo Component
const Logo = () => (
  <Link href="/" aria-label="Home">
    <Image 
      src="/logo.png" 
      alt="CRM Software Logo" 
      height={80}  
      width={125}  
      priority 
    />
  </Link>
);

// Hamburger Menu Button
const HamburgerButton: FC<ButtonProps> = ({ onClick }) => (
  <button onClick={onClick} aria-label="Open mobile menu">
    <Image 
      src="/icon-hamburger.svg" 
      alt="Open menu" 
      height={18}  
      width={18}  
      className="flex md:hidden"
    />
  </button>
);

// Close Menu Button
const CloseButton: FC<ButtonProps> = ({ onClick }) => (
  <button onClick={onClick} aria-label="Close mobile menu">
    <Image 
      src="/icon-close.svg" 
      alt="Close menu" 
      height={18}  
      width={18}  
      className="flex md:hidden"
    />
  </button>
);

export const Navbar: FC<NavProps> = ({ navItems = [] }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ Smooth Scrolling Function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // Increase this value if needed
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
  
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };
  

  return (
    <nav className="w-full py-3 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex flex-row items-center justify-between px-5">
        <Logo />

        {/* 🔹 Desktop Navigation */}
        <ul className="hidden md:flex flex-row items-center gap-4 lg:gap-5">
          {navItems.map(({ name }, idx) => (
            <li key={idx} className="text-sm text-gray-900 cursor-pointer hover:text-gray-600 transition-colors">
              <button
                onClick={() => {
                  if (name.toLowerCase() === "features") {
                    scrollToSection("features");
                  } else if (name.toLowerCase() === "pricing") {
                    scrollToSection("catination-pricing");
                  } else if (name.toLowerCase() === "industries") {
                    scrollToSection("our-partners");
                  } else if (name.toLowerCase() === "aboutus") {
                    scrollToSection("about-us");
                  }
                }}
                className="focus:outline-none"
              >
                {name}
              </button>
            </li>
          ))}
        </ul>

        {/* 🔹 CTA Button */}
        <Link href="https://crm.catination.com">
          <button className="bg-black hover:opacity-80 px-4 py-1.5 rounded-full text-sm text-white hidden md:flex">
            Get Started
          </button>
        </Link>

        {/* 🔹 Mobile Menu Button */}
        <div className="cursor-pointer flex md:hidden">
          {!isMobileMenuOpen ? (
            <HamburgerButton onClick={() => setIsMobileMenuOpen(true)} />
          ) : (
            <CloseButton onClick={() => setIsMobileMenuOpen(false)} />
          )}
        </div>
      </div>

      {/* 🔹 Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-12 right-0 w-full bg-white shadow-xl py-3">
          <ul className="flex flex-col items-center gap-3">
            {navItems.map(({ name }, idx) => (
              <li key={idx} className="text-sm font-semibold text-gray-900 cursor-pointer hover:text-gray-600">
                <button
                  onClick={() => {
                    if (name.toLowerCase() === "features") {
                      scrollToSection("features");
                    } else if (name.toLowerCase() === "pricing") {
                      scrollToSection("catination-pricing");
                    } else if (name.toLowerCase() === "industries") {
                      scrollToSection("our-partners");
                    } else if (name.toLowerCase() === "about-us") {
                      scrollToSection("about-us");
                    }
                  }}
                  className="focus:outline-none"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
