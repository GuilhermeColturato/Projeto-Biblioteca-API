package com.example.bibliotecaapi.repository;

import com.example.bibliotecaapi.model.Livro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LivroRepository extends JpaRepository<Livro, String> {
}

