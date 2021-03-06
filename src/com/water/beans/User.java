package com.water.beans;

public class User {
	private long id;
	private String username;
	private String password;
	private String sex;
	private int age;
	private String email;
	private String cellphone;
	
	//default constructors
	public User() {}
	
	
	//minimal constructors
	public User(long id, String username, String password) {
		this.id = id;
		this.username = username;
		this.password = password;
	}
	
	//full constructors
	public User(long id, String username, String password, String sex, int age, String email, String cellphone) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.sex = sex;
		this.age = age;
		this.email = email;
		this.cellphone = cellphone;
	}
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
		
	
	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCellphone() {
		return cellphone;
	}

	public void setCellphone(String cellphone) {
		this.cellphone = cellphone;
	}

}
