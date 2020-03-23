package com.revature.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.models.Movies;

@Repository
public interface MoviesDao extends JpaRepository<Movies, Integer>{

}
