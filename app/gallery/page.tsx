import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="bg-night-sky">
        <Gallery enableCarousel showViewMoreButton={false} />
      </main>
      <Footer />
    </>
  );
}
