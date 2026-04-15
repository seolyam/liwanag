import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-night-sky via-[#1a1945] to-night-sky-deep z-0" />

      {/* Aurora Ribbons */}
      <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-aurora-rose/20 aurora-blur rounded-full opacity-30" />
      <div className="absolute top-1/4 -right-40 w-[800px] h-[800px] bg-cloud-lavender/10 aurora-blur rounded-full opacity-20" />

      {/* Decorative Celestial Assets */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Clouds */}
        <Image
          src="/images/GDG OUTREACH ASSETS/5Clouds.png"
          alt="Cloud atmosphere"
          width={800}
          height={400}
          className="absolute -bottom-20 -left-20 w-[800px] opacity-10 mix-blend-screen animate-drift-slow"
          priority={false}
        />
        <Image
          src="/images/GDG OUTREACH ASSETS/5Clouds.png"
          alt="Cloud atmosphere"
          width={600}
          height={300}
          className="absolute top-20 -right-40 w-[600px] opacity-5 mix-blend-screen animate-drift-slow"
          style={{ animationDelay: "3s" }}
          priority={false}
        />

        {/* Stars */}
        <Image
          src="/images/GDG OUTREACH ASSETS/5Stars.png"
          alt="Distant stars"
          width={256}
          height={256}
          className="absolute top-[15%] left-[10%] w-64 opacity-20 mix-blend-screen"
          priority={false}
        />
        <Image
          src="/images/GDG OUTREACH ASSETS/5Stars.png"
          alt="Distant stars"
          width={320}
          height={320}
          className="absolute bottom-[20%] right-[5%] w-80 opacity-15 mix-blend-screen rotate-180"
          priority={false}
        />

        {/* Shooting Stars */}
        <Image
          src="/images/GDG OUTREACH ASSETS/ShootingStar1.png"
          alt=""
          width={200}
          height={200}
          className="absolute top-[10%] right-[20%] w-48 opacity-[0.08] -rotate-12 mix-blend-screen animate-shimmer"
          priority={false}
        />
        <Image
          src="/images/GDG OUTREACH ASSETS/ShootingStar2.png"
          alt=""
          width={160}
          height={160}
          className="absolute bottom-[30%] left-[5%] w-40 opacity-[0.06] rotate-[135deg] mix-blend-screen"
          priority={false}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl w-full px-8 py-20 flex flex-col items-center text-center">
        {/* Central Poster / Star */}
        <div className="relative mb-12 flex justify-center items-center">
          <div className="absolute inset-0 bg-golden-star/30 blur-[120px] rounded-full scale-[2] animate-pulse" />
          <Image
            src="/images/GDG OUTREACH ASSETS/poster.png"
            alt="Project Liwanag Poster"
            width={400}
            height={400}
            className="relative w-[280px] sm:w-[350px] md:w-[400px] h-auto rounded-3xl drop-shadow-[0_0_50px_rgba(251,191,36,0.4)]"
            priority
          />
        </div>

        {/* Headline */}
        <div className="space-y-6 max-w-4xl">
          <h1 className="font-[var(--font-display)] text-5xl md:text-7xl font-extrabold tracking-tight text-golden-glow drop-shadow-[0_0_30px_rgba(251,191,36,0.6)] leading-[1.1]">
            Lighting the Path of <br />
            Young Dreams
          </h1>
          <p className="font-[var(--font-body)] text-lg md:text-xl text-moonlight max-w-2xl mx-auto leading-relaxed">
            Project Liwanag is a GDG outreach initiative inspiring children to
            believe in their dreams, discover their potential, and move forward
            with confidence through meaningful experiences in learning,
            creativity, and play.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-12 items-center justify-center">
          <Link href="#ways-to-help" className="btn-primary group">
            Volunteer Now
            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
          <Link href="#ways-to-help" className="btn-secondary">
            Donate Funds
          </Link>
        </div>

        {/* Scroll Indicators */}
        <div className="flex gap-3 mt-16">
          <div className="w-8 h-2 rounded-full bg-golden-star shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
          <div className="w-2 h-2 rounded-full bg-night-sky-bright" />
          <div className="w-2 h-2 rounded-full bg-night-sky-bright" />
        </div>
      </div>

      {/* Bouncing Down Arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] font-[var(--font-display)] uppercase tracking-[0.3em] text-moonlight-dim">
          Scroll to explore
        </span>
        <span className="material-symbols-outlined animate-bounce-down text-golden-star text-3xl">
          keyboard_double_arrow_down
        </span>
      </div>
    </section>
  );
}
