INSERT INTO federacoes (id_federacao, uf, sigla, nome) VALUES (1, 'PB', 'FPFM', 'Federação Paraibana de Futebol de Mesa');
INSERT INTO federacoes (id_federacao, uf, sigla, nome) VALUES (2, 'RJ', 'FCFM', 'Federação Carioca de Futebol de Mesa');

INSERT INTO clubes (id_clube, nome, responsavel, ativo, email, cnpj, id_federacao) VALUES (1, 'São Paulo', "Respo. SPFC", true, "emailsp", "1111111111", 1);
INSERT INTO clubes (id_clube, nome, responsavel, ativo, email, cnpj, id_federacao) VALUES (2, 'Flamengo', "Flamengo Presidente", true, "emailflamego", "222222222", 2);

INSERT INTO atletas (id_atleta, nome, data_nascimento, ativo, id_clube) VALUES (1, 'Luis Campos', '1985-06-19', true, 1);

INSERT INTO roles (id_role, name) VALUES (1, 'ROLE_ADMIN');
INSERT INTO roles (id_role, name) VALUES (2, 'ROLE_USER');

INSERT INTO user_role (id_user, id_role) VALUES (1, 2);
INSERT INTO user_role (id_user, id_role) VALUES (2, 1);
INSERT INTO user_role (id_user, id_role) VALUES (2, 2);

INSERT INTO users (id_user, username, password, email, enabled) VALUES (1, 'luiscamposjr', '93044832', 'luiscamposjr@gmail.com', 1);
INSERT INTO users (id_user, username, password, email, enabled) VALUES (2, 'admin', '93044832', 'admin@cbfm.com', 1);
INSERT INTO users (id_user, username, password, email, enabled) VALUES (24, 'teste01', '93044832', 'teste01@gmail.com', 0);