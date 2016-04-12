package br.com.cbfm.rest.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.cbfm.core.dto.FilterClubeDTO;
import br.com.cbfm.core.models.Clube;
import br.com.cbfm.core.services.ClubeService;

@RequestMapping("/rest/clubes")
@RestController
public class ClubeController {
	
	@Autowired
	private ClubeService clubeService;
	
	@RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Clube>> listAllClubes(FilterClubeDTO filterClubeDTO) {
		
		List<Clube> clubes = clubeService.findAll(filterClubeDTO);

        if(clubes.isEmpty()){
            return new ResponseEntity<List<Clube>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Clube>>(clubes, HttpStatus.OK);
    }
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Clube> saveClube(@RequestBody Clube clube) {
			clubeService.saveClube(clube);
		return new ResponseEntity<Clube>(HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<Clube> updateClube(@RequestBody Clube clube) {
			clubeService.updateClube(clube);
		return new ResponseEntity<Clube>(HttpStatus.OK);
	}
	
	@RequestMapping(value = "/clube/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Clube> deleteClube(@PathVariable("id") long id) {
		clubeService.deleteClube(id);
		return new ResponseEntity<Clube>(HttpStatus.OK);
	}
	
}