package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.model.Prodotto;
import com.example.demo.services.ProdottoService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class ProdottoController {

    @Autowired
    ProdottoService prodottoService;

    @GetMapping("/visualizzatutti")
    public String vaiATuttiIProdotti(Model model){
        List<Prodotto> prodotti = prodottoService.mostraTuttiProdotti(); 
        if (prodotti.isEmpty()) {
            model.addAttribute("messaggio", "Non ci sono prodotti disponibili.");
        } else {
            model.addAttribute("prodotti", prodotti);
        }
        return "prodotti";
    }

    @PostMapping("/registraProdotto")
    public String registraProdotto(Prodotto prodotto, Model model){
        prodottoService.aggiungiProdotto(prodotto);
        List<Prodotto> prodotti = prodottoService.mostraTuttiProdotti();
        model.addAttribute("prodotti", prodotti);
        return "prodotti";
    }

    @GetMapping("/elimina")
    public String eliminaProdotto(@RequestParam int id, Model model){
        prodottoService.eliminaProdotto(id);
        List<Prodotto> prodotti = prodottoService.mostraTuttiProdotti();
        model.addAttribute("prodotti", prodotti);
        return "prodotti";
    }
    
}
