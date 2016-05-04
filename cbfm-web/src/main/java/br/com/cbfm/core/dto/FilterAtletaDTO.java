package br.com.cbfm.core.dto;


public class FilterAtletaDTO {
	
	private Long federacao;
	private Long clube;
	private String nome;
	private String ativo;
	
	public Long getFederacao() {
		return federacao;
	}
	public void setFederacao(Long federacao) {
		this.federacao = federacao;
	}
	public Long getClube() {
		return clube;
	}
	public void setClube(Long clube) {
		this.clube = clube;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getAtivo() {
		return ativo;
	}
	public void setAtivo(String ativo) {
		this.ativo = ativo;
	}

	

}
