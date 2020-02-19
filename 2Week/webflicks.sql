drop table if exists queues_movies;
drop table if exists queues;
drop table if exists users;
drop table if exists roles;
drop table if exists movies;




create table roles (
	role_id serial primary key,
	role_name text not null
);


create table users (
-- first we put a column name, then its data type
	username text, 
	"password" text,
	user_id serial,
	email text,
	first_name text,
	last_name text,
	"role" int references roles (role_id),
	constraint users_pk primary key (user_id)
);

create table movies (
	movie_id serial primary key,
	title text,
	release_date date,
	production_company text default 'Ipso Facto',
	rating numeric(3,1) check (rating <= 10 and rating >= 0)
);

create table queues (
	queue_id serial primary key,
	"owner" int references users(user_id),
	"name" text
);


create table queues_movies (
	queue_id int references queues (queue_id),
	movie_id int references movies (movie_id),
	constraint queues_movies_pk primary key (queue_id, movie_id)
);

insert into roles(role_name)
			values('Admin'),
				  ('User');

insert into users (username, "password", email, first_name, last_name, "role")
			values('AmadHash', 'password', 'amad@schooliscool.com', 'Amad', 'Adil', 1),
				  ('cperry', 'password', 'charles@jsisverycool.net', 'Charles', 'Perry', 2),
				  ('abatson', 'password', 'abatson@jsisverycool.net', 'Alec', 'Batson', 1);

insert into movies (title,release_date,production_company,rating)
				   values('Hot Rod', '2007/08/03', 'Lonely Island', 6.7),
				  		 ('Avatar', '2010/09/15', 'James Cameron LLC', 9.2),
				  		 ('Back To The Future', '1985/07/03', 'Mad Scientists INC', 9.5);
				  		
insert into queues("owner", "name")
			values(1, 'Whatever'),
				  (1, 'I don''t care' ),
				  (2, 'it doesn''t Matter'),
				  (2, 'Nihilism'),
				  (3, 'Great Awesome Super Movies'),
				  (3, 'Movies that are a bummer');
				 
insert into queues_movies values (1, 2),
								(2,2),
								(2,3),
								(3,1),
								(3,3),
								(4,3),
								(5,1),
								(5,2),
								(5,3);


select * from movies;
