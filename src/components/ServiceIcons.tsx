/*
 * Custom duotone service icons, drawn to echo the layered-stroke language
 * of the Media Wind wave mark. Main strokes inherit the row's text colour
 * (navy → white on hover); accent strokes swap blue-mid → sky-light.
 * Each icon carries a small hover choreography via group-hover transforms.
 */

const main = "text-navy transition-colors duration-500 group-hover:text-white";
const accent =
  "text-blue-mid transition-colors duration-500 group-hover:text-sky-light";

const stroke = {
  fill: "none",
  strokeWidth: 2.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  stroke: "currentColor",
};

export function AppDevIcon({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      {/* phone */}
      <g className={main}>
        <rect x="9" y="5" width="19" height="38" rx="4" {...stroke} />
        <path d="M16 9.5h5" {...stroke} />
      </g>
      {/* floating browser with code — lifts on hover */}
      <g className={`${accent} transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1`}>
        <rect x="24" y="17" width="19" height="15" rx="3" {...stroke} className="fill-white/0" />
        <path d="M24 22h19" {...stroke} strokeWidth={2.2} />
        <path d="M30 25.5l-2.5 2.5 2.5 2.5M37 25.5l2.5 2.5-2.5 2.5" {...stroke} strokeWidth={2.2} />
      </g>
    </svg>
  );
}

export function SaasEcomIcon({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      {/* cloud */}
      <g className={main}>
        <path
          d="M14 22a8 8 0 0 1 15.6-2.6A6.5 6.5 0 0 1 36 32H15a6 6 0 0 1-1-10z"
          {...stroke}
        />
      </g>
      {/* shopping bag — bounces on hover */}
      <g className={`${accent} transition-transform duration-500 ease-out group-hover:-translate-y-1.5`}>
        <path d="M18.5 37.5h11l-1-9h-9z" {...stroke} strokeWidth={2.4} />
        <path d="M21.5 31v-1.5a2.5 2.5 0 0 1 5 0V31" {...stroke} strokeWidth={2.2} />
      </g>
      {/* spark */}
      <g className={`${accent} transition-transform duration-500 group-hover:scale-125 origin-[38px_12px]`}>
        <path d="M38 9.5v5M35.5 12h5" {...stroke} strokeWidth={2.2} />
      </g>
    </svg>
  );
}

export function CloudBackendIcon({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      {/* cloud */}
      <g className={accent}>
        <path d="M17 14a6.5 6.5 0 0 1 12.7-1.8A5 5 0 0 1 33 21.5H17.5A4.5 4.5 0 0 1 17 14z" {...stroke} strokeWidth={2.4} />
      </g>
      {/* data link — pulses on hover */}
      <g className={main}>
        <path
          d="M24 22v6"
          {...stroke}
          strokeWidth={2.4}
          strokeDasharray="3 3.5"
          className="icon-flow"
        />
      </g>
      {/* server stack */}
      <g className={main}>
        <rect x="11" y="28" width="26" height="7.5" rx="2.5" {...stroke} />
        <rect x="11" y="37" width="26" height="7.5" rx="2.5" {...stroke} />
        <path d="M16 31.75h.01M16 40.75h.01" {...stroke} strokeWidth={3.4} />
        <path d="M27 31.75h5M27 40.75h5" {...stroke} strokeWidth={2.2} className={accent} />
      </g>
    </svg>
  );
}

export function UserCenteredIcon({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      {/* focus reticle — breathes outward on hover */}
      <g className={`${accent} transition-transform duration-500 ease-out group-hover:scale-110 origin-center`}>
        <path d="M9 16v-4a3 3 0 0 1 3-3h4M32 9h4a3 3 0 0 1 3 3v4M39 32v4a3 3 0 0 1-3 3h-4M16 39h-4a3 3 0 0 1-3-3v-4" {...stroke} strokeWidth={2.4} />
      </g>
      {/* person at the centre */}
      <g className={main}>
        <circle cx="24" cy="20.5" r="5" {...stroke} />
        <path d="M15.5 34a8.5 8.5 0 0 1 17 0" {...stroke} />
      </g>
    </svg>
  );
}
