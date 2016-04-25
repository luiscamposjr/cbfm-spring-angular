package br.com.cbfm.core.repositories.impl;


import org.springframework.data.jpa.repository.support.QueryDslRepositorySupport;

import br.com.cbfm.core.models.User;
import br.com.cbfm.core.repositories.UserRepositoryCustom;

/**
 * Custom implementation class to implement {@link UserRepositoryCustom}. Using the Querydsl repository base class.
 * 
 * @author Luis Campos
 */
public class UserRepositoryImpl extends QueryDslRepositorySupport implements UserRepositoryCustom {
	
	/**
	 * Creates a new instance of {@link UserRepositoryImpl}.
	 */
	public UserRepositoryImpl() {
		super(User.class);
	}

}
