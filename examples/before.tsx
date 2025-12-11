import React from "react";

/**
 * Before Windly: Chaotic, messy, and unorganized Tailwind classes
 * Windly will automatically organize this into a clean and structured format.
 */
export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen px-8 py-16 sm:px-12 lg:px-24 flex flex-col gap-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 overflow-hidden border border-slate-800/60 shadow-[0_40px_160px_-60px_rgba(15,23,42,0.9)]">
      <div className="absolute inset-0 opacity-50 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(236,72,153,0.08),transparent_30%),radial-gradient(circle_at_30%_80%,rgba(190,242,100,0.06),transparent_30%)]" />
      <div className="relative flex flex-col gap-6 max-w-5xl">
        <p className="inline-flex items-center gap-3 rounded-full border border-slate-800/70 bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 shadow-[0_10px_50px_-40px_rgba(255,255,255,0.5)]">
          Tailwind endurance test
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-[0_20px_70px_rgba(15,23,42,0.7)]">
          Untangle the wildest <span className="text-cyan-300">className</span>{" "}
          piles without breaking a sweat.
        </h1>

        <p className="max-w-3xl text-lg text-slate-200/90 leading-relaxed">
          Paste in a real-world blob of Tailwind utilities and see how Windly
          groups them. These snippets are intentionally chaotic so you can
          stress-test grouping, sorting, and multiline output.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <button className="inline-flex items-center justify-center gap-3 rounded-2xl border border-cyan-400/60 bg-cyan-400 text-slate-950 px-6 py-4 text-base font-semibold shadow-[0_20px_80px_-40px_rgba(34,211,238,0.9)] hover:-translate-y-1 transition-transform duration-200">
            Start grouping
          </button>

          <button className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-700/60 bg-slate-900/70 px-6 py-4 text-base font-semibold text-slate-100 shadow-[0_20px_80px_-50px_rgba(15,23,42,1)] hover:border-slate-500 transition">
            See formatted output
          </button>
        </div>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl">
        <article className="flex flex-col gap-4 rounded-3xl border border-slate-800/80 bg-slate-900/60 px-7 py-6 shadow-[0_25px_120px_-70px_rgba(15,23,42,0.9)] backdrop-blur-2xl">
          <h3 className="text-lg font-semibold text-slate-100">Messy input</h3>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4 text-xs font-mono leading-6 text-cyan-200 overflow-hidden">
            Long class lists with spacing, flex, border, background, text, and
            effects mixed together.
          </div>
        </article>

        <article className="flex flex-col gap-4 rounded-3xl border border-emerald-500/20 bg-emerald-400/10 px-7 py-6 shadow-[0_25px_120px_-70px_rgba(5,150,105,0.8)] backdrop-blur-2xl">
          <h3 className="text-lg font-semibold text-emerald-100">Coverage</h3>

          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-mono leading-6 text-emerald-50 overflow-hidden">
            Mix gradient fills, arbitrary shadows, responsive spacing, and
            dark-mode tokens to trip up grouping logic.
          </div>
        </article>

        <article className="flex flex-col gap-4 rounded-3xl border border-indigo-500/20 bg-indigo-400/10 px-7 py-6 shadow-[0_25px_120px_-70px_rgba(79,70,229,0.8)] backdrop-blur-2xl">
          <h3 className="text-lg font-semibold text-indigo-100">Edge cases</h3>

          <div className="rounded-2xl border border-indigo-500/30 bg-indigo-500/10 p-4 text-xs font-mono leading-6 text-indigo-50 overflow-hidden">
            Selections with nested components, multiple attributes, and long
            multi-line strings help validate stable output.
          </div>
        </article>
      </div>
    </section>
  );
}

export function ControlPanel() {
  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-3xl border border-slate-800/80 bg-slate-950/80 p-8 sm:p-10 lg:p-12 shadow-[0_30px_140px_-80px_rgba(15,23,42,0.9)] backdrop-blur-2xl text-slate-100">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Before running Windly
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed">
            Here is a dense control panel UI with multiple `className`
            attributes.
          </p>

          <label className="flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4 shadow-inner shadow-slate-950/40">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
              Project handle
            </span>

            <input
              className="w-full rounded-xl border border-slate-800/80 bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-400/20 transition"
              placeholder="windly-extension"
            />
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/70 bg-slate-900/70 px-4 py-3 text-sm font-semibold text-slate-100 shadow-[0_10px_50px_-30px_rgba(15,23,42,1)] hover:border-slate-500/80 hover:text-white transition-colors duration-200">
              Duplicate
            </button>

            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-rose-500/50 bg-rose-500/20 px-4 py-3 text-sm font-semibold text-rose-50 shadow-[0_10px_50px_-30px_rgba(244,63,94,0.8)] hover:bg-rose-500/30 transition">
              Delete project
            </button>
          </div>
        </div>

        <aside className="w-full lg:w-80 flex flex-col gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 px-6 py-5 shadow-[0_25px_100px_-60px_rgba(15,23,42,1)]">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-100">
              Live preview
            </span>

            <span className="text-xs rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-100 border border-emerald-400/40">
              Stable
            </span>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-[11px] font-mono leading-5 text-cyan-100/90 overflow-hidden">
            Copy this entire card into your selection to check how Windly
            handles multiple class strings within one component.
          </div>
        </aside>
      </div>
    </div>
  );
}
