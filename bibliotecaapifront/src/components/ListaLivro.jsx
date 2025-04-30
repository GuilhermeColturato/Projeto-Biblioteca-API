import { useEffect, useState } from "react";
import api from "../services/api";

function ListaLivro() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    async function fetchLivros() {
      try {
        const response = await api.get("/livros");
        console.log("Dados recebidos da API:", response.data);
        setLivros(response.data);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    }

    fetchLivros();
  }, []);

  return (
    <div>
      <h2>Lista de Livros</h2>
      <ul>
        {livros.length > 0 ? (
          livros.map((livro, index) => (
            <li key={livro.id || index}> {/* Usando id ou índice */}
              {livro.nome || "Sem nome"} - {livro.autor || "Sem autor"} (
              {livro.qtdPaginas || "?"} páginas) [{livro.tipo || "Sem tipo"}]
            </li>
          ))
        ) : (
          <li>Nenhum livro encontrado.</li>
        )}
      </ul>
    </div>
  );
}

export default ListaLivro;
