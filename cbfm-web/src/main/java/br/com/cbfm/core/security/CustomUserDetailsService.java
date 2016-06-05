package br.com.cbfm.core.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.cbfm.core.models.User;
import br.com.cbfm.core.repositories.UserRepository;

@Service
public class CustomUserDetailsService  implements UserDetailsService { 
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		User user = userRepository.findOneByUsername(username);
		
		if(null == user){
			throw new UsernameNotFoundException("No user present with username: "+username);
		}else{
			return new CustomUserDetails(user);
		}
	}

}
