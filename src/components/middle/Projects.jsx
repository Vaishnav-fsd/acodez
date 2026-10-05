import { useRef } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Custom Extrusion Solution",
    text: "A specialised rubber extrusion profile engineered to meet strict performance and dimensional requirements.",
    image: "/images/project1.jpeg",
    tags: ["Mining", "EPDM", "Extrusion", "Conveyor System"],
  },
  {
    title: "Custom Extrusion Solution",
    text: "A specialised rubber extrusion profile engineered to meet strict performance and dimensional requirements.",
    image: "/images/project2.jpeg",
    tags: ["Mining", "EPDM", "Extrusion", "Conveyor System"],
  },
  {
    title: "Custom Extrusion Solution",
    text: "A specialised rubber extrusion profile engineered to meet strict performance and dimensional requirements.",
    image: "/images/project3.jpeg",
    tags: ["Mining", "EPDM", "Extrusion", "Conveyor System"],
  },
];

export default function Projects() {
  const trackRef = useRef(null);
  const drag = useRef({ down: false, startX: 0, scrollLeft: 0 });

  const onDown = (e) => {
    drag.current = {
      down: true,
      startX: e.pageX,
      scrollLeft: trackRef.current.scrollLeft,
    };
    trackRef.current.classList.add("is-dragging");
  };
  const onMove = (e) => {
    if (!drag.current.down) return;
    e.preventDefault();
    trackRef.current.scrollLeft =
      drag.current.scrollLeft - (e.pageX - drag.current.startX);
  };
  const onUp = () => {
    drag.current.down = false;
    trackRef.current?.classList.remove("is-dragging");
  };

  return (
    <section className="projects" id="projects">
      <div className="projects__head">
        <h2>
          Wherever Precision Is
          <br />
          Needed, <span>VSRP Delivers.</span>
        </h2>

        <a href="#" className="projects__all">
          VIEW ALL PROJECTS
          <span className="projects__all-icon">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2.5"
                 strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </span>
        </a>
      </div>

      <div
        className="projects__track"
        ref={trackRef}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
      >
        {projects.map((p, i) => (
          <article className="project-card" key={i}>
            <div className="project-card__img">
              <img src={p.image} alt={p.title} draggable="false" />
              <a href="#" className="project-card__link">
                VIEW PROJECT
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2.5"
                     strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
              </a>
              <ul className="project-card__tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}