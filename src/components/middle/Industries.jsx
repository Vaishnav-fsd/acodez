import { useState, useRef, useLayoutEffect, useCallback } from 'react';
import { industries } from '../../data/industries';
import './Industries.css';

// Bottom tab bar (order as in the design)
const TABS = ['Civil', 'Mining', 'Agriculture', 'Building', 'Transport & Infrastructure'];

const ArrowSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const START_INDEX = Math.max(0, industries.findIndex((i) => i.id === 'mining'));

const Industries = () => {
  const [activeIdx, setActiveIdx] = useState(START_INDEX);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const tabRefs = useRef({});
  const tabsRef = useRef(null);

  const total = industries.length;
  const prevIdx = (activeIdx - 1 + total) % total;
  const nextIdx = (activeIdx + 1) % total;
  const active = industries[activeIdx];

  // the highlighted tab always follows the active industry (null = no tab, e.g. Defence)
  const activeTab = active.tab;

  const measure = useCallback(() => {
    const el = activeTab ? tabRefs.current[activeTab] : null;
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  }, [activeTab]);

  useLayoutEffect(() => {
    measure();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    if (typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(measure);
    if (tabsRef.current) ro.observe(tabsRef.current);
    Object.values(tabRefs.current).forEach((el) => el && ro.observe(el));
    return () => ro.disconnect();
  }, [measure]);

  // clicking a tab selects the industry that uses it
  const selectTab = (tab) => {
    const idx = industries.findIndex((i) => i.tab === tab);
    if (idx >= 0) setActiveIdx(idx);
  };

  return (
    <section className="industries" id="industries" aria-label="Industries we serve">
      <div className="industries__inner">

        <h2 className="industries__heading">
          Rubber Solutions Built For{' '}
          <span className="industries__heading-accent">Industry.</span>
        </h2>

        <p className="industries__subtext">
          From infrastructure and mining to agriculture and transport, we help businesses
          solve complex challenges with engineered rubber solutions.
        </p>

        <div className="industries__cards">

          {/* LEFT — dark card */}
          <div className="industries__dark-card">
            <p className="industries__dark-label">OUR INDUSTRIES</p>

            <div className="industries__slide-list" aria-live="polite">
              <button
                className="industries__slide-item industries__slide-item--dim"
                onClick={() => setActiveIdx(prevIdx)}
                aria-label={`Go to ${industries[prevIdx].label}`}
              >
                {industries[prevIdx].label}
              </button>

              <div
                key={active.id}
                className="industries__slide-item industries__slide-item--active"
                aria-current="true"
              >
                {active.label}
              </div>

              <button
                className="industries__slide-item industries__slide-item--dim"
                onClick={() => setActiveIdx(nextIdx)}
                aria-label={`Go to ${industries[nextIdx].label}`}
              >
                {industries[nextIdx].label}
              </button>
            </div>

            <div className="industries__tab-bar">
              <nav className="industries__tabs" ref={tabsRef} aria-label="Industry categories">
                <span
                  className={`industries__tab-indicator${activeTab ? '' : ' is-hidden'}`}
                  style={{ left: indicator.left, width: indicator.width }}
                  aria-hidden="true"
                />
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    ref={(el) => { tabRefs.current[tab] = el; }}
                    className={`industries__tab${activeTab === tab ? ' industries__tab--active' : ''}`}
                    onClick={() => selectTab(tab)}
                    aria-current={activeTab === tab ? 'true' : 'false'}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* RIGHT — photo card (the badge is already part of each photo) */}
          <div className="industries__photo-card">
            {industries.map((ind, i) => (
              <div
                key={ind.id}
                className={`industries__photo-pair ${ind.bw ? 'has-bw' : 'no-bw'}${i === activeIdx ? ' is-active' : ''}`}
              >
                <img
                  className="industries__photo industries__photo--color"
                  src={ind.color}
                  alt={ind.label}
                  decoding="async"
                />
                {ind.bw && (
                  <img
                    className="industries__photo industries__photo--bw"
                    src={ind.bw}
                    alt=""
                    aria-hidden="true"
                    decoding="async"
                  />
                )}
              </div>
            ))}

            <a href="#contact" className="industries__photo-cta" id="industries-capabilities-btn">
              <span className="industries__photo-cta-text">SEE OUR CAPABILITIES</span>
              <span className="industries__photo-cta-circle"><ArrowSVG /></span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Industries;