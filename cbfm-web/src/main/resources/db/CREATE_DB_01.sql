CREATE DATABASE IF NOT EXISTS cbfm;

CREATE TABLE federacoes 
(
	id_federacao serial NOT NULL,
	uf VARCHAR(2),
	sigla VARCHAR(10),
	nome VARCHAR(50)
);