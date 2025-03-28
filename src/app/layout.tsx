import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";
import MobileMenu from "@/app/components/MobileMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cursor & Next.js Guide | Lofi Edition",
  description: "A step-by-step guide to building a Next.js app with Cursor, GitHub, and Vercel",
};

// NavLink component with active state styling
function NavLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link 
      href={href} 
      className={`group relative lofi-paragraph hover:text-link transition-colors py-2 px-4 rounded-md hover:lofi-bg-dark ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-link group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 lofi-header p-4 shadow-md z-20 border-b lofi-border backdrop-blur-md">
            <div className="lofi-container lofi-flex between">
              <Link href="/" className="text-xl font-bold gradient-text relative group">
                Cursor + Next.js Guide
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-link opacity-70 group-hover:h-1 transition-all"></span>
              </Link>

              {/* Sound wave animation for lofi aesthetic */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lofi-flex center space-x-1 opacity-10 pointer-events-none">
                {[3,5,7,4,6,5,3].map((height, i) => (
                  <div 
                    key={i} 
                    className="w-0.5 bg-accent rounded-full" 
                    style={{ 
                      height: `${height}px`, 
                      animation: `float 1.5s ease-in-out infinite`,
                      animationDelay: `${i * 0.1}s` 
                    }}
                  ></div>
                ))}
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-1">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/setup">Setup</NavLink>
                <NavLink href="/cursor">Cursor</NavLink>
                <NavLink href="/github">GitHub</NavLink>
                <NavLink href="/vercel">Vercel</NavLink>
                
                {/* GitHub button with glow effect */}
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ml-2 lofi-flex center rounded-full w-10 h-10 lofi-bg-dark lofi-border group transition-all hover:border-accent/50 hover:shadow-glow"
                  style={{ boxShadow: "0 0 0 rgba(var(--accent-rgb), 0)" }}
                >
                  <span className="text-lg">🐙</span>
                </a>
              </nav>
              
              {/* Mobile Menu */}
              <MobileMenu />
            </div>
          </header>
          
          <main className="flex-grow py-8">
            {children}
          </main>
          
          <footer className="lofi-header border-t lofi-border p-6 text-center">
            <div className="lofi-container">
              <p className="mb-3 lofi-paragraph">© {new Date().getFullYear()} Cursor + Next.js Guide - Lofi Edition</p>
              <div className="lofi-flex center space-x-4 text-xs">
                <Link href="/" className="lofi-paragraph hover:text-link transition-colors">Home</Link>
                <span style={{ color: "rgb(var(--border-rgb))" }}>•</span>
                <Link href="/setup" className="lofi-paragraph hover:text-link transition-colors">Setup</Link>
                <span style={{ color: "rgb(var(--border-rgb))" }}>•</span>
                <Link href="/cursor" className="lofi-paragraph hover:text-link transition-colors">Cursor</Link>
                <span style={{ color: "rgb(var(--border-rgb))" }}>•</span>
                <Link href="/github" className="lofi-paragraph hover:text-link transition-colors">GitHub</Link>
                <span style={{ color: "rgb(var(--border-rgb))" }}>•</span>
                <Link href="/vercel" className="lofi-paragraph hover:text-link transition-colors">Vercel</Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
