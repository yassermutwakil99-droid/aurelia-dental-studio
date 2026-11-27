import { DOCTORS, type Doctor } from '@/lib/data';
import { useReveal } from '@/hooks/useMotion';

export default function Doctors() {
  const head = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();

  return (
    <section id="doctors" className="relative bg-ivory-100 py-28 md:py-40">
      <div className="container-editorial">
        <div ref={head} className="reveal flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">04 — The Doctors</p>
            <h2 className="display-xl mt-6 max-w-xl text-4xl text-espresso-900 md:text-6xl">
              Hands you can <span className="italic text-bronze-600">trust</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-espresso-700">
            Three principals, one philosophy: measured, conservative dentistry
            that ages gracefully with you.
          </p>
        </div>

        <div ref={grid} className="reveal mt-20 grid gap-14 md:grid-cols-3 md:gap-10" style={{ ['--reveal-delay' as string]: '120ms' }}>
          {DOCTORS.map((doc, i) => (
            <DoctorCard key={doc.name} doctor={doc} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DoctorCard({ doctor, delay }: { doctor: Doctor; delay: number }) {
  return (
    <article
      className="group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-ivory-300">
        <Portrait initials={doctor.initials} />
        {/* hover veil */}
        <div className="absolute inset-0 flex items-end justify-center bg-espresso-950/0 p-8 transition-all duration-700 group-hover:bg-espresso-950/55">
          <ul className="flex flex-wrap justify-center gap-2 opacity-0 transition-all duration-700 group-hover:opacity-100">
            {doctor.focus.map((f) => (
              <li
                key={f}
                className="border border-ivory-100/40 px-3 py-1.5 text-[10px] uppercase tracking-wide2 text-ivory-100"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h3 className="mt-7 font-display text-3xl font-light text-espresso-900">{doctor.name}</h3>
      <p className="mt-1 text-[12px] uppercase tracking-wide2 text-bronze-600">{doctor.role}</p>
      <p className="mt-1 text-[12px] uppercase tracking-wide2 text-clay-400">{doctor.credentials}</p>
      <p className="mt-4 text-sm leading-relaxed text-espresso-700">{doctor.bio}</p>
    </article>
  );
}

/** Generative portrait: warm tonal field with an engraved-style monogram. */
function Portrait({ initials }: { initials: string }) {
  return (
    <div
      className="flex h-full w-full items-center justify-center transition-transform duration-700 group-hover:scale-[1.03]"
      style={{
        background:
          'radial-gradient(120% 110% at 30% 12%, #EFE6D2 0%, #DECBA8 40%, #B49B72 74%, #7C6B4E 100%)',
      }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 mix-blend-soft-light"
        style={{ background: 'linear-gradient(120deg, transparent 40%, rgba(253,252,249,0.4) 55%, transparent 68%)' }}
      />
      <span
        className="font-display text-[7rem] font-light italic text-espresso-950/35 md:text-[8rem]"
      >
        {initials}
      </span>
      {/* engraved concentric lines */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          background:
            'repeating-radial-gradient(circle at 50% 42%, transparent 0 26px, rgba(38,34,23,0.5) 27px 28px)',
        }}
      />
    </div>
  );
}
