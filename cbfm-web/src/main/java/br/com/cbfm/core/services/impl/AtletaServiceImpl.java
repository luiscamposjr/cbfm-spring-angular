package br.com.cbfm.core.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.cbfm.core.dto.FilterAtletaDTO;
import br.com.cbfm.core.models.Atleta;
import br.com.cbfm.core.repositories.AtletaRepository;
import br.com.cbfm.core.services.AtletaService;


@Service
@Transactional
public class AtletaServiceImpl implements AtletaService{
	
	@Autowired
	private AtletaRepository atletaRepository;

	public Atleta saveAtleta(Atleta atleta) {
		return atletaRepository.save(atleta);
	}

	public Atleta updateAtleta(Atleta atleta) {
		return atletaRepository.save(atleta);
	}

	public void deleteAtleta(long id) {
		atletaRepository.delete(id);
	}

	public List<Atleta> findAll() {
		return (List<Atleta>) atletaRepository.findAll();
	}

	@Secured({"ROLE_USER", "ROLE_ADMIN"})
	public List<Atleta> findAll(FilterAtletaDTO filterAtletaDTO) {
		return (List<Atleta>) atletaRepository.findAll(filterAtletaDTO);
	}

}
