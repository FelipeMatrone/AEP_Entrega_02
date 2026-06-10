import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import NovoChamado from "./pages/NovoChamado";
import MeusChamados from "./pages/MeusChamados";
import Acompanhar from "./pages/Acompanhar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/novo-chamado" element={<NovoChamado />} />
        <Route path="/meus-chamados" element={<MeusChamados />} />
        <Route path="/acompanhar" element={<Acompanhar />} />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;