import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

type BadgeVariant = 'gold' | 'navy' | 'light' | 'outline';

const variants: Record<BadgeVariant, string> = {
  gold: 'bg-brand-gold text-brand-navy',
  navy: 'bg-brand-navy text-white',
  light: 'bg-brand-gold-pale text-brand-navy',
  outline: 'border border-brand-gold/60 text-brand-gold bg-transparent',
};

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

export function Badge({ className, variant = 'gold', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide',
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
