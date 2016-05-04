package br.com.cbfm.core.repositories;

import java.util.List;

import br.com.cbfm.core.dto.FilterAtletaDTO;
import br.com.cbfm.core.models.Atleta;

public interface AtletaRepositoryCustom {

	List<Atleta> findAll(FilterAtletaDTO filterAtletaDTO);
}
