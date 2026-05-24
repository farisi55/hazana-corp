import { CheckCircle2, ExternalLink } from 'lucide-react';
import catatEmasImg from '../../assets/images/catat-emas.jpg';
import { Badge } from '../ui/Badge';
import { GoldButton } from '../ui/GoldButton';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { SectionTitle } from '../ui/SectionTitle';

const features = [
  'Pencatatan transaksi emas fisik',
  'Tracking nilai investasi real-time',
  'Sinkronisasi harga emas harian',
  'Kalkulasi profit/loss otomatis',
  'UI/UX sederhana + backup & restore data',
];

export function FeaturedProduct() {
  return (
    <section id="produk" className="scroll-mt-24 bg-brand-navy py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Produk"
          title="Produk Unggulan"
          subtitle="Solusi digital dari Hazza Solusindo untuk membantu pencatatan dan pemantauan aset emas fisik."
          dark
        />
        <div className="grid items-center gap-10 rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-gold sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <div>
            <Badge variant="outline" className="mb-5">
              Available on Amazon Appstore
            </Badge>
            <h3 className="text-3xl font-black text-white sm:text-4xl">Catat Emas</h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
              Aplikasi pencatatan emas fisik untuk pengguna yang ingin mengelola transaksi, nilai investasi, dan
              performa aset dengan cara yang sederhana, rapi, dan mudah dipahami.
            </p>
            <ul className="mt-8 grid gap-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-white/90">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-gold" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <GoldButton href="https://lnkd.in/gVjTsQAH" target="_blank" rel="noreferrer" icon={<ExternalLink className="h-4 w-4" aria-hidden="true" />}>
                Download Aplikasi
              </GoldButton>
              <span className="inline-flex w-fit rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/70">
                Built with React Native
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-8 rounded-full bg-brand-gold/25 blur-3xl" aria-hidden="true" />
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl shadow-2xl shadow-brand-navy/40">
              <ImageWithFallback
                src={catatEmasImg}
                alt="Catat Emas App"
                fallbackType="product"
                className="h-auto max-h-[560px] w-full rounded-2xl object-cover"
                width={420}
                height={560}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
