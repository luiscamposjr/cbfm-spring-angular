package br.com.cbfm.core.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cbfm.core.models.Atleta;

public interface AtletaRepository extends JpaRepository<Atleta, Long>, AtletaRepositoryCustom {

}
