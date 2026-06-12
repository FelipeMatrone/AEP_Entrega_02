import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { apiRequest, type Chamado } from "../services/api";
import "../styles/NovoChamado.css";

function NovoChamado() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [arquivo, setArquivo] = useState<File | null>(null);
  const [enviando, setEnviando] = useState(false);

  async function enviarChamado(event: React.FormEvent) {
    event.preventDefault();

    if (!categoria || !localizacao || !descricao || !prioridade) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    setEnviando(true);

    try {
      const chamado = await apiRequest<Chamado>("/chamados", {
        method: "POST",
        body: JSON.stringify({ categoria, localizacao, descricao, prioridade }),
      });
      alert(`Chamado ${chamado.id} enviado com sucesso!`);
      navigate("/meus-chamados");
    } catch {
      alert("Não foi possível enviar o chamado.");
    } finally {
      setEnviando(false);
    }
  }

  function limparFormulario() {
    setCategoria("");
    setLocalizacao("");
    setDescricao("");
    setPrioridade("");
    setArquivo(null);
  }

  return (
    <div className="novo-chamado">
      <Header />
      <main className="novo-chamado-content">
        <h2>Nova Solicitação</h2>
        <p>Informe sobre o ocorrido preenchendo o formulário abaixo:</p>

        <form className="formulario-chamado" onSubmit={enviarChamado}>
          <section className="lado-esquerdo">
            <label>Categoria do Problema:</label>
            <select value={categoria} onChange={(event) => setCategoria(event.target.value)}>
              <option value="">Selecione uma categoria</option>
              <option value="Iluminação Pública">Iluminação Pública</option>
              <option value="Buraco na Rua">Buraco na Rua</option>
              <option value="Lixo Acumulado">Lixo Acumulado</option>
              <option value="Sinalização">Sinalização</option>
              <option value="Outro">Outro</option>
            </select>

            <label>Descrição do Problema:</label>
            <textarea
              placeholder="Descreva o problema com detalhes"
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
            />

            <label>Anexar Fotos ou Documentos</label>
            <label className="upload-area">
              <strong>Adicionar Arquivo</strong>
              <small>(PNG, JPG ou PDF)</small>
              <input
                type="file"
                accept=".png,.jpg,.jpeg,.pdf"
                onChange={(event) => setArquivo(event.target.files?.[0] || null)}
              />
            </label>
            {arquivo && <p className="arquivo-nome">{arquivo.name}</p>}
          </section>

          <section className="lado-direito">
            <label>Localização Rua e Bairro:</label>
            <input
              type="text"
              placeholder="Ex: Rua das Flores, 123 - Centro"
              value={localizacao}
              onChange={(event) => setLocalizacao(event.target.value)}
            />

            <label>Prioridade Estimada:</label>
            <div className="prioridades">
              {["Baixa", "Média", "Alta"].map((valor) => (
                <button
                  type="button"
                  key={valor}
                  className={prioridade === valor ? "prioridade ativa" : "prioridade"}
                  onClick={() => setPrioridade(valor)}
                >
                  {valor}
                </button>
              ))}
            </div>

            <div className="botoes-formulario">
              <button type="submit" className="botao-enviar" disabled={enviando}>
                {enviando ? "Enviando..." : "Enviar"}
              </button>
              <button type="button" className="botao-limpar" onClick={limparFormulario}>
                Limpar Formulário
              </button>
            </div>
          </section>
        </form>
      </main>
    </div>
  );
}

export default NovoChamado;
