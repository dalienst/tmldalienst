"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 transition-all">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Executive Header: Name + Tamarind Group Role */}
          <Link href="/" className="flex items-center space-x-3.5 group">
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 p-1.5 flex items-center justify-center shrink-0 shadow-sm group-hover:border-slate-300 transition-colors">
              <Image
                src="/logo2.png"
                alt="Tamarind Emblem"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-base font-bold tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors">
                  Dalienst Owino Oduor
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                  Internal Dossier
                </span>
              </div>
              <p className="text-xs text-slate-500 tracking-wide font-normal">
                IT Assistant &amp; Digital Solutions Architect · Tamarind Management Limited
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-wider uppercase">
            <a
              href="#overview"
              className="text-slate-600 hover:text-slate-950 transition-colors"
            >
              Overview
            </a>
            <a
              href="#systems"
              className="text-slate-600 hover:text-slate-950 transition-colors"
            >
              Systems (7)
            </a>
            <a
              href="#values"
              className="text-slate-600 hover:text-slate-950 transition-colors"
            >
              Core Values
            </a>
            <a
              href="#standards"
              className="text-slate-600 hover:text-slate-950 transition-colors"
            >
              Engineering Standards
            </a>
            <a
              href="#departments"
              className="text-slate-600 hover:text-slate-950 transition-colors"
            >
              Departmental Scope
            </a>
          </nav>

          {/* Direct Link to Institutional Platforms Hub */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-600">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-[11px]">7 Deployed Platforms</span>
            </div>
            <a
              href="http://localhost:3003"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition-all shadow-sm"
            >
              <span>Platforms Portal</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-300" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4 px-2 space-y-2 bg-white">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Overview
            </a>
            <a
              href="#systems"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Systems (7)
            </a>
            <a
              href="#standards"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Engineering Standards
            </a>
            <a
              href="#departments"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Departmental Scope
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
