package br.com.cbfm.core.models;

import java.util.Date;

import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;



@Entity
@Table(name = "atletas")
@SequenceGenerator(name = "idgen", sequenceName = "atletas_id_atleta_seq", allocationSize = 1)
@AttributeOverride(name = "id", column = @Column(name = "id_atleta"))
public class Atleta extends AbstractEntity{
	
	private static final long serialVersionUID = -3205179972465027117L;

	private String nome;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "data_nascimento", nullable = false)
	private Date dataNascimento;
	
	private boolean ativo;
	
	@ManyToOne
	@JoinColumn(name="id_clube", nullable=false)
	private Clube clube;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Date getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public boolean isAtivo() {
		return ativo;
	}

	public void setAtivo(boolean ativo) {
		this.ativo = ativo;
	}

	public Clube getClube() {
		return clube;
	}

	public void setClube(Clube clube) {
		this.clube = clube;
	}
	
	
	
}
