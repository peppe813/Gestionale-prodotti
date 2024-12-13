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
("PlayStation 5", 200, "Console Sony", 4, "Console");
