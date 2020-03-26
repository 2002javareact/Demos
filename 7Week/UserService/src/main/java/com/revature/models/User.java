package com.revature.models;

public class User {

	private int userId;
	
	private double height;
	
	private String eyeColor;

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public double getHeight() {
		return height;
	}

	public void setHeight(double height) {
		this.height = height;
	}

	public String getEyeColor() {
		return eyeColor;
	}

	public void setEyeColor(String eyeColor) {
		this.eyeColor = eyeColor;
	}

	public User(int userId, double height, String eyeColor) {
		super();
		this.userId = userId;
		this.height = height;
		this.eyeColor = eyeColor;
	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", height=" + height + ", eyeColor=" + eyeColor + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((eyeColor == null) ? 0 : eyeColor.hashCode());
		long temp;
		temp = Double.doubleToLongBits(height);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + userId;
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
		User other = (User) obj;
		if (eyeColor == null) {
			if (other.eyeColor != null)
				return false;
		} else if (!eyeColor.equals(other.eyeColor))
			return false;
		if (Double.doubleToLongBits(height) != Double.doubleToLongBits(other.height))
			return false;
		if (userId != other.userId)
			return false;
		return true;
	}
	
	
	
}
