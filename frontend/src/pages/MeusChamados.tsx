import Header from "../components/Header";
import "../styles/MeusChamados.css";

function MeusChamados() {
  return (
    <div className="meus-chamados">
      <Header />

      <main className="meus-chamados-content">
        <h2>Meus Chamados</h2>
        <p>Acompanhe aqui as solicitações que você já abriu.</p>

        <section className="lista-chamados">
          <div className="chamado-card">
            <h3>Buraco na Rua</h3>
            <p><strong>Local:</strong> Rua das Flores, 123 - Centro</p>
            <p><strong>Status:</strong> Em análise</p>
            <p><strong>Prioridade:</strong> Média</p>
          </div>

          <div className="chamado-card">
            <h3>Iluminação Pública</h3>
            <p><strong>Local:</strong> Avenida Brasil - Zona 01</p>
            <p><strong>Status:</strong> Em andamento</p>
            <p><strong>Prioridade:</strong> Alta</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MeusChamados;