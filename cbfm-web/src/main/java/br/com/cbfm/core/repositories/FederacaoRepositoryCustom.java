package br.com.cbfm.core.repositories;

import java.util.List;

import br.com.cbfm.core.dto.FilterFederacaoDTO;
import br.com.cbfm.core.models.Federacao;

public interface FederacaoRepositoryCustom {

	
	List<Federacao> findAll(FilterFederacaoDTO filterFederacaoDTO);
}
