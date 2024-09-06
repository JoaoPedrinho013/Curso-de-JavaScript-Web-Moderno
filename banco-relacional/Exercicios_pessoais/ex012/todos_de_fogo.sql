create table if not exists pokedex_tipo (
    pokedex_id int unsigned not null,
    tipo_id int unsigned not null,
    primary key (pokedex_id, tipo_id),
    foreign key (pokedex_id) references `pokedex_kalos`(id),
    foreign key (tipo_id) references `tipos`(id)
);



select * from pokedex_tipo
select * from tipos
select * from `pokedex_kalos`

drop table pokedex_tipo


SELECT 
    p.nome AS Nome_do_Pokemon,
    GROUP_CONCAT(t.nome SEPARATOR ', ') AS Tipo_do_Pokemon
FROM pokedex_kalos p
JOIN pokedex_tipo pt ON p.id = pt.pokedex_id
JOIN tipos t ON pt.tipo_id = t.id
WHERE t.nome = 'dark'
GROUP BY p.id, p.nome;

