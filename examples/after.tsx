import React from "react";
import clsx from  "clsx";

/**
 * After Windly
 * Classes are now organized and grouped semantically for improved clarity and readability.
 */
export function HeroSection() {
  return (
    <section className={clsx(
      "relative",
      "flex flex-col gap-10",
      "min-h-screen w-full",
      "lg:px-24 px-8 py-16 sm:px-12",
      "border border-slate-800/60",
      "bg-gradient-to-br from-slate-950 to-slate-950 via-slate-900",
      "text-slate-50",
      "shadow-[0_40px_160px_-60px_rgba(15,23,42,0.9)]",
      "overflow-hidden",
    )}>
      <div className={clsx(
        "absolute inset-0",
        "bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(236,72,153,0.08),transparent_30%),radial-gradient(circle_at_30%_80%,rgba(190,242,100,0.06),transparent_30%)]",
        "opacity-50",
        "pointer-events-none",
      )} />
      <div className="relative flex flex-col gap-6 max-w-5xl">
        <p className={clsx(
          "inline-flex items-center gap-3",
          "px-4 py-2",
          "border border-slate-800/70 rounded-full",
          "bg-slate-900/70",
          "font-semibold text-slate-300 text-xs tracking-[0.2em]",
          "shadow-[0_10px_50px_-40px_rgba(255,255,255,0.5)]",
          "uppercase",
        )}>
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
          <button className={clsx(
            "inline-flex items-center justify-center gap-3",
            "px-6 py-4",
            "border border-cyan-400/60 rounded-2xl",
            "bg-cyan-400",
            "font-semibold text-base text-slate-950",
            "shadow-[0_20px_80px_-40px_rgba(34,211,238,0.9)]",
            "duration-200 transition-transform",
            "hover:-translate-y-1",
          )}>
            Start grouping
          </button>

          <button className={clsx(
            "inline-flex items-center justify-center gap-3",
            "px-6 py-4",
            "border border-slate-700/60 hover:border-slate-500 rounded-2xl",
            "bg-slate-900/70",
            "font-semibold text-base text-slate-100",
            "shadow-[0_20px_80px_-50px_rgba(15,23,42,1)]",
            "transition",
          )}>
            See formatted output
          </button>
        </div>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl">
        <article className={clsx(
          "flex flex-col gap-4",
          "px-7 py-6",
          "border border-slate-800/80 rounded-3xl",
          "bg-slate-900/60",
          "backdrop-blur-2xl shadow-[0_25px_120px_-70px_rgba(15,23,42,0.9)]",
        )}>
          <h3 className="text-lg font-semibold text-slate-100">Messy input</h3>
          <div className={clsx(
            "p-4",
            "border border-slate-800 rounded-2xl",
            "bg-slate-950/50",
            "font-mono leading-6 text-cyan-200 text-xs",
            "overflow-hidden",
          )}>
            Long class lists with spacing, flex, border, background, text, and
            effects mixed together.
          </div>
        </article>

        <article className={clsx(
          "flex flex-col gap-4",
          "px-7 py-6",
          "border border-emerald-500/20 rounded-3xl",
          "bg-emerald-400/10",
          "backdrop-blur-2xl shadow-[0_25px_120px_-70px_rgba(5,150,105,0.8)]",
        )}>
          <h3 className="text-lg font-semibold text-emerald-100">Coverage</h3>

          <div className={clsx(
            "p-4",
            "border border-emerald-500/30 rounded-2xl",
            "bg-emerald-500/10",
            "font-mono leading-6 text-emerald-50 text-xs",
            "overflow-hidden",
          )}>
            Mix gradient fills, arbitrary shadows, responsive spacing, and
            dark-mode tokens to trip up grouping logic.
          </div>
        </article>

        <article className={clsx(
          "flex flex-col gap-4",
          "px-7 py-6",
          "border border-indigo-500/20 rounded-3xl",
          "bg-indigo-400/10",
          "backdrop-blur-2xl shadow-[0_25px_120px_-70px_rgba(79,70,229,0.8)]",
        )}>
          <h3 className="text-lg font-semibold text-indigo-100">Edge cases</h3>

          <div className={clsx(
            "p-4",
            "border border-indigo-500/30 rounded-2xl",
            "bg-indigo-500/10",
            "font-mono leading-6 text-indigo-50 text-xs",
            "overflow-hidden",
          )}>
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
    <div className={clsx(
      "relative",
      "max-w-6xl w-full",
      "mx-auto lg:p-12 p-8 sm:p-10",
      "border border-slate-800/80 rounded-3xl",
      "bg-slate-950/80",
      "text-slate-100",
      "backdrop-blur-2xl shadow-[0_30px_140px_-80px_rgba(15,23,42,0.9)]",
    )}>
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            After running Windly
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed">
            Here is a dense control panel UI with multiple `className`
            attributes.
          </p>

          <label className={clsx(
            "flex flex-col gap-2",
            "px-5 py-4",
            "border border-slate-800 rounded-2xl",
            "bg-slate-900/60",
            "shadow-inner shadow-slate-950/40",
          )}>
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
              Project handle
            </span>

            <input
              className={clsx(
                "w-full",
                "px-4 py-3",
                "border border-slate-800/80 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 rounded-xl",
                "bg-slate-950",
                "placeholder:text-slate-600 text-slate-100 text-sm",
                "transition",
                "focus:outline-none",
              )}
              placeholder="windly-extension"
            />
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className={clsx(
              "inline-flex items-center justify-center gap-2",
              "px-4 py-3",
              "border border-slate-700/70 hover:border-slate-500/80 rounded-xl",
              "bg-slate-900/70",
              "font-semibold hover:text-white text-slate-100 text-sm",
              "shadow-[0_10px_50px_-30px_rgba(15,23,42,1)]",
              "duration-200 transition-colors",
            )}>
              Duplicate
            </button>

            <button className={clsx(
              "inline-flex items-center justify-center gap-2",
              "px-4 py-3",
              "border border-rose-500/50 rounded-xl",
              "bg-rose-500/20 hover:bg-rose-500/30",
              "font-semibold text-rose-50 text-sm",
              "shadow-[0_10px_50px_-30px_rgba(244,63,94,0.8)]",
              "transition",
            )}>
              Delete project
            </button>
          </div>
        </div>

        <aside className={clsx(
          "flex flex-col gap-4",
          "lg:w-80 w-full",
          "px-6 py-5",
          "border border-slate-800/80 rounded-2xl",
          "bg-slate-900/60",
          "shadow-[0_25px_100px_-60px_rgba(15,23,42,1)]",
        )}>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-100">
              Live preview
            </span>

            <span className="text-xs rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-100 border border-emerald-400/40">
              Stable
            </span>
          </div>

          <div className={clsx(
            "p-4",
            "border border-slate-800 rounded-xl",
            "bg-slate-950/70",
            "font-mono leading-5 text-[11px] text-cyan-100/90",
            "overflow-hidden",
          )}>
            Copy this entire card into your selection to check how Windly
            handles multiple class strings within one component.
          </div>
        </aside>
      </div>
    </div>
  );
}
