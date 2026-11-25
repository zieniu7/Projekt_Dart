import { medal } from "../medals.js";

export default function Podium(props) {
  return (
    <section className="podium">
      {props.zawodnicy.map((zawodnik) => (
        <article key={zawodnik[1]} className={"podium-step step-" + zawodnik[0]}>
          <span className="podium-medal">{medal(zawodnik[0])}</span>
          <h3>{zawodnik[1]}</h3>
          <p className="podium-points">{zawodnik[2]} pkt</p>
          <p className="podium-extra">
            średnia {zawodnik[3].toFixed(2)} · 180's: {zawodnik[4]} · HF {zawodnik[5]}
          </p>
        </article>
      ))}
    </section>
  );
}
