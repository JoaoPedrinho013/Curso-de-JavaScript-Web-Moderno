select * from estados -- Aqui mostra todas(*) colunas

select sigla, nome as 'Nome do Estado' from estados -- "as" = "como/apelido"
where regiao = 'Sul' -- 'where' = "onde" // se rodar os 2 juntos so mostra as siglas e os nomes da regiao sul

select nome, regiao, populacao from estados 
WHERE populacao >= 10 -- esses 2 juntos retorna os que tem a populacao maior que 10M
order by populacao desc -- se rodar os 3 juntos mostra em ordem decrescente e contando a regra do >=10 