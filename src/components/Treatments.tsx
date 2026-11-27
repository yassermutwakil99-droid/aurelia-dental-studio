import { ArrowUpRight } from 'lucide-react';
import { TREATMENTS, type Treatment } from '@/lib/data';
import { useReveal } from '@/hooks/useMotion';

export default function Treatments() {
  const head = useReveal<HTMLDivElement>();
  const list = useReveal<HTMLDivElement>();

  return (
    <section id="treatments" className="relative bg-ivory-200 py-28 md:py-40">
      <div className="container-editorial">
        <div ref={head} className="reveal flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">02 — Treatments</p>
            <h2 className="display-xl mt-6 max-w-xl text-4xl text-espresso-900 md:text-6xl">
              A repertoire of <span className="italic text-bronze-600">quiet</span> interventions
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-espresso-700">
            From a single afternoon of brightening to a fully composed smile —
            each treatment begins with a private consultation and a plan made
            only for you.
          </p>
        </div>

        <div ref={list} className="reveal mt-20" style={{ ['--reveal-delay' as string]: '120ms' }}>
          <ul>
            {TREATMENTS.map((t, i) => (
              <TreatmentRow key={t.index} treatment={t} last={i === TREATMENTS.length - 1} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function TreatmentRow({ treatment, last }: { treatment: Treatment; last: boolean }) {
  return (
    <li>
      <a
        href="#booking"
        className="group grid items-baseline gap-x-10 border-t border-espresso-900/12 py-9 transition-colors duration-500 hover:border-bronze-600 md:grid-cols-12 md:py-12"
      >
        <span className="text-[12px] tracking-wide2 text-bronze-600 md:col-span-1">
          {treatment.index}
        </span>

        <div className="md:col-span-5">
          <h3 className="font-display text-3xl font-light text-espresso-900 transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
            {treatment.name}
          </h3>
          <p className="mt-2 text-[12px] uppercase tracking-wide2 text-clay-400">{treatment.tagline}</p>
        </div>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-espresso-700 md:col-span-4 md:mt-0">
          {treatment.description}
        </p>

        <div className="mt-6 flex items-center justify-between md:col-span-2 md:mt-0 md:flex-col md:items-end md:gap-3">
          <div className="text-right md:contents">
            <p className="text-sm text-espresso-900 md:order-1">{treatment.from}</p>
            <p className="text-[12px] uppercase tracking-wide2 text-clay-400 md:order-2">
              {treatment.duration}
            </p>
          </div>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-espresso-900/20 text-espresso-900 transition-all duration-500 group-hover:border-bronze-600 group-hover:bg-bronze-600 group-hover:text-ivory-50">
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </span>
        </div>
      </a>
      {last && <div className="border-t border-espresso-900/12" />}
    </li>
  );
}
