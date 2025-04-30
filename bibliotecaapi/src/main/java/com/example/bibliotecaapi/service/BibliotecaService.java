package com.example.bibliotecaapi.service;

import com.example.bibliotecaapi.model.Biblioteca;
import com.example.bibliotecaapi.repository.BibliotecaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BibliotecaService {

    @Autowired
    private BibliotecaRepository bibliotecaRepository;

    public Biblioteca salvar(Biblioteca biblioteca) {
        return bibliotecaRepository.save(biblioteca);
    }

    public List<Biblioteca> listar() {
        return bibliotecaRepository.findAll();
    }
}

