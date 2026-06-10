import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/NovoChamado.css";

function NovoChamado() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [arquivo, setArquivo] = useState<File | null>(null);

  function enviarChamado(event: React.FormEvent) {
    event.preventDefault();

    if (!categoria || !localizacao || !descricao || !prioridade) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    alert("Chamado enviado com sucesso!");
    navigate("/dashboard");
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
            <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
              <option value="">Selecione uma categoria</option>
              <option value="Iluminação Pública">Iluminação Pública</option>
              <option value="Buraco na Rua">Buraco na Rua</option>
              <option value="Lixo Acumulado">Lixo Acumulado</option>
              <option value="Sinalização">Sinalização</option>
              <option value="Outro">Outro</option>
            </select>

            <label>Descrição do Problema:</label>
            <textarea
              placeholder="Descreva o problema com detalhes para facilitar o atendimento"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />

            <label>Anexar Fotos ou Documentos</label>
            <label className="upload-area">
              <span className="upload-icon">⬇</span>
              <strong>Adicionar Arquivo</strong>
              <small>(PNG, JPG OU PDF até 100MB)</small>

              <input
                type="file"
                accept=".png,.jpg,.jpeg,.pdf"
                onChange={(e) => setArquivo(e.target.files?.[0] || null)}
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
              onChange={(e) => setLocalizacao(e.target.value)}
            />

            <label>Prioridade Estimada:</label>

            <div className="prioridades">
              <button
                type="button"
                className={prioridade === "Baixa" ? "prioridade ativa" : "prioridade"}
                onClick={() => setPrioridade("Baixa")}
              >
                ↓ Baixa
              </button>

              <button
                type="button"
                className={prioridade === "Média" ? "prioridade ativa" : "prioridade"}
                onClick={() => setPrioridade("Média")}
              >
                = Média
              </button>

              <button
                type="button"
                className={prioridade === "Alta" ? "prioridade ativa" : "prioridade"}
                onClick={() => setPrioridade("Alta")}
              >
                ! Alta
              </button>
            </div>

            <div className="botoes-formulario">
              <button type="submit" className="botao-enviar">
                Enviar
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