import { ArrowUp, Instagram, Facebook, Twitter } from 'lucide-react';
import { NAV_LINKS } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-ivory-100">
      {/* Marquee */}
      <div className="overflow-hidden border-y border-espresso-900/10 bg-ivory-200 py-6">
        <div className="flex w-max animate-marquee-slow gap-12 whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-12" aria-hidden={copy === 1}>
              {['Aesthetic Dentistry', 'Implantology', 'Orthodontics', 'Smile Design', 'Preventative Care', 'Hospitality'].map(
                (word) => (
                  <span key={word} className="flex items-center gap-12 font-display text-2xl font-light italic text-espresso-800/80">
                    {word}
                    <span className="h-1.5 w-1.5 rounded-full bg-champagne-500" />
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="container-editorial grid gap-14 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-3xl tracking-[0.18em] text-espresso-900">AURELIA</p>
          <p className="mt-1 text-[10px] uppercase tracking-wide2 text-bronze-600">Dental Studio</p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-espresso-700">
            A private dental atelier in Mayfair. Fictional practice created for
            demonstration — all names, details and testimonials are imagined.
          </p>
          <div className="mt-8 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#top"
                aria-label="Social link"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso-900/15 text-espresso-700 transition-all duration-500 hover:border-bronze-600 hover:bg-bronze-600 hover:text-ivory-50"
              >
                <Icon className="h-4 w-4" strokeWidth={1.25} />
              </a>
            ))}
          </div>
        </div>

        <nav className="md:col-span-3" aria-label="Footer">
          <p className="text-[11px] uppercase tracking-wide2 text-clay-400">Explore</p>
          <ul className="mt-6 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-underline text-sm text-espresso-700 hover:text-espresso-950">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#booking" className="link-underline text-sm text-espresso-700 hover:text-espresso-950">
                Reserve
              </a>
            </li>
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-wide2 text-clay-400">Visit</p>
          <address className="mt-6 space-y-3 not-italic text-sm leading-relaxed text-espresso-700">
            <p>
              14 Cavendish Place
              <br />
              Mayfair, London W1G
            </p>
            <p>
              +44 (0)20 7946 0000
              <br />
              concierge@aurelia-dental.example
            </p>
            <p className="text-clay-400">Mon – Fri 8:00 – 19:00 · Sat 9:00 – 14:00</p>
          </address>
        </div>

        <div className="md:col-span-1 md:justify-self-end">
          <a
            href="#top"
            aria-label="Back to top"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-espresso-900/15 text-espresso-900 transition-all duration-500 hover:-translate-y-1 hover:border-bronze-600 hover:bg-bronze-600 hover:text-ivory-50"
          >
            <ArrowUp className="h-4 w-4" strokeWidth={1.25} />
          </a>
        </div>
      </div>

      <div className="border-t border-espresso-900/10">
        <div className="container-editorial flex flex-col items-center justify-between gap-3 py-7 text-[11px] uppercase tracking-wide2 text-clay-400 md:flex-row">
          <p>© {new Date().getFullYear()} Aurelia Dental Studio — Fictional demo</p>
          <p>Privacy · Terms · Accessibility</p>
        </div>
      </div>
    </footer>
  );
}
