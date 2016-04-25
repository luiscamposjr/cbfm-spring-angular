package br.com.cbfm.core.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.AttributeOverride;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;



@Entity
@Table(name = "users")
@SequenceGenerator(name = "idgen", sequenceName = "users_id_clube_seq", allocationSize = 1)
@AttributeOverride(name = "id", column = @Column(name = "id_user"))
public class User extends AbstractEntity{

	private static final long serialVersionUID = -1699635240666937661L;
	
	
	@Column(name = "username")
    private String username;   

	@Column(name = "password")
    private String password;   

	@Column(name = "email")
    private String email;
    
	@Column(name ="enabled")
	private int enabled;
	
	@ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinTable(
            name = "user_role",
            joinColumns = @JoinColumn(name = "id_user"),
            inverseJoinColumns = @JoinColumn(name = "id_role")
    )
    private Set<Role> roles = new HashSet<>();
	
	public User() {
	}

	public User(User user) {
		super.setId(user.getId());
		this.username = user.username;
		this.email = user.email;
		this.password = user.password;
		this.enabled = user.enabled;
	}

	public String getUserName() {
		return username;
	}

	public void setUserName(String userName) {
		this.username = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getEnabled() {
		return enabled;
	}

	public void setEnabled(int enabled) {
		this.enabled = enabled;
	}

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(final Set<Role> roles) {
        this.roles = roles;
    }
}
