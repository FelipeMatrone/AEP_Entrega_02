import { useState } from "react";
import Header from "../components/Header";
import "../styles/Acompanhar.css";

function Acompanhar() {
  const [protocolo, setProtocolo] = useState("");

  function consultarProtocolo(event: React.FormEvent) {
    event.preventDefault();

    if (!protocolo) {
      alert("Digite um protocolo para acompanhar.");
      return;
    }

    alert("Consulta realizada.");
  }

  return (
    <div className="acompanhar">
      <Header />

      <main className="acompanhar-content">
        <h2>Acompanhar Chamado</h2>
        <p>Digite o número do protocolo para consultar o andamento da solicitação.</p>

        <form className="form-acompanhar" onSubmit={consultarProtocolo}>
          <label>Número do Protocolo:</label>

          <div className="campo-protocolo">
            <input
              type="text"
              placeholder="Ex: PR000123"
              value={protocolo}
              onChange={(e) => setProtocolo(e.target.value)}
            />

            <button type="submit">Consultar</button>
          </div>
        </form>

        <section className="resultado-acompanhamento">
          <h3>Status do Chamado</h3>
          <p>Nenhuma consulta realizada até o momento.</p>
        </section>
      </main>
    </div>
  );
}

export default Acompanhar;