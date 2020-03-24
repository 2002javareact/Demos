package com.revature.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Queue {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "queue_id")
	private int queueId;
	// I don't have to do anything to this and it will be saved in the DB
	private String name;
	
	
	@ManyToOne
	@JoinColumn(name = "owner", referencedColumnName = "user_id")
	@JsonBackReference// this annotation makes it so queue does not fetch the owner information stopping the circle that gets us stack overflow
	private Users owner;
	
	@ManyToMany// you can only use manytomany if the join table has exactly 2 columns that are both FKs
	@JoinTable(
			joinColumns = @JoinColumn(name = "queue_id", referencedColumnName = "queue_id"),
			inverseJoinColumns = @JoinColumn(name = "movie_id", referencedColumnName = "movie_id"))
	private List<Movies> movies;
	//if you want more columns, you have to build a model for the jointable itself and give that model two manytoones to the other two models
	//QueueMovies entity that has a manytoone with Queue and Movies


	public int getQueueId() {
		return queueId;
	}



	public void setQueueId(int queueId) {
		this.queueId = queueId;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public List<Movies> getMovies() {
		return movies;
	}



	public void setMovies(List<Movies> movies) {
		this.movies = movies;
	}



	public Queue(int queueId, String name, List<Movies> movies) {
		super();
		this.queueId = queueId;
		this.name = name;
		this.movies = movies;
	}



	public Queue() {
		super();
		// TODO Auto-generated constructor stub
	}



	@Override
	public String toString() {
		return "Queue [queueId=" + queueId + ", name=" + name + ", movies=" + movies + "]";
	}



	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((movies == null) ? 0 : movies.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + queueId;
		return result;
	}



	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Queue other = (Queue) obj;
		if (movies == null) {
			if (other.movies != null)
				return false;
		} else if (!movies.equals(other.movies))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (queueId != other.queueId)
			return false;
		return true;
	}
	
	

}
