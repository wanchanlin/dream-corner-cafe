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
