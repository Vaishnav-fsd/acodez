import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    q: "What type of rubber should I use?",
    a: "At VSRP, we know rubber. Across any application, our experts are well equipped to advise on the best make and material for your rubber products. If you need reliable performance, we can show you exactly how to get it. All you need to do is give us a call.",
  },
  {
    q: "What is the hardness scale for rubber?",
    a: "Rubber hardness is measured on the Shore A scale, from very soft (around 20) to very hard (around 90). Harder compounds suit heavy-duty wear, while softer ones give better sealing and flexibility.",
  },
  {
    q: "What are minimum order quantities?",
    a: "Minimum order quantities depend on the product, compound and tooling required. Get in touch with your requirements and we'll confirm the best option for your volumes.",
  },
  {
    q: "How can I get a quote?",
    a: "Send us a drawing, sample or specification through our contact form or give us a call. Our team will review it and come back to you with a detailed quote.",
  },
  {
    q: "Which materials types do VSRP offer?",
    a: "We work with a wide range of elastomers including NR, NBR, EPDM, CR, VMQ, FKM, PU and SBR, selected to match your temperature, chemical and load requirements.",
  },
  {
    q: "Can VSRP source products & materials?",
    a: "Yes. Alongside manufacturing, we can source rubber products and materials to your specification and deliver them to your schedule.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq" id="faq">
      {/* decorative slanted shapes */}
      <svg
        className="faq__deco"
        viewBox="0 0 410 250"
        aria-hidden="true"
        preserveAspectRatio="xMinYMax meet"
      >
        <polygon points="0,14 10,14 130,170 130,250 0,250" fill="#f1f3f6" />
        <polygon points="8,0 56,0 182,176 134,176" fill="#fad5cc" />
        <polygon points="128,70 160,70 280,250 248,250" fill="#f1f3f6" />
        <polygon points="164,70 288,70 410,250 284,250" fill="#f1f3f6" />
      </svg>

      <div className="faq__inner">
        <div className="faq__left">
          <h2>
            Frequently Asked
            <br />
            <span>Questions</span>
          </h2>
          <p>
            We've heard it all. Here's everything you need to know before
            working with us.
          </p>

          <a href="#contact" className="faq__btn">
            ASK A QUESTION
            <span className="faq__btn-icon">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="12" x2="20" y2="12" />
                <polyline points="14 6 20 12 14 18" />
              </svg>
            </span>
          </a>
        </div>

        <ul className="faq__list">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className={`faq__item ${isOpen ? "is-open" : ""}`}>
                <button
                  className="faq__q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq__icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line className="faq__plus-v" x1="12" y1="5" x2="12" y2="19" />
                    </svg>
                  </span>
                </button>

                <div className="faq__a">
                  <p>{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}