import { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import "./Navbar.css";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Industries", href: "#industries", caret: true },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "Insights", href: "#insights" },
];

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock page scroll while the mobile menu is open, close it with Escape
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="navbar" role="navigation" aria-label="Main navigation">
      <a href="#home" className="navbar__logo" aria-label="VSRP Home">
        <img
          src={logo}
          alt="VSRP Engineered Rubber"
          className="navbar__logo-img"
          width="197"
          height="59"
        />
      </a>

      {/* desktop: links + contact button in one group */}
      <div className="navbar__right">
        <ul className="navbar__links">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="navbar__link">
                {l.label}
                {l.caret && <span className="navbar__caret" aria-hidden="true" />}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="navbar__cta">
          <span className="navbar__cta-text">Contact</span>
          <span className="navbar__cta-circle">
            <ArrowIcon />
          </span>
        </a>
      </div>

      {/* mobile: hamburger */}
      <button
        className="navbar__burger"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      {/* mobile menu overlay */}
      <div className={`navbar__mobile${open ? " is-open" : ""}`} aria-hidden={!open}>
        <button className="navbar__close" onClick={close} aria-label="Close menu">
          ×
        </button>
        <ul>
          {LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={close}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="navbar__cta navbar__cta--mobile" onClick={close}>
          <span className="navbar__cta-text">Contact</span>
          <span className="navbar__cta-circle">
            <ArrowIcon />
          </span>
        </a>
      </div>
    </header>
  );
}