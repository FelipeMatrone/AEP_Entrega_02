function Cadastro() {
  return (
    <main className="login-page">
      <section className="login-card cadastro-card">
        <h1>Criar conta</h1>
        <p>Informe seus dados para acessar o AjudaNaMão.</p>

        <label>Nome completo</label>
        <input type="text" placeholder="Digite seu nome completo" />

        <label>Telefone</label>
        <input type="tel" placeholder="(44) 99999-9999" />

        <label>CPF</label>
        <input type="text" placeholder="000.000.000-00" />

        <label>Endereço</label>
        <input type="text" placeholder="Rua, número, bairro" />

        <label>E-mail</label>
        <input type="email" placeholder="nome@exemplo.com.br" />

        <button className="btn-principal">Cadastrar</button>
      </section>
    </main>
  );
}

export default Cadastro;