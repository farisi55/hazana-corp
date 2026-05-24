export default function GlobeAnimation() {
  return (
    <div className="absolute right-[-60px] top-1/2 h-[520px] w-[520px] -translate-y-1/2 select-none pointer-events-none">
      <svg viewBox="0 0 440 440" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <defs>
          <clipPath id="globe-clip">
            <circle cx="220" cy="220" r="146" />
          </clipPath>

          <style>{`
            @keyframes lon-spin {
              0% { transform: scaleX(1); }
              25% { transform: scaleX(0.15); }
              50% { transform: scaleX(-1); }
              75% { transform: scaleX(-0.15); }
              100% { transform: scaleX(1); }
            }

            .lon {
              transform-box: fill-box;
              transform-origin: center;
              will-change: transform;
            }

            .lon-1 {
              animation: lon-spin 10s linear infinite;
              animation-delay: 0s;
            }

            .lon-2 {
              animation: lon-spin 10s linear infinite;
              animation-delay: -2.5s;
            }

            .lon-3 {
              animation: lon-spin 10s linear infinite;
              animation-delay: -5s;
            }

            .lon-4 {
              animation: lon-spin 10s linear infinite;
              animation-delay: -7.5s;
            }

            @media (prefers-reduced-motion: reduce) {
              .lon-1,
              .lon-2,
              .lon-3,
              .lon-4 {
                animation: none !important;
              }
            }
          `}</style>
        </defs>

        <circle cx="220" cy="220" r="210" stroke="#C9A227" strokeWidth="0.5" fill="none" opacity="0.20" />
        <circle cx="220" cy="220" r="190" stroke="#C9A227" strokeWidth="0.5" fill="none" opacity="0.14" />
        <circle cx="220" cy="220" r="168" stroke="white" strokeWidth="0.5" fill="none" opacity="0.10" />

        <g clipPath="url(#globe-clip)">
          <circle cx="220" cy="220" r="146" fill="#1B3A6B" fillOpacity="0.3" />

          <line x1="74" y1="220" x2="366" y2="220" stroke="white" strokeWidth="1.2" opacity="0.45" />
          <line x1="86" y1="152" x2="354" y2="152" stroke="white" strokeWidth="0.8" opacity="0.30" />
          <line x1="86" y1="288" x2="354" y2="288" stroke="white" strokeWidth="0.8" opacity="0.30" />
          <line x1="122" y1="97" x2="318" y2="97" stroke="white" strokeWidth="0.6" opacity="0.20" />
          <line x1="122" y1="343" x2="318" y2="343" stroke="white" strokeWidth="0.6" opacity="0.20" />

          <ellipse
            cx="220"
            cy="220"
            rx="30"
            ry="146"
            stroke="white"
            strokeWidth="1.2"
            fill="none"
            opacity="0.5"
            className="lon lon-1"
          />
          <ellipse
            cx="220"
            cy="220"
            rx="30"
            ry="146"
            stroke="white"
            strokeWidth="1.2"
            fill="none"
            opacity="0.5"
            className="lon lon-2"
          />
          <ellipse
            cx="220"
            cy="220"
            rx="30"
            ry="146"
            stroke="white"
            strokeWidth="1"
            fill="none"
            opacity="0.35"
            className="lon lon-3"
          />
          <ellipse
            cx="220"
            cy="220"
            rx="30"
            ry="146"
            stroke="white"
            strokeWidth="1"
            fill="none"
            opacity="0.35"
            className="lon lon-4"
          />
        </g>

        <circle cx="220" cy="220" r="146" stroke="white" strokeWidth="2.5" fill="none" opacity="0.55" />

        <path
          d="M 116 100 A 178 178 0 0 0 116 340"
          stroke="#C9A227"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
          opacity="0.90"
        />

        <circle cx="366" cy="220" r="5" fill="#C9A227" opacity="0.85" />
        <circle cx="366" cy="220" r="9" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.35" />
      </svg>
    </div>
  );
}
