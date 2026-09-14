import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CaseStudyTabs from "@/components/CaseStudyTabs";
import CoreValuesSection from "@/components/CoreValuesSection";
import ArchitecturePrinciples from "@/components/ArchitecturePrinciples";
import DepartmentSpotlight from "@/components/DepartmentSpotlight";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CaseStudyTabs />
        <CoreValuesSection />
        <ArchitecturePrinciples />
        <DepartmentSpotlight />
      </main>
      <Footer />
    </div>
  );
}
