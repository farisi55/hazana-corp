import type { ReactNode } from 'react';
import { Globe2, Instagram, Mail, MapPin, Send } from 'lucide-react';
import { GoldButton } from '../ui/GoldButton';
import { SectionTitle } from '../ui/SectionTitle';

export function Contact() {
  return (
    <section id="kontak" className="scroll-mt-24 bg-brand-navy py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Kontak" title="Hubungi Kami" dark />
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="space-y-5">
              <ContactItem icon={<MapPin className="h-5 w-5" aria-hidden="true" />} title="Lokasi">
                Bogor, Jawa Barat 16167
              </ContactItem>
              <ContactItem icon={<Instagram className="h-5 w-5" aria-hidden="true" />} title="Instagram">
                <a href="https://www.instagram.com/hazza.storeid/" target="_blank" rel="noreferrer" className="transition hover:text-brand-gold">
                  @hazza.storeid
                </a>
              </ContactItem>
              <ContactItem icon={<Globe2 className="h-5 w-5" aria-hidden="true" />} title="Website">
                <a href="https://hazanacorp.com" className="transition hover:text-brand-gold">
                  hazanacorp.com
                </a>
              </ContactItem>
            </div>

            <div className="mt-8 overflow-hidden rounded-lg border border-white/10">
              <iframe
                title="Peta lokasi Bogor, Jawa Barat"
                src="https://www.google.com/maps?q=Bogor%2C%20Jawa%20Barat&output=embed"
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            action="mailto:info@hazanacorp.com"
            method="post"
            encType="text/plain"
            className="rounded-lg border border-white/10 bg-white/[0.06] p-6 sm:p-8"
          >
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-semibold text-white/90">
                Nama
                <input
                  name="nama"
                  type="text"
                  required
                  className="min-h-12 rounded-lg border border-white/10 bg-white px-4 text-brand-text-dark outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30"
                  autoComplete="name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-white/90">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  className="min-h-12 rounded-lg border border-white/10 bg-white px-4 text-brand-text-dark outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30"
                  autoComplete="email"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-white/90">
                Pesan
                <textarea
                  name="pesan"
                  required
                  rows={5}
                  className="rounded-lg border border-white/10 bg-white px-4 py-3 text-brand-text-dark outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-brand-gold px-5 py-3 text-sm font-bold text-brand-navy transition hover:bg-brand-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold sm:w-auto"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Kirim Pesan
            </button>
            <p className="mt-5 text-sm leading-6 text-white/70">Atau hubungi kami langsung via Instagram.</p>
            <GoldButton href="mailto:info@hazanacorp.com" variant="outline" icon={<Mail className="h-4 w-4" aria-hidden="true" />} className="mt-4">
              info@hazanacorp.com
            </GoldButton>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.06] p-5">
      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-brand-gold text-brand-navy">{icon}</div>
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-brand-gold">{title}</p>
        <div className="mt-1 text-base text-white/80">{children}</div>
      </div>
    </div>
  );
}
