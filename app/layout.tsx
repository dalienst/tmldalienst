import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tamarind Group Internal Systems & Digital Architecture | Dalienst Owino Oduor",
  description: "Executive technical briefing for Tamarind Management Limited leadership detailing 8 proprietary platforms, applied AI tools, and process digitalization architected and deployed by Dalienst Owino Oduor.",
  keywords: [
    "Tamarind Group",
    "Tamarind Management Limited",
    "Dalienst Owino Oduor",
    "Hospitality Software Engineering",
    "Process Digitalization",
    "Tamarind Dhow",
    "Tamarind Village",
    "Carnivore"
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo2.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-[#00201a] text-slate-100 selection:bg-[#d97706] selection:text-white">
        {children}
      </body>
    </html>
  );
}
