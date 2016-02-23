package br.com.cbfm.core.services;

import java.util.List;

import br.com.cbfm.core.models.Federacao;

public interface FederacaoService {
	
	public List<Federacao> findAll();
	public List<Federacao> findBySigla(String sigla);
	
	

}
