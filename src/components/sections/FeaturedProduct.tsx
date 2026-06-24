import { useState } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import {
  ArrowUpCircle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Download,
  ExternalLink,
  HeartPulse,
  RefreshCw,
  Settings,
  Shuffle,
} from 'lucide-react';
import catatEmasImg from '../../assets/images/catat-emas.jpg';
import smoothHeroImg from '../../assets/images/smooth-hero.png';

const products = [{ id: 'catat-emas' }, { id: 'smooth' }];

const catatEmasFeatures = [
  'Pencatatan transaksi emas fisik',
  'Tracking nilai investasi real-time',
  'Sinkronisasi harga emas harian',
  'Kalkulasi profit/loss otomatis',
  'UI/UX sederhana + backup & restore data',
];

const smoothCapabilities = [
  { icon: RefreshCw, label: 'Self-Improvement' },
  { icon: Settings, label: 'Self-Configuration' },
  { icon: HeartPulse, label: 'Self-Healing' },
  { icon: ArrowUpCircle, label: 'Self-Upgrade' },
  { icon: Shuffle, label: 'Multi-Provider AI' },
  { icon: Cpu, label: 'Local AI Ready' },
];

const smoothTechStack = ['TypeScript', 'Docker', 'llama.cpp', 'Ollama', 'MCP', 'Telegram'];

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '60%' : '-60%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 280, damping: 30 },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-60%' : '60%',
    opacity: 0,
    transition: { duration: 0.2 },
  }),
};

export function FeaturedProduct() {
  const [[current, direction], setSlide] = useState<[number, number]>([0, 0]);

  const navigate = (directionChange: number) => {
    setSlide(([currentIndex]) => [
      (currentIndex + directionChange + products.length) % products.length,
      directionChange,
    ]);
  };

  const goToSlide = (index: number) => {
    setSlide(([currentIndex]) => {
      if (index === currentIndex) return [currentIndex, 0];

      return [index, index > currentIndex ? 1 : -1];
    });
  };

  return (
    <section id="produk" className="scroll-mt-24 overflow-hidden bg-brand-navy py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Produk Unggulan
          </span>
          <h2 className="text-3xl font-bold text-white lg:text-4xl">Solusi Digital dari Hazana Corp</h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-blue-200">
            Dari pencatatan investasi emas hingga AI agent untuk developer, kami membangun produk yang menyelesaikan
            masalah nyata.
          </p>
        </div>

        <div className="relative">
          <div className="relative min-h-[560px] overflow-hidden rounded-3xl sm:min-h-[520px] lg:min-h-[460px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.08}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) navigate(1);
                  if (info.offset.x > 80) navigate(-1);
                }}
                className="absolute inset-0"
              >
                {current === 0 ? <CatatEmasSlide /> : <SmoothSlide />}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Produk sebelumnya"
            className="group absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-200 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-navy sm:left-4"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => navigate(1)}
            aria-label="Produk berikutnya"
            className="group absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-200 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-navy sm:right-4"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2.5">
          {products.map((product, index) => (
            <button
              key={product.id}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Tampilkan produk ${index + 1}`}
              aria-current={index === current}
              className={`rounded-full transition-all duration-300 ${
                index === current ? 'h-2.5 w-7 bg-brand-gold' : 'h-2.5 w-2.5 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CatatEmasSlide() {
  return (
    <article
      className="grid h-full min-h-[inherit] w-full grid-cols-1 overflow-hidden rounded-3xl border border-white/10 lg:grid-cols-2"
      style={{ background: '#0F2347' }}
    >
      <div className="flex flex-col justify-center px-8 py-10 sm:px-10 lg:p-12">
        <span className="mb-4 inline-block w-fit rounded-full border border-brand-gold/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
          Available on Amazon Appstore
        </span>
        <h3 className="mb-3 text-3xl font-bold text-white">Catat Emas</h3>
        <p className="mb-6 text-sm leading-relaxed text-blue-200">
          Aplikasi pencatatan emas fisik untuk pengguna yang ingin mengelola transaksi, nilai investasi, dan performa
          aset dengan cara yang sederhana, rapi, dan mudah dipahami.
        </p>

        <ul className="mb-8 space-y-2">
          {catatEmasFeatures.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 text-sm text-white/80">
              <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-brand-gold" strokeWidth={2.5} aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="https://lnkd.in/gVjTsQAH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-6 py-2.5 text-sm font-semibold text-brand-navy transition-all duration-200 hover:bg-brand-gold-light"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Aplikasi
          </a>
          <span className="w-fit rounded-xl border border-white/20 px-3 py-2.5 text-xs text-white/30">
            Built with React Native
          </span>
        </div>
      </div>

      <div className="hidden items-center justify-center p-6 lg:flex">
        <div className="w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
          <img src={catatEmasImg} alt="Catat Emas App" className="h-auto w-full object-cover" loading="lazy" />
        </div>
      </div>
    </article>
  );
}

function SmoothSlide() {
  return (
    <article
      className="relative grid h-full min-h-[inherit] w-full grid-cols-1 overflow-hidden rounded-3xl border border-brand-gold/20 lg:grid-cols-2"
      style={{ background: 'linear-gradient(145deg, #060d1f 0%, #0a1628 50%, #0d1f3c 100%)' }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="smooth-carousel-circuit"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path d="M10 10 H50 V30 H30 V50 H10 Z" fill="none" stroke="#C9A227" strokeWidth="0.8" />
              <circle cx="10" cy="10" r="2" fill="#C9A227" />
              <circle cx="50" cy="30" r="2" fill="#C9A227" />
              <circle cx="10" cy="50" r="2" fill="#C9A227" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smooth-carousel-circuit)" />
        </svg>
      </div>

      <div
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(201,162,39,0.10) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col justify-center px-8 py-10 sm:px-10 lg:p-12">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="inline-block rounded-full border border-brand-gold/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
            By Hazza Solusindo
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" aria-hidden="true" />
            <span className="text-[10px] font-semibold text-green-400">LIVE</span>
          </span>
        </div>

        <h3 className="mb-1 text-4xl font-bold tracking-tight text-white">smooth</h3>
        <p className="mb-4 text-xs font-medium tracking-wide text-brand-gold/80">A self-hosted AI agent platform</p>
        <p className="mb-6 text-sm leading-relaxed text-blue-200/80">
          AI agent runtime yang dapat improve, configure, heal, dan upgrade dirinya sendiri. Dirancang untuk developer
          dan tim teknis yang butuh lebih dari sekadar chatbot: self-hosted, provider-agnostic, dan siap untuk workflow
          nyata.
        </p>

        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="https://smooth-ai.farisi55.workers.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-6 py-2.5 text-sm font-semibold text-brand-navy transition-all duration-200 hover:bg-brand-gold-light hover:-translate-y-0.5"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Buka Homepage smooth
          </a>
          <span className="w-fit rounded-xl border border-white/20 px-3 py-2.5 font-mono text-xs text-white/30">
            Self-Hosted
          </span>
        </div>

        
      </div>

      <div className="hidden items-stretch justify-center p-6 lg:flex">
        <div className="h-full w-full max-w-md overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
          <img
            src={smoothHeroImg}
            alt="smooth AI agent platform"
            className="w-auto max-w-full max-h-[420px] object-contain drop-shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </article>
  );
}
