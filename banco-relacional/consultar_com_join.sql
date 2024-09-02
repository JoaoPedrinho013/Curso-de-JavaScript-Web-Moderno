select 
    estados.nome as Estado,
    cidades.nome as Cidade,
    regiao as Região
from estados, cidades where `estados`.id = `cidades`.estado_id;


select 
    estados.nome as Estado,
    cidades.nome as Cidade,
    regiao as Região
from estados inner join cidades on `estados`.id = `cidades`.estado_id;
