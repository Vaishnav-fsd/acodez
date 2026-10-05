import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import VMask from './VMask';
import './BuildSection.css';

const BuildSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const scrollDown = () => {
    const next = document.querySelector('#products') || document.querySelector('#about');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
    else window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="build" id="capabilities" aria-label="What can we help you build">
      <div className="build__container container" ref={ref}>

        {/* Header */}
        <motion.div
          className="build__header"
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="build__heading">
            What Can We Help You <span className="text-red">Build?</span>
          </h2>
          <p className="build__subtext">
            We work with you to design, engineer and manufacture rubber solutions that meet your exact requirements.
          </p>
        </motion.div>

        {/* V-mask */}
        <motion.div
          className="build__v-wrap"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <VMask className="build__vmask" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="build__scroll"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button
            className="build__scroll-circle"
            onClick={scrollDown}
            aria-label="Scroll down"
          >
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <span className="build__scroll-label">SCROLL DOWN</span>
        </motion.div>

      </div>
    </section>
  );
};

export default BuildSection;
