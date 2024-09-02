select * from prefeitos;
select * from cidades;

select * from cidades inner join prefeitos on cidades.id = prefeitos.cidade_id;

select * from cidades left outer join prefeitos on cidades.id = prefeitos.cidade_id;

select * from cidades right join prefeitos on cidades.id = prefeitos.cidade_id;

--select * from cidades full join prefeitos on cidades.id = prefeitos.cidade_id;


select * from cidades left outer join prefeitos on cidades.id = prefeitos.cidade_id
union
select * from cidades right join prefeitos on cidades.id = prefeitos.cidade_id;