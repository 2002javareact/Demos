set schema 'chinook';



select * from "Artist" where "ArtistId" = 127;

select * from "Album" where "ArtistId" = 127 and "Title" like '_a%';

select * from "Album" where ("ArtistId" > 100 and not "ArtistId" <> 101) or ("ArtistId" = 27) ;

select count(*) from "Track" where "TrackId" in 
	(select "TrackId" from "PlaylistTrack" where "PlaylistId" in 
		(select "PlaylistId" from "PlaylistTrack" where "TrackId" in 
			(select "TrackId" from "Track" where "AlbumId" in 
				(select "AlbumId" from "Album" where "ArtistId" = 
					(select "ArtistId" from "Artist" where "Name" like 'Red Hot Chili Peppers')))))
and "TrackId" not in 
	(select "TrackId" from "Track" where "AlbumId" in 
		(select "AlbumId" from "Album" where "ArtistId" = 
			(select "ArtistId" from "Artist" where "Name" like 'Red Hot Chili Peppers')))	