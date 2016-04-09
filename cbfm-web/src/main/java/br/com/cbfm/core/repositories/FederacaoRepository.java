package br.com.cbfm.core.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cbfm.core.models.Federacao;

public interface FederacaoRepository extends JpaRepository<Federacao, Long>, FederacaoRepositoryCustom {

}
