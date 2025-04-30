import { useState, useEffect } from "react";
import api from "../services/api";

function FormBiblioteca() {
  const [biblioteca, setBiblioteca] = useState({
    id: "",
    livro: { id: "" },
    dataCadastro: "",
  });

  const [livros, setLivros] = useState([]);

  useEffect(() => {
    async function fetchLivros() {
      try {
        const response = await api.get("/livros");
        setLivros(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchLivros();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "livro") {
      setBiblioteca({ ...biblioteca, livro: { id: value } });
    } else {
      setBiblioteca({ ...biblioteca, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/bibliotecas", biblioteca);
      alert("Biblioteca cadastrada com sucesso!");
      setBiblioteca({ id: "", livro: { id: "" }, dataCadastro: "" });
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar biblioteca.");
    }
  };

  return (
    <div>
      <h2>Cadastrar Biblioteca</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="ID" value={biblioteca.id} onChange={handleChange} required />
        
        <select name="livro" value={biblioteca.livro.id} onChange={handleChange} required>
          <option value="">Selecione um Livro</option>
          {livros.map((livro) => (
            <option key={livro.id} value={livro.id}>
              {livro.nome}
            </option>
          ))}
        </select>

        <input type="date" name="dataCadastro" value={biblioteca.dataCadastro} onChange={handleChange} required />
        
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default FormBiblioteca;
