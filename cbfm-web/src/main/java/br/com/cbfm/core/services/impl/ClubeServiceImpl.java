package br.com.cbfm.core.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.cbfm.core.dto.FilterClubeDTO;
import br.com.cbfm.core.models.Clube;
import br.com.cbfm.core.repositories.ClubeRepository;
import br.com.cbfm.core.services.ClubeService;


@Service
@Transactional
public class ClubeServiceImpl implements ClubeService{
	
	@Autowired
	private ClubeRepository clubeRepository;

	public Clube saveClube(Clube clube) {
		return clubeRepository.save(clube);
	}

	public Clube updateClube(Clube clube) {
		return clubeRepository.save(clube);
	}

	public void deleteClube(long id) {
		clubeRepository.delete(id);
	}

	public List<Clube> findAll() {
		return (List<Clube>) clubeRepository.findAll();
	}

	@Secured({"ROLE_USER", "ROLE_ADMIN"})
	public List<Clube> findAll(FilterClubeDTO filterClubeDTO) {
		return (List<Clube>) clubeRepository.findAll(filterClubeDTO);
	}

}
