package br.com.cbfm.core.models;

import java.util.Set;

import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "clubes")
@SequenceGenerator(name = "idgen", sequenceName = "clubes_id_clube_seq", allocationSize = 1)
@AttributeOverride(name = "id", column = @Column(name = "id_clube"))
public class Clube extends AbstractEntity{
	
	private static final long serialVersionUID = 8120377000459073106L;
	
	
	private String nome;
	private String responsavel;
	private String email;
	private boolean ativo;
	private String cnpj;
	
    @ManyToOne
    @JoinColumn(name="id_federacao", nullable=false)
    private Federacao federacao;
    
	@JsonIgnore
	@OneToMany(mappedBy="clube")
    private Set<Atleta> atletas;
	
	public Set<Atleta> getAtletas() {
		return atletas;
	}

	public void setAtletas(Set<Atleta> atletas) {
		this.atletas = atletas;
	}

	public Federacao getFederacao() {
		return federacao;
	}

	public void setFederacao(Federacao federacao) {
		this.federacao = federacao;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getResponsavel() {
		return responsavel;
	}

	public void setResponsavel(String responsavel) {
		this.responsavel = responsavel;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean isAtivo() {
		return ativo;
	}

	public void setAtivo(boolean ativo) {
		this.ativo = ativo;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	} 
	
}
