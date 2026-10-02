import { data } from "../data";
import Heart from "./Heart";
import Rose from "./Rose";

export default function Letter() {
  const { letter } = data;
  return (
    <section className="section wrap">
      <article className="paper letter">
        <Rose size={72} className="pressed" />
        <Rose size={52} tone="pink" spin={40} className="pressed two" />
        <p className="hand greeting">{letter.greeting}</p>
        {letter.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <p className="hand signoff">
          {letter.signoff}
          <br />
          {data.from}
        </p>
        <span className="stamp" aria-hidden="true">
          <Heart size={24} />
        </span>
      </article>
    </section>
  );
}
