// Hand-drawn graffiti doodles — rough strokes, ink on cream
export function Scribble({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 16" fill="none" className={className} aria-hidden>
      <path
        d="M3 11 C 25 3, 45 15, 68 8 S 115 13, 137 6"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M8 13 C 30 7, 55 14, 80 9 S 120 12, 134 9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function CircleScribble({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 110" fill="none" className={className} aria-hidden>
      <path
        d="M110 8 C 45 4, 8 28, 10 55 C 12 84, 62 104, 118 102 C 176 100, 212 78, 210 50 C 208 24, 160 6, 100 10"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M112 16 C 58 12, 22 32, 24 56 C 26 80, 66 96, 116 94 C 168 92, 198 72, 196 50 C 194 30, 154 14, 104 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function ArrowDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 90" fill="none" className={className} aria-hidden>
      <path
        d="M14 12 C 40 18, 60 34, 66 62"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M52 56 L 67 70 L 74 50"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Starburst({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="currentColor" className={className} aria-hidden>
      <path d="M30 2 L36 20 L54 14 L42 30 L58 40 L38 40 L40 58 L30 44 L18 58 L22 40 L2 38 L18 30 L6 14 L24 20 Z" />
    </svg>
  );
}

export function Asterisk({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden>
      <path d="M30 8 L30 52 M10 19 L50 41 M50 19 L10 41" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

// rotating stamp badge — circular text
export function StampBadge({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden>
      <defs>
        <path id="stampCircle" d="M80,80 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0" />
      </defs>
      <circle cx="80" cy="80" r="76" fill="var(--color-yellow)" stroke="var(--color-ink)" strokeWidth="4" />
      <circle cx="80" cy="80" r="44" fill="none" stroke="var(--color-ink)" strokeWidth="3" strokeDasharray="6 6" />
      <text fontSize="15.5" fontWeight="700" letterSpacing="2.5" fill="var(--color-ink)">
        <textPath href="#stampCircle">★ CODENITI ★ REAL PROJECTS ★ NO TEMPLATES</textPath>
      </text>
      <text x="80" y="89" textAnchor="middle" fontSize="26" fontWeight="700" fill="var(--color-ink)">EST.</text>
      <text x="80" y="112" textAnchor="middle" fontSize="17" fontWeight="700" fill="var(--color-red)">2021</text>
    </svg>
  );
}
