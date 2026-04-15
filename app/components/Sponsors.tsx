import Image from "next/image";

const sponsorLabels = [
  "Foundation Group",
  "Tech Institute",
  "Impact Ventures",
  "Sustainability Co.",
];

export default function Sponsors() {
  return (
    <section className="py-24 bg-night-sky-deep overflow-hidden relative">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/GDG OUTREACH ASSETS/sponsors.png"
          alt=""
          width={384}
          height={384}
          className="absolute -top-24 -left-24 w-96 h-96 opacity-5 rotate-12"
        />
        <Image
          src="/images/GDG OUTREACH ASSETS/sponsors.png"
          alt=""
          width={500}
          height={500}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-10 blur-sm grayscale brightness-50"
        />
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
          <div className="w-full max-w-4xl p-1 rounded-3xl bg-gradient-to-b from-night-sky-bright/20 to-transparent">
            <div className="bg-night-sky/80 rounded-[1.4rem] p-12 flex flex-col items-center">
              <Image
                src="/images/GDG OUTREACH ASSETS/sponsors.png"
                alt="Project Liwanag Sponsors"
                width={768}
                height={400}
                className="w-full max-w-3xl h-auto rounded-xl shadow-2xl shadow-golden-star/5 hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 w-full opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                {sponsorLabels.map((label) => (
                  <div
                    key={label}
                    className="text-center text-xs font-bold tracking-widest uppercase text-moonlight-dim/60"
                  >
                    {label}
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
