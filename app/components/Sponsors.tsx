import Image from "next/image";

const partnerLogos = [
  {
    name: "Balayan Social Development Center",
    src: "/images/logos/FB_IMG_1777526758173.jpg",
  },
  {
    name: "Kalipay Negrense Foundation",
    src: "/images/logos/kalipaylogo2.png",
  },
];

export default function Sponsors() {
  return (
    <section className="py-24 bg-night-sky-deep overflow-hidden relative">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-golden-star/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-aurora-rose/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-display)] text-3xl font-bold text-starlight relative inline-block">
            Our Partnerships
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-golden-star rounded-full opacity-40" />
          </h2>
          <p className="text-moonlight mt-4 max-w-xl mx-auto">
            Supported by organizations that share our vision for a brighter
            future.
          </p>
        </div>

        {/* Sponsors Display */}
        <div className="flex flex-col items-center gap-12">
          <div className="w-full max-w-6xl p-1 rounded-3xl bg-gradient-to-b from-night-sky-bright/25 to-transparent">
            <div className="bg-night-sky/80 rounded-[1.4rem] p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {partnerLogos.map((partner) => (
                  <div
                    key={partner.name}
                    className="group h-full rounded-2xl p-[1px] bg-gradient-to-br from-golden-star/60 via-aurora-rose/35 to-cloud-lavender/50 shadow-[0_0_45px_rgba(251,191,36,0.18)]"
                  >
                    <div className="h-full rounded-2xl min-h-64 bg-night-sky-surface/75 border border-white/8 px-6 py-8 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_0_40px_rgba(251,191,36,0.25)]">
                      <div className="w-32 h-32 rounded-2xl bg-night-sky/60 flex items-center justify-center mb-5 overflow-hidden">
                        <Image
                          src={partner.src}
                          alt={partner.name}
                          width={144}
                          height={144}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-[11px] uppercase tracking-[0.28em] text-moonlight-dim mb-2">
                        Partner
                      </p>
                      <h3 className="text-base font-bold tracking-wide text-starlight">
                        {partner.name}
                      </h3>
                      <p className="text-xs text-golden-glow/90 mt-2">
                        Official Partner
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
