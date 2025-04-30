package com.example.bibliotecaapi.service;

import com.example.bibliotecaapi.model.Livro;
import com.example.bibliotecaapi.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LivroService {

    @Autowired
    private LivroRepository livroRepository;

    public Livro salvar(Livro livro) {
        System.out.println("Livro recebido: " + livro);
        return livroRepository.save(livro);
    }

    public List<Livro> listar() {
        return livroRepository.findAll();
    }
}
