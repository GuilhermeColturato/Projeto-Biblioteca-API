package com.example.bibliotecaapi.controller;

import com.example.bibliotecaapi.model.Biblioteca;
import com.example.bibliotecaapi.service.BibliotecaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("/bibliotecas")
@CrossOrigin(origins = "*")
public class BibliotecaController {

    private static final Logger logger = Logger.getLogger(BibliotecaController.class.getName());

    @Autowired
    private BibliotecaService bibliotecaService;

    @PostMapping
    public Biblioteca criarBiblioteca(@RequestBody Biblioteca biblioteca) {
        logger.info("Recebida biblioteca: " +
                "id=" + biblioteca.getId() +
                ", dataCadastro=" + biblioteca.getDataCadastro() +
                ", livro.id=" + (biblioteca.getLivro() != null ? biblioteca.getLivro().getId() : "null"));

        return bibliotecaService.salvar(biblioteca);
    }

    @GetMapping
    public List<Biblioteca> listarBibliotecas() {
        return bibliotecaService.listar();
    }
}
