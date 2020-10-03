package com.spring.app.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.app.model.Employee;
import com.spring.app.repository.EmployeeRepository;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class EmployeeController {

	@Autowired
	private EmployeeRepository empRepository;
	
	@GetMapping("/hi")
	public String index() {
		return "Hi How are you";
	}
	
	@PostMapping("/create")
	public Employee saveEmployee(@RequestBody Employee emp) {
		
		return empRepository.save(emp);
	}
	
	@GetMapping("/findAll")
	public List<Employee> findAllEmp(){
		
		return empRepository.findAll();
	}
	
	@GetMapping("/findById/{eid}")
	public Employee getById(@PathVariable("eid") Integer eid) {
		
		List<Employee> elist=empRepository.findAll();
		Employee e=elist.stream()
				 .filter(employee->eid.equals(employee.getEid()))
				 .findAny()
				 .orElse(null);
		return e;
	}
	
	@GetMapping("/findOne/{email}")
	//@ResponseBody
	public List<Employee> findByMail(@PathVariable("email") String email) {
		
		List<Employee> elist=empRepository.findByEmail(email);
		
		return elist;
	}
	
	@PutMapping("/update/{eid}")
	public Employee updateEmployee(@PathVariable("eid") Integer eid,@RequestBody Employee emp) {
		
		List<Employee> elist=empRepository.findAll();
		Employee e=elist.stream()
				 .filter(employee->eid.equals(employee.getEid()))
				 .findAny()
				 .orElse(null);
		
		e.setName(emp.getName());
		e.setMobile(emp.getMobile());
		e.setEmail(emp.getEmail());
		e.setDepartment(emp.getDepartment());
		e.setExperience(emp.getExperience());
		
		empRepository.save(e);
		
		return e;
		
	}
	
	@DeleteMapping("/delete/{eid}")
	public Map<String, Boolean> deleteById(@PathVariable("eid") Integer eid){
		
		List<Employee> elist=empRepository.findAll();
		Employee e=elist.stream()
				 .filter(employee->eid.equals(employee.getEid()))
				 .findAny()
				 .orElse(null);
		empRepository.delete(e);
		Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
	}
}
