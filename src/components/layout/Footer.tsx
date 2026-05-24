import { Globe2, ShieldCheck } from 'lucide-react';
import logoImg from '../../assets/images/logo.png';
import { businessUnits } from '../../data/businessUnits';

const services = ['Pemasaran Digital', 'Konsultan IT', 'Training', 'Konsultan Bisnis'];

export function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <img
            src={logoImg}
            alt="Hazana Corp"
            className="mb-3 h-14 w-14 rounded-2xl object-contain"
            width="56"
            height="56"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
          <p className="mt-4 text-lg font-semibold tracking-wide text-white">
            HAZANA <span className="text-brand-gold">CORP</span>
          </p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
            Grup bisnis halal, smart, dan digital dari Bogor yang membangun solusi praktis untuk kebutuhan harian.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-gold/40 px-3 py-1.5 text-xs font-semibold text-brand-gold">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Halal-centric Business Group
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-brand-gold">Unit Bisnis</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {businessUnits.slice(0, 6).map((unit) => (
              <li key={unit.id}>
                <a className="transition hover:text-brand-gold" href="#unit-bisnis">
                  {unit.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-brand-gold">Layanan</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {services.map((service) => (
              <li key={service}>
                <a className="transition hover:text-brand-gold" href="#layanan">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-brand-gold">Sosial Media</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>
              <a className="transition hover:text-brand-gold" href="https://www.instagram.com/hazza.storeid/" target="_blank" rel="noreferrer">
                Instagram @hazza.storeid
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 transition hover:text-brand-gold" href="https://hazanacorp.com">
                <Globe2 className="h-4 w-4" aria-hidden="true" />
                hazanacorp.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/60 sm:px-6 lg:px-8">
        &copy; 2024 Hazana Corp. All rights reserved. | Bogor, Jawa Barat
      </div>
    </footer>
  );
}
