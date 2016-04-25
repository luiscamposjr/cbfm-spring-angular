CREATE DATABASE IF NOT EXISTS cbfm;

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
	id_federacao INT NOT NULL,
  	CONSTRAINT clubes_pkey 
  		PRIMARY KEY (id_clube),
	CONSTRAINT constraint_fk_id_federacao 
		FOREIGN KEY (id_federacao)
		REFERENCES federacoes(id_federacao)
		ON UPDATE CASCADE
        ON DELETE RESTRICT
);

CREATE TABLE users
(
  id_user serial NOT NULL,
  username character varying(45) NOT NULL,
  password character varying(60) NOT NULL,
  email character varying(255) NOT NULL,
  enabled integer NOT NULL DEFAULT 1,
  CONSTRAINT users_pkey 
    PRIMARY KEY (id_user)
);

CREATE TABLE roles
(
  id_role serial NOT NULL,
  name character varying(255),
  CONSTRAINT roles_pkey PRIMARY KEY (id_role)
);

CREATE TABLE user_role
(
  id_user integer NOT NULL,
  id_role integer NOT NULL,
  CONSTRAINT user_role_pkey 
    PRIMARY KEY (id_user, id_role),
  CONSTRAINT constraint_fk_user_role
    FOREIGN KEY (id_role)
      REFERENCES roles (id_role) 
      MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);