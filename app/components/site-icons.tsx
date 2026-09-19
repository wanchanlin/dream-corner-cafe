type IconProps = {
  className?: string;
};

export function PalmMark({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="32" cy="12" r="7" fill="currentColor" opacity="0.55" />
      <path
        d="M31 20v24M31 36c-5 8-12 10-22 10M31 35c5 8 12 10 22 10M31 28c-6-7-13-8-20-7M31 28c6-7 13-8 20-7"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M18 48c8 3 20 3 28 0"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WaveLine({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 120 12"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2 6c8-5 16-5 24 0s16 5 24 0 16-5 24 0 16 5 24 0 16-5 20 0"
        stroke="currentColor"
        strokeWidth="1.8"
        className="text-sage"
      />
    </svg>
  );
}

export function CupIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M10 19h18v7a9 9 0 0 1-9 9 9 9 0 0 1-9-9v-7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 21h4a5 5 0 0 1 0 10h-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 38h24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CroissantIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 31c3-10 9-15 12-15s9 5 12 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 31c2 4 6 6 12 6s10-2 12-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17 23c1 4 4 8 7 10M31 23c-1 4-4 8-7 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SunIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="M24 7v6M24 35v6M41 24h-6M13 24H7M35.5 12.5 31 17M17 31l-4.5 4.5M35.5 35.5 31 31M17 17l-4.5-4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChairIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M17 13h10a4 4 0 0 1 4 4v9H13v-9a4 4 0 0 1 4-4ZM13 26h18v4H13zM16 30v8M28 30v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LeafIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M14 32c8-1 15-8 18-19 3 13-1 24-10 28M17 18c5 4 8 10 9 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CornerSketchIllustration({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 260 220"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M22 184c28-10 61-15 100-15 45 0 82 6 116 18"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 10"
        opacity="0.55"
      />
      <path
        d="M74 118c0-24 17-41 42-41s42 17 42 41v11c0 25-17 43-42 43s-42-18-42-43v-11Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M158 103h17c14 0 22 8 22 21s-8 22-22 22h-16"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M64 189c14-7 31-11 51-11 22 0 40 4 57 11"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M100 56c-8-8-9-18-4-30M126 50c0-12 4-21 12-30M149 57c5-11 13-18 24-22"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M53 66c7-10 18-13 31-10-5 9-13 16-24 20"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55 68c11 5 18 13 21 24"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M186 72c13-4 25-1 35 9-9 6-20 9-33 8"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M188 73c9 7 14 15 15 26"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M216 35c10 0 18 8 18 18"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M226 22v8M226 58v8M244 40h-8M216 40h-8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M35 133c5-6 12-9 21-9M42 152c7-2 13-2 19 0"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M203 149c5-5 12-8 19-8M205 167c8-1 14 0 19 4"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M86 120c8 4 18 6 29 6 13 0 24-2 33-6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
      <ellipse
        cx="116"
        cy="203"
        rx="44"
        ry="8"
        fill="currentColor"
        opacity="0.08"
      />
    </svg>
  );
}
