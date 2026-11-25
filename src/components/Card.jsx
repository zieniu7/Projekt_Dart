import { medal } from "../medals.js";

export default function Card(props) {
  return (
    <article className="card">
      <div className="card-head">
        <span className={props.miejsce <= 3 ? "place medal" : "place"}>{medal(props.miejsce)}</span>
        <h3>{props.nazwa}</h3>
      </div>
      <dl className="stats">
        <div><dt>Punkty</dt><dd>{props.punkty}</dd></div>
        <div><dt>Średnia (3 lotki)</dt><dd>{props.srednia.toFixed(2)}</dd></div>
        <div><dt>180's</dt><dd>{props.ile180}</dd></div>
        <div><dt>High Finish</dt><dd>{props.highFinish}</dd></div>
      </dl>
    </article>
  );
}
