package br.com.cbfm.core.repositories.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.data.jpa.repository.support.QueryDslRepositorySupport;

import com.google.common.base.Strings;
import com.mysema.query.BooleanBuilder;
import com.mysema.query.jpa.impl.JPAQuery;
import com.mysema.query.types.Predicate;

import br.com.cbfm.core.dto.FilterFederacaoDTO;
import br.com.cbfm.core.models.Federacao;
import br.com.cbfm.core.models.QFederacao;
import br.com.cbfm.core.repositories.FederacaoRepositoryCustom;

/**
 * Custom implementation class to implement {@link FederacaoRepositoryCustom}. Using the Querydsl repository base class.
 * 
 * @author Luis Campos
 */
public class FederacaoRepositoryImpl extends QueryDslRepositorySupport implements FederacaoRepositoryCustom {
	
	@PersistenceContext
	private EntityManager em;

	private static final QFederacao qFederacao = QFederacao.federacao;

	/**
	 * Creates a new instance of {@link FederacaoRepositoryImpl}.
	 */
	public FederacaoRepositoryImpl() {
		super(Federacao.class);
	}

	@Override
	public List<Federacao> findAll(FilterFederacaoDTO filterFederacaoDTO) {
		
		JPAQuery query = new JPAQuery(em);
		Predicate predicate = filterPredicate(filterFederacaoDTO);
		
 		return query.from(qFederacao)
			.where(predicate)
			.orderBy(qFederacao.id.desc())
			.list(qFederacao);
		
	}
	
 	public static Predicate filterPredicate(FilterFederacaoDTO filtro) {
	
		BooleanBuilder builder = new BooleanBuilder();
	
		if(!Strings.isNullOrEmpty(filtro.getNome())){
			builder.and(qFederacao.nome.containsIgnoreCase(filtro.getNome()));
		}
	
		if(!Strings.isNullOrEmpty(filtro.getSigla())){
			builder.and(qFederacao.sigla.containsIgnoreCase(filtro.getSigla()));
		}
	
		if(!Strings.isNullOrEmpty(filtro.getUf())){
			builder.and(qFederacao.uf.containsIgnoreCase(filtro.getUf()));
		}
	
		return builder;
	}
}
