import { ArrowDown } from 'lucide-react';
import { usePrefersReducedMotion } from '@/hooks/useMotion';

/**
 * Full-bleed cinematic hero built from layered CSS: a hand-composed gradient
 * scene (dusk over a warm stone interior) with drifting light bands and grain,
 * standing in for photography.
 */
export default function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="top" className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-espresso-950">
      {/* Atmosphere */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 90% at 78% 8%, #E9DCC3 0%, #CBB68F 26%, #8F7A58 52%, #4A4030 76%, #211D14 100%)',
          }}
        />
        <div
          className="absolute inset-0 mix-blend-soft-light"
          style={{
            background:
              'repeating-linear-gradient(112deg, transparent 0px, transparent 90px, rgba(253,252,249,0.05) 130px, transparent 200px)',
            backgroundSize: '200% 200%',
          }}
        />
        <div
          className={`absolute -left-1/4 top-0 h-full w-1/2 mix-blend-screen ${
            reduced ? '' : 'animate-[heroDrift_16s_ease-in-out_infinite_alternate]'
          }`}
          style={{
            background: 'linear-gradient(100deg, transparent 0%, rgba(236,228,210,0.14) 45%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.16] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
          }}
        />
        {/* Depth arches — architecture silhouette */}
        <div className="absolute bottom-0 left-0 right-0 flex h-[46%] items-end justify-center gap-[3vw]" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-full flex-1 rounded-t-full"
              style={{
                background: 'linear-gradient(to bottom, rgba(27,24,16,0.55), rgba(27,24,16,0.85))',
                opacity: 0.35 + i * 0.12,
                transform: `translateY(${Math.abs(2 - i) * 8}px)`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-espresso-950 to-transparent" />
      </div>

      {/* Copy */}
      <div className="container-editorial relative z-10 flex h-full flex-col justify-end pb-[14vh] md:justify-center md:pb-0">
        <div className="max-w-4xl">
          <p
            className="eyebrow animate-fade-in !text-champagne-300"
            style={{ animationDelay: '200ms' }}
          >
            Private Dental Atelier — Mayfair, London
          </p>
          <h1 className="display-xl mt-6 text-[13vw] text-ivory-50 sm:text-6xl md:text-7xl xl:text-[5.6rem]">
            <span className="block animate-fade-up" style={{ animationDelay: '380ms' }}>
              A New Perspective
            </span>
            <span className="block animate-fade-up italic" style={{ animationDelay: '540ms' }}>
              on <span className="text-champagne-300">Your Smile.</span>
            </span>
          </h1>
          <p
            className="mt-8 max-w-xl animate-fade-up text-base leading-relaxed text-ivory-200/85 md:text-lg"
            style={{ animationDelay: '720ms' }}
          >
            Where clinical excellence meets the sensibility of a design atelier —
            dentistry composed with the care of haute horlogerie.
          </p>
          <div
            className="mt-12 flex animate-fade-up flex-col gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: '880ms' }}
          >
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-3 border border-champagne-400 bg-champagne-400 px-10 py-4 text-[12px] uppercase tracking-wide2 text-espresso-950 transition-all duration-500 hover:bg-transparent hover:text-champagne-300"
            >
              Book a Consultation
            </a>
            <a
              href="#studio"
              className="link-underline inline-flex items-center justify-center gap-3 px-2 py-4 text-[12px] uppercase tracking-wide2 text-ivory-100"
            >
              Discover the Studio
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#studio"
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-ivory-100/70 transition-colors hover:text-ivory-50 md:flex"
      >
        <span className="text-[10px] uppercase tracking-wide3">Scroll</span>
        <ArrowDown className={`h-4 w-4 ${reduced ? '' : 'animate-bounce'}`} strokeWidth={1.25} />
      </a>
    </section>
  );
}
