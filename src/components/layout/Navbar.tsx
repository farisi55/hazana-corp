import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImg from '../../assets/images/logo.png';
import { cn } from '../../lib/cn';
import { GoldButton } from '../ui/GoldButton';

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#tentang-kami' },
  { label: 'Unit Bisnis', href: '#unit-bisnis' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Produk', href: '#produk' },
  { label: 'Kontak', href: '#kontak' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-[72px] bg-brand-navy transition-shadow duration-300',
        isScrolled && 'shadow-lg',
      )}
    >
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Navigasi utama">
        <a href="#beranda" className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold">
          <img
            src={logoImg}
            alt="Hazana Corp"
            className="h-10 w-10 rounded-xl border border-brand-gold/20 object-contain shadow-sm"
            width="40"
            height="40"
            loading="eager"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
          <span className="hidden text-base font-bold tracking-wide text-white sm:block">
            HAZANA <span className="text-brand-gold">CORP</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/80 transition-colors hover:text-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <GoldButton href="#kontak" className="min-h-10 px-4 py-2">
            Hubungi Kami
          </GoldButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white transition hover:border-brand-gold hover:text-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold lg:hidden"
          aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="border-t border-white/10 bg-brand-navy px-4 py-5 shadow-lg lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <GoldButton href="#kontak" className="mt-2" onClick={() => setIsOpen(false)}>
              Hubungi Kami
            </GoldButton>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
