package com.spring.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="emp_springboot_angular8_crudapp")
public class Employee {

	@Id
	@GeneratedValue
	private int eid;
	private String name;
	private String mobile;
	private String email;
	private String department;
	private int experience;
	
	public Employee() {
		// TODO Auto-generated constructor stub
	}

	public Employee(String name, String mobile, String email, String department, int experience) {
		super();
		this.name = name;
		this.mobile = mobile;
		this.email = email;
		this.department = department;
		this.experience = experience;
	}

	public int getEid() {
		return eid;
	}

	public void setEid(int eid) {
		this.eid = eid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public int getExperience() {
		return experience;
	}

	public void setExperience(int experience) {
		this.experience = experience;
	}
	
	
}
