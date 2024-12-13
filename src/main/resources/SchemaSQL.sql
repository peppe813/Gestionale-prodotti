create database gestionale_prodotti;
use gestionale_prodotti;
create table prodotti
(
id int primary key auto_increment,
nome varchar(250),
prezzo int,
decrizione varchar(250),
quantita int,
categoria varchar(250)
);

insert into prodotti
(nome,prezzo,descrizione,quantita,categoria)
values
("Xbox 360", 200, "Console microsoft", 4, "Console");
