package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.daos.MoviesDao;
import com.revature.models.Movies;

@Service
public class MoviesServiceImpl implements MoviesService{
	
	private MoviesDao md;
	
	@Autowired
	public MoviesServiceImpl(MoviesDao md) {
		this.md = md;
	}

	@Override
	public List<Movies> getAllMovies() {
		// TODO Auto-generated method stub
		return md.findAll();
	}

	@Override
	public Movies saveNewMovie(Movies m) {
		// TODO Auto-generated method stub
		return md.save(m);
	}

	@Override
	public Movies getById(int id) {
		// TODO Auto-generated method stub
		return md.getOne(id);
	}

	@Override
	public Movies updateMovie(Movies m) {
		// TODO Auto-generated method stub
		Movies oldMovie = md.getOne(m.getMovieId());
		if(m.getMovieName() != null) {
			oldMovie.setMovieName(m.getMovieName());
		}
		if(m.getRating() != 0) {
			oldMovie.setRating(m.getRating());
		}
		if(m.getRuntime() != 0) {
			oldMovie.setRuntime(m.getRuntime());
		}
		return oldMovie;
	}

}
