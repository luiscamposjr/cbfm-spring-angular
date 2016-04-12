package br.com.cbfm.core.services;

import java.util.List;

import br.com.cbfm.core.dto.FilterClubeDTO;
import br.com.cbfm.core.models.Clube;

public interface ClubeService {
	
	public List<Clube> findAll();
	public List<Clube> findAll(FilterClubeDTO filterClubeDTO);
	public Clube saveClube(Clube clube);
	public Clube updateClube(Clube clube);
	public void deleteClube(long id);
	
	

}
