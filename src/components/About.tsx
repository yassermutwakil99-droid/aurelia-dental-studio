import { useReveal, useParallax } from '@/hooks/useMotion';
import { STATS } from '@/lib/data';

/** Editorial "About" section: asymmetric composition with a parallax visual panel. */
export default function About() {
  const copy = useReveal<HTMLDivElement>();
  const panel = useReveal<HTMLDivElement>();
  const parallax = useParallax<HTMLDivElement>(54);

  return (
    <section id="studio" className="relative overflow-hidden bg-ivory-100 py-28 md:py-40">
      {/* oversized ghost word */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 left-0 select-none whitespace-nowrap font-display text-[22vw] italic leading-none text-espresso-900/[0.045]"
      >
        Philosophy
      </span>

      <div className="container-editorial grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div ref={copy} className="reveal lg:col-span-5 lg:pr-8">
          <p className="eyebrow">01 — The Studio</p>
          <h2 className="display-xl mt-6 text-4xl text-espresso-900 md:text-6xl">
            Dentistry, practiced
            <br />
            as a <span className="italic text-bronze-600">craft.</span>
          </h2>
          <div className="mt-8 h-px w-24 origin-left animate-line-grow bg-champagne-500" />
          <p className="mt-8 max-w-md text-base leading-relaxed text-espresso-700 md:text-lg">
            AURELIA was founded on a belief that a dental visit should feel less
            like an appointment and more like time deliberately spent — a pause
            in a Mayfair townhouse, where science is practised with the patience
            of an artisan.
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-espresso-700 md:text-lg">
            Every treatment begins with listening. We plan each smile around the
            architecture of your face, the character of your enamel, and the
            life you intend to live — then we work slowly, precisely, and with
            an obsession for the invisible details.
          </p>

          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-5xl font-light text-espresso-900 md:text-6xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-[12px] uppercase tracking-wide2 text-clay-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div ref={panel} className="reveal lg:col-span-7" style={{ ['--reveal-delay' as string]: '150ms' }}>
          <div className="relative ml-auto aspect-[4/5] max-w-[640px] overflow-hidden lg:aspect-[5/6]">
            <div
              ref={parallax}
              className="parallax-media absolute -inset-y-16 inset-x-0"
              aria-hidden="true"
            >
              <ScenePanel />
            </div>
            {/* caption card */}
            <figure className="absolute -bottom-6 -left-6 hidden bg-ivory-50 p-8 shadow-[0_24px_60px_-30px_rgba(38,34,23,0.4)] md:block lg:-left-14">
              <blockquote className="max-w-[240px] font-display text-xl italic leading-snug text-espresso-800">
                “The finest dentistry is the kind you forget was ever done.”
              </blockquote>
              <figcaption className="mt-4 text-[11px] uppercase tracking-wide2 text-bronze-600">
                Dr. Elena Marchetti — Founder
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Layered architectural still-life standing in for an interior photograph. */
function ScenePanel() {
  return (
    <div className="h-full w-full">
      <div
        className="h-full w-full"
        style={{
          background:
            'linear-gradient(160deg, #F4EFE3 0%, #E7DBC4 34%, #C8B289 62%, #8F7A58 86%, #57503F 100%)',
        }}
      />
      {/* sunbeam */}
      <div
        className="absolute inset-0 mix-blend-screen"
        style={{
          background:
            'linear-gradient(118deg, transparent 30%, rgba(253,252,249,0.5) 46%, rgba(253,252,249,0.16) 58%, transparent 70%)',
        }}
      />
      {/* arch motif */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center">
        <div
          className="h-[62%] w-[46%] rounded-t-full"
          style={{ background: 'linear-gradient(to bottom, rgba(38,34,23,0.22), rgba(38,34,23,0.4))' }}
        />
      </div>
      <div
        className="absolute inset-0 opacity-[0.14] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
