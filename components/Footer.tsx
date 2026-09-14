import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 p-1 flex items-center justify-center">
              <Image
                src="/logo2.png"
                alt="Tamarind Emblem"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <span className="text-base font-bold text-white block">
                Dalienst Owino Oduor
              </span>
              <span className="text-xs text-slate-400">
                IT Assistant &amp; Digital Solutions Architect · Tamarind Management Limited
              </span>
            </div>
          </div>

          {/* Institutional Links */}
          <div className="flex items-center space-x-6 text-xs text-slate-400 font-medium">
            <a
              href="#overview"
              className="hover:text-white transition-colors"
            >
              Overview
            </a>
            <a
              href="#systems"
              className="hover:text-white transition-colors"
            >
              Systems Directory (8)
            </a>
            <a
              href="#standards"
              className="hover:text-white transition-colors"
            >
              Architecture Standards
            </a>
            <a
              href="#departments"
              className="hover:text-white transition-colors"
            >
              Departmental Scope
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Tamarind Management Limited. Internal Technical Dossier.
          </p>
          <p className="text-center sm:text-right">
            Prepared for the Board of Directors &amp; General Management · tamarind.dalienst.co.ke
          </p>
        </div>
      </div>
    </footer>
  );
}
