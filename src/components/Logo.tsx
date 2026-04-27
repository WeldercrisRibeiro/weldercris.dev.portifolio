interface LogoProps {
  className?: string;
  size?: number;
  withGlow?: boolean;
}

export const Logo = ({ className = "", size = 40, withGlow = false }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={`${className} ${withGlow ? "animate-glow-pulse" : ""}`}
      aria-label="Weldercris logo"
      role="img"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="hsl(var(--brand-orange))" />
          <stop offset="1" stopColor="hsl(var(--brand-purple))" />
        </linearGradient>
      </defs>
      {/* W = stylized zigzag */}
      <path
        d="M16 22 L24 42 L32 26 L40 42 L48 22"
        stroke="url(#logo-grad)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* < > brackets */}
      <path
        d="M10 26 L6 32 L10 38"
        stroke="url(#logo-grad)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M54 26 L58 32 L54 38"
        stroke="url(#logo-grad)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );
};
