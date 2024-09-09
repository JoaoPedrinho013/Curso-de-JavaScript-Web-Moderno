SELECT COUNT(*)
FROM `pokedex_kalos`

join `pokedex_tipo` on `pokedex_kalos`.id = `pokedex_tipo`.pokedex_id
join `tipos` on `pokedex_tipo`.tipo_id = `tipos`.id

where `tipos`.nome = 'water'


