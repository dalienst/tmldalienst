"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight, ShieldCheck, Globe } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0B1120]/95 backdrop-blur-md border-b border-slate-800 text-white transition-all">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center space-x-3.5 group">
            <div className="relative w-10 h-10 rounded-lg bg-slate-900 border border-[#eb8a0c]/40 p-1 flex items-center justify-center overflow-hidden shadow-inner group-hover:border-[#eb8a0c] transition-colors">
              <Image
                src="/logo.svg"
                alt="Dalienst Logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-base font-bold tracking-tight text-white group-hover:text-[#eb8a0c] transition-colors">
                  DALIENST
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-[#eb8a0c] border border-[#eb8a0c]/30">
                  Case Study
                </span>
              </div>
              <p className="text-xs text-slate-400 tracking-wide font-normal">
                Enterprise Architecture · Tamarind Group
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 text-xs font-semibold tracking-wide uppercase">
            <a
              href="#overview"
              className="text-slate-300 hover:text-[#eb8a0c] transition-colors"
            >
              Overview
            </a>
            <a
              href="#roi"
              className="text-slate-300 hover:text-[#eb8a0c] transition-colors"
            >
              Business ROI
            </a>
            <a
              href="#architecture"
              className="text-slate-300 hover:text-[#eb8a0c] transition-colors"
            >
              Architecture
            </a>
            <a
              href="#case-studies"
              className="text-slate-300 hover:text-[#eb8a0c] transition-colors"
            >
              Case Studies (8)
            </a>
            <a
              href="#tech-matrix"
              className="text-slate-300 hover:text-[#eb8a0c] transition-colors"
            >
              Tech Matrix
            </a>
          </nav>

          {/* External Links to Portfolio & CTLTD */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.corbantechnologies.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-xs text-slate-300 hover:text-[#eb8a0c] font-medium transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>Corban Tech LTD</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </a>
            <a
              href="https://dalienst.co.ke/#contact"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#eb8a0c] to-[#d97706] text-white font-medium text-xs hover:from-[#d97706] hover:to-[#eb8a0c] shadow-md shadow-amber-900/20 transition-all hover:scale-[1.02]"
            >
              <span>Consult Architect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 py-4 px-2 space-y-2 bg-[#0B1120]">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-[#eb8a0c]"
            >
              Overview
            </a>
            <a
              href="#roi"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-[#eb8a0c]"
            >
              Business ROI
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-[#eb8a0c]"
            >
              Architecture
            </a>
            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-[#eb8a0c]"
            >
              Case Studies (8)
            </a>
            <a
              href="#tech-matrix"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-[#eb8a0c]"
            >
              Tech Matrix
            </a>
            <div className="pt-3 border-t border-slate-800 flex flex-col space-y-2">
              <a
                href="https://www.corbantechnologies.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-xs font-medium text-slate-300 flex items-center justify-between"
              >
                <span>Corban Technologies LTD</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://dalienst.co.ke/#contact"
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-[#eb8a0c] text-white font-medium text-xs"
              >
                <span>Inquire for Architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
