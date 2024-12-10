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
     
}