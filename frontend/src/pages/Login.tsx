import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest, type Usuario } from "../services/api";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function fazerLogin() {
    if (!email || !senha) {
      setErro("O e-mail e a senha são obrigatórios para continuar.");
      return;
    }

    setErro("");
    setCarregando(true);

    try {
      const usuario = await apiRequest<Usuario>("/usuarios/login", {
        method: "POST",
        body: JSON.stringify({ email, senha }),
      });
      localStorage.setItem(
        "usuario",
        JSON.stringify({ id: usuario.id, nome: usuario.nome, email: usuario.email }),
      );
      navigate("/dashboard");
    } catch {
      setErro("E-mail ou senha inválidos.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-icon">A</div>
        <h1>AjudaNaMão</h1>
        <p>Registre e acompanhe solicitações públicas com facilidade.</p>

        <label>E-mail</label>
        <input
          type="email"
          placeholder="nome@exemplo.com.br"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label>Senha</label>
        <div className="senha-box">
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Sua senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
          <button
            type="button"
            className="olho"
            onClick={() => setMostrarSenha(!mostrarSenha)}
          >
            {mostrarSenha ? "Ocultar" : "Ver"}
          </button>
        </div>

        {erro && <span className="erro">{erro}</span>}

        <button className="btn-principal" onClick={fazerLogin} disabled={carregando}>
          {carregando ? "Entrando..." : "Entrar"}
        </button>

        <div className="divisor">
          <span></span>
          <small>ou</small>
          <span></span>
        </div>

        <button className="btn-secundario" onClick={() => navigate("/dashboard")}>
          Entrar anonimamente
        </button>

        <p className="criar-conta">
          Não possui acesso?{" "}
          <button onClick={() => navigate("/cadastro")}>Criar conta</button>
        </p>
      </section>
    </main>
  );
}

export default Login;
