import { useEffect, useState } from "react";
import "./Process.css";

const steps = [
  {
    title: "Tell Us What You Need",
    text: "Send us a drawing, sample or specification.",
    image: "/images/process-illustration.png",
  },
  {
    title: "We'll Engineer The Solution",
    text: "Materials, tooling and manufacturing approach.",
    image: "/images/process-illustration2.png",
  },
  {
    title: "We'll Make It",
    text: "Materials, tooling and manufacturing approach.",
    image: "/images/process-illustration3.png",
  },
  {
    title: "We'll Deliver It",
    text: "Materials, tooling and manufacturing approach.",
    image: "/images/process-illustration4.png",
  },
];

export default function Process() {
  const [active, setActive] = useState(0);

  // auto-advance every 4s; the timer restarts whenever a step is clicked
  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % steps.length),
      4000
    );
    return () => clearInterval(id);
  }, [active]);

  return (
    <section className="process">
      <div className="process__head">
        <h2>
          From Concept to Delivery,
          <br />
          We Make it <span>Happen</span>
        </h2>
        <p>
          A proven process built around collaboration, precision and a
          commitment to quality at every step.
        </p>
      </div>

      <div className="process__body">
        <ol className="process__steps">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className={`process__step ${i === active ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="process__num">0{i + 1}</span>
              <div className="process__content">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="process__visual">
          {steps.map((s, i) => (
            <img
              key={s.image}
              src={s.image}
              alt={s.title}
              className={i === active ? "is-active" : ""}
            />
          ))}
        </div>
      </div>

      <a href="#products" className="process__scroll">
        <span className="process__scroll-icon">
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
        SCROLL DOWN
      </a>
    </section>
  );
}