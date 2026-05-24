import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

type ButtonVariant = 'solid' | 'outline' | 'white';

const variants: Record<ButtonVariant, string> = {
  solid: 'bg-brand-gold text-brand-navy hover:bg-brand-gold-light',
  outline: 'border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy',
  white: 'border border-white text-white hover:bg-white hover:text-brand-navy',
};

type GoldButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  icon?: ReactNode;
};

export function GoldButton({ className, variant = 'solid', icon, children, ...props }: GoldButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold',
        variants[variant],
        className,
      )}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
