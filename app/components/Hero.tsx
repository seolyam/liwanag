import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen max-h-screen w-full flex items-start justify-center overflow-hidden"
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
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl w-full h-full px-6 sm:px-8 pt-28 sm:pt-32 md:pt-32 pb-6 flex flex-col items-center text-center">
        {/* Central Poster / Star */}
        <div className="relative mb-7 md:mb-8 flex justify-center items-center">
          <div className="absolute inset-0 bg-golden-star/30 blur-[100px] rounded-full scale-[1.7] animate-pulse" />
          <Image
            src="/images/GDG OUTREACH ASSETS/poster.png"
            alt="Project Liwanag Poster"
            width={320}
            height={320}
            className="relative w-[210px] sm:w-[250px] md:w-[280px] lg:w-[300px] h-auto rounded-3xl drop-shadow-[0_0_50px_rgba(251,191,36,0.4)]"
            priority
          />
        </div>

        {/* Headline */}
        <div className="space-y-4 md:space-y-5 max-w-4xl">
          <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl md:text-[3.25rem] font-extrabold tracking-tight text-golden-glow drop-shadow-[0_0_30px_rgba(251,191,36,0.6)] leading-[1.06]">
            Lighting the Path of <br />
            Young Dreams
          </h1>
          <p className="font-[var(--font-body)] text-base sm:text-lg text-moonlight max-w-2xl mx-auto leading-relaxed">
            Project Liwanag is a GDG outreach initiative inspiring children to
            believe in their dreams, discover their potential, and move forward
            with confidence through meaningful experiences in learning,
            creativity, and play.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-7 sm:mt-8 items-center justify-center">
          <Link href="/volunteer" className="btn-primary group">
            Volunteer Now
            
          </Link>
          <Link href="/volunteer" className="btn-secondary">
            Donate Funds
          </Link>
        </div>

        {/* Scroll Indicators */}
      </div>

      {/* Bouncing Down Arrow */}
      <div className="absolute bottom-5 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
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
