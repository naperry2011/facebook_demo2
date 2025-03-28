"use client";

import { useState } from "react";
import Link from "next/link";

// NavLink component specifically for the mobile menu
function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="w-full group relative lofi-paragraph hover:text-link transition-colors py-2 px-4 rounded-md hover:lofi-bg-dark"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-link group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
}

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden lofi-flex center">
        <button 
          className="mobile-menu-button p-2 lofi-bg-dark rounded-md lofi-border"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fixed left-0 right-0 top-[72px] p-4 lofi-bg-dark lofi-border border-t-0 rounded-b-lg mx-4 animate-fadeIn z-30 shadow-xl backdrop-blur-md">
          <div className="lofi-flex column space-y-2">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/setup">Setup</MobileNavLink>
            <MobileNavLink href="/cursor">Cursor</MobileNavLink>
            <MobileNavLink href="/github">GitHub</MobileNavLink>
            <MobileNavLink href="/vercel">Vercel</MobileNavLink>
            
            <div className="lofi-flex center mt-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="lofi-flex center rounded-full w-10 h-10 lofi-bg-dark lofi-border group transition-all hover:border-accent/50 hover:shadow-glow"
              >
                <span className="text-lg">🐙</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 