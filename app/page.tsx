import Header from "@/components/Header";
import HomeVideo from "@/components/HomeVideo";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Stands from "@/components/Stands";
import Packages from "@/components/Packages";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import Guides from "@/components/Guides";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main id="main" className="flex-1">
        <HomeVideo />
        <Hero />
        <Works />
        <Stands />
        <Packages />
        <Services />
        <Brands />
        <Guides />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
