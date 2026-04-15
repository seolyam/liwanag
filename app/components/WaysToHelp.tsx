import Image from "next/image";
import Link from "next/link";

export default function WaysToHelp() {
  return (
    <section
      id="ways-to-help"
      className="pt-32 pb-24 px-6 starry-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2 className="font-[var(--font-display)] text-5xl md:text-6xl font-extrabold text-starlight mb-6 relative inline-block">
            Be Part of the Light
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-golden-star rounded-full opacity-60" />
          </h2>
          <p className="text-moonlight text-lg md:text-xl max-w-[700px] mx-auto mt-8 font-[var(--font-body)] leading-relaxed">
            Project Liwanag continues to grow through the support of individuals
            and organizations who believe in its mission. There are many ways to
            get involved and help us guide and inspire young minds.
          </p>
        </div>

        {/* Volunteer & Donate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Volunteer Card */}
          <div className="bg-night-sky-light p-10 rounded-2xl flex flex-col items-center text-center group transition-all duration-300 hover:bg-night-sky-surface relative overflow-hidden">
            {/* Celestial decorations */}
            <Image
              src="/images/GDG OUTREACH ASSETS/ShootingStar3.png"
              alt=""
              width={192}
              height={192}
              className="absolute top-0 right-0 w-48 h-48 opacity-20 -mr-12 -mt-12 pointer-events-none group-hover:scale-110 transition-transform duration-700"
            />
            <Image
              src="/images/GDG OUTREACH ASSETS/ShootingStar4.png"
              alt=""
              width={96}
              height={96}
              className="absolute bottom-4 left-4 w-24 h-24 opacity-30 pointer-events-none group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-1000"
            />
            <Image
              src="/images/GDG OUTREACH ASSETS/5Clouds.png"
              alt=""
              width={256}
              height={128}
              className="absolute bottom-0 left-0 w-64 h-32 opacity-10 -ml-16 -mb-8 pointer-events-none blur-sm"
            />

            <div className="relative z-10 w-20 h-20 bg-golden-star/20 rounded-full flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-golden-star text-4xl">
                volunteer_activism
              </span>
            </div>
            <h3 className="relative z-10 font-[var(--font-display)] text-3xl font-bold text-golden-glow mb-4">
              Volunteer
            </h3>
            <p className="relative z-10 text-moonlight mb-8 max-w-sm">
              Join us in creating impactful experiences for children by
              volunteering your time, skills, and passion. Whether you are a
              student, professional, or community member, your presence can help
              bring light and encouragement to others.
            </p>
            <Link
              href="#"
              className="relative z-10 btn-primary text-lg"
            >
              Sign Up
            </Link>
          </div>

          {/* Donate Card */}
          <div className="bg-night-sky-light p-10 rounded-2xl flex flex-col items-center text-center group transition-all duration-300 hover:bg-night-sky-surface relative overflow-hidden">
            {/* Celestial decorations */}
            <Image
              src="/images/GDG OUTREACH ASSETS/ShootingStar5.png"
              alt=""
              width={192}
              height={192}
              className="absolute top-0 right-0 w-48 h-48 opacity-20 -mr-12 -mt-12 pointer-events-none group-hover:scale-110 transition-transform duration-700"
            />
            <Image
              src="/images/GDG OUTREACH ASSETS/ShootingStar1.png"
              alt=""
              width={128}
              height={128}
              className="absolute top-10 left-10 w-32 h-32 opacity-20 pointer-events-none group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform duration-1000 rotate-12"
            />
            <Image
              src="/images/GDG OUTREACH ASSETS/5Stars.png"
              alt=""
              width={48}
              height={48}
              className="absolute top-4 left-4 w-12 h-12 opacity-30 pointer-events-none"
            />

            <div className="relative z-10 w-20 h-20 bg-aurora-rose/20 rounded-full flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-aurora-rose text-4xl">
                featured_seasonal_and_gifts
              </span>
            </div>
            <h3 className="relative z-10 font-[var(--font-display)] text-3xl font-bold text-golden-glow mb-4">
              Donate
            </h3>
            <p className="relative z-10 text-moonlight mb-8 max-w-sm">
              Your generosity helps sustain our outreach efforts and provides
              the resources needed to create meaningful programs for children.
              Every contribution directly supports activities, materials, and
              initiatives that nurture young dreams.
            </p>
            <Link
              href="#"
              className="relative z-10 btn-rose text-lg"
            >
              Donate Now
            </Link>
          </div>
        </div>

        {/* Partner Card */}
        <div className="glass-panel p-10 rounded-2xl relative overflow-hidden group">
          <Image
            src="/images/GDG OUTREACH ASSETS/ShootingStar2.png"
            alt=""
            width={256}
            height={256}
            className="absolute -right-16 -bottom-16 w-64 h-64 opacity-10 pointer-events-none group-hover:rotate-12 transition-transform duration-1000"
          />
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex items-center gap-6">
              <div className="hidden sm:flex w-16 h-16 bg-cloud-lavender/10 rounded-full items-center justify-center">
                <span className="material-symbols-outlined text-cloud-lavender text-3xl">
                  handshake
                </span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-[var(--font-display)] text-3xl font-bold text-starlight">
                  Partner With Us
                </h3>
                <p className="text-moonlight mt-2">
                  We welcome organizations and groups who share our vision to
                  collaborate with us in making a greater impact within the
                  community.
                </p>
              </div>
            </div>
            <Link
              href="#"
              className="w-full md:w-auto px-10 py-4 rounded-full border border-night-sky-bright hover:border-golden-star hover:text-golden-star transition-all font-bold text-lg text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
