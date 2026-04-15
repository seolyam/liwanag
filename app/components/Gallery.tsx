import Link from "next/link";

const galleryItems = [
  {
    tag: "Tag",
    title: "Title1",
    height: "h-[320px]",
  },
  {
    tag: "Tag",
    title: "Title2",
    height: "h-[480px]",
  },
  {
    tag: "Tag",
    title: "Title3",
    height: "h-[400px]",
  },
  {
    tag: "Tag",
    title: "Title4",
    height: "h-[440px]",
  },
  {
    tag: "Tag",
    title: "Title5",
    height: "h-[360px]",
  },
  {
    tag: "Tag",
    title: "Title6",
    height: "h-[520px]",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden mt-16"
    >
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-golden-star/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-aurora-rose/5 rounded-full blur-[100px]" />

      {/* Section Header */}
      <div className="text-center mb-20 relative">
        <h2 className="font-[var(--font-display)] text-5xl md:text-6xl font-extrabold tracking-tight text-golden-glow mb-4 inline-block relative">
          Gallery
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-golden-star rounded-full" />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-golden-star rounded-full" />
        </h2>
        <p className="mt-12 text-moonlight max-w-2xl mx-auto font-medium text-lg">
          Capturing moments of illumination across the communities we serve.
          Witness the transformation through our lens.
        </p>
      </div>

      {/* Masonry Gallery */}
      <div className="relative">
        <div className="masonry-grid relative z-10">
          {galleryItems.map((item) => (
            <div key={item.title} className="masonry-item group">
              <div className="rounded-2xl overflow-hidden glass-edge transition-all duration-500 hover:translate-y-[-8px]">
                <div
                  className={`w-full ${item.height} border border-dashed border-golden-star/30 bg-gradient-to-br from-night-sky-surface/85 via-night-sky-mid/70 to-night-sky-light/85 flex flex-col items-center justify-center text-center px-6`}
                >
                  <span className="material-symbols-outlined text-golden-star text-5xl mb-3">
                    image
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.28em] text-moonlight-dim">
                    Photo Placeholder
                  </span>
                </div>
                <div className="p-6 bg-night-sky-light/60">
                  <span className="inline-flex items-center gap-2 bg-aurora-rose-deep/20 text-aurora-rose px-3 py-1 rounded-full text-xs font-bold mb-3">
                    <span className="w-1.5 h-1.5 bg-golden-star rounded-full" />
                    {item.tag}
                  </span>
                  <h3 className="font-[var(--font-display)] font-bold text-xl text-starlight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="mt-16 flex justify-center">
        <Link
          href="/gallery"
          className="group flex items-center gap-3 px-10 py-4 rounded-full border-2 border-golden-star text-golden-star font-bold text-lg hover:bg-golden-star hover:text-text-on-gold transition-all duration-500 active:scale-95 shadow-[0_0_20px_rgba(251,191,36,0.1)]"
        >
          View More
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </Link>
      </div>
    </section>
  );
}
