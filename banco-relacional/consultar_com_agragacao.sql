select regiao as 'Região', sum(populacao) as Total from `estados`-- sum soma todas populacao
GROUP BY regiao
order by Total desc

select avg(populacao) as Total from `estados` -- avg faz a media, pega todas populacao e soma e dps divide com a quantidade de estados/linhas