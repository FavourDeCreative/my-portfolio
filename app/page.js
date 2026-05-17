import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
// import Portfolio from "@/components/Portfolio";
import WebEmbed from "@/components/WebEmbed";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <Portfolio /> */}
      <WebEmbed />
      <Contact />
      <Footer />
    </main>
  );
}
