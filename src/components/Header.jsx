import logo from "../assets/logo-rsd.jpg";

export default function Header(props) {
  return (
    <header className="header">
      <div className="header-inner">
        <img className="logo" src={logo} alt="Logo RSD – Radomskie Stowarzyszenie Darta" />
        <h1>{props.tytul}</h1>
        <button className="btn btn-outline" onClick={props.zmienTryb}>
          {props.ciemnyTryb ? "Tryb jasny" : "Tryb ciemny"}
        </button>
      </div>
    </header>
  );
}
