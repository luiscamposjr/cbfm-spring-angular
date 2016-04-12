package br.com.cbfm.core.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cbfm.core.models.Clube;

public interface ClubeRepository extends JpaRepository<Clube, Long>, ClubeRepositoryCustom {

}
