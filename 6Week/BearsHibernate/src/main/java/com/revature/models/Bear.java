package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;



@Entity//specifies that hibernate needs to map it to a table
@Table(name = "bear_table")
public class Bear {
	
	@Id//this specifies it is the primary key
	@Column(name = "bear_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)// identity type means that the database is incharge of generating the new values and postgresql does that through serial
	private int bearId;
	
	@Column(name = "bear_name", nullable = false) 
	private String bearName;
	
	private boolean sleeping;
	
	private String type;
	
	@ManyToOne
	@JoinColumn(name = "cave", referencedColumnName = "cave_id")
	private Cave cave;
	
	
	
	//alt+shift+s + crosh

	public int getBearId() {
		return bearId;
	}

	public void setBearId(int bearId) {
		this.bearId = bearId;
	}

	public String getBearName() {
		return bearName;
	}

	public void setBearName(String bearName) {
		this.bearName = bearName;
	}

	public boolean isSleeping() {
		return sleeping;
	}

	public void setSleeping(boolean sleeping) {
		this.sleeping = sleeping;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Cave getCave() {
		return cave;
	}

	public void setCave(Cave cave) {
		this.cave = cave;
	}

	public Bear(int bearId, String bearName, boolean sleeping, String type, Cave cave) {
		super();
		this.bearId = bearId;
		this.bearName = bearName;
		this.sleeping = sleeping;
		this.type = type;
		this.cave = cave;
	}

	public Bear() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Bear [bearId=" + bearId + ", bearName=" + bearName + ", sleeping=" + sleeping + ", type=" + type
				+ ", cave=" + cave + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + bearId;
		result = prime * result + ((bearName == null) ? 0 : bearName.hashCode());
		result = prime * result + ((cave == null) ? 0 : cave.hashCode());
		result = prime * result + (sleeping ? 1231 : 1237);
		result = prime * result + ((type == null) ? 0 : type.hashCode());
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
		Bear other = (Bear) obj;
		if (bearId != other.bearId)
			return false;
		if (bearName == null) {
			if (other.bearName != null)
				return false;
		} else if (!bearName.equals(other.bearName))
			return false;
		if (cave == null) {
			if (other.cave != null)
				return false;
		} else if (!cave.equals(other.cave))
			return false;
		if (sleeping != other.sleeping)
			return false;
		if (type == null) {
			if (other.type != null)
				return false;
		} else if (!type.equals(other.type))
			return false;
		return true;
	}

	

	
	
	

}
