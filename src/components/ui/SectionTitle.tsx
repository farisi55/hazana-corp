import { cn } from '../../lib/cn';
import { Badge } from './Badge';

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
};

export function SectionTitle({ eyebrow, title, subtitle, align = 'center', dark = false }: SectionTitleProps) {
  return (
    <div className={cn('mb-10', align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl text-left')}>
      {eyebrow ? (
        <Badge variant={dark ? 'outline' : 'light'} className="mb-4">
          {eyebrow}
        </Badge>
      ) : null}
      <h2 className={cn('text-3xl font-extrabold leading-tight sm:text-4xl', dark ? 'text-white' : 'text-brand-navy')}>
        {title}
      </h2>
      {subtitle ? (
        <p className={cn('mt-4 text-base leading-7 sm:text-lg', dark ? 'text-white/75' : 'text-brand-text-muted')}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
