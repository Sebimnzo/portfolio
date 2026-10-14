import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Works />
        <Services />
        <Brands />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
