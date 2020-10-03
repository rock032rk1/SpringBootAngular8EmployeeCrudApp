package com.spring.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.spring.app.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer>{

	public List<Employee> findByEmail(String email);
}
