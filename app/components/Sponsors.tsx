const sponsorSlots = [
  { name: "Company Logo 01", tier: "Founding Partner" },
  { name: "Company Logo 02", tier: "Technology Partner" },
  { name: "Company Logo 03", tier: "Community Partner" },
  { name: "Company Logo 04", tier: "Advocacy Partner" },
  { name: "Company Logo 05", tier: "Sponsor Slot" },
  { name: "Company Logo 06", tier: "Sponsor Slot" },
  { name: "Company Logo 07", tier: "Sponsor Slot" },
  { name: "Company Logo 08", tier: "Sponsor Slot" },
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
            Our Sponsors
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {sponsorSlots.map((slot) => (
                  <div
                    key={slot.name}
                    className="group rounded-2xl p-[1px] bg-gradient-to-br from-golden-star/50 via-aurora-rose/30 to-cloud-lavender/40"
                  >
                    <div className="rounded-2xl min-h-52 bg-night-sky-surface/70 border border-white/5 px-4 py-6 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]">
                      <div className="w-24 h-24 rounded-xl border-2 border-dashed border-golden-star/50 bg-night-sky/60 flex items-center justify-center mb-5">
                        <span className="material-symbols-outlined text-golden-star text-4xl">
                          domain
                        </span>
                      </div>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-moonlight-dim mb-2">
                        Logo Placeholder
                      </p>
                      <h3 className="text-sm font-bold tracking-wide text-starlight">
                        {slot.name}
                      </h3>
                      <p className="text-xs text-golden-glow/80 mt-1">
                        {slot.tier}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-center text-sm text-moonlight-dim">
                Sponsor logos will be placed in these highlighted slots as
                partners come in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
