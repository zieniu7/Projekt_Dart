import { useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import ButtonMsg from "./components/ButtonMsg.jsx";
import Quote from "./components/Quote.jsx";
import Podium from "./components/Podium.jsx";
import SortButtons from "./components/SortButtons.jsx";
import "./styles.css";

// Ranking aktualnego cyklu (źródło: n01darts.com)
const ranking = [
  [1, "Piotr „Scorpion” Nowak", 538, 65.37, 71, 151],
  [2, "Kacper Szałas", 534, 59.13, 40, 146],
  [3, "Błażej Zientek", 468, 60.5, 28, 142],
  [4, "Konrad Małek", 330, 52.33, 15, 124],
  [5, "Marcin Ziomek", 324, 50.3, 10, 132],
  [6, "Karol Rogala", 306, 52.67, 10, 160],
  [7, "Grzegorz Popowicz", 304, 59.57, 16, 156],
  [8, "Igor Janiszewski", 286, 45.81, 7, 158],
  [9, "Tomasz Jakubczyk", 276, 63.2, 18, 136],
  [10, "Tomasz Błędowski", 232, 47.02, 5, 120],
  [11, "Konrad Blank", 220, 42.38, 0, 121],
  [12, "Michał Dobrowolski", 214, 44.84, 1, 111],
  [12, "Dawid Starzyński", 214, 49.6, 3, 117],
  [14, "Dawid Białkowski", 204, 47.47, 9, 133],
  [15, "Maciej Chodakowski", 202, 48.37, 0, 114],
  [16, "Adrian Gocel", 198, 44.23, 1, 124],
];

const cytaty = [
  "Fun fact: najwyższy wynik w jednej serii trzech lotek to 180.",
  "Fun fact: najwyższy możliwy finisz w darcie to 170 punktów.",
  "Fun fact: leg w 501 można skończyć w 9 lotkach – to tzw. nine-darter.",
  "Regularny trening to najkrótsza droga do wyższej średniej.",
  "Tarcza ma 20 sektorów, a środek to bullseye.",
];

const cytatDnia = cytaty[Math.floor(Math.random() * cytaty.length)];

function App() {
  const [szukanyTekst, setSzukanyTekst] = useState("");
  const [ciemnyTryb, setCiemnyTryb] = useState(false);
  const [sortowanie, setSortowanie] = useState("punkty"); 

  const maleLitery = szukanyTekst.trim().toLowerCase();

  const pasujacy = ranking.filter((zawodnik) => zawodnik[1].toLowerCase().includes(maleLitery));

  let lista = pasujacy.slice();
  if (sortowanie === "srednia") {
    lista.sort((a, b) => b[3] - a[3]);
  }
  if (maleLitery === "") {
    lista = lista.filter((zawodnik) => zawodnik[0] > 3);
  }

  return (
    <div className={ciemnyTryb ? "app ciemny" : "app jasny"}>
      <Header
        tytul="Portal Radomskiego Stowarzyszenia Darta"
        ciemnyTryb={ciemnyTryb}
        zmienTryb={() => setCiemnyTryb(!ciemnyTryb)}
      />

      <main className="content">
        <div className="toolbar">
          <ButtonMsg />
          <Quote tekst={cytatDnia} />
        </div>

        <h2 className="section-title">Ranking aktualnego cyklu</h2>

        {maleLitery === "" && <Podium zawodnicy={ranking.slice(0, 3)} />}

        <label className="search">
          <span className="search-label">Szukaj zawodnika</span>
          <input
            type="search"
            placeholder="Wpisz nazwisko, np. Zientek"
            value={szukanyTekst}
            onChange={(event) => setSzukanyTekst(event.target.value)}
          />
        </label>

        <div className="list-controls">
          <p className="counter">Znaleziono: {pasujacy.length} z {ranking.length}</p>
          <SortButtons sortowanie={sortowanie} zmienSortowanie={setSortowanie} />
        </div>

        {lista.length > 0 ? (
          <section className="grid">
            {lista.map((zawodnik) => (
              <Card
                key={zawodnik[1]}
                miejsce={zawodnik[0]}
                nazwa={zawodnik[1]}
                punkty={zawodnik[2]}
                srednia={zawodnik[3]}
                ile180={zawodnik[4]}
                highFinish={zawodnik[5]}
              />
            ))}
          </section>
        ) : (
          <p className="empty">Nie ma takiego zawodnika w rankingu. Sprawdź pisownię.</p>
        )}
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
