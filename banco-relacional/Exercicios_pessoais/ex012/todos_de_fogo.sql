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


select 
`pokedex_kalos`.nome as Nome_do_pokemon,
group_concat(`tipos`.nome separator ', ') as Tipo_do_Pokemon

from `pokedex_kalos`

join `pokedex_tipo` on `pokedex_kalos`.id = `pokedex_tipo`.pokedex_id
join `tipos` on `pokedex_tipo`.tipo_id = `tipos`.id

where `tipos`.nome = 'Normal' 
and `tipos`.nome = 'Flying'

GROUP BY `pokedex_kalos`.id, `pokedex_kalos`.nome;
