import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';
import { useReveal } from '@/hooks/useMotion';

export default function Testimonials() {
  const head = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();

  return (
    <section id="voices" className="relative overflow-hidden bg-ivory-200 py-28 md:py-40">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-0 select-none whitespace-nowrap font-display text-[22vw] italic leading-none text-espresso-900/[0.045]"
      >
        Voices
      </span>

      <div className="container-editorial relative">
        <div ref={head} className="reveal text-center">
          <p className="eyebrow">05 — Patient Voices</p>
          <h2 className="display-xl mx-auto mt-6 max-w-2xl text-4xl text-espresso-900 md:text-6xl">
            Told in their own <span className="italic text-bronze-600">words</span>
          </h2>
          <p className="mx-auto mt-5 text-[12px] uppercase tracking-wide2 text-clay-400">
            Fictional accounts composed for illustration
          </p>
        </div>

        <div
          ref={grid}
          className="reveal mt-20 grid gap-px bg-espresso-900/10 md:grid-cols-3"
          style={{ ['--reveal-delay' as string]: '120ms' }}
        >
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.author}
              className="group flex flex-col justify-between bg-ivory-100 p-10 transition-colors duration-700 hover:bg-ivory-50 md:p-12"
            >
              <div>
                <Quote className="h-7 w-7 text-champagne-500 transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-bronze-600" strokeWidth={1.25} />
                <blockquote className="mt-8 font-display text-xl italic leading-relaxed text-espresso-800 md:text-2xl">
                  {t.quote}
                </blockquote>
              </div>
              <figcaption className="mt-10 border-t border-espresso-900/10 pt-6">
                <p className="text-sm text-espresso-900">{t.author}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide2 text-clay-400">{t.context}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
