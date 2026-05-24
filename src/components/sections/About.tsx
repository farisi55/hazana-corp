import logoImg from '../../assets/images/logo.png';
import { SectionTitle } from '../ui/SectionTitle';

const stats = [
  { value: 'Sejak 2019', label: 'Bertumbuh dari Bogor' },
  { value: '6 Unit Bisnis', label: 'Ekosistem terintegrasi' },
  { value: 'Bogor, Jawa Barat', label: 'Basis operasional' },
];

export function About() {
  return (
    <section id="tentang-kami" className="scroll-mt-24 bg-brand-off-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionTitle eyebrow="Tentang Kami" title="Tentang Hazana Corp" align="left" />
          <p className="text-base leading-8 text-brand-text-muted sm:text-lg">
            Hazana Corp adalah grup bisnis terintegrasi yang diinspirasi oleh nilai-nilai Islam dan didorong oleh inovasi.
            Kami mengembangkan ekosistem usaha halal yang saling mendukung, mulai dari retail online, travel, properti,
            solusi teknologi, media digital, hingga rencana pengembangan kuliner halal.
          </p>
          <p className="mt-5 text-base leading-8 text-brand-text-muted sm:text-lg">
            Dengan fondasi integritas, pelayanan, dan teknologi, Hazana Corp hadir untuk membantu masyarakat dan pelaku
            usaha mengakses solusi yang lebih amanah, relevan, dan mudah digunakan.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.value} className="rounded-lg border border-brand-gray-soft bg-white p-5 shadow-sm">
                <p className="text-lg font-black text-brand-navy">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-brand-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 scale-125 rounded-full bg-brand-gold/10 blur-2xl" aria-hidden="true" />
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border-2 border-brand-gold/30 bg-white/60 shadow-2xl backdrop-blur-sm lg:h-80 lg:w-80">
              <div className="absolute inset-4 rounded-full border border-brand-navy/10" aria-hidden="true" />
              <img
                src={logoImg}
                alt="Hazana Corp Logo"
                className="h-44 w-44 rounded-2xl object-contain lg:h-52 lg:w-52"
                width="208"
                height="208"
                loading="lazy"
              />
            </div>
            <div className="absolute right-4 top-4 h-3 w-3 rounded-full bg-brand-gold" aria-hidden="true" />
            <div className="absolute bottom-4 left-4 h-2 w-2 rounded-full bg-brand-gold/60" aria-hidden="true" />
            <div className="absolute -right-3 top-1/2 h-1.5 w-1.5 rounded-full bg-brand-gold/80" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
