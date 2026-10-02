import { data } from "../data";
import Heart from "./Heart";

export default function Story() {
  return (
    <section className="section wrap">
      <h2 className="h2">How we got here</h2>
      <ol className="story">
        {data.story.map((s) => (
          <li key={s.title} className="story-item">
            <span className="dot" aria-hidden="true">
              <Heart size={14} />
            </span>
            <p className="hand date">{s.date}</p>
            <h3 className="story-title">{s.title}</h3>
            <p className="story-text">{s.text}</p>
            {s.photo ? <img className="story-photo" src={s.photo} alt={s.title} loading="lazy" /> : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
