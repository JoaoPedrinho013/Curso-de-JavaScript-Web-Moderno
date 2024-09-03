create table if not exists pokedex_kalos (
    id int unsigned not null auto_increment,
    nome VARCHAR(255) not null,
    tipo_um VARCHAR(255) not null,
    tipo_dois VARCHAR(255),
    altura decimal(10,2) not null,
    peso decimal(10,2) not null,
    primary key (id),
    unique key (nome)
)

select * from pokedex_kalos