import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CaseStudyTabs from "@/components/CaseStudyTabs";
import ArchitecturePrinciples from "@/components/ArchitecturePrinciples";
import DepartmentSpotlight from "@/components/DepartmentSpotlight";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#00201a]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CaseStudyTabs />
        <ArchitecturePrinciples />
        <DepartmentSpotlight />
      </main>
      <Footer />
    </div>
  );
}
