CREATE DATABASE IF NOT EXISTS cbfm;

--CREATE TABLE federacoes 
--(
--	id_federacao serial NOT NULL,
--	uf VARCHAR(2),
--	sigla VARCHAR(10),
--	nome VARCHAR(50)
--);

CREATE TABLE federacoes
(
  id_federacao serial NOT NULL,
  uf VARCHAR(2),
  sigla VARCHAR(10),
  nome VARCHAR(50),
  CONSTRAINT federacoes_pkey 
  	PRIMARY KEY (id_federacao)
);

CREATE TABLE clubes 
(
	id_clube serial NOT NULL,
	nome VARCHAR(50),
	responsavel VARCHAR(50),
	ativo boolean,
	email VARCHAR(50),
	cnpj VARCHAR(50),
	federacao INT NOT NULL,
  	CONSTRAINT clubes_pkey 
  		PRIMARY KEY (id_clube),
	CONSTRAINT constraint_fk_id_federacao 
		FOREIGN KEY (federacao)
		REFERENCES federacoes(id_federacao)
		ON UPDATE CASCADE
        ON DELETE RESTRICT
);