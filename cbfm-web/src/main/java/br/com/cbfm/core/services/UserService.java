package br.com.cbfm.core.services;

import java.util.List;

import br.com.cbfm.core.dto.FilterUserDTO;
import br.com.cbfm.core.models.User;

public interface UserService {
	
	public List<User> findAll();
	public List<User> findAll(FilterUserDTO filterUserDTO);
	public User saveUser(User user);
	public User updateUser(User user);
	public void deleteUser(long id);

}
