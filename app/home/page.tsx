import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WhatWeDo from "../components/WhatWeDo";
import Gallery from "../components/Gallery";
import WaysToHelp from "../components/WaysToHelp";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <Gallery enableCarousel showViewMoreButton={false} />
        <WaysToHelp />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
