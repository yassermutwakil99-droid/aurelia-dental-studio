import { Sparkles, Coffee, Monitor, Headphones, ShieldCheck, Clock } from 'lucide-react';
import { useReveal, useParallax } from '@/hooks/useMotion';

const AMENITIES = [
  { icon: Coffee, title: 'Champagne Welcome', text: 'A quiet lounge, fresh pressed juice or a flute of champagne while we prepare your suite.' },
  { icon: Monitor, title: 'Ceiling Cinema', text: 'A calibrated display above every chair. Films, not ceilings tiles, keep you company.' },
  { icon: Headphones, title: 'Noise-Cancelled Quiet', text: 'Bespoke headphones and your own playlist. The drill exists, but you will not hear it.' },
  { icon: ShieldCheck, title: 'Sterile by Obsession', text: 'Hospital-grade sterilisation, audited monthly, performed visibly on request.' },
  { icon: Clock, title: 'Never Rushed', text: 'Appointments are scheduled with margin. You will never be processed, only received.' },
  { icon: Sparkles, title: 'Aftercare Concierge', text: 'A direct line to your clinician, evening and weekend check-ins, unhurried follow-ups.' },
];

export default function Experience() {
  const head = useReveal<HTMLDivElement>();
  const gallery = useReveal<HTMLDivElement>();
  const p1 = useParallax<HTMLDivElement>(38);
  const p2 = useParallax<HTMLDivElement>(-30);

  return (
    <section id="experience" className="relative overflow-hidden bg-espresso-950 py-28 text-ivory-100 md:py-40">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-10 select-none whitespace-nowrap font-display text-[20vw] italic leading-none text-ivory-50/[0.035]"
      >
        Interior
      </span>

      <div className="container-editorial relative">
        <div ref={head} className="reveal max-w-2xl">
          <p className="eyebrow !text-champagne-300">03 — The Experience</p>
          <h2 className="display-xl mt-6 text-4xl md:text-6xl">
            An hour that feels like
            <span className="italic text-champagne-300"> hospitality.</span>
          </h2>
          <p className="mt-8 text-base leading-relaxed text-ivory-200/75 md:text-lg">
            We studied luxury hotels, not clinics. The result is a studio where
            the light is warm, the pace is human, and every touchpoint — from
            scent to sound — has been composed rather than chosen.
          </p>
        </div>

        {/* Editorial image duo */}
        <div ref={gallery} className="reveal mt-20 grid gap-8 md:grid-cols-12 md:gap-12" style={{ ['--reveal-delay' as string]: '120ms' }}>
          <figure className="md:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden">
              <div ref={p1} className="parallax-media absolute -inset-y-12 inset-x-0">
                <PanelA />
              </div>
            </div>
            <figcaption className="mt-4 flex justify-between text-[11px] uppercase tracking-wide2 text-ivory-200/50">
              <span>The Reception Room</span>
              <span>I</span>
            </figcaption>
          </figure>
          <figure className="md:col-span-5 md:pt-24">
            <div className="relative aspect-[4/5] overflow-hidden">
              <div ref={p2} className="parallax-media absolute -inset-y-12 inset-x-0">
                <PanelB />
              </div>
            </div>
            <figcaption className="mt-4 flex justify-between text-[11px] uppercase tracking-wide2 text-ivory-200/50">
              <span>Treatment Suite No. 2</span>
              <span>II</span>
            </figcaption>
          </figure>
        </div>

        {/* Amenities */}
        <div className="mt-24 grid gap-px border border-ivory-100/10 bg-ivory-100/10 sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((a, i) => (
            <div
              key={a.title}
              className="group bg-espresso-950 p-10 transition-colors duration-700 hover:bg-espresso-900"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <a.icon className="h-6 w-6 text-champagne-400 transition-transform duration-500 group-hover:-translate-y-1" strokeWidth={1.25} />
              <h3 className="mt-6 font-display text-2xl font-light">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory-200/60">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Warm suite interior abstraction. */
function PanelA() {
  return (
    <div
      className="h-full w-full"
      style={{
        background:
          'radial-gradient(130% 100% at 20% 0%, #EFE6D2 0%, #D9C7A4 34%, #A58E68 66%, #5E5440 100%)',
      }}
    >
      <div className="absolute inset-x-0 bottom-0 flex h-[55%] items-end justify-around px-[8%]">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-[12%] rounded-t-full"
            style={{
              height: `${58 + ((i * 37) % 40)}%`,
              background: 'linear-gradient(to bottom, rgba(27,24,16,0.35), rgba(27,24,16,0.6))',
            }}
          />
        ))}
      </div>
      <div
        className="absolute inset-0 mix-blend-soft-light"
        style={{ background: 'linear-gradient(105deg, transparent 35%, rgba(253,252,249,0.35) 50%, transparent 62%)' }}
      />
    </div>
  );
}

/** Chair-and-light abstraction for a treatment suite. */
function PanelB() {
  return (
    <div
      className="h-full w-full"
      style={{
        background:
          'linear-gradient(200deg, #F7F3EA 0%, #E4D6BC 38%, #B79E77 72%, #6B5F49 100%)',
      }}
    >
      {/* pendant light */}
      <div className="absolute left-[30%] top-0 h-[34%] w-px bg-espresso-950/40" />
      <div
        className="absolute left-[24%] top-[32%] h-12 w-[24%] rounded-full"
        style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(253,252,249,0.9), rgba(253,252,249,0))' }}
      />
      <div
        className="absolute left-[30%] top-[34%] h-8 w-[6%] rounded-b-[999px] border border-espresso-950/30 bg-ivory-100/70"
      />
      {/* reclined chair silhouette */}
      <div className="absolute bottom-[16%] left-[24%] h-[14%] w-[52%] -rotate-6 rounded-[999px] bg-espresso-950/45" />
      <div className="absolute bottom-[12%] left-[62%] h-[26%] w-[10%] rotate-[24deg] rounded-[999px] bg-espresso-950/40" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_120%,rgba(27,24,16,0.5),transparent)]" />
    </div>
  );
}
