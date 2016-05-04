package br.com.cbfm.core.services;

import java.util.List;

import br.com.cbfm.core.dto.FilterAtletaDTO;
import br.com.cbfm.core.models.Atleta;

public interface AtletaService {
	
	public List<Atleta> findAll();
	public List<Atleta> findAll(FilterAtletaDTO filterAtletaDTO);
	public Atleta saveAtleta(Atleta atleta);
	public Atleta updateAtleta(Atleta atleta);
	public void deleteAtleta(long id);
	
	

}
