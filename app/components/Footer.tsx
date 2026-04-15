import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Impact", href: "/gallery" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "#" },
];

const getInvolved = [
  { label: "Volunteer", href: "/volunteer" },
  { label: "Donate", href: "/volunteer" },
  { label: "Sponsors", href: "#" },
  { label: "Careers", href: "#" },
];

const connectLinks = [
  { label: "Contact Us", href: "#" },
  { label: "Press Kit", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-night-sky-deep w-full rounded-t-[32px] relative overflow-hidden">
      {/* Celestial Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/GDG OUTREACH ASSETS/5Clouds.png"
          alt=""
          width={320}
          height={160}
          className="absolute -top-10 -left-20 w-80 opacity-10 blur-xl"
        />
        <Image
          src="/images/GDG OUTREACH ASSETS/5Clouds.png"
          alt=""
          width={640}
          height={320}
          className="absolute bottom-0 right-0 w-[40rem] opacity-5 blur-2xl"
        />
        <Image
          src="/images/GDG OUTREACH ASSETS/5Stars.png"
          alt=""
          width={64}
          height={64}
          className="absolute top-20 right-40 w-16 h-16 opacity-20"
        />
        <Image
          src="/images/GDG OUTREACH ASSETS/5Stars.png"
          alt=""
          width={40}
          height={40}
          className="absolute bottom-40 left-1/4 w-10 h-10 opacity-10"
        />
        <Image
          src="/images/GDG OUTREACH ASSETS/ShootingStar5.png"
          alt=""
          width={384}
          height={384}
          className="absolute top-1/2 left-0 w-96 h-96 opacity-5 -translate-y-1/2"
        />
      </div>

      {/* Footer Grid */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 px-8 md:px-12 py-20 max-w-7xl mx-auto font-[var(--font-body)] text-slate-400">
        {/* Brand Column */}
        <div className="col-span-2 md:col-span-1">
          <div className="text-xl font-black text-amber-200 mb-4">
            Project Liwanag
          </div>
          <p className="text-slate-500 mb-6 leading-relaxed">
            Illuminating the path forward through community-driven educational
            and youth leadership initiatives.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-night-sky-bright/20 flex items-center justify-center hover:text-amber-400 hover:border-amber-400 transition-all"
              aria-label="Website"
            >
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-night-sky-bright/20 flex items-center justify-center hover:text-amber-400 hover:border-amber-400 transition-all"
              aria-label="Email"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-night-sky-bright/20 flex items-center justify-center hover:text-amber-400 hover:border-amber-400 transition-all"
              aria-label="Community"
            >
              <span className="material-symbols-outlined text-lg">
                diversity_3
              </span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-starlight font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-slate-500 hover:text-amber-200 hover:translate-x-1 transition-all inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h4 className="text-starlight font-bold mb-6">Get Involved</h4>
          <ul className="space-y-4">
            {getInvolved.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-slate-500 hover:text-amber-200 hover:translate-x-1 transition-all inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-starlight font-bold mb-6">Connect</h4>
          <ul className="space-y-4">
            {connectLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-slate-500 hover:text-amber-200 hover:translate-x-1 transition-all inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 pb-10">
        <div className="pt-8 border-t border-night-sky-bright/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2025 Project Liwanag | GDG on Campus – USLS</p>
          <p>Designed with care for the community</p>
        </div>
      </div>
    </footer>
  );
}
