"use client";

import React from "react";
import { Instagram } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialMediaLinks = [
    {
      icon: <Instagram size={20} />,
      href: "https://instagram.com/gantavya",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-[var(--color-bg-black)] text-[var(--color-text-primary)] border-t border-[var(--color-bg-charcoal)] mt-24 font-inter">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-6 md:p-12 lg:p-16">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold leading-tight">
            <span className="text-[var(--color-text-secondary)]">Innovate</span>
            <span className="text-[var(--color-primary-orange)]">:</span>
            <br />
            <span className="text-[var(--color-text-primary)]">Create</span>
            <span className="text-[var(--color-primary-cyan)]">;</span>
            <br />
            <span className="text-[var(--color-text-secondary)]">Dominate</span>
            <span className="text-[var(--color-primary-orange)]">:)</span>
          </h1>
        </div>

        <div className="flex flex-col max-w-md text-center md:text-left">
          <p className="text-base md:text-lg mb-6 leading-relaxed text-[var(--color-text-secondary)]">
            Experience robotics like never before at Gantavya.
            <br className="hidden md:block" />
            Join our community of innovators and creators to
            <br className="hidden md:block" />
            explore the future of technology together.
          </p>

          <button
            className="bg-accent text-[var(--color-bg-black)] px-6 md:px-8 py-3 md:py-4 rounded-lg font-exo-2 font-semibold shadow-lg hover:shadow-[var(--color-primary-orange)]/20 transition-all duration-300 w-fit mx-auto md:mx-0 flex items-center group focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-orange)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-black)]"
            aria-label="Join Us Now"
          >
            Join Us Now
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Brand Name */}
      <div className="relative px-6 md:px-12 lg:px-16 overflow-hidden flex items-center justify-center">
        <span className="text-[14vw] font-bold font-orbitron text-[var(--color-text-tertiary)] opacity-10 select-none leading-tighter">
          GANTAVYA
        </span>
      </div>

      <hr className="border-[var(--color-bg-charcoal)] mx-6 md:mx-12 lg:mx-16" />

      {/* Social Media & Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 lg:px-16 py-6 md:py-10">
        <div className="flex gap-4 md:gap-6 mb-6 md:mb-0">
          {socialMediaLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="w-10 h-10 bg-[var(--color-bg-charcoal)] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[var(--color-primary-orange)] hover:scale-110 text-[var(--color-text-secondary)] hover:text-[var(--color-bg-black)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-orange)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-black)]"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-[var(--color-text-tertiary)] text-center md:text-left">
          © {currentYear} Gantavya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;