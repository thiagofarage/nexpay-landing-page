export default function BrandAtmosphere() {
  return (
    <div className="brand-atmosphere" aria-hidden="true">
      <svg viewBox="0 0 1440 960" preserveAspectRatio="xMidYMid slice" focusable="false">
        <defs>
          <linearGradient id="brand-metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#111414" />
            <stop offset=".43" stopColor="#252929" />
            <stop offset=".51" stopColor="#5b6060" />
            <stop offset=".54" stopColor="#343939" />
            <stop offset="1" stopColor="#0a0c0c" />
          </linearGradient>
          <linearGradient id="brand-edge" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#b9c1bd" stopOpacity=".34" />
            <stop offset="1" stopColor="#b9c1bd" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g fill="url(#brand-metal)" stroke="url(#brand-edge)" strokeWidth=".07">
          <g transform="translate(1110 -280) rotate(16 30 26) scale(11)">
            <path d="M0 0h20v20H0z M34 0h26v20H45L26 52H0V32h15z M40 32h20v20H40z" />
          </g>
          <g transform="translate(-460 700) rotate(-16) scale(11)">
            <path d="M0 0h20v20H0z M34 0h26v20H45L26 52H0V32h15z M40 32h20v20H40z" />
          </g>
        </g>
      </svg>
    </div>
  );
}
