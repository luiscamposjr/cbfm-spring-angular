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

import br.com.cbfm.core.dto.FilterAtletaDTO;
import br.com.cbfm.core.models.Atleta;
import br.com.cbfm.core.services.AtletaService;


@RequestMapping("/rest/atletas")
@RestController
public class AtletaController {
	
	@Autowired
	private AtletaService atletaService;
	
	@RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Atleta>> listAllAtletas(FilterAtletaDTO filterAtletaDTO) {
		
		List<Atleta> atletas = atletaService.findAll(filterAtletaDTO);

        if(atletas.isEmpty()){
            return new ResponseEntity<List<Atleta>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Atleta>>(atletas, HttpStatus.OK);
    }
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Atleta> saveAtleta(@RequestBody Atleta atleta) {
			atletaService.saveAtleta(atleta);
		return new ResponseEntity<Atleta>(HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<Atleta> updateAtleta(@RequestBody Atleta atleta) {
			atletaService.updateAtleta(atleta);
		return new ResponseEntity<Atleta>(HttpStatus.OK);
	}
	
	@RequestMapping(value = "/atleta/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Atleta> deleteAtleta(@PathVariable("id") long id) {
		atletaService.deleteAtleta(id);
		return new ResponseEntity<Atleta>(HttpStatus.OK);
	}
	
}