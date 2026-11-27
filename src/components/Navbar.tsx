import { useEffect, useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { NAV_LINKS } from '@/lib/data';
import { useScrolled } from '@/hooks/useMotion';

export default function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-ivory-100/90 shadow-[0_1px_0_rgba(38,34,23,0.08)] backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container-editorial flex h-20 items-center justify-between md:h-24">
          <a
            href="#top"
            className={`font-display text-2xl tracking-[0.18em] transition-colors duration-500 ${
              scrolled ? 'text-espresso-900' : 'text-ivory-50'
            }`}
          >
            AURELIA
            <span
              className={`mt-0.5 block text-center text-[9px] font-normal uppercase tracking-wide2 transition-colors duration-500 ${
                scrolled ? 'text-bronze-600' : 'text-ivory-50/70'
              }`}
            >
              Dental Studio
            </span>
          </a>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`link-underline text-[12px] uppercase tracking-wide2 transition-colors duration-500 ${
                  scrolled ? 'text-espresso-700 hover:text-espresso-950' : 'text-ivory-100/90 hover:text-ivory-50'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className={`group inline-flex items-center gap-2 border px-6 py-3 text-[12px] uppercase tracking-wide2 transition-all duration-500 ${
                scrolled
                  ? 'border-espresso-900 bg-espresso-900 text-ivory-100 hover:bg-transparent hover:text-espresso-950'
                  : 'border-ivory-100/60 text-ivory-100 hover:bg-ivory-100 hover:text-espresso-950'
              }`}
            >
              <Calendar className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5" strokeWidth={1.5} />
              Reserve
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={`flex h-11 w-11 items-center justify-center transition-colors duration-500 lg:hidden ${
              scrolled ? 'text-espresso-900' : 'text-ivory-50'
            }`}
          >
            <Menu className="h-6 w-6" strokeWidth={1.25} />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-espresso-950 transition-all duration-500 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="container-editorial flex h-20 items-center justify-between">
          <span className="font-display text-2xl tracking-[0.18em] text-ivory-100">AURELIA</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center text-ivory-100"
          >
            <X className="h-6 w-6" strokeWidth={1.25} />
          </button>
        </div>
        <nav className="container-editorial mt-10 flex flex-col gap-2" aria-label="Mobile">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`border-b border-ivory-100/10 py-5 font-display text-3xl text-ivory-100 transition-all duration-500 ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 border border-champagne-400 bg-champagne-400 px-8 py-4 text-[12px] uppercase tracking-wide2 text-espresso-950"
          >
            Reserve a Consultation
          </a>
        </nav>
      </div>
    </>
  );
}
