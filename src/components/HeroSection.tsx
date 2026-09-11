import React from 'react';
import type { SphereId } from '../types/curriculum';

interface HeroSectionProps {
  onExploreInsights: () => void;
  onOurApproach: () => void;
  onSelectSpherePillar?: (sphereId: SphereId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreInsights,
  onOurApproach,
  onSelectSpherePillar,
}) => {
  return (
    <section className="relative overflow-hidden pt-4 pb-12 sm:pt-8 sm:pb-16 border-b border-white/[0.07]">
      {/* Background Subtle Ambient Glow */}
      <div className="pointer-events-none absolute top-1/4 right-10 h-96 w-96 rounded-full bg-[#c48b76]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -top-20 left-10 h-72 w-72 rounded-full bg-white/[0.02] blur-[100px]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        {/* Left Column: Editorial Typography & CTAs */}
        <div className="lg:col-span-6 z-10 flex flex-col justify-center pr-0 lg:pr-4">
          {/* Kicker tag */}
          <div className="mb-4 flex items-center gap-2">
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#c48b76]">
              BEHAVIOURAL SCIENCE. REAL RESULTS.
            </span>
          </div>

          {/* Monumental Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal leading-[1.1] text-[#f4f4f6] tracking-tight">
            Decode
            <br />
            Human Behaviour
            <br />
            Unlock
            <br />
            Extraordinary Growth.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-sm sm:text-base text-stone-300 font-normal leading-relaxed max-w-lg">
            We blend psychology, data and creativity to help ambitious brands understand, influence and empower consumer choice.
          </p>

          {/* Pill CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5">
            <button
              type="button"
              onClick={onExploreInsights}
              className="rounded-full bg-[#f4f4f6] text-[#08080a] font-medium text-xs sm:text-sm px-7 py-3 hover:bg-white hover:shadow-lg hover:shadow-white/10 active:scale-[0.98] transition-all cursor-pointer"
            >
              Explore Insights
            </button>
            <button
              type="button"
              onClick={onOurApproach}
              className="rounded-full border border-white/20 bg-transparent text-stone-200 font-medium text-xs sm:text-sm px-7 py-3 hover:border-white/50 hover:bg-white/5 active:scale-[0.98] transition-all cursor-pointer"
            >
              Our Approach
            </button>
          </div>
        </div>

        {/* Right Column: Sliced Classical Profile Sculpture with Rose-Gold Prism & Pillars */}
        <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center">
            {/* The Sliced Marble Sculpture with feather fade */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
              <img
                src="/assets/hero-sculpture.png"
                alt="Classical chiaroscuro marble profile sculpture sliced vertically"
                className="w-full h-full object-contain object-right drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] filter brightness-[1.02] contrast-[1.06]"
              />

              {/* Vertical Sliced Architectural Pillars Overlay */}
              <div className="absolute inset-0 flex items-center justify-end pr-8 sm:pr-14 pointer-events-none">
                <div className="pointer-events-auto flex flex-col items-center justify-center gap-6 sm:gap-8 py-4">
                  <button
                    type="button"
                    onClick={() => onSelectSpherePillar?.('internal-architecture')}
                    className="group text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-stone-400 hover:text-white transition-all cursor-pointer drop-shadow-md flex items-center gap-2"
                    title="Filter Sphere 1: Internal Architecture (Emotion)"
                  >
                    <span className="h-1 w-1 rounded-full bg-transparent group-hover:bg-[#c48b76] transition-colors" />
                    <span>EMOTION</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectSpherePillar?.('strategic-interactions')}
                    className="group text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-stone-400 hover:text-white transition-all cursor-pointer drop-shadow-md flex items-center gap-2"
                    title="Filter Sphere 3: Strategic Interactions (Reason)"
                  >
                    <span className="h-1 w-1 rounded-full bg-transparent group-hover:bg-[#c48b76] transition-colors" />
                    <span>REASON</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectSpherePillar?.('social-dynamics')}
                    className="group text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-stone-400 hover:text-white transition-all cursor-pointer drop-shadow-md flex items-center gap-2"
                    title="Filter Sphere 2: Social Dynamics (Context)"
                  >
                    <span className="h-1 w-1 rounded-full bg-transparent group-hover:bg-[#c48b76] transition-colors" />
                    <span>CONTEXT</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectSpherePillar?.('behavioral-economics')}
                    className="group text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-stone-400 hover:text-white transition-all cursor-pointer drop-shadow-md flex items-center gap-2"
                    title="Filter Sphere 4: Behavioral Economics (Choice)"
                  >
                    <span className="h-1 w-1 rounded-full bg-transparent group-hover:bg-[#c48b76] transition-colors" />
                    <span>CHOICE</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* "FEATURED IN" Publication Row (Exact Replication) */}
      <div className="mt-12 sm:mt-16 pt-8 border-t border-white/[0.06]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.25em] text-stone-400">
            FEATURED IN
          </span>

          <div className="w-full sm:w-auto flex flex-wrap items-center justify-between sm:justify-end gap-6 sm:gap-10 md:gap-14 text-stone-400 opacity-90">
            {/* Forbes */}
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-stone-300 hover:text-white transition-colors cursor-default select-none">
              Forbes
            </span>

            {/* Harvard Business Review */}
            <span className="font-serif text-sm sm:text-base font-medium tracking-tight text-stone-300 hover:text-white transition-colors cursor-default select-none">
              Harvard Business Review
            </span>

            {/* Bloomberg */}
            <span className="font-sans text-base sm:text-lg font-bold tracking-tight text-stone-300 hover:text-white transition-colors cursor-default select-none">
              Bloomberg
            </span>

            {/* WIRED */}
            <span className="font-mono text-sm sm:text-base font-black tracking-[0.2em] border border-stone-500/80 px-1 py-0.5 text-stone-300 hover:text-white hover:border-white transition-colors cursor-default select-none">
              WIRED
            </span>

            {/* The New York Times */}
            <span className="font-serif italic text-base sm:text-lg font-semibold tracking-normal text-stone-300 hover:text-white transition-colors cursor-default select-none">
              The New York Times
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
