import Image from "next/image";

const activities = [
  {
    icon: "palette",
    title: "Creative Arts",
    description:
      "Harnessing visual expression to communicate complex ideas and celebrate local heritage through digital and traditional mediums.",
  },
  {
    icon: "menu_book",
    title: "Storytelling",
    description:
      "Capturing narratives that inspire. We document the journey of our communities and the impact of technology on human lives.",
  },
  {
    icon: "laptop_chromebook",
    title: "Tech Exploration",
    description:
      "Breaking down modern tools and software through guided discovery sessions designed for all age groups and skill levels.",
  },
  {
    icon: "extension",
    title: "Games & Play",
    description:
      "Interactive learning through gamification. We believe that curiosity thrives in an environment of structured play.",
  },
  {
    icon: "lightbulb",
    title: "Learning Sessions",
    description:
      "Regular workshops and seminars led by industry professionals and passionate student mentors from the GDG network.",
  },
  {
    icon: "groups",
    title: "Community Building",
    description:
      "Forging long-term partnerships with local leaders to ensure that technology outreach remains sustainable and culturally relevant.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative py-24 px-8 bg-night-sky-mid overflow-hidden">
      {/* Celestial Assets */}
      <Image
        src="/images/GDG OUTREACH ASSETS/5Clouds.png"
        alt=""
        width={500}
        height={250}
        className="celestial-asset absolute top-1/2 right-[-5%] w-[500px] h-auto opacity-[0.08] rotate-180"
      />
      <Image
        src="/images/GDG OUTREACH ASSETS/ShootingStar3.png"
        alt=""
        width={280}
        height={280}
        className="celestial-asset absolute top-10 right-[35%] w-[280px] h-auto -rotate-[15deg] opacity-[0.07]"
      />
      <Image
        src="/images/GDG OUTREACH ASSETS/5Stars.png"
        alt=""
        width={250}
        height={250}
        className="celestial-asset absolute top-20 left-[10%] w-[250px] h-auto rotate-45"
      />
      <Image
        src="/images/GDG OUTREACH ASSETS/ShootingStar4.png"
        alt=""
        width={300}
        height={300}
        className="celestial-asset absolute bottom-1/3 right-10 w-[300px] h-auto rotate-[60deg] opacity-[0.09]"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="mb-20">
          <h2 className="font-[var(--font-outfit)] text-4xl md:text-5xl text-starlight inline-block relative pb-4">
            What We Do
            <div className="absolute bottom-0 left-0 w-full flex flex-col gap-1">
              <div className="h-1 bg-golden-star w-full rounded-full" />
              <div className="h-1 bg-golden-star w-2/3 rounded-full opacity-50" />
            </div>
          </h2>
        </div>

        {/* 3x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((item) => (
            <div
              key={item.title}
              className="glass-card group p-8 rounded-2xl flex flex-col items-start hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-night-sky-surface border border-golden-star/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-golden-star text-3xl">
                  {item.icon}
                </span>
              </div>
              <h4 className="text-xl font-bold text-starlight mb-3 font-[var(--font-display)]">
                {item.title}
              </h4>
              <p className="text-moonlight text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-golden-star/20 to-transparent" />
    </section>
  );
}
