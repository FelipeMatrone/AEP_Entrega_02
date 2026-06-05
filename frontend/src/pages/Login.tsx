import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState("");

  function fazerLogin() {
    if (!email || !senha) {
      setErro("O e-mail e a senha são obrigatórios para continuar.");
      return;
    }

    setErro("");
    navigate("/dashboard");
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-icon">🏛️</div>

        <h1>AjudaNaMão</h1>
        <p>Registre e acompanhe solicitações públicas com facilidade.</p>

        <label>E-mail</label>
        <input
          type="email"
          placeholder="nome@exemplo.com.br"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {erro && <span className="erro">ⓘ {erro}</span>}

        <label>Senha</label>
        <div className="senha-box">
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Sua senha segura"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button
            type="button"
            className="olho"
            onClick={() => setMostrarSenha(!mostrarSenha)}
          >
            {mostrarSenha ? "Teste Ver" : "Teste nao ver"}
          </button>
        </div>

        <button className="btn-principal" onClick={fazerLogin}>
          Entrar
        </button>

        <div className="divisor">
          <span></span>
          <small>ou</small>
          <span></span>
        </div>

        <button className="btn-secundario">
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