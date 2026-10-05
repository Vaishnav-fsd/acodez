import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="about" id="about" aria-label="About VSRP">
      <div className="about__bg" aria-hidden="true" />
      <div className="about__overlay" aria-hidden="true" />

      <div className="about__container container" ref={ref}>

        {/* Left column — heading */}
        <motion.div
          className="about__left"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="about__heading">
            <span className="about__line">VSRP are</span>
            <span className="about__line">furthering quality</span>
            <span className="about__line">
              in <span className="about__orange">our industries</span><span className="about__dot">.</span>
            </span>
          </h2>
        </motion.div>

        {/* Right column — paragraph + button */}
        <motion.div
          className="about__right"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="about__body">
            Across private, commercial and civil projects, our rubber products are
            custom-engineered to be reliable and cost-effective. We support the
            specific needs of specialised providers, plugging the gaps in their
            projects so they can continue to deliver at the highest level.
          </p>

          <a href="#contact" className="about__cta" id="about-contact-btn">
            <span className="about__cta-text">CONTACT US</span>
            <span className="about__cta-circle" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f0532d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
