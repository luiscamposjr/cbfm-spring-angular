package br.com.cbfm.core.repositories;


import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.com.cbfm.core.models.Federacao;


public interface FederacaoRepository extends CrudRepository<Federacao, Long>{
	public List<Federacao> findBySigla(String sigla);
}