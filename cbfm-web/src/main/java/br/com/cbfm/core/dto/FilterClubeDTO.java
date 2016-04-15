package br.com.cbfm.core.dto;


public class FilterClubeDTO {
	
	private Long federacao;
	private String nome;
	private String responsavel;
	private String email;
	private String ativo;
	private String cnpj;

	public Long getFederacao() {
		return federacao;
	}

	public void setFederacao(Long federacaoId) {
		this.federacao = federacaoId;
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

	public String getAtivo() {
		return ativo;
	}

	public void setAtivo(String ativo) {
		this.ativo = ativo;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}
	
	

}
