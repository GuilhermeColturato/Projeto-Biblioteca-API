package com.example.bibliotecaapi.controller;

import com.example.bibliotecaapi.model.Livro;
import com.example.bibliotecaapi.service.LivroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("/livros")
@CrossOrigin(origins = "*")
public class LivroController {

    private static final Logger logger = Logger.getLogger(LivroController.class.getName());

    @Autowired
    private LivroService livroService;

    @PostMapping
    public Livro criarLivro(@RequestBody Livro livro) {
        logger.info("Recebido livro: " + livro);
        return livroService.salvar(livro);
    }

    @GetMapping
    public List<Livro> listarLivros() {
        return livroService.listar();
    }
}
