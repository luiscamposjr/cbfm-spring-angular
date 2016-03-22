package br.com.cbfm.core.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cbfm.core.models.Federacao;


public interface FederacaoRepository extends JpaRepository<Federacao, Long>{
	public List<Federacao> findByOrderByIdAsc();
	public List<Federacao> findBySiglaContainingIgnoreCase(String sigla);
}