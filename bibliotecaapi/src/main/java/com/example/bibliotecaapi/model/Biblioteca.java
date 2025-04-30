package com.example.bibliotecaapi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class Biblioteca {
    @Id
    private String id;

    @OneToOne
    @JoinColumn(name = "livro_id")
    private Livro livro;

    private String dataCadastro;
}

