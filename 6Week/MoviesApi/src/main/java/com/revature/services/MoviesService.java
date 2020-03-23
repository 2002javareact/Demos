package com.revature.services;

import java.util.List;

import com.revature.models.Movies;

public interface MoviesService {
	
	public List<Movies> getAllMovies();
	public Movies saveNewMovie(Movies m);
	public Movies getById(int id);
	public Movies updateMovie(Movies m);
	
}
