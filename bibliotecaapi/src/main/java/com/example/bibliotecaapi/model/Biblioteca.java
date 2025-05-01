package com.example.bibliotecaapi.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Biblioteca {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // ID será gerado automaticamente
    private Long id;

    @OneToOne
    @JoinColumn(name = "livro_id", referencedColumnName = "id")
    private Livro livro;

    @Column(name = "data_cadastro")
    private LocalDate dataCadastro;

    // Construtor vazio necessário para JPA
    public Biblioteca() {
    }

    // Getters e Setters

    public Long getId() {
        return id;
    }

    // Remover o setter do ID para garantir que o ID seja gerado automaticamente
    // Não é necessário definir o ID manualmente
    // public void setId(Long id) {
    //     this.id = id;
    // }

    public Livro getLivro() {
        return livro;
    }

    public void setLivro(Livro livro) {
        this.livro = livro;
    }

    public LocalDate getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(LocalDate dataCadastro) {
        this.dataCadastro = dataCadastro;
    }
}
