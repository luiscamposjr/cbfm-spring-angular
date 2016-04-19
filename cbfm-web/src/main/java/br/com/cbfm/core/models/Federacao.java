package br.com.cbfm.core.models;

import java.util.Set;

import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "federacoes")
@SequenceGenerator(name = "idgen", sequenceName = "federacoes_id_federacao_seq", allocationSize = 1)
@AttributeOverride(name = "id", column = @Column(name = "id_federacao"))
public class Federacao extends AbstractEntity{
	
	
	private static final long serialVersionUID = 9025004657033297345L;
	
	private String sigla;
	private String uf;
	private String nome;	
	
	@JsonIgnore
	@OneToMany(mappedBy="federacao")
    private Set<Clube> clubes;
	
	public Set<Clube> getClubes() {
		return clubes;
	}
	public void setClubes(Set<Clube> clubes) {
		this.clubes = clubes;
	}
	public String getSigla() {
		return sigla;
	}
	public void setSigla(String sigla) {
		this.sigla = sigla;
	}
	public String getUf() {
		return uf;
	}
	public void setUf(String uf) {
		this.uf = uf;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}

	
}
