package com.example.bibliotecaapi.repository;

import com.example.bibliotecaapi.model.Biblioteca;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BibliotecaRepository extends JpaRepository<Biblioteca, String> {
}

