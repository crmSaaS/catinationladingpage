import React, { FC, useState } from "react";
import Image from "next/image";
import { NavProps, ButtonProps } from "./Navbar.interface";
import Link from "next/link";

// Logo Component (SEO-Optimized)
const Logo = () => (
  <Link href="/" aria-label="Home">
    <Image 
      src="/logo.png" 
      alt="CRM Software Logo" 
      height={80}  // Reduced height
      width={130}  // Adjusted width proportionally
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
      height={20}  // Reduced icon size
      width={20}  
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
      height={20}  
      width={20}  
      className="flex md:hidden"
    />
  </button>
);

export const Navbar: FC<NavProps> = ({ navItems = [] }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function for Smooth Scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full py-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50"> {/* Reduced height */}
      <div className="container mx-auto flex flex-row items-center justify-between px-6">
        <Logo />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-row items-center gap-5 lg:gap-6"> {/* Adjusted spacing */}
          {navItems.map(({ name }, idx) => (
            <li key={idx} className="text-sm text-gray-900 cursor-pointer hover:text-gray-600 transition-colors">
              <button
                onClick={() => (name.toLowerCase() === "features" ? scrollToSection("features") : null)}
                className="focus:outline-none"
              >
                {name}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link href="/get-started">
          <button className="bg-black hover:opacity-80 px-5 py-2 rounded-full text-sm text-white hidden md:flex">
            Get Started
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <div className="cursor-pointer flex md:hidden">
          {!isMobileMenuOpen ? (
            <HamburgerButton onClick={() => setIsMobileMenuOpen(true)} />
          ) : (
            <CloseButton onClick={() => setIsMobileMenuOpen(false)} />
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-14 right-0 w-full bg-white shadow-xl py-4"> {/* Adjusted position */}
          <ul className="flex flex-col items-center gap-4">
            {navItems.map(({ name }, idx) => (
              <li key={idx} className="text-sm font-semibold text-gray-900 cursor-pointer hover:text-gray-600">
                <button
                  onClick={() => (name.toLowerCase() === "features" ? scrollToSection("features") : setIsMobileMenuOpen(false))}
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
