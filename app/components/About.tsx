import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative pt-32 pb-24 px-8 bg-[#0c0b2b] overflow-hidden"
    >
      {/* Celestial Background Assets */}
      <Image
        src="/images/GDG OUTREACH ASSETS/5Clouds.png"
        alt=""
        width={400}
        height={200}
        className="celestial-asset absolute top-10 left-[-10%] w-[400px] h-auto blur-sm"
      />
      <Image
        src="/images/GDG OUTREACH ASSETS/ShootingStar1.png"
        alt=""
        width={350}
        height={350}
        className="celestial-asset absolute top-1/4 right-[10%] w-[350px] h-auto rotate-[135deg] opacity-[0.08]"
      />
      <Image
        src="/images/GDG OUTREACH ASSETS/5Stars.png"
        alt=""
        width={300}
        height={300}
        className="celestial-asset absolute bottom-20 right-[5%] w-[300px] h-auto"
      />
      <Image
        src="/images/GDG OUTREACH ASSETS/ShootingStar2.png"
        alt=""
        width={250}
        height={250}
        className="celestial-asset absolute bottom-1/4 left-[15%] w-[250px] h-auto -rotate-[45deg] opacity-[0.1]"
      />

      {/* Ambient Light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-golden-star/5 blur-[120px] rounded-full -mr-64 -mt-64" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="font-[var(--font-outfit)] text-5xl md:text-6xl text-starlight mb-6 inline-block relative">
          About Project Liwanag
          <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-golden-star rounded-full opacity-80" />
        </h2>

        <p className="mt-12 text-moonlight text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-[var(--font-body)]">
          Project Liwanag is a community-driven outreach initiative developed by
          the Google Developer Groups on Campus – USLS, through the ideation of
          its Events and Operations Department. Rooted in the belief that every
          child deserves the opportunity to dream and grow, the project aims to
          bring hope, guidance, and inspiration to children. It provides a safe
          and encouraging environment where young individuals can explore their
          abilities and build confidence.
        </p>

        {/* Mission & Vision Cards */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 text-left relative">
          {/* Decorative shooting star */}
          <Image
            src="/images/GDG OUTREACH ASSETS/ShootingStar3.png"
            alt=""
            width={192}
            height={192}
            className="celestial-asset absolute -top-24 -left-12 w-48 h-auto rotate-[20deg] opacity-20"
          />

          {/* Mission Card */}
          <div className="glass-card glow-lavender p-10 rounded-2xl hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden group">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-golden-star/10">
              <span
                className="material-symbols-outlined text-golden-star"
              >
                auto_awesome
              </span>
            </div>
            <h3 className="text-2xl font-bold text-golden-glow mb-4 font-[var(--font-display)] tracking-tight">
              Our Mission
            </h3>
            <p className="text-starlight leading-relaxed">
              To inspire children to believe in their dreams, discover their
              potential, and move forward with confidence through meaningful
              experiences in learning, creativity, and play.
            </p>
          </div>

          {/* Vision Card */}
          <div className="glass-card glow-lavender p-10 rounded-2xl hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-golden-star/10">
              <span
                className="material-symbols-outlined text-golden-star"
              >
                visibility
              </span>
            </div>
            <h3 className="text-2xl font-bold text-golden-glow mb-4 font-[var(--font-display)] tracking-tight">
              Our Vision
            </h3>
            <p className="text-starlight leading-relaxed">
              A world where every child has the opportunity to dream, grow, and
              thrive — connected by the shared light of knowledge, creativity,
              and community-driven empowerment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
