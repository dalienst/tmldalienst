"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronRight,
  Layers,
  HeartHandshake,
  ShieldCheck,
  Building2,
  ExternalLink,
  Sparkles
} from "lucide-react";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  const navLinks = [
    {
      href: "#overview",
      label: "Overview",
      tagline: "Directorate scope & briefing",
      icon: Sparkles
    },
    {
      href: "#systems",
      label: "Systems (7)",
      tagline: "7 engineered operational platforms",
      icon: Layers
    },
    {
      href: "#values",
      label: "Core Values",
      tagline: "5 institutional commitments",
      icon: HeartHandshake
    },
    {
      href: "#standards",
      label: "Engineering Standards",
      tagline: "Architecture principles & governance",
      icon: ShieldCheck
    },
    {
      href: "#departments",
      label: "Departmental Scope",
      tagline: "Collaborative impact across divisions",
      icon: Building2
    }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 transition-all">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Executive Header: Name + Tamarind Group Role */}
            <Link href="/" className="flex items-center space-x-3.5 group">
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 p-1.5 flex items-center justify-center shrink-0 shadow-sm group-hover:border-slate-300 transition-colors">
                <Image
                  src="/logo2.png"
                  alt="Tamarind Emblem"
                  width={34}
                  height={34}
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors">
                    Dalienst Owino Oduor
                  </span>
                  <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                    Internal Dossier
                  </span>
                </div>
                <p className="text-xs text-slate-500 tracking-wide font-normal">
                  IT Assistant &amp; Digital Solutions Architect · Tamarind Management Limited
                </p>
              </div>
            </Link>

            {/* Right Side: Platforms Hub Shortcut + Hamburger Menu Button */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a
                href="http://localhost:3003"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-semibold transition-all"
              >
                <span>Platforms Portal</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-600" />
              </a>

              {/* Hamburger Toggle Button */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 cursor-pointer"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-4 h-4" />
                <span>Menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Side Drawer Overlay & Panel */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop Blur */}
          <div
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
            onClick={() => setSidebarOpen(false)}
          />

          {/* Slide-in Drawer */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-sm sm:max-w-md bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-250">
              
              {/* Drawer Header */}
              <div className="px-6 py-6 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shadow-sm">
                    <Image
                      src="/logo2.png"
                      alt="Tamarind Logo"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 block leading-tight">
                      Navigation Menu
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Tamarind Digital Architecture
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="px-6 py-6 overflow-y-auto space-y-2 flex-grow">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-3">
                  Dossier Sections
                </span>

                {navLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className="flex items-center justify-between p-3.5 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-all group"
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className="p-2 rounded-lg bg-slate-100 text-slate-700 group-hover:bg-amber-50 group-hover:text-amber-700 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                            {item.label}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {item.tagline}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  );
                })}

                {/* Direct Link to Platforms Portal */}
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-3">
                    Institutional Ecosystem
                  </span>
                  <a
                    href="http://localhost:3003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between shadow-sm hover:bg-slate-800 transition-all group"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-white">
                          Tamarind Platforms Portal
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                          LIVE
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Directory of 7 operational group platforms
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-slate-200 bg-slate-50/80">
                <div className="text-xs font-semibold text-slate-900">
                  Dalienst Owino Oduor
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  IT Assistant &amp; Digital Solutions Architect
                </div>
                <div className="text-[11px] font-mono text-slate-500 mt-1">
                  +254 740 964423 · oduordalienst@gmail.com
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
