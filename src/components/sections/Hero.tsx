import { motion } from 'framer-motion';
import GlobeAnimation from '../ui/GlobeAnimation';

const decorativeDots = [
  { top: '15%', left: '20%' },
  { top: '30%', left: '55%' },
  { top: '65%', left: '30%' },
  { top: '20%', left: '70%' },
  { top: '80%', left: '60%' },
  { top: '45%', left: '12%' },
];

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0B183A 0%, #1B3A6B 45%, #0F2347 100%)',
      }}
      aria-label="Beranda Hazana Corp"
    >
      <div
        className="pointer-events-none absolute right-[-120px] top-[-120px] h-[600px] w-[600px] rounded-full border border-white/5"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-60px] top-[-60px] h-[480px] w-[480px] rounded-full border border-white/5"
        aria-hidden="true"
      />

      <GlobeAnimation />

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {decorativeDots.map((pos, index) => (
          <div
            key={`${pos.top}-${pos.left}`}
            className="absolute h-1 w-1 rounded-full bg-white/20"
            style={{ top: pos.top, left: pos.left, opacity: index % 2 === 0 ? 0.8 : 0.45 }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-16">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className="mb-8 inline-block rounded-full bg-brand-gold px-6 py-2 text-sm font-semibold tracking-widest text-brand-navy">
            HALAL &bull; SMART &bull; DIGITAL
          </span>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-white lg:text-6xl">
            Empowering Daily Life
            <br />
            with Smart, Halal &amp; <span className="text-brand-gold">Digital Solutions</span>
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-blue-200 lg:text-xl">
            Hazana Corp adalah grup bisnis terintegrasi berbasis nilai Islam dari Bogor, menghadirkan ekosistem e-commerce,
            travel halal, properti syariah, solusi IT, dan media digital.
          </p>

          <div className="mb-10 h-0.5 w-20 bg-brand-gold" />

          <div className="flex flex-wrap gap-4">
            <a
              href="#tentang-kami"
              className="rounded-lg bg-brand-gold px-8 py-3.5 font-semibold text-brand-navy shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-gold-light hover:shadow-brand-gold/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              Kenali Kami
            </a>
            <a
              href="#unit-bisnis"
              className="rounded-lg border-2 border-white px-8 py-3.5 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Unit Bisnis
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-white/40">
        <span className="text-[10px] tracking-widest">SCROLL</span>
        <div className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
