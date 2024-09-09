SELECT 
    `pokedex_kalos`.nome AS Nome_do_pokemon,
    GROUP_CONCAT(`tipos`.nome SEPARATOR ', ') AS Tipo_do_Pokemon
FROM 
    `pokedex_kalos`
JOIN 
    `pokedex_tipo` ON `pokedex_kalos`.id = `pokedex_tipo`.pokedex_id
JOIN 
    `tipos` ON `pokedex_tipo`.tipo_id = `tipos`.id
GROUP BY 
    `pokedex_kalos`.id, `pokedex_kalos`.nome
HAVING 
    SUM(`tipos`.nome = 'Normal') > 0
    AND SUM(`tipos`.nome = 'Flying') > 0;

