import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="topbar">
      <h1 className="logo" onClick={() => navigate("/dashboard")}>
        AjudaNaMão
      </h1>

      <nav className="menu">
        <button onClick={() => navigate("/dashboard")}>Início</button>
        <button onClick={() => navigate("/novo-chamado")}>Novo Chamado</button>
        <button onClick={() => navigate("/meus-chamados")}>Meus Chamados</button>
        <button onClick={() => navigate("/acompanhar")}>Acompanhar</button>
      </nav>

      <button className="perfil">👤</button>
    </header>
  );
}

export default Header;