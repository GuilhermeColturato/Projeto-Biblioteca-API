package com.example.bibliotecaapi.controller;

import com.example.bibliotecaapi.model.Biblioteca;
import com.example.bibliotecaapi.service.BibliotecaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bibliotecas")
@CrossOrigin(origins = "*")
public class BibliotecaController {

    @Autowired
    private BibliotecaService bibliotecaService;

    @PostMapping
    public Biblioteca criarBiblioteca(@RequestBody Biblioteca biblioteca) {
        return bibliotecaService.salvar(biblioteca);
    }

    @GetMapping
    public List<Biblioteca> listarBibliotecas() {
        return bibliotecaService.listar();
    }
}

