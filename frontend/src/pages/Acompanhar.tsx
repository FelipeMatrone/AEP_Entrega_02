import { useState } from "react";
import Header from "../components/Header";
import { apiRequest, type Chamado } from "../services/api";
import "../styles/Acompanhar.css";

function Acompanhar() {
  const [protocolo, setProtocolo] = useState("");
  const [chamado, setChamado] = useState<Chamado | null>(null);
  const [erro, setErro] = useState("");
  const [consultando, setConsultando] = useState(false);

  async function consultarProtocolo(event: React.FormEvent) {
    event.preventDefault();

    const id = protocolo.replace(/\D/g, "");
    if (!id) {
      setErro("Informe um número de protocolo válido.");
      return;
    }

    setErro("");
    setChamado(null);
    setConsultando(true);

    try {
      setChamado(await apiRequest<Chamado>(`/chamados/${id}`));
    } catch {
      setErro("Chamado não encontrado.");
    } finally {
      setConsultando(false);
    }
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
              placeholder="Ex: 123"
              value={protocolo}
              onChange={(event) => setProtocolo(event.target.value)}
            />
            <button type="submit" disabled={consultando}>
              {consultando ? "Consultando..." : "Consultar"}
            </button>
          </div>
        </form>

        <section className="resultado-acompanhamento">
          <h3>Status do Chamado</h3>
          {erro && <p className="erro">{erro}</p>}
          {!erro && !chamado && <p>Nenhuma consulta realizada até o momento.</p>}
          {chamado && (
            <>
              <p><strong>Protocolo:</strong> {chamado.id}</p>
              <p><strong>Categoria:</strong> {chamado.categoria}</p>
              <p><strong>Status:</strong> {chamado.status}</p>
              <p><strong>Local:</strong> {chamado.localizacao}</p>
              <p><strong>Prioridade:</strong> {chamado.prioridade}</p>
              <p><strong>Descrição:</strong> {chamado.descricao}</p>
            </>
          )}
        </section>
      </main>
    </div>
  );
}

export default Acompanhar;
