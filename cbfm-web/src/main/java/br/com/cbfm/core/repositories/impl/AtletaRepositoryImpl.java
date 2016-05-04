package br.com.cbfm.core.repositories.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.data.jpa.repository.support.QueryDslRepositorySupport;

import com.google.common.base.Strings;
import com.mysema.query.BooleanBuilder;
import com.mysema.query.jpa.impl.JPAQuery;
import com.mysema.query.types.Predicate;
import com.mysema.query.types.Projections;

import br.com.cbfm.core.dto.FilterAtletaDTO;
import br.com.cbfm.core.models.Atleta;
import br.com.cbfm.core.models.QAtleta;
import br.com.cbfm.core.models.QClube;
import br.com.cbfm.core.models.QFederacao;
import br.com.cbfm.core.repositories.AtletaRepositoryCustom;

/**
 * Custom implementation class to implement {@link AtletaRepositoryCustom}. Using the Querydsl repository base class.
 * 
 * @author Luis Campos
 */
public class AtletaRepositoryImpl extends QueryDslRepositorySupport implements AtletaRepositoryCustom {
	
	@PersistenceContext
	private EntityManager em;

	private static final QAtleta qAtleta = QAtleta.atleta;
	private static final QClube qClube = QClube.clube;
	private static final QFederacao qFederacao = QFederacao.federacao;

	/**
	 * Creates a new instance of {@link AtletaRepositoryImpl}.
	 */
	public AtletaRepositoryImpl() {
		super(Atleta.class);
	}

	@Override
	public List<Atleta> findAll(FilterAtletaDTO filterAtletaDTO) {
		
		JPAQuery query = new JPAQuery(em);
		Predicate predicate = filterPredicate(filterAtletaDTO);
		
 		return query.from(qAtleta)
 			.innerJoin(qAtleta.clube, qClube)
 			.innerJoin(qClube.federacao, qFederacao)
 			.where(predicate)
			.orderBy(qAtleta.id.desc())
			.list(Projections.bean(qAtleta, qAtleta.id, qAtleta.nome, qAtleta.dataNascimento, qAtleta.ativo,
				  Projections.bean(qClube, qAtleta.clube.id, qAtleta.clube.nome,
				  Projections.bean(qFederacao, qAtleta.clube.federacao.sigla).as("federacao")).as("clube")));
	}
	
 	public static Predicate filterPredicate(FilterAtletaDTO filtro) {
	
		BooleanBuilder builder = new BooleanBuilder();
		
		if(filtro.getFederacao() != null && filtro.getFederacao() > 0){
			builder.and(qAtleta.clube.federacao.id.eq(filtro.getFederacao()));
		}
		
		if(filtro.getClube() != null && filtro.getClube() > 0){
			builder.and(qAtleta.clube.id.eq(filtro.getFederacao()));
		}
		
		if(!Strings.isNullOrEmpty(filtro.getNome())){
			builder.and(qAtleta.nome.containsIgnoreCase(filtro.getNome()));
		}
		
		
		if(!Strings.isNullOrEmpty(filtro.getAtivo())){
			builder.and(qAtleta.ativo.eq(new Boolean(filtro.getAtivo())));
		}
		
		return builder;
	}
}
