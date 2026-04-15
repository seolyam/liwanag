import Image from "next/image";
import Link from "next/link";

const galleryItems = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmgDa19iKD3rw5b76W1Tl6hZFkGoHN0VdoVDcP73Hwe8n1EqbAPkO0_NTsW9Zy3MHHfKoQYVxjw6yJ1hKTL4O787EAAA_w95uUZ82s6EXbuSdmSIuqf04YipNpYKrsV634eGSPKoHHN97Hb6IYe_9xN_pJpeKXaro_1jqqDxnw9PqcIluMeDW4wH4awSozsYukpB-CngbZ8l0-rV7JKHjf4qm8r3SMgnImjhU-Ejs8thjhGRtZX_sJEnqNY1CEw2BUGVJ641mCMXc",
    alt: "Children smiling during a community outreach activity",
    tag: "Impact",
    title: "Bright Smiles",
    height: "h-[320px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_414R08RN6W1oK6p7Vv2ChR_PM9pX-vPKrT2SHZsNuflRsh59uu26KSL41QVikwMXDMgMm1xMeVegCVQ_Yj-fNEcXqZWMW9J1lSURRVdnOR6jXe4aeKbqOMrE_7ESYldjgYnrARDjCnkJxJGSmPtWB6pTKBAhESkfq-gItw69OcDWSlmCLWGFcQsTap9VYoK9xHvJtjVdFds8UaZQBpMDFwbDMRSsJTZtRIRX2BMOErPhzwJpZEEJ7k_qx_tnq-LtPh0OkCNXvjU",
    alt: "Solar panels installed on a ridge during sunset",
    tag: "Infrastructure",
    title: "Solar Horizons",
    height: "h-[480px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxxH7b_L1ckPnF6Ak0lz49M2KPDIoXQHpNA8Dz51HZaOERXIYcRZgJdHEcHTdA-pu3FSyjT5NEQUtCmlLF_iT_s76wqlAJzOjPwMp0FaAaDUTLq6HJPBNIeO4EL6JTOVkYdNuSh6jWlex4DE9gWJNwvMG0T3M_VJjpj69tzc0iYcA3EUYlHu9NTVFP_T5bF1f4GQDNgG11Y6N_wCzt-wvWoCC95LxZjqVdIcQqudYeJ9yUbVhg61pv29IpoEozFVcounoIgP4AhaU",
    alt: "Community members gathered around a newly installed water pump",
    tag: "Community",
    title: "Village Gathering",
    height: "h-[400px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6acnvaeRJr2DevzK513Czq_Tk4gcmlm9oREPHxZWhjwiGAdr8HPctpdCNCo30BSiqjSAltoEW46_mZe0aqghC8EF5vDECymkmmLCB0Vqoj4VWXpxCWQBOJ6rTowVS-geBPCZskHxnfZUwr6c6HFqyuo6wVlZF0jgnZ1OWzCJ8HX9xXUhXUOluhutlj4j2jeBsX_wUUz4ofSoqJ31kG8ee0ya8TNrH-LadkdrXPr_1qM006G4nUIwYNzP6njvGak6KHpQ5z7UbH_M",
    alt: "Volunteers and residents working together on a project",
    tag: "Partnership",
    title: "United Efforts",
    height: "h-[440px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ2vcIfhZTUNsJux3dLlu01xmlAFdpW6q9Oh66cPo3Gjy_DKKZVNJ3bf3g5LzVTfZUOILXTfgci9LPJ0FmDyYhV9c_Qodx3zMiicDQULj5ht5BjlN56KcULAsFB6v_vttL0mOCugVIEVn9-9yJ7fNv0SPK6-mf3NhBhAthCQp2-9G8OSXEpYC_mAL2VHuU_qnnb_qi4gjfC5Xs7uQN2DfIdq2__DrKQpZCuqlVUyv8yHTee72DFw4w5JBUEZ3JrNwXV9YD_CpHnis",
    alt: "Children studying at night with LED lamps",
    tag: "Education",
    title: "Evening Study",
    height: "h-[360px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCInXbbCjUM-vu6K-AYNMGgawDcM6tw6GQf01PTp1Hw9FasoLRt3BGM0oiXSdeALVjhC1UmlB-GgY_2i2f6ugrPsMVRn1daouSWzhA10i16FChMR2oHvmQqAByMeyLUdZBRjLoIC5xPhHYPqPOTIHuEXOWV2dV-7z3RKjIVCUBj2zko2oTmV9_091Fy7fyxqB5JpMjSdcxzqKySjNeyzAEcc9xL8vQ4twcD5H_1o2e6GbVHvAYv6pGESP_6m0YZ1N79DEqC_eeZ7Go",
    alt: "A mountain valley with glowing lights under a starry sky",
    tag: "Nature",
    title: "Midnight Valley",
    height: "h-[520px]",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden mt-16"
    >
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-golden-star/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-aurora-rose/5 rounded-full blur-[100px]" />

      {/* Section Header */}
      <div className="text-center mb-20 relative">
        <Image
          src="/images/GDG OUTREACH ASSETS/ShootingStar5.png"
          alt=""
          width={128}
          height={128}
          className="absolute -top-12 left-1/2 -translate-x-[200%] w-24 h-24 md:w-32 md:h-32 object-contain opacity-60 pointer-events-none mix-blend-screen -rotate-12"
        />
        <h2 className="font-[var(--font-display)] text-5xl md:text-6xl font-extrabold tracking-tight text-golden-glow mb-4 inline-block relative">
          Gallery
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-golden-star rounded-full" />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-golden-star rounded-full" />
        </h2>
        <p className="mt-12 text-moonlight max-w-2xl mx-auto font-medium text-lg">
          Capturing moments of illumination across the communities we serve.
          Witness the transformation through our lens.
        </p>
      </div>

      {/* Masonry Gallery */}
      <div className="relative">
        {/* Floating Background Assets */}
        <Image
          src="/images/GDG OUTREACH ASSETS/5Stars.png"
          alt=""
          width={128}
          height={128}
          className="absolute top-[10%] left-[-5%] w-32 h-32 opacity-20 pointer-events-none animate-float mix-blend-screen"
        />
        <Image
          src="/images/GDG OUTREACH ASSETS/5Clouds.png"
          alt=""
          width={192}
          height={192}
          className="absolute top-[40%] right-[-8%] w-48 h-48 opacity-10 pointer-events-none animate-float-delayed mix-blend-screen"
        />

        <div className="masonry-grid relative z-10">
          {galleryItems.map((item) => (
            <div key={item.title} className="masonry-item group">
              <div className="rounded-2xl overflow-hidden glass-edge transition-all duration-500 hover:translate-y-[-8px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={`w-full ${item.height} object-cover group-hover:scale-105 transition-transform duration-700`}
                  src={item.src}
                  alt={item.alt}
                />
                <div className="p-6 bg-night-sky-light/60">
                  <span className="inline-flex items-center gap-2 bg-aurora-rose-deep/20 text-aurora-rose px-3 py-1 rounded-full text-xs font-bold mb-3">
                    <span className="w-1.5 h-1.5 bg-golden-star rounded-full" />
                    {item.tag}
                  </span>
                  <h3 className="font-[var(--font-display)] font-bold text-xl text-starlight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="mt-16 flex justify-center">
        <Link
          href="/gallery"
          className="group flex items-center gap-3 px-10 py-4 rounded-full border-2 border-golden-star text-golden-star font-bold text-lg hover:bg-golden-star hover:text-text-on-gold transition-all duration-500 active:scale-95 shadow-[0_0_20px_rgba(251,191,36,0.1)]"
        >
          View More
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </Link>
      </div>
    </section>
  );
}
