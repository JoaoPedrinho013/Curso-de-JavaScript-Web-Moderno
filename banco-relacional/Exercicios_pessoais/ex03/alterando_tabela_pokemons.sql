alter table pokedex_kalos
add constraint fk_pokedex_tipo_um -- esse add constraint é um nome que referencia a foreing key, não é obrigatorio por, mas se usar fica mais facil fazer mudanças,
foreign key (tipo_um) references tipos(nome), 
add constraint fk_pokedex_tipo_dois -- se nao usar ela, o bando de dados cria uma aleatoria, deixando mais complicado acessar
foreign key (tipo_dois) references tipos(nome);


desc `pokedex_kalos`

select * from pokedex_kalos
