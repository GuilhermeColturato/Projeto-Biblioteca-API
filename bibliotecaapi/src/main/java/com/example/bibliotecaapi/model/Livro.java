package com.example.bibliotecaapi.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.UUID;

@Entity
@Data
public class Livro {

    @Id
    private String id = UUID.randomUUID().toString();  // Gerando UUID diretamente

    private String nome;
    private String autor;

    @Column(name = "qtd_paginas")
    private int qtdPaginas;

    private String tipo;
}
