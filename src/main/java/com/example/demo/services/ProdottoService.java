package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Prodotto;
import com.example.demo.repositories.ProdottoRepository;

@Service
public class ProdottoService {

    @Autowired
    ProdottoRepository prodottoRepository;

    public List<Prodotto> mostraTuttiProdotti() {
        return prodottoRepository.findAll();
    }

    public Prodotto aggiungiProdotto(Prodotto p) {
        Prodotto prodottoDaAggiungere = new Prodotto(p.getNome(), p.getPrezzo(), p.getDescrizione(), p.getQuantita(),
                p.getCategoria());
        return prodottoRepository.save(prodottoDaAggiungere);
    }

    public void eliminaProdotto(int id) {
        prodottoRepository.deleteById(id);
    }

    public Optional<Prodotto> trovaProdottoPerId(Integer id) {
        Optional<Prodotto> prodotto = prodottoRepository.findById(id);
        return prodotto;
    }

    public Prodotto aggiornaProdotto(Prodotto prodottoAggiornato) {
        // 1. Recupera il prodotto esistente dal database usando l'ID del prodotto
        Optional<Prodotto> prodotto = prodottoRepository.findById(prodottoAggiornato.getId());
        Prodotto prodottoTrovato = prodotto.get();

        // 3. Aggiorna i campi del prodotto esistente con i nuovi dati
        prodottoTrovato.setNome(prodottoAggiornato.getNome());
        prodottoTrovato.setPrezzo(prodottoAggiornato.getPrezzo());
        prodottoTrovato.setDescrizione(prodottoAggiornato.getDescrizione());
        prodottoTrovato.setQuantita(prodottoAggiornato.getQuantita());
        prodottoTrovato.setCategoria(prodottoAggiornato.getCategoria());

        // 4. Salva il prodotto aggiornato nel database
        return prodottoRepository.save(prodottoTrovato);

    }

}
