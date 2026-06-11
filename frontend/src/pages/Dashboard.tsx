import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <Header />

      <main className="dashboard-content">
        <section className="coluna-esquerda">
          <section className="boas-vindas">
            <h2>Bem-vindo de volta!</h2>
            <p>Selecione uma opção para continuar.</p>
          </section>

          <section className="cards">
            <div className="card" onClick={() => navigate("/novo-chamado")}>
              <p>Abrir Chamado</p>
            </div>

            <div className="card" onClick={() => navigate("/acompanhar")}>
              <p>Acompanhar Chamado</p>
            </div>

            <div className="card" onClick={() => navigate("/meus-chamados")}>
              <p>Meus Chamados</p>
            </div>

            <div className="card">
              <p>Mensagens</p>
            </div>
          </section>
        </section>

        <section className="painel-direito">
          <div className="destaque">
            <h3>Destaque</h3>
            <p>
              Aqui poderão aparecer campanhas, avisos importantes ou informações
              da prefeitura.
            </p>
          </div>

          <div className="avisos">
            <h3>Avisos da Prefeitura</h3>
            <ul>
              <li>Coleta de resíduos alterada nesta semana.</li>
              <li>Manutenção programada na iluminação pública.</li>
              <li>Mutirão de limpeza no próximo sábado.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;