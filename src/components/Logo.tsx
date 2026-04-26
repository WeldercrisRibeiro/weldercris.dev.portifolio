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
      {/* W = two V's */}
      <path
        d="M10 18 L20 46 L26 32 L32 46 L38 32 L44 46 L54 18"
        stroke="url(#logo-grad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* </> brackets */}
      <path
        d="M8 24 L4 32 L8 40"
        stroke="url(#logo-grad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />
      <path
        d="M56 24 L60 32 L56 40"
        stroke="url(#logo-grad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />
    </svg>
  );
};
