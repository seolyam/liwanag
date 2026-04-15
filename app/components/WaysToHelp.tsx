"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const VOLUNTEER_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScvNijaBnwovBp1DSfgi6V74aV6dE3vxFGMwf55TJO3W7ggGw/viewform";
const FACEBOOK_PAGE_URL = "https://www.facebook.com/dsc.usls";

type DonateModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function DonateContactModal({ isOpen, onClose }: DonateModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="donate-modal-heading"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-night-sky-deep/75 backdrop-blur-sm" />

      <div
        className="relative z-10 w-full max-w-2xl rounded-3xl p-6 md:p-10 bg-night-sky-light/70 border border-white/15 backdrop-blur-2xl shadow-[0_16px_64px_rgba(249,189,34,0.16)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close donation contact modal"
          onClick={onClose}
          className="absolute right-4 top-4 md:right-5 md:top-5 h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 text-starlight text-xl leading-none transition-colors"
        >
          ✕
        </button>

        <h3
          id="donate-modal-heading"
          className="text-3xl md:text-4xl font-extrabold text-starlight pr-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Support Project Liwanag
        </h3>
        <p className="mt-4 text-moonlight text-base md:text-lg leading-relaxed max-w-2xl">
          To coordinate your donation, please reach out to our team directly
          through our official channels. We appreciate your generosity!
        </p>

        <div className="mt-8 space-y-4">
          <a
            href="mailto:gdg@usls.edu.ph"
            className="group w-full flex items-center gap-4 rounded-2xl px-5 py-4 bg-night-sky-surface/80 hover:bg-night-sky-bright/80 border border-white/10 transition-all duration-300 hover:shadow-[0_10px_36px_rgba(251,191,36,0.2)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-golden-star/20 text-golden-glow">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
                <path d="m22 8-8.69 5.43a2.5 2.5 0 0 1-2.62 0L2 8" />
              </svg>
            </span>
            <span className="min-w-0">
              <span className="block text-sm text-moonlight-dim">Email</span>
              <span className="block text-lg font-semibold text-starlight group-hover:text-golden-glow transition-colors break-all">
                gdg@usls.edu.ph
              </span>
            </span>
          </a>

          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full flex items-center gap-4 rounded-2xl px-5 py-4 bg-night-sky-surface/80 hover:bg-night-sky-bright/80 border border-white/10 transition-all duration-300 hover:shadow-[0_10px_36px_rgba(244,114,182,0.24)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-aurora-rose/20 text-aurora-rose">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="currentColor"
              >
                <path d="M22 12A10 10 0 1 0 10.44 21.88v-6.96H7.9V12h2.54V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.26.2 2.26.2v2.48h-1.27c-1.24 0-1.63.78-1.63 1.57V12h2.78l-.44 2.92h-2.34v6.96A10 10 0 0 0 22 12Z" />
              </svg>
            </span>
            <span className="min-w-0">
              <span className="block text-sm text-moonlight-dim">Facebook</span>
              <span className="block text-lg font-semibold text-starlight group-hover:text-aurora-rose transition-colors">
                GDGoC USLS Facebook Page
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function WaysToHelp() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDonateModalOpen(false);
      }
    };

    if (isDonateModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEscape);
    };
  }, [isDonateModalOpen]);

  return (
    <>
      <section
        id="ways-to-help"
        className="pt-32 pb-24 px-6 starry-bg overflow-hidden relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 md:mb-16 relative">
            <h2
              className="text-5xl md:text-6xl font-extrabold text-starlight mb-6 relative inline-block text-glow-gold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Be Part of the Light
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-golden-star rounded-full opacity-60" />
            </h2>
            <p
              className="text-moonlight text-lg md:text-xl max-w-190 mx-auto mt-8 leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Every act of service and generosity helps us carry hope farther.
              Join Project Liwanag in shaping brighter moments for children and
              communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="bg-night-sky-light/90 p-8 md:p-10 rounded-3xl flex flex-col items-center text-center group transition-all duration-300 hover:bg-night-sky-surface relative overflow-hidden border border-white/8">
              <Image
                src="/images/GDG OUTREACH ASSETS/ShootingStar3.png"
                alt=""
                width={192}
                height={192}
                aria-hidden="true"
                className="absolute top-0 right-0 w-48 h-48 opacity-20 -mr-12 -mt-12 pointer-events-none group-hover:scale-110 transition-transform duration-700"
              />
              <Image
                src="/images/GDG OUTREACH ASSETS/5Clouds.png"
                alt=""
                width={256}
                height={128}
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-64 h-32 opacity-10 -ml-16 -mb-8 pointer-events-none blur-sm"
              />

              <div className="relative z-10 w-20 h-20 bg-golden-star/20 rounded-full flex items-center justify-center mb-7">
                <span className="material-symbols-outlined text-golden-star text-4xl">
                  volunteer_activism
                </span>
              </div>

              <h3
                className="relative z-10 text-3xl font-bold text-golden-glow mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Volunteer
              </h3>
              <p className="relative z-10 text-moonlight mb-8 max-w-md">
                Dedicate your time and skills to empower children through
                meaningful learning and outreach activities with our team.
              </p>

              <a
                href={VOLUNTEER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 btn-primary text-lg shadow-[0_8px_36px_rgba(251,191,36,0.28)]"
              >
                Sign Up
              </a>
            </article>

            <article className="bg-night-sky-light/90 p-8 md:p-10 rounded-3xl flex flex-col items-center text-center group transition-all duration-300 hover:bg-night-sky-surface relative overflow-hidden border border-white/8">
              <Image
                src="/images/GDG OUTREACH ASSETS/ShootingStar5.png"
                alt=""
                width={192}
                height={192}
                aria-hidden="true"
                className="absolute top-0 right-0 w-48 h-48 opacity-20 -mr-12 -mt-12 pointer-events-none group-hover:scale-110 transition-transform duration-700"
              />
              <Image
                src="/images/GDG OUTREACH ASSETS/5Stars.png"
                alt=""
                width={48}
                height={48}
                aria-hidden="true"
                className="absolute top-4 left-4 w-12 h-12 opacity-30 pointer-events-none"
              />

              <div className="relative z-10 w-20 h-20 bg-aurora-rose/20 rounded-full flex items-center justify-center mb-7">
                <span className="material-symbols-outlined text-aurora-rose text-4xl">
                  featured_seasonal_and_gifts
                </span>
              </div>

              <h3
                className="relative z-10 text-3xl font-bold text-golden-glow mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Donate
              </h3>
              <p className="relative z-10 text-moonlight mb-8 max-w-md">
                Your generosity sustains our outreach efforts and helps us bring
                essential resources and joyful experiences to more young minds.
              </p>

              <button
                type="button"
                onClick={() => setIsDonateModalOpen(true)}
                className="relative z-10 btn-rose text-lg shadow-[0_8px_36px_rgba(244,114,182,0.3)]"
              >
                Donate Now
              </button>
            </article>
          </div>
        </div>
      </section>

      <DonateContactModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
      />
    </>
  );
}
