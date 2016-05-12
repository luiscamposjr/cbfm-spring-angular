package br.com.cbfm.core.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.cbfm.core.dto.FilterUserDTO;
import br.com.cbfm.core.models.User;
import br.com.cbfm.core.repositories.UserRepository;
import br.com.cbfm.core.services.UserService;

@Service
@Transactional
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRepository;

	public User saveUser(User user) {
		return userRepository.save(user);
	}

	public User updateUser(User user) {
		return userRepository.save(user);
	}

	public void deleteUser(long id) {
		userRepository.delete(id);
	}

	public List<User> findAll() {
		return (List<User>) userRepository.findAll();
	}

	public List<User> findAll(FilterUserDTO filterUserDTO) {
		return (List<User>) userRepository.findAll(filterUserDTO);
	}

}
