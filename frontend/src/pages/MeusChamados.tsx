import { useEffect, useState } from "react";
import Header from "../components/Header";
import { apiRequest, type Chamado } from "../services/api";
import "../styles/MeusChamados.css";

function MeusChamados() {
  const [chamados, setChamados] = useState<Chamado[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    apiRequest<Chamado[]>("/chamados")
      .then(setChamados)
      .catch(() => setErro("Não foi possível carregar os chamados."))
      .finally(() => setCarregando(false));
  }, []);

  return (
    <div className="meus-chamados">
      <Header />
      <main className="meus-chamados-content">
        <h2>Meus Chamados</h2>
        <p>Acompanhe aqui as solicitações já abertas.</p>

        <section className="lista-chamados">
          {carregando && <p>Carregando...</p>}
          {erro && <p className="erro">{erro}</p>}
          {!carregando && !erro && chamados.length === 0 && (
            <p>Nenhum chamado cadastrado.</p>
          )}

          {chamados.map((chamado) => (
            <div className="chamado-card" key={chamado.id}>
              <h3>{chamado.categoria}</h3>
              <p><strong>Protocolo:</strong> {chamado.id}</p>
              <p><strong>Local:</strong> {chamado.localizacao}</p>
              <p><strong>Status:</strong> {chamado.status}</p>
              <p><strong>Prioridade:</strong> {chamado.prioridade}</p>
              <p><strong>Descrição:</strong> {chamado.descricao}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default MeusChamados;
