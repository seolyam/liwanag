"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type GalleryItem = {
  tag: string;
  title: string;
  src: string;
  alt: string;
  height: string;
};

type GalleryProps = {
  enableCarousel?: boolean;
  showViewMoreButton?: boolean;
};

const ITEMS_PER_PAGE = 6;

const galleryItems: GalleryItem[] = [
  {
    tag: "Past Outreach",
    title: "Project Dagtaan",
    src: "/images/old-outreach/FB_IMG_1776586289707.jpg",
    alt: "Volunteers facilitating a circle activity with children during Project Dagtaan.",
    height: "h-[320px]",
  },
  {
    tag: "Past Outreach",
    title: "Project Dagtaan",
    src: "/images/old-outreach/FB_IMG_1776586295036.jpg",
    alt: "Volunteers and children gathered in front of a mural during Project Dagtaan.",
    height: "h-[480px]",
  },
  {
    tag: "Past Outreach",
    title: "Project Dagtaan",
    src: "/images/old-outreach/FB_IMG_1776586297599.jpg",
    alt: "Children and volunteers showcasing a handmade activity output at Project Dagtaan.",
    height: "h-[400px]",
  },
  {
    tag: "Past Outreach",
    title: "Project Dagtaan",
    src: "/images/old-outreach/FB_IMG_1776586303542.jpg",
    alt: "Children coloring printed worksheets together during Project Dagtaan.",
    height: "h-[440px]",
  },
  {
    tag: "Past Outreach",
    title: "Project Dagtaan",
    src: "/images/old-outreach/FB_IMG_1776586309881.jpg",
    alt: "A volunteer talking with children while preparing activity snacks at Project Dagtaan.",
    height: "h-[360px]",
  },
  {
    tag: "Past Outreach",
    title: "Project Dagtaan",
    src: "/images/old-outreach/FB_IMG_1776586318394.jpg",
    alt: "Volunteers assisting children with their worksheets in an evening session of Project Dagtaan.",
    height: "h-[520px]",
  },
  {
    tag: "Past Outreach",
    title: "Project Dagtaan",
    src: "/images/old-outreach/FB_IMG_1776586328387.jpg",
    alt: "Children receiving support from volunteers during a group activity at Project Dagtaan.",
    height: "h-[380px]",
  },
  {
    tag: "Past Outreach",
    title: "Project Dagtaan",
    src: "/images/old-outreach/FB_IMG_1776586332732.jpg",
    alt: "A coding demonstration for children during the learning segment of Project Dagtaan.",
    height: "h-[460px]",
  },
  {
    tag: "Past Outreach",
    title: "Project Dagtaan",
    src: "/images/old-outreach/FB_IMG_1776586397065.jpg",
    alt: "Volunteers and children collaborating on coloring activities in Project Dagtaan.",
    height: "h-[340px]",
  },
  {
    tag: "Past Outreach",
    title: "Project Dagtaan",
    src: "/images/old-outreach/FB_IMG_1776586433857.jpg",
    alt: "Children gathered in a community hall during an outreach session of Project Dagtaan.",
    height: "h-[500px]",
  },
];

export default function Gallery({
  enableCarousel = false,
  showViewMoreButton = true,
}: GalleryProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(galleryItems.length / ITEMS_PER_PAGE);

  const visibleItems = useMemo(() => {
    if (!enableCarousel) {
      return galleryItems.slice(0, ITEMS_PER_PAGE);
    }

    const startIndex = currentPage * ITEMS_PER_PAGE;
    return galleryItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, enableCarousel]);

  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 0));
  };

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages - 1));
  };

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
          {visibleItems.map((item) => (
            <div key={item.src} className="masonry-item group">
              <div className="rounded-2xl overflow-hidden glass-edge transition-all duration-500 hover:translate-y-[-8px]">
                <div className={`relative w-full ${item.height}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-night-sky/80 to-transparent" />
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

        {enableCarousel && totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goToPreviousPage}
              disabled={currentPage === 0}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-golden-star/50 text-golden-star transition-all duration-300 hover:bg-golden-star hover:text-text-on-gold disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-golden-star"
              aria-label="Show previous 6 gallery photos"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>

            <p className="min-w-28 text-center text-sm font-semibold uppercase tracking-[0.2em] text-moonlight-dim">
              {currentPage + 1} / {totalPages}
            </p>

            <button
              type="button"
              onClick={goToNextPage}
              disabled={currentPage >= totalPages - 1}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-golden-star/50 text-golden-star transition-all duration-300 hover:bg-golden-star hover:text-text-on-gold disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-golden-star"
              aria-label="Show next 6 gallery photos"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        )}
      </div>

      {/* View More Button */}
      {showViewMoreButton && (
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
      )}
    </section>
  );
}
