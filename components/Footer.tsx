import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#001a15] text-white border-t border-[#003d33]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#002822] border border-[#d97706]/40 p-1 flex items-center justify-center">
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
              <span className="text-xs text-emerald-200/70">
                IT Assistant &amp; Digital Solutions Architect · Tamarind Management Limited
              </span>
            </div>
          </div>

          {/* Institutional Links */}
          <div className="flex items-center space-x-6 text-xs text-emerald-200/70 font-medium">
            <a
              href="#overview"
              className="hover:text-[#d97706] transition-colors"
            >
              Overview
            </a>
            <a
              href="#systems"
              className="hover:text-[#d97706] transition-colors"
            >
              Systems Directory (8)
            </a>
            <a
              href="#standards"
              className="hover:text-[#d97706] transition-colors"
            >
              Architecture Standards
            </a>
            <a
              href="#departments"
              className="hover:text-[#d97706] transition-colors"
            >
              Departmental Impact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#002b24] flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-300/50 gap-4">
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
