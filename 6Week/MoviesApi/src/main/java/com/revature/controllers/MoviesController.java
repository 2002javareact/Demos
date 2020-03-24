package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Movies;
import com.revature.models.Users;
import com.revature.services.MoviesService;

@RestController
@RequestMapping("movies")
public class MoviesController {
	
	private MoviesService ms;
	
	@Autowired
	public MoviesController(MoviesService ms) {
		this.ms = ms;
	}
	
	
	@GetMapping
	public ResponseEntity<List<Movies>> getAllMovies(){
		return new ResponseEntity(ms.getAllMovies(), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Movies> saveNewMovie(@RequestBody Movies m) {
		if(m.getMovieId() != 0) {
			return new ResponseEntity("movieId must be 0", HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity(ms.saveNewMovie(m), HttpStatus.CREATED);
	}
	
	@PatchMapping
	public ResponseEntity<Movies> updateMovie(@RequestBody Movies m){// will try and turn the body into the object type on its right
		if(m.getMovieId() == 0) {
			return new ResponseEntity("movieId must not be 0", HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity(ms.updateMovie(m), HttpStatus.CREATED);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Movies> getMovieById(@PathVariable int id){// will try and turn the body into the object type on its right
		if(id== 0) {
			return new ResponseEntity("movieId must not be 0", HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity(ms.getById(id), HttpStatus.CREATED);
	}
	

}
