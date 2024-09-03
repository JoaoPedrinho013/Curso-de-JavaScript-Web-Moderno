alter table empresas modify cnpj varchar(14)

insert into empresas (nome , cnpj)
values ('Bradesco', 93475643756854), ('Vale', 28345673456295), ('Cielo', 09574658236543);

desc empresas;
desc `prefeitos`;
select * from empresas;
select * from cidades;
select * from empresas_unidades

insert into empresas_unidades ( empresa_id, cidade_id, sede)
values (1, 1, 1), (1, 2, 0), (2, 1, 0), (2, 2, 1);