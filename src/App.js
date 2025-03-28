import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Paginas/Home/Home';
import Formacoes from "./Paginas/Formacoes/Formacoes";
import Projetos from "./Paginas/Projetos/Projetos";
import NotFound from "./Paginas/NotFound/NotFound";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/formacoes" element={<Formacoes />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  )
}

export default App;
