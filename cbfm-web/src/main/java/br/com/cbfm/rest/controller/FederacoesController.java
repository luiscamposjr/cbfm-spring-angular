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

import br.com.cbfm.core.dto.FilterFederacaoDTO;
import br.com.cbfm.core.models.Federacao;
import br.com.cbfm.core.services.FederacaoService;


@RequestMapping("/rest/secure")
@RestController
public class FederacoesController {
	
	@Autowired
	private FederacaoService federacaoService;
	
	@RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Federacao>> listAllFederacoes(FilterFederacaoDTO filterFederacaoDTO) {
		
		List<Federacao> federacoes = federacaoService.findAll(filterFederacaoDTO);

        if(federacoes.isEmpty()){
            return new ResponseEntity<List<Federacao>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Federacao>>(federacoes, HttpStatus.OK);
    }
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Federacao> saveFederacao(@RequestBody Federacao federacao) {
			federacaoService.saveFederacao(federacao);
		return new ResponseEntity<Federacao>(HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<Federacao> updateFederacao(@RequestBody Federacao federacao) {
			federacaoService.updateFederacao(federacao);
		return new ResponseEntity<Federacao>(HttpStatus.OK);
	}
	
	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Federacao> deleteFederacao(@PathVariable("id") long id) {
		federacaoService.deleteFederacao(id);
		return new ResponseEntity<Federacao>(HttpStatus.OK);
	}
	
}

