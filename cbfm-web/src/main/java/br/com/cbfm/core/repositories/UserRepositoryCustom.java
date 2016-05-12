package br.com.cbfm.core.repositories;

import java.util.List;

import br.com.cbfm.core.dto.FilterUserDTO;
import br.com.cbfm.core.models.User;


public interface UserRepositoryCustom {
	
	List<User> findAll(FilterUserDTO filterUserDTO);

}
