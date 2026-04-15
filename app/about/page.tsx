import Header from "../components/Header";
import About from "../components/About";
import WhatWeDo from "../components/WhatWeDo";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <About />
        <WhatWeDo />
      </main>
      <Footer />
    </>
  );
}
