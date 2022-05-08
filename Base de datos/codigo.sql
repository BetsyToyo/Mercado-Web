create database mercado_web;

create table productos(id serial primary key,
						imagen varchar, 
						nombre varchar,
						precio varchar)	
						
insert into productos(imagen,nombre,precio)	values('banana.png','Bananas',1200),
												('cebollas.png','Cebollas',1000),
												('lechuga.png','Lechuga',800),
												('papas.png','Papas',700),
												('pimenton.png','Pimenton',500),
												('tomate.png','Tomate',2000)
					 