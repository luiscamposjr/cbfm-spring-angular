package br.com.cbfm.core.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.cbfm.core.models.Federacao;
import br.com.cbfm.core.repositories.FederacaoRepository;
import br.com.cbfm.core.services.FederacaoService;

@Service
@Transactional
public class FederacaoServiceImpl implements FederacaoService{
	
	@Autowired
	private FederacaoRepository federacaoRepository;

	@Override
	public List<Federacao> findAll() {
		return (List<Federacao>) federacaoRepository.findAll();
	}

	@Override
	public List<Federacao> findBySigla(String sigla) {
		return federacaoRepository.findBySigla(sigla);
	}

}
