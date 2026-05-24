import { ArrowRight } from 'lucide-react';
import { GoldButton } from '../ui/GoldButton';
import { SectionTitle } from '../ui/SectionTitle';
import ServicesDiagram from '../ui/ServicesDiagram';

const services = [
  'Pemasaran Media Sosial',
  'Konsultan Brand',
  'Riset Pasar',
  'Periklanan',
  'Pemasaran Digital',
  'Pemasaran Produk',
  'Training',
  'Konsultan Bisnis',
  'Konsultan IT',
  'Konsultan Hukum',
];

export function Services() {
  return (
    <section id="layanan" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <SectionTitle eyebrow="Layanan" title="Layanan Kami" align="left" />
          <p className="max-w-2xl text-base leading-8 text-brand-text-muted sm:text-lg">
            Tersedia remote dan tatap muka - Kota Bogor & sekitarnya.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-brand-gray-soft bg-brand-off-white px-4 py-2 text-sm font-semibold text-brand-navy transition hover:border-brand-gold hover:text-brand-gold"
              >
                {service}
              </span>
            ))}
          </div>
          <GoldButton href="#kontak" className="mt-9" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
            Minta Penawaran
          </GoldButton>
        </div>
        <div className="hidden items-center justify-center lg:flex">
          <ServicesDiagram />
        </div>
      </div>
    </section>
  );
}
