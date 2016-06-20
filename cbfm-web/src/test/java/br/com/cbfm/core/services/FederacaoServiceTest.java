package br.com.cbfm.core.services;

import java.util.Collection;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import br.com.cbfm.AbstractTest;
import br.com.cbfm.core.models.Federacao;

@Transactional
public class FederacaoServiceTest extends AbstractTest {

	@Autowired
	private FederacaoService service;
	
	@Before
	public void setup(){
		
	}
	
	
	@After
	public void tearDown(){
		
	}
	
	@Test
	public void testFindAll(){
		
		Collection<Federacao> list = service.findAll();
		
//		Assert.assertNotNull("failure - expected not null", list);
		
		
		
	}
	
	
}
