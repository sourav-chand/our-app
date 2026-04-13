export default function ContactHero() {
  return (
    <section className="w-full bg-white px-8 pt-16 pb-12">
      {/* Big heading */}
      <h1
        className="text-[clamp(2.5rem,8vw,6rem)] font-black leading-[1.05] text-center text-black max-w-6xl mx-auto"
        style={{ fontFamily: "var(--font-geist-sans)" }}
      >
        We are &ldquo;Arolax&rdquo; - web design and creative agency based in California
      </h1>

      {/* Sub-row */}
      <div className="mt-10 flex items-start gap-6 max-w-3xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 shrink-0 pt-1">
          <span className="text-xs font-semibold tracking-widest text-black uppercase whitespace-nowrap">
            01. About Us
          </span>
          <span className="block w-12 h-px bg-black" />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
          Unlocking creative horizons: the story behind &ldquo;Arolax&rdquo; a global digital agency
          crafting experiences, building dreams, and shaping success.
        </p>
      </div>
    </section>
  );
}
