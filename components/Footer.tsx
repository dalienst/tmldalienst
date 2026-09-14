import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 p-1 flex items-center justify-center">
              <Image
                src="/logo.svg"
                alt="Dalienst Logo"
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
                Systems Architect & Founder, Corban Technologies LTD
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6 text-xs text-slate-400 font-medium">
            <a
              href="https://dalienst.co.ke"
              className="hover:text-[#eb8a0c] transition-colors"
            >
              Main Portfolio (dalienst.co.ke)
            </a>
            <a
              href="https://www.corbantechnologies.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#eb8a0c] transition-colors flex items-center space-x-1"
            >
              <span>corbantechnologies.org</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Dalienst Owino Oduor. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Architectural Case Studies for Tamarind Management Limited.
          </p>
        </div>
      </div>
    </footer>
  );
}
