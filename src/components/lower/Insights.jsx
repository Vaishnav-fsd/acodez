import "./Insights.css";

const posts = [
  {
    title: "Understanding Rubber Compounds: Choosing The Right Material...",
    image: "/images/insight1.png",
    link: "#",
  },
  {
    title: "Understanding Rubber Compounds: Choosing The Right Material...",
    image: "/images/insight2.png",
    link: "#",
  },
  {
    title: "Understanding Rubber Compounds: Choosing The Right Material...",
    image: "/images/insight3.png",
    link: "#",
  },
];

const Arrow = ({ size = 12 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="14 6 20 12 14 18" />
  </svg>
);

export default function Insights() {
  return (
    <section className="insights" id="insights">
      <div className="insights__inner">
        <div className="insights__head">
          <div>
            <h2>
              Industry <span>Insights</span>
            </h2>
            <p>
              Practical advice, material expertise and engineering knowledge to
              help you make informed decisions
            </p>
          </div>

          <a href="#" className="insights__all">
            VIEW ALL INSIGHTS
            <span className="insights__all-icon">
              <Arrow size={14} />
            </span>
          </a>
        </div>

        <div className="insights__grid">
          {posts.map((p, i) => (
            <article className="insight-card" key={i}>
              <div className="insight-card__img">
                <img src={p.image} alt="" />
              </div>
              <div className="insight-card__body">
                <h3>{p.title}</h3>
                <a href={p.link} className="insight-card__link">
                  <span>VIEW DETAIL</span>
                  <Arrow size={12} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}