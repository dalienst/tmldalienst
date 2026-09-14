import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RoiSummary from "@/components/RoiSummary";
import ArchitecturePrinciples from "@/components/ArchitecturePrinciples";
import CaseStudyTabs from "@/components/CaseStudyTabs";
import TechStackMatrix from "@/components/TechStackMatrix";
import ConsultationCta from "@/components/ConsultationCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <RoiSummary />
        <ArchitecturePrinciples />
        <CaseStudyTabs />
        <TechStackMatrix />
        <ConsultationCta />
      </main>
      <Footer />
    </div>
  );
}
