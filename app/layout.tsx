import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tamarind Group Enterprise Digital Transformation | Case Study by Dalienst Owino Oduor",
  description: "Comprehensive systems architecture case studies by Dalienst Owino Oduor (Founder, Corban Technologies LTD) detailing 8 enterprise platforms engineered for Tamarind Management Limited.",
  keywords: [
    "Dalienst Owino Oduor",
    "Systems Architect",
    "Corban Technologies LTD",
    "Tamarind Group",
    "Enterprise Architecture",
    "Hospitality Software",
    "FinTech",
    "M-Pesa STK Push",
    "LLM RAG Pipeline",
    "PostgreSQL"
  ],
  icons: {
    icon: "/favicon.svg",
    apple: "/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-[#0B1120] text-slate-100 selection:bg-[#eb8a0c] selection:text-white">
        {children}
      </body>
    </html>
  );
}
