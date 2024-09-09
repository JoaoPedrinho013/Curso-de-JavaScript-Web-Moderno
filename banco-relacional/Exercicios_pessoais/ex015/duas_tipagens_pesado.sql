SELECT 
    `pokedex_kalos`.nome AS Nome_do_pokemon,
    GROUP_CONCAT(`tipos`.nome SEPARATOR ', ') AS Tipo_do_Pokemon,
    `pokedex_kalos`.peso AS Peso_do_Pokemon
FROM 
    `pokedex_kalos`
JOIN 
    `pokedex_tipo` ON `pokedex_kalos`.id = `pokedex_tipo`.pokedex_id
JOIN 
    `tipos` ON `pokedex_tipo`.tipo_id = `tipos`.id
GROUP BY 
    `pokedex_kalos`.id, `pokedex_kalos`.nome

where `tipos`.nome is not null > 0


select * from `pokedex_kalos`





SELECT 
    `pokedex_kalos`.id AS Num_dex_Poke,
    `pokedex_kalos`.nome AS Nome_do_pokemon,
    GROUP_CONCAT(`tipos`.nome SEPARATOR ', ') AS Tipo_do_Pokemon,
    `pokedex_kalos`.peso AS Peso_do_Pokemon
FROM 
    `pokedex_kalos`
JOIN 
    `pokedex_tipo` ON `pokedex_kalos`.id = `pokedex_tipo`.pokedex_id
JOIN 
    `tipos` ON `pokedex_tipo`.tipo_id = `tipos`.id
GROUP BY 
    `pokedex_kalos`.id, `pokedex_kalos`.nome, `pokedex_kalos`.peso
HAVING 
    COUNT(DISTINCT `tipos`.id) > 1
ORDER BY 
    `pokedex_kalos`.peso DESC;


