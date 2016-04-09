package br.com.cbfm.core.services;

import java.util.List;

import br.com.cbfm.core.dto.FilterFederacaoDTO;
import br.com.cbfm.core.models.Federacao;

public interface FederacaoService {
	
	public List<Federacao> findAll();
	public List<Federacao> findAll(FilterFederacaoDTO filterFederacaoDTO);
	public Federacao saveFederacao(Federacao federacao);
	public Federacao updateFederacao(Federacao federacao);
	public void deleteFederacao(long id);
	
	

}
