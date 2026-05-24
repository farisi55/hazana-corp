import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { businessUnits } from '../../data/business-units';
import { cn } from '../../lib/cn';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';

export function BusinessUnits() {
  return (
    <section id="unit-bisnis" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Ekosistem"
          title="Unit Bisnis Kami"
          subtitle="Ekosistem bisnis terintegrasi yang saling mendukung"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businessUnits.map((unit, index) => (
            <motion.article
              key={unit.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <Card className="group h-full border-l-4 border-l-transparent hover:-translate-y-1 hover:border-l-brand-gold hover:shadow-navy">
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={cn(
                      'flex h-16 w-16 items-center justify-center rounded-lg',
                      unit.color === 'gold' ? 'bg-brand-gold-pale' : 'bg-brand-navy/10',
                    )}
                  >
                    <img src={unit.icon} alt={`Ikon ${unit.name}`} className="h-12 w-12" width="48" height="48" loading="lazy" />
                  </div>
                  {unit.featured ? <Badge variant="navy">Featured</Badge> : null}
                  {unit.comingSoon ? <Badge variant="light">Coming Soon</Badge> : null}
                </div>
                <h3 className="mt-6 text-xl font-black text-brand-navy">{unit.name}</h3>
                <p className="mt-2 text-sm font-semibold text-brand-gold">{unit.tagline}</p>
                <p className="mt-4 leading-7 text-brand-text-muted">{unit.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-navy transition group-hover:text-brand-gold">
                  Pelajari unit
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
