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

import br.com.cbfm.core.dto.FilterClubeDTO;
import br.com.cbfm.core.models.Clube;
import br.com.cbfm.core.models.QClube;
import br.com.cbfm.core.models.QFederacao;
import br.com.cbfm.core.repositories.ClubeRepositoryCustom;


/**
 * Custom implementation class to implement {@link ClubeRepositoryCustom}. Using the Querydsl repository base class.
 * 
 * @author Luis Campos
 */
public class ClubeRepositoryImpl extends QueryDslRepositorySupport implements ClubeRepositoryCustom {
	
	@PersistenceContext
	private EntityManager em;

	private static final QClube qClube = QClube.clube;
	private static final QFederacao qFederacao = QFederacao.federacao;

	/**
	 * Creates a new instance of {@link ClubeRepositoryImpl}.
	 */
	public ClubeRepositoryImpl() {
		super(Clube.class);
	}

	@Override
	public List<Clube> findAll(FilterClubeDTO filterClubeDTO) {
		
		JPAQuery query = new JPAQuery(em);
		Predicate predicate = filterPredicate(filterClubeDTO);
		
 		return query.from(qClube)
 			.innerJoin(qClube.federacao, qFederacao)
 			.where(predicate)
			.orderBy(qClube.id.desc())
			.list(Projections.fields(qClube, qClube.id, qClube.nome, qClube.ativo, qClube.cnpj, qClube.email, qClube.responsavel, 
				  Projections.fields(qFederacao, qClube.federacao.id, qClube.federacao.sigla).as("federacao")));
	}
	
 	public static Predicate filterPredicate(FilterClubeDTO filtro) {
	
		BooleanBuilder builder = new BooleanBuilder();
		
		if(filtro.getFederacao() != null && filtro.getFederacao() > 0){
			builder.and(qClube.federacao.id.eq(filtro.getFederacao()));
		}
		
		if(!Strings.isNullOrEmpty(filtro.getNome())){
			builder.and(qClube.nome.containsIgnoreCase(filtro.getNome()));
		}
		
		if(!Strings.isNullOrEmpty(filtro.getResponsavel())){
			builder.and(qClube.responsavel.containsIgnoreCase(filtro.getResponsavel()));
		}
		
		if(!Strings.isNullOrEmpty(filtro.getEmail())){
			builder.and(qClube.email.containsIgnoreCase(filtro.getEmail()));
		}
		
		if(!Strings.isNullOrEmpty(filtro.getAtivo())){
			builder.and(qClube.ativo.eq(new Boolean(filtro.getAtivo())));
		}
		
		if(!Strings.isNullOrEmpty(filtro.getCnpj())){
			builder.and(qClube.cnpj.containsIgnoreCase(filtro.getCnpj()));
		}
	
		return builder;
	}
}
