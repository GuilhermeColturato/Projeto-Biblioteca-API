import { useState } from "react";
import api from "../services/api";

function FormLivro() {
  const [livro, setLivro] = useState({
    nome: "",
    autor: "",
    qtdPaginas: "",
    tipo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Garantir que qtdPaginas seja um número
    setLivro({
      ...livro,
      [name]: name === "qtdPaginas" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar se todos os campos estão preenchidos corretamente
    if (!livro.nome || !livro.autor || !livro.qtdPaginas || !livro.tipo) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

    try {
      console.log("Dados enviados:", livro);
      await api.post("/livros", livro);
      alert("Livro cadastrado com sucesso!");
      setLivro({
        nome: "",
        autor: "",
        qtdPaginas: "",
        tipo: "",
      });
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar livro.");
    }
  };

  return (
    <div>
      <h2>Cadastrar Livro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={livro.nome}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="autor"
          placeholder="Autor"
          value={livro.autor}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="qtdPaginas"
          placeholder="Qtd de Páginas"
          value={livro.qtdPaginas}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="tipo"
          placeholder="Tipo"
          value={livro.tipo}
          onChange={handleChange}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default FormLivro;
