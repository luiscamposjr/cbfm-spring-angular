package br.com.cbfm.core.repositories;

import java.util.List;

import br.com.cbfm.core.dto.FilterClubeDTO;
import br.com.cbfm.core.models.Clube;

public interface ClubeRepositoryCustom {

	
	List<Clube> findAll(FilterClubeDTO filterClubeDTO);
}
