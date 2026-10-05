import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import './ProductsBanner.css';

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

const ProductsBanner = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section className="products-banner" id="products" ref={ref} aria-label="Product categories">
      <motion.div className="products-banner__bg" style={{ y: bgY }} aria-hidden="true" />
      <div className="products-banner__overlay" aria-hidden="true" />

      <div className="products-banner__content">
        <motion.h2
          className="products-banner__heading"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Whatever You Need in Rubber, We Can{' '}
          <span className="products-banner__accent">Shape It.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <a href="#products-list" className="products-banner__btn" id="products-banner-cta">
            <span className="products-banner__btn-text">SEE PRODUCT CATEGORIES</span>
            <span className="products-banner__btn-circle">
              <ArrowSVG />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsBanner;
