import { useCallback, useEffect, useRef, useState, type MouseEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion, useSpring } from 'framer-motion';

const diagramServices = [
  { id: 1, label: 'Pemasaran\nMedia Sosial', x: 220, y: 58 },
  { id: 2, label: 'Konsultan Brand', x: 372, y: 148 },
  { id: 3, label: 'Riset Pasar &\nPeriklanan', x: 372, y: 292 },
  { id: 4, label: 'Pemasaran Digital', x: 220, y: 382 },
  { id: 5, label: 'Konsultan\nBisnis & IT', x: 68, y: 292 },
  { id: 6, label: 'Training &\nHukum', x: 68, y: 148 },
];

const edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 0],
  [0, 3],
  [1, 4],
  [2, 5],
] as const;

export default function ServicesDiagram() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>();
  const shouldReduceMotion = useReducedMotion();

  const rotateX = useSpring(0, { stiffness: 100, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 100, damping: 20 });

  const handleMouseMove = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion) return;
      const { clientX, clientY } = event;

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = window.requestAnimationFrame(() => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (clientX - centerX) / (rect.width / 2);
        const deltaY = (clientY - centerY) / (rect.height / 2);

        rotateY.set(deltaX * 12);
        rotateX.set(-deltaY * 12);
      });
    },
    [rotateX, rotateY, shouldReduceMotion],
  );

  const handleMouseLeave = useCallback(() => {
    if (frameRef.current) {
      window.cancelAnimationFrame(frameRef.current);
    }

    rotateX.set(0);
    rotateY.set(0);
    setHoveredId(null);
  }, [rotateX, rotateY]);

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const hoveredService = diagramServices.find((service) => service.id === hoveredId);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-[460px] w-full items-center justify-center"
      style={{ perspective: shouldReduceMotion ? 'none' : '800px' }}
    >
      <motion.div
        style={{
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          transformStyle: 'preserve-3d',
          willChange: shouldReduceMotion ? 'auto' : 'transform',
        }}
        className="relative h-[440px] w-[440px]"
      >
        <svg viewBox="0 0 440 440" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <polygon
            points={diagramServices.map((service) => `${service.x},${service.y}`).join(' ')}
            fill="#C9A227"
            fillOpacity="0.08"
            stroke="#C9A227"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />

          {edges.map(([a, b]) => (
            <line
              key={`${a}-${b}`}
              x1={diagramServices[a].x}
              y1={diagramServices[a].y}
              x2={diagramServices[b].x}
              y2={diagramServices[b].y}
              stroke="#1B3A6B"
              strokeWidth="1.5"
              strokeOpacity="0.4"
            />
          ))}

          <circle cx="220" cy="220" r="22" fill="white" stroke="#1B3A6B" strokeWidth="2.5" />
          <line x1="208" y1="220" x2="232" y2="220" stroke="#1B3A6B" strokeWidth="2.5" />
          <line x1="220" y1="208" x2="220" y2="232" stroke="#1B3A6B" strokeWidth="2.5" />

          {diagramServices.map((service) => (
            <line
              key={`spoke-${service.id}`}
              x1="220"
              y1="220"
              x2={service.x}
              y2={service.y}
              stroke="#1B3A6B"
              strokeWidth="1"
              strokeOpacity="0.25"
              strokeDasharray="4 4"
            />
          ))}

          {diagramServices.map((service) => (
            <g key={service.id}>
              <circle
                cx={service.x}
                cy={service.y}
                r="20"
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={() => setHoveredId(service.id)}
                onFocus={() => setHoveredId(service.id)}
                tabIndex={0}
                aria-label={service.label.replace('\n', ' ')}
              />
              <circle
                cx={service.x}
                cy={service.y}
                r="14"
                fill="none"
                stroke={hoveredId === service.id ? '#C9A227' : 'transparent'}
                strokeWidth="2"
                style={{ transition: 'stroke 0.2s' }}
              />
              <circle
                cx={service.x}
                cy={service.y}
                r={hoveredId === service.id ? 10 : 8}
                fill={hoveredId === service.id ? '#C9A227' : '#1B3A6B'}
                style={{ transition: 'all 0.2s ease' }}
              />
            </g>
          ))}

          <line x1="20" y1="185" x2="45" y2="185" stroke="#C9A227" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
          <line x1="395" y1="255" x2="420" y2="255" stroke="#C9A227" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
          <line x1="300" y1="22" x2="320" y2="10" stroke="#C9A227" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          <line x1="300" y1="420" x2="320" y2="432" stroke="#C9A227" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        </svg>

        <AnimatePresence>
          {hoveredService ? (
            <div
              key={hoveredService.id}
              className="pointer-events-none absolute z-20"
              style={{
                left: `${(hoveredService.x / 440) * 100}%`,
                top: `${(hoveredService.y / 440) * 100}%`,
                transform: 'translate(-50%, -140%)',
                minWidth: '110px',
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 4 }}
                transition={{ duration: 0.15 }}
                className="relative whitespace-pre-line rounded-lg border border-brand-gold/30 bg-brand-navy px-3 py-2 text-center text-xs font-medium leading-snug text-white shadow-xl"
              >
                {hoveredService.label}
                <span
                  className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2"
                  style={{
                    borderLeft: '5px solid transparent',
                    borderRight: '5px solid transparent',
                    borderTop: '5px solid #1B3A6B',
                  }}
                />
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
