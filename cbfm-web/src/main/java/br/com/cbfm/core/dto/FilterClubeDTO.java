package br.com.cbfm.core.dto;


public class FilterClubeDTO {
	
	private Long federacaoId;
	private String nome;
	private String responsavel;
	private String email;
//	private boolean ativo;
	private String cnpj;

	public Long getFederacaoId() {
		return federacaoId;
	}

	public void setFederacaoId(Long federacaoId) {
		this.federacaoId = federacaoId;
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

//	public boolean isAtivo() {
//		return ativo;
//	}
//
//	public void setAtivo(boolean ativo) {
//		this.ativo = ativo;
//	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}
	
	

}
