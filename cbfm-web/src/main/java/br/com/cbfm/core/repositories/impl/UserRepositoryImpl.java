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

import br.com.cbfm.core.dto.FilterUserDTO;
import br.com.cbfm.core.models.QUser;
import br.com.cbfm.core.models.User;
import br.com.cbfm.core.repositories.UserRepositoryCustom;

/**
 * Custom implementation class to implement {@link UserRepositoryCustom}. Using the Querydsl repository base class.
 * 
 * @author Luis Campos
 */
public class UserRepositoryImpl extends QueryDslRepositorySupport implements UserRepositoryCustom {
	
	@PersistenceContext
	private EntityManager em;
	
	private static final QUser qUser = QUser.user;
	
	/**
	 * Creates a new instance of {@link UserRepositoryImpl}.
	 */
	public UserRepositoryImpl() {
		super(User.class);
	}
	
	@Override
	public List<User> findAll(FilterUserDTO filterUserDTO) {
		
		JPAQuery query = new JPAQuery(em);
		Predicate predicate = filterPredicate(filterUserDTO);
		
 		return query.from(qUser)
			.where(predicate)
			.orderBy(qUser.id.desc())
			.list(Projections.bean(User.class, qUser.id, qUser.username, qUser.email, qUser.password));
 		
	}
	
 	public static Predicate filterPredicate(FilterUserDTO filtro) {
	
		BooleanBuilder builder = new BooleanBuilder();
	
		if(!Strings.isNullOrEmpty(filtro.getUsername())){
			builder.and(qUser.username.containsIgnoreCase(filtro.getUsername()));
		}
	
		if(!Strings.isNullOrEmpty(filtro.getEmail())){
			builder.and(qUser.email.containsIgnoreCase(filtro.getEmail()));
		}
		
	
		return builder;
	}

}
