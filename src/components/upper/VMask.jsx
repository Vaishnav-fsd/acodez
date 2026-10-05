import rubber from '../../assets/rubber-components.jpg';

export default function VMask({ className }) {
  return (
    <svg className={className} viewBox="340 80 710 560" role="img" aria-label="V mark">
      <defs>
        <clipPath id="vShape">
          <path d="M357,235 C378,233 398,236 410,244 L508,398 Q516,410 546,408 L437,236 C460,233 480,237 490,246 L610,406 Q618,414 640,414 L515,236 C535,233 552,238 562,248 L660,412 L652,432 L632,476 L845,95 L1035,95 L768,578 C750,610 725,626 685,628 C640,630 600,612 575,572 Z" />
        </clipPath>
        <linearGradient id="vGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.45" />
        </linearGradient>
      </defs>
      <g clipPath="url(#vShape)">
        <image href={rubber} x="340" y="80" width="710" height="560" preserveAspectRatio="xMidYMid slice" />
        <rect x="340" y="80" width="710" height="560" fill="url(#vGrad)" />
      </g>
    </svg>
  );
}
