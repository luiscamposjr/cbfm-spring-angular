package br.com.cbfm.core.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import br.com.cbfm.core.models.Role;
import br.com.cbfm.core.models.User;

public class CustomUserDetails extends User implements UserDetails{
	
	private static final long serialVersionUID = 1L;
	
	public CustomUserDetails(User user){
		super(user);
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
        List<SimpleGrantedAuthority> simpleGrantedAuthorities = new ArrayList<>();
        if (super.getRoles() != null) {
            for (Role role : super.getRoles()) {
                simpleGrantedAuthorities.add(new SimpleGrantedAuthority(role.getName()));
            }
        }
		
		return simpleGrantedAuthorities;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}
	
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}
	@Override
	public boolean isEnabled() {
		return true;
	}


	@Override
	public String getUsername() {
		return super.getUserName();
	}

}
