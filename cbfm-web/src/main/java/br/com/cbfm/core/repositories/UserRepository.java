package br.com.cbfm.core.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cbfm.core.models.User;

public interface UserRepository extends JpaRepository<User, Long>, UserRepositoryCustom {
	
	public User findOneByUsername(String username);

}
