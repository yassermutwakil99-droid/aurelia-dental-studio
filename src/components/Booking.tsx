import { useState, type FormEvent } from 'react';
import { Calendar, Check, Loader2 } from 'lucide-react';
import { TREATMENT_OPTIONS } from '@/lib/data';
import { submitAppointmentRequest } from '@/lib/supabase';
import { useReveal } from '@/hooks/useMotion';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
  'w-full border border-ivory-100/25 bg-transparent px-5 py-4 text-sm text-ivory-100 placeholder:text-ivory-200/40 outline-none transition-colors duration-300 focus:border-champagne-400';

export default function Booking() {
  const head = useReveal<HTMLDivElement>();
  const form = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'submitting') return;
    const fd = new FormData(e.currentTarget);
    setStatus('submitting');
    setErrorMsg('');

    const error = await submitAppointmentRequest({
      name: String(fd.get('name') ?? '').trim(),
      email: String(fd.get('email') ?? '').trim(),
      phone: String(fd.get('phone') ?? '').trim(),
      treatment: String(fd.get('treatment') ?? ''),
      preferredDate: String(fd.get('preferredDate') ?? ''),
      message: String(fd.get('message') ?? '').trim(),
    });

    if (error) {
      setErrorMsg('Your request could not be sent. Please try again in a moment.');
      setStatus('error');
      return;
    }
    setStatus('success');
  }

  return (
    <section id="booking" className="relative overflow-hidden bg-espresso-950 py-28 text-ivory-100 md:py-40">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(90% 70% at 15% 100%, rgba(194,163,112,0.22) 0%, transparent 60%), radial-gradient(70% 60% at 90% 0%, rgba(214,191,155,0.1) 0%, transparent 55%)',
        }}
      />

      <div className="container-editorial relative grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div ref={head} className="reveal">
          <p className="eyebrow !text-champagne-300">06 — Reservations</p>
          <h2 className="display-xl mt-6 text-4xl md:text-6xl">
            Begin with a
            <br />
            <span className="italic text-champagne-300">private consultation.</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-ivory-200/75 md:text-lg">
            Forty-five unhurried minutes with a principal clinician: a complete
            examination, honest counsel, and a written plan with transparent
            pricing. No obligation, no haste.
          </p>

          <ul className="mt-12 space-y-5">
            {[
              'Complimentary digital smile preview',
              'Written treatment plan within 48 hours',
              'Evening and Saturday appointments',
            ].map((item) => (
              <li key={item} className="flex items-center gap-4 text-sm text-ivory-200/85">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-champagne-400/50">
                  <Check className="h-3.5 w-3.5 text-champagne-300" strokeWidth={1.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-14 border-t border-ivory-100/10 pt-8 text-sm leading-relaxed text-ivory-200/60">
            <p>14 Cavendish Place, Mayfair, London W1G</p>
            <p className="mt-1">+44 (0)20 7946 0000 · concierge@aurelia-dental.example</p>
          </div>
        </div>

        <div ref={form} className="reveal" style={{ ['--reveal-delay' as string]: '150ms' }}>
          {status === 'success' ? (
            <div className="flex h-full min-h-[480px] flex-col items-center justify-center border border-champagne-400/40 bg-espresso-900/60 p-12 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-champagne-400">
                <Check className="h-6 w-6 text-champagne-300" strokeWidth={1.5} />
              </span>
              <h3 className="mt-8 font-display text-3xl font-light">Request received.</h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory-200/70">
                Thank you — our concierge will contact you within one working
                day to confirm a time that suits you.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="link-underline mt-10 text-[12px] uppercase tracking-wide2 text-champagne-300"
              >
                Make another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="border border-ivory-100/15 bg-espresso-900/50 p-8 backdrop-blur-sm md:p-12"
              noValidate={false}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[11px] uppercase tracking-wide2 text-ivory-200/60">Full name *</span>
                  <input required name="name" type="text" autoComplete="name" placeholder="Your name" className={inputClass} />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[11px] uppercase tracking-wide2 text-ivory-200/60">Email *</span>
                  <input required name="email" type="email" autoComplete="email" placeholder="you@example.com" className={inputClass} />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[11px] uppercase tracking-wide2 text-ivory-200/60">Phone</span>
                  <input name="phone" type="tel" autoComplete="tel" placeholder="+44 …" className={inputClass} />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[11px] uppercase tracking-wide2 text-ivory-200/60">Preferred date</span>
                  <input name="preferredDate" type="date" min={new Date().toISOString().slice(0, 10)} className={`${inputClass} [color-scheme:dark]`} />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-[11px] uppercase tracking-wide2 text-ivory-200/60">Treatment interest *</span>
                  <select required name="treatment" defaultValue="" className={`${inputClass} appearance-none [&>option]:bg-espresso-950`}>
                    <option value="" disabled>
                      Select a treatment
                    </option>
                    {TREATMENT_OPTIONS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-[11px] uppercase tracking-wide2 text-ivory-200/60">Message</span>
                  <textarea name="message" rows={4} placeholder="Tell us anything we should know…" className={`${inputClass} resize-none`} />
                </label>
              </div>

              {status === 'error' && (
                <p role="alert" className="mt-6 border border-red-400/40 bg-red-400/10 px-5 py-3 text-sm text-red-200">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-10 inline-flex w-full items-center justify-center gap-3 border border-champagne-400 bg-champagne-400 px-10 py-4 text-[12px] uppercase tracking-wide2 text-espresso-950 transition-all duration-500 hover:bg-transparent hover:text-champagne-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.5} />
                    Sending…
                  </>
                ) : (
                  <>
                    <Calendar className="h-4 w-4" strokeWidth={1.5} />
                    Request Appointment
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
