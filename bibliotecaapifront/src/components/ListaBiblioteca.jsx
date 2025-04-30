import { useEffect, useState } from "react";
import api from "../services/api";

function ListaBiblioteca() {
  const [bibliotecas, setBibliotecas] = useState([]);

  useEffect(() => {
    async function fetchBibliotecas() {
      try {
        const response = await api.get("/bibliotecas");
        setBibliotecas(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchBibliotecas();
  }, []);

  return (
    <div>
      <h2>Lista de Bibliotecas</h2>
      <ul>
        {bibliotecas.map((biblioteca) => (
          <li key={biblioteca.id}>
            Biblioteca ID: {biblioteca.id} | Livro: {biblioteca.livro?.nome} | Cadastro: {biblioteca.dataCadastro}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaBiblioteca;
