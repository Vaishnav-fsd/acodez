import "./Footer.css";

const company = [
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#projects" },
  { label: "Blogs", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

const industries = [
  "Agriculture & Irrigation",
  "Plumbing",
  "Civil Engineering and Construction",
  "Mining",
  "Defence",
  "Architectural Industry",
  "Road Transport",
];

const socials = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.88v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      {/* big faint V watermark */}
      <svg
        className="footer__watermark"
        viewBox="0 0 900 700"
        preserveAspectRatio="xMinYMin slice"
        aria-hidden="true"
      >
        <polygon points="0,200 120,200 420,700 300,700" fill="#fff" fillOpacity="0.025" />
        <polygon points="560,0 700,0 420,520 330,380" fill="#fff" fillOpacity="0.03" />
        <polygon points="700,0 930,0 600,560 520,420" fill="#fff" fillOpacity="0.02" />
      </svg>

      <div className="footer__inner">
        {/* left column */}
        <div className="footer__brand">
          <img
            className="footer__logo"
            src="/images/footer-logo.png"
            alt="VSRP Engineered Rubber"
          />

          <p className="footer__about">
            For over 20 years, VSRP has delivered engineered rubber solutions
            built around the unique requirements of Australian businesses.
          </p>

          <ul className="footer__socials">
            {socials.map((s) => (
              <li key={s.name}>
                <a href={s.href} aria-label={s.name}>
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>

          <div className="footer__iso">
            <img src="/images/iso-badge.png" alt="ISO 9001 certified" />
            <span>ISO9001:2015 Accredited</span>
          </div>
        </div>

        {/* right: 2 x 2 link grid */}
        <div className="footer__cols">
          <div className="footer__col">
            <h4>COMPANY</h4>
            <ul>
              {company.map((c) => (
                <li key={c.label}>
                  <a href={c.href}>{c.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>INDUSTRIES</h4>
            <ul>
              {industries.map((i) => (
                <li key={i}>
                  <a href="#industries">{i}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col footer__col--bottom">
            <h4>CONTACT</h4>
            <p>1800 787 777, +61 (2) 8834 9958</p>
            <p>enquiries@vsrp.com.au</p>
          </div>

          <div className="footer__col footer__col--bottom">
            <h4>LOCATION</h4>
            <p>
              Unit 3, 10 Banksia Place,
              <br />
              South Windsor NSW 2756
            </p>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="footer__bar">
        <div className="footer__bar-inner">
          <span>COPYRIGHT © 2026 VSRP</span>
          <a href="https://acodez.in" target="_blank" rel="noreferrer">
            SITE BY ACODEZ
          </a>
          <span className="footer__legal">
            <a href="#">PRIVACY POLICY</a>
            <i />
            <span>ALL RIGHTS RESERVED</span>
          </span>
        </div>
      </div>
    </footer>
  );
}