package br.com.cbfm.core.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import br.com.cbfm.core.dto.FilterFederacaoDTO;
import br.com.cbfm.core.models.Federacao;
import br.com.cbfm.core.repositories.FederacaoRepository;
import br.com.cbfm.core.services.FederacaoService;

@Service
@Transactional
public class FederacaoServiceImpl implements FederacaoService{
	
	@Autowired
	private FederacaoRepository federacaoRepository;

	public Federacao saveFederacao(Federacao federacao) {
		return federacaoRepository.save(federacao);
	}

	public Federacao updateFederacao(Federacao federacao) {
		return federacaoRepository.save(federacao);
	}

	public void deleteFederacao(long id) {
		federacaoRepository.delete(id);
	}

	public List<Federacao> findAll() {
		return (List<Federacao>) federacaoRepository.findAll();
	}

	public List<Federacao> findAll(FilterFederacaoDTO filterFederacaoDTO) {
		return (List<Federacao>) federacaoRepository.findAll(filterFederacaoDTO);
	}

}
