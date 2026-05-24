import { HeartHandshake, Lightbulb, ShieldCheck } from 'lucide-react';
import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';

const values = [
  {
    title: 'Integritas',
    description: 'Kejujuran dan transparansi dalam setiap layanan',
    icon: ShieldCheck,
  },
  {
    title: 'Inovasi',
    description: 'Solusi cerdas berbasis teknologi untuk masalah nyata',
    icon: Lightbulb,
  },
  {
    title: 'Keberkahan',
    description: 'Setiap bisnis dijalankan sesuai prinsip halal Islam',
    icon: HeartHandshake,
  },
];

export function Values() {
  return (
    <section className="bg-brand-gold-pale py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Fondasi" title="Nilai Inti Kami" />
        <div className="grid gap-6 md:grid-cols-3">
          {values.map(({ title, description, icon: Icon }) => (
            <Card key={title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-brand-navy text-brand-gold">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-black text-brand-navy">{title}</h3>
              <p className="mt-3 leading-7 text-brand-text-muted">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
