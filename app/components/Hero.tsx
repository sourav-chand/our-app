"use client";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-56px)] bg-white flex flex-col px-12 py-10 overflow-hidden">

      {/* Top row: headline + images */}
      <div className="flex items-center flex-1">

      {/* Left: Headline */}
      <div className="flex-1 flex flex-col justify-center z-10">
        {/* Line 1 */}
        <div className="overflow-hidden">
          <h1 className="text-[clamp(4rem,10vw,9rem)] font-black leading-none tracking-tight text-black uppercase">
            WE ARE
          </h1>
        </div>

        {/* Line 2 */}
        <div className="overflow-hidden">
          <h1 className="text-[clamp(4rem,10vw,9rem)] font-black leading-none tracking-tight text-black uppercase">
            SKILLED
          </h1>
        </div>

        {/* Line 3 */}
        <div className="overflow-hidden">
          <h1 className="text-[clamp(4rem,10vw,9rem)] font-black leading-none tracking-tight text-black uppercase">
            IN
          </h1>
        </div>

        {/* Line 4: web design label + AND + badges */}
        <div className="overflow-hidden flex items-center gap-4 mt-1">
          <span className="text-xs font-bold uppercase leading-tight text-black">
            WEB<br />DESIGN
          </span>
          <h1 className="text-[clamp(4rem,10vw,9rem)] font-black leading-none tracking-tight text-black uppercase">
            AND
          </h1>
          {/* Green pill badge */}
          <div className="flex items-center -space-x-4">
            <div className="w-20 h-20 rounded-full bg-[#aacc00] flex items-center justify-center z-10">
              <span
                className="text-[10px] font-bold text-black uppercase tracking-widest"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                development
              </span>
            </div>
            {/* Avatar circle */}
            <div className="w-20 h-20 rounded-full bg-gray-800 border-2 border-white overflow-hidden z-20 flex items-center justify-center">
              <span className="text-3xl">🤖</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Images */}
      <div className="relative flex-1 flex items-center justify-center h-[500px]">
        {/* Red circle with dark-tinted person */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-red-600 overflow-hidden">
          <div className="w-full h-full bg-red-700/80 flex items-end justify-center">
            <div className="w-full h-full bg-gradient-to-t from-red-900 to-red-500 opacity-90" />
          </div>
        </div>

        {/* Main photo card */}
        <div className="absolute right-0 top-0 w-72 h-80 rounded-2xl bg-gray-200 overflow-hidden shadow-lg flex items-center justify-center">
          <span className="text-gray-400 text-sm">Team photo</span>
        </div>

        {/* Watch video button */}
        <div className="absolute right-0 bottom-8 flex items-center gap-3">
          <button
            aria-label="Watch video"
            className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:scale-105 transition-transform"
          >
            <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          <span className="text-xs font-semibold uppercase tracking-widest text-black">
            WATCH<br />VIDEO
          </span>
        </div>

        {/* Squiggle deco */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-gray-400 text-2xl select-none">
          ∿∿
        </div>
      </div>{/* end right images */}
      </div>{/* end top row */}

      {/* Bottom sub-section */}
      <div className="flex items-start gap-12 pt-8 pb-4">

        {/* Scroll down arrow */}
        <div className="scroll-arrow shrink-0 mt-1">
          <button
            aria-label="Scroll down"
            className="w-10 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors"
          >
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Description + CTA */}
        <div className="sub-description max-w-sm">
          <p className="text-gray-700 text-base leading-relaxed">
            We are a full-service digital agency that builds fascinating user experiences. our team creates and exceptional UI design and functionality.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-5 text-sm font-bold uppercase tracking-widest text-black hover:gap-4 transition-all"
          >
            GET STARTED NOW
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right: arrow icon + customer avatars */}
        <div className="sub-social flex flex-col items-start gap-4 shrink-0">
          {/* Arrow icon box */}
          <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>

          {/* Avatars */}
          <div className="flex items-center">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white -ml-2 first:ml-0 overflow-hidden flex items-center justify-center text-xs text-gray-500"
              >
                {i === 1 ? "👨" : i === 2 ? "👩" : "🧑"}
              </div>
            ))}
            <div className="w-9 h-9 rounded-full bg-[#aacc00] border-2 border-white -ml-2 flex items-center justify-center">
              <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>

          {/* Customer count */}
          <p className="text-sm text-gray-600">
            <span className="font-bold text-black">We have 18k+</span> customers<br />word-wide
          </p>
        </div>

      </div>{/* end bottom sub-section */}

      {/* Scroll up button */}
      <button
        aria-label="Scroll up"
        className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-black flex items-center justify-center hover:scale-105 transition-transform"
      >
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </section>
  );
}
