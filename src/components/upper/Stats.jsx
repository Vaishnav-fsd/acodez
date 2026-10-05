import { useEffect, useRef, useState, useCallback } from 'react';
import './Stats.css';

const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let rafId;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, start]);

  return count;
};

const StatItem = ({ value, suffix, label, started }) => {
  const num = useCountUp(value, 2200, started);
  return (
    <div className="stats__item">
      <div className="stats__number">
        {num.toLocaleString()}<span className="stats__suffix">{suffix}</span><span className="stats__plus">+</span>
      </div>
      <div className="stats__label">{label}</div>
    </div>
  );
};

const Stats = () => {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handleAboutClick = useCallback((e) => {
    e.preventDefault();
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="stats" id="track-record" ref={ref} aria-label="Company statistics">
      <div className="stats__container container">
        <div className="stats__left">
          <h2 className="stats__heading">
            Wherever Precision Is<br />
            Needed, <span className="stats__orange">VSRP Delivers.</span>
          </h2>

          <div className="stats__grid">
            <StatItem value={20}  suffix=""  label="Years of experience"    started={started} />
            <StatItem value={122} suffix="K" label="Ventilation tube joins" started={started} />
            <div className="stats__divider" />
            <div className="stats__divider" />
            <StatItem value={5}   suffix="M" label="Rubber seals supplied"  started={started} />
            <StatItem value={450} suffix="K" label="Traffic light seals"    started={started} />
          </div>
        </div>

        <div className="stats__right">
          <p className="stats__tagline">
            We're engineers, manufacturers and problem-solvers.
          </p>
          <p className="stats__body">
            Whether you need a custom seal, a specialised extrusion, a bonded
            rubber component or a completely new product, we'll work with you
            to find the right solution.
          </p>
          <p className="stats__body">
            We've been doing it for more than two decades, helping businesses
            across Australia keep projects moving.
          </p>
          <a
            href="#about"
            className="stats__btn-grey"
            id="stats-about-btn"
            onClick={handleAboutClick}
          >
            <span className="stats__btn-text">ABOUT VSRP</span>
            <span className="stats__btn-circle" aria-hidden="true">&#8594;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stats;
