import { useCallback } from 'react';
import './Hero.css';

const ArrowSVG = () => (
  <svg
    width="18" height="18" viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const ScrollSVG = () => (
  <svg
    width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M12 5v14M5 12l7 7 7-7" />
  </svg>
);

const Hero = () => {
  const scrollDown = useCallback(() => {
    const next = document.querySelector('#about');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
    else window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }, []);

  const scrollTo = useCallback((href) => (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="hero" id="home" aria-label="Hero">

      {/* Background video */}
      <video
        className="hero__bg"
        autoPlay
        loop
        muted
        playsInline
        poster="/hero_bg.png"
        aria-hidden="true"
      >
        <source src="/hero_bg.webm" type="video/webm" />
        <source src="/hero_bg.mp4"  type="video/mp4"  />
      </video>

      {/* Dark overlay */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Staircase grid */}
      <div className="hero__content">

        {/* Row 1 col 1 — left headline */}
        <h1 className="hero__heading hero__left--anim">
          Custom Rubber Solutions<span className="hero__dot">.</span>
        </h1>

        {/* Row 2 col 2 — right headline */}
        <h2 className="hero__subheading hero__right--anim">
          Engineered To Perform<span className="hero__dot">.</span>
        </h2>

        {/* Row 3 col 1 — paragraph */}
        <p className="hero__body hero__left--anim">
          For more than 20 years, we've helped Australian businesses solve
          problems with engineered rubber solutions. From design and tooling to
          manufacturing and delivery, we make what you need, when you need it.
        </p>

        {/* Row 3 col 2 — buttons */}
        <div className="hero__actions hero__right--anim">
          <a
            href="#contact"
            className="hero__btn-primary"
            id="hero-discuss-btn"
            onClick={scrollTo('#contact')}
          >
            <span className="hero__btn-label">DISCUSS YOUR PROJECT</span>
            <span className="hero__btn-circle">
              <ArrowSVG />
            </span>
          </a>

          <a
            href="#about"
            className="hero__btn-ghost"
            id="hero-see-btn"
            onClick={scrollTo('#about')}
          >
            <span className="hero__btn-ghost-text">SEE WHAT WE DO</span>
            <span className="hero__btn-arrow" aria-hidden="true">
              <ArrowSVG />
            </span>
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll hero__scroll--anim">
        <button
          className="hero__scroll-circle"
          onClick={scrollDown}
          aria-label="Scroll down"
        >
          <ScrollSVG />
        </button>
        <span className="hero__scroll-label">SCROLL DOWN</span>
      </div>

    </section>
  );
};

export default Hero;
