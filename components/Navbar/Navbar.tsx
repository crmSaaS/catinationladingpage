import React, { FC, useState } from "react";
import Image from "next/image";
import { NavProps, ButtonProps } from "./Navbar.interface";
import Link from "next/link";

const Logo = () => (
  <Image src="/logo.png" alt="logo" height={100} width={150} />
);

const HamburgerButton = ({ onClick }: ButtonProps) => (
  <Image
    src="/icon-hamburger.svg"
    className="flex md:hidden"
    alt="menu"
    height={24}
    width={24}
    onClick={onClick}
  />
);

const CloseButton = ({ onClick }: ButtonProps) => (
  <Image
    src="/icon-close.svg"
    className="flex md:hidden"
    alt="close"
    height={24}
    width={24}
    onClick={onClick}
  />
);

export const Navbar: FC<NavProps> = ({ navItems = [] }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to smoothly scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false); // Close menu after clicking
  };

  return (
    <>
      <nav className="w-full py-8 relative">
        <div className="flex flex-row items-center justify-between">
          <Logo />
          <ul className="flex-row items-center gap-6 lg:gap-8 hidden md:flex">
            {navItems.map(({ name }, idx) => (
              <li
                key={idx}
                className="text-sm text-gray-900 cursor-pointer"
                onClick={() =>
                  name.toLowerCase() === "features" ? scrollToSection("features") : null
                }
              >
                {name}
              </li>
            ))}
          </ul>
          <button className="bg-[black] hover:opacity-80 px-6 py-2.5 rounded-full text-sm text-white hidden md:flex">
            Get Started
          </button>
          <div className="cursor-pointer flex md:hidden">
            {!isMobileMenuOpen ? (
              <HamburgerButton onClick={() => setIsMobileMenuOpen(true)} />
            ) : (
              <CloseButton onClick={() => setIsMobileMenuOpen(false)} />
            )}
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className="absolute top-20 right-0 w-full">
          {isMobileMenuOpen && (
            <ul className="flex-col items-center gap-6 lg:gap-8 flex md:hidden bg-white shadow-xl py-6 mx-8">
              {navItems.map(({ name }, idx) => (
                <li
                  key={idx}
                  className="text-sm font-semibold text-gray-900 cursor-pointer"
                  onClick={() =>
                    name.toLowerCase() === "features" ? scrollToSection("features") : setIsMobileMenuOpen(false)
                  }
                >
                  {name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};
