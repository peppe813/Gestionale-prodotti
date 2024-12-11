package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Prodotto;
import com.example.demo.repositories.ProdottoRepository;

@Service
public class ProdottoService {

    @Autowired
    ProdottoRepository prodottoRepository;

    public List<Prodotto> mostraTuttiProdotti(){
        return prodottoRepository.findAll();
    }

    public Prodotto aggiungiProdotto(Prodotto p){
        Prodotto prodottoDaAggiungere = new Prodotto(p.getNome(), p.getPrezzo(), p.getDescrizione(), p.getQuantita(), p.getCategoria());
        return prodottoRepository.save(prodottoDaAggiungere);
    }

    public void eliminaProdotto(int id){
        prodottoRepository.deleteById(id);
    }
     
}
