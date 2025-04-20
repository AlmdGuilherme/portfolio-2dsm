import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from './pages/HomePage/Home.jsx'
import SkillsPage from './pages/HabilidadesPage/Skills.jsx'
import FormAcPage from './pages/FormAcPage/FormAc.jsx'
import CertiPage from './pages/CertificadosPage/Certificados.jsx'
import ProjPage from './pages/ProjetosPage/Projetos.jsx'

function App() {
  return (
    <>
    <BrowserRouter basename="/portfolio-2dsm">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/habilidades" element={<SkillsPage/>}></Route>
        <Route path="/formacaoAcademica" element={<FormAcPage/>}></Route>
        <Route path="/certificados" element={<CertiPage/>}></Route>
        <Route path="/projetos" element={<ProjPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
