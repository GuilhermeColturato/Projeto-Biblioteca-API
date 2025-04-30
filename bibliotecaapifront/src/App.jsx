import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormLivro from "./components/FormLivro";
import ListaLivro from "./components/ListaLivro";
import FormBiblioteca from "./components/FormBiblioteca";
import ListaBiblioteca from "./components/ListaBiblioteca";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/form-livro">Cadastrar Livro</Link> | 
          <Link to="/lista-livro">Listar Livros</Link> | 
          <Link to="/form-biblioteca">Cadastrar Biblioteca</Link> | 
          <Link to="/lista-biblioteca">Listar Bibliotecas</Link>
        </nav>
        <Routes>
          <Route path="/form-livro" element={<FormLivro />} />
          <Route path="/lista-livro" element={<ListaLivro />} />
          <Route path="/form-biblioteca" element={<FormBiblioteca />} />
          <Route path="/lista-biblioteca" element={<ListaBiblioteca />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
