export default function SortButtons(props) {
  return (
    <div className="sort">
      <button
        className={props.sortowanie === "punkty" ? "chip chip-active" : "chip"}
        onClick={() => props.zmienSortowanie("punkty")}
      >
        Wg punktów
      </button>
      <button
        className={props.sortowanie === "srednia" ? "chip chip-active" : "chip"}
        onClick={() => props.zmienSortowanie("srednia")}
      >
        Wg średniej
      </button>
    </div>
  );
}
