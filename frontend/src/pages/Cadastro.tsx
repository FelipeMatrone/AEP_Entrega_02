import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest, type Usuario } from "../services/api";

function Cadastro() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function cadastrar(event: React.FormEvent) {
    event.preventDefault();

    if (!nome || !telefone || !cpf || !endereco || !email || !senha) {
      setErro("Preencha todos os campos.");
      return;
    }

    setErro("");
    setCarregando(true);

    try {
      await apiRequest<Usuario>("/usuarios", {
        method: "POST",
        body: JSON.stringify({ nome, telefone, cpf, endereco, email, senha }),
      });
      navigate("/login");
    } catch {
      setErro("Não foi possível cadastrar. Verifique se o e-mail já está em uso.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="login-page">
      <form className="login-card cadastro-card" onSubmit={cadastrar}>
        <h1>Criar conta</h1>
        <p>Informe seus dados para acessar o AjudaNaMão.</p>

        <label>Nome completo</label>
        <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />

        <label>Telefone</label>
        <input type="tel" value={telefone} onChange={(event) => setTelefone(event.target.value)} />

        <label>CPF</label>
        <input type="text" value={cpf} onChange={(event) => setCpf(event.target.value)} />

        <label>Endereço</label>
        <input type="text" value={endereco} onChange={(event) => setEndereco(event.target.value)} />

        <label>E-mail</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />

        <label>Senha</label>
        <input type="password" value={senha} onChange={(event) => setSenha(event.target.value)} />

        {erro && <span className="erro">{erro}</span>}

        <button className="btn-principal" type="submit" disabled={carregando}>
          {carregando ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </main>
  );
}

export default Cadastro;
