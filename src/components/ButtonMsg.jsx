import { useState } from "react";

export default function ButtonMsg() {
  const [imie, setImie] = useState(localStorage.getItem("imie"));

  function przedstawSie() {
    const wpisaneImie = window.prompt("Jak masz na imię?");
    if (wpisaneImie && wpisaneImie.trim() !== "") {
      localStorage.setItem("imie", wpisaneImie.trim());
      setImie(wpisaneImie.trim());
    }
  }

  return (
    <div className="greeting">
      {imie && <p className="welcome">Witaj ponownie, {imie}!</p>}
      <button className="btn" onClick={przedstawSie}>
        {imie ? "Zmień imię" : "Przedstaw się"}
      </button>
    </div>
  );
}
