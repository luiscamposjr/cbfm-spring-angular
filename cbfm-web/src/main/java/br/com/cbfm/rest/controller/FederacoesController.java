package br.com.cbfm.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.cbfm.core.models.Federacao;
import br.com.cbfm.core.services.FederacaoService;


@RestController
@RequestMapping("/federacoes")
public class FederacoesController {
	
	@Autowired
	private FederacaoService federacaoService;
	
	@RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Federacao>> listAllFederacoes(@RequestParam(value="sigla", required = false) String sigla) {
		
		List<Federacao> federacoes = null;

		if(sigla == null) {
			federacoes = federacaoService.findAll();
		}
		else {
			federacoes = federacaoService.findBySigla(sigla);
		}
		
        if(federacoes.isEmpty()){
            return new ResponseEntity<List<Federacao>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Federacao>>(federacoes, HttpStatus.OK);
    }
	
}
