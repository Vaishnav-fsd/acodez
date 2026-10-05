import { useRef, useState, memo } from 'react';
import { motion, useInView } from 'framer-motion';
import './WhyUs.css';

// ─── Icons ───────────────────────────────────────────────────────────────────

const LightbulbIcon = memo(() => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="#111" aria-hidden="true">
    <path d="M12 2a7 7 0 0 0-4 12.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26A7 7 0 0 0 12 2z"/>
    <path d="M8.5 19.5h7L12 23z"/>
    <circle cx="12" cy="8.5" r="3.2" fill="none" stroke="#f4512c" strokeWidth="1"/>
    <path d="M10.4 8.6l1.2 1.2 2.2-2.4" fill="none" stroke="#f4512c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));
LightbulbIcon.displayName = 'LightbulbIcon';

const UsersIcon = memo(() => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="#111" aria-hidden="true">
    <polygon points="12,1 13.2,3.5 16,3.9 14,5.8 14.5,8.6 12,7.3 9.5,8.6 10,5.8 8,3.9 10.8,3.5"/>
    <circle cx="12" cy="12.6" r="2.4"/>
    <path d="M7.6 22c0-3.2 1.9-5.2 4.4-5.2s4.4 2 4.4 5.2z"/>
    <circle cx="5.2" cy="13.6" r="2"/>
    <path d="M1 22c0-2.8 1.6-4.6 3.8-4.6.8 0 1.5.2 2 .6-.8 1-1.3 2.2-1.3 4z"/>
    <circle cx="18.8" cy="13.6" r="2"/>
    <path d="M23 22c0-2.8-1.6-4.6-3.8-4.6-.8 0-1.5.2-2 .6.8 1 1.3 2.2 1.3 4z"/>
  </svg>
));
UsersIcon.displayName = 'UsersIcon';

const SealCheckIcon = memo(() => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="#111" aria-hidden="true">
    <path d="M12 1.5l2.3 1.6 2.8-.2 1.2 2.5 2.5 1.2-.2 2.8L22 12l-1.6 2.3.2 2.8-2.5 1.2-1.2 2.5-2.8-.2L12 22.5l-2.3-1.6-2.8.2-1.2-2.5-2.5-1.2.2-2.8L2 12l1.6-2.3-.2-2.8 2.5-1.2 1.2-2.5 2.8.2z"/>
    <circle cx="12" cy="12" r="5" fill="none" stroke="#f4512c" strokeWidth="1"/>
    <path d="M9.6 12.2l1.7 1.7 3.1-3.4" fill="none" stroke="#f4512c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));
SealCheckIcon.displayName = 'SealCheckIcon';

// ─── Data ─────────────────────────────────────────────────────────────────────

const CARDS = [
  {
    id: 'engineer',
    Icon: LightbulbIcon,
    title: 'We Engineer Solutions.',
    body: 'Custom products designed around your exact requirements.',
  },
  {
    id: 'rubber',
    Icon: UsersIcon,
    title: 'We Know Rubber.',
    body: 'Material expertise backed by 20+ years of industry experience.',
  },
  {
    id: 'confidence',
    Icon: SealCheckIcon,
    title: 'We Deliver Confidence.',
    body: 'Quality, traceability and reliability at every stage.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const WhyUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="whyus" id="why-us" aria-label="Why choose VSRP">
      <div className="whyus__container" ref={ref}>

        {/* Header row */}
        <motion.div
          className="whyus__header"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <h2 className="whyus__heading">
            <span className="whyus__heading-line1">More Than A</span>
            <span className="whyus__heading-line2">Rubber Company.</span>
          </h2>

          <p className="whyus__desc">
            We're engineers, problem-solvers and manufacturing partners, helping
            businesses turn unique requirements into reliable, high-performance
            rubber solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          className="whyus__pillars"
          onMouseLeave={() => setActiveIdx(0)}
        >
          {CARDS.map(({ id, Icon, title, body }, idx) => (
            <motion.div
              key={id}
              className={`whyus__pillar${activeIdx === idx ? ' whyus__pillar--active' : ''}`}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.12 + 0.15 }}
              onMouseEnter={() => setActiveIdx(idx)}
            >
              <div className="whyus__pillar-icon" aria-hidden="true">
                <Icon />
              </div>

              <div className="whyus__pillar-bottom">
                <div className="whyus__pillar-divider" aria-hidden="true" />
                <h3 className="whyus__pillar-title">{title}</h3>
                <p className="whyus__pillar-body">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
