package br.com.cbfm.core.models;

import java.util.Collection;

import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "roles")
@SequenceGenerator(name = "idgen", sequenceName = "roles_id_clube_seq", allocationSize = 1)
@AttributeOverride(name = "id", column = @Column(name = "id_role"))
public class Role extends AbstractEntity {

	private static final long serialVersionUID = 4982450889599784727L;

	private String name;

    @JsonIgnore
    @ManyToMany(mappedBy = "roles")
    private Collection<User> users;

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public Collection<User> getUsers() {
        return users;
    }

    public void setUsers(Collection<User> users) {
        this.users = users;
    }

    public void addUser(final User user)
    {
        this.users.add(user);
    }
}