package com.revature.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Bear {
	
	@Id
	private int bearId;
	
	private String bearName;

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

	public Bear(int bearId, String bearName) {
		super();
		this.bearId = bearId;
		this.bearName = bearName;
	}

	public Bear() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Bear [bearId=" + bearId + ", bearName=" + bearName + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + bearId;
		result = prime * result + ((bearName == null) ? 0 : bearName.hashCode());
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
		return true;
	}
	
	

}
