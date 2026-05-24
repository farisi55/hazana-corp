import { useEffect, useState } from 'react';
import { Building2, ImageIcon, Smartphone } from 'lucide-react';
import { cn } from '../../lib/cn';

type FallbackType = 'logo' | 'product' | 'hero' | 'generic';

type ImageWithFallbackProps = {
  src?: string;
  alt: string;
  className?: string;
  fallbackType?: FallbackType;
  width?: number;
  height?: number;
  loading?: 'eager' | 'lazy';
};

export function ImageWithFallback({
  src,
  alt,
  className,
  fallbackType = 'generic',
  width,
  height,
  loading = 'lazy',
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (!src || hasError) {
    return <FallbackPlaceholder type={fallbackType} className={className} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      onError={() => setHasError(true)}
    />
  );
}

function FallbackPlaceholder({ type, className }: { type: FallbackType; className?: string }) {
  if (type === 'logo') {
    return (
      <span className={cn('inline-flex items-center text-lg font-black tracking-wide text-brand-gold', className)}>
        HAZANA CORP
      </span>
    );
  }

  if (type === 'product') {
    return (
      <div
        className={cn(
          'flex min-h-[420px] w-full items-center justify-center rounded-lg bg-brand-gold-pale p-8 text-brand-navy',
          className,
        )}
        role="img"
        aria-label="Mockup aplikasi Catat Emas belum tersedia"
      >
        <div className="relative h-[360px] w-[190px] rounded-[2rem] border-8 border-brand-navy bg-white shadow-gold">
          <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-brand-gray-soft" />
          <div className="px-5 pt-10 text-center">
            <Smartphone className="mx-auto h-12 w-12 text-brand-gold" aria-hidden="true" />
            <p className="mt-5 text-xl font-black">Catat Emas</p>
            <p className="mt-3 text-sm leading-6 text-brand-text-muted">Mockup aplikasi akan tampil setelah gambar diunggah.</p>
          </div>
        </div>
      </div>
    );
  }

  const Icon = type === 'hero' ? Building2 : ImageIcon;

  return (
    <div
      className={cn(
        'flex min-h-48 items-center justify-center rounded-lg border border-dashed border-brand-gold/50 bg-brand-gold-pale text-brand-navy',
        className,
      )}
      role="img"
      aria-label="Gambar belum tersedia"
    >
      <Icon className="h-10 w-10 text-brand-gold" aria-hidden="true" />
    </div>
  );
}
