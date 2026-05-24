import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-lg border border-brand-gray-soft bg-white p-6 shadow-sm transition-all duration-300',
        className,
      )}
      {...props}
    />
  );
}
