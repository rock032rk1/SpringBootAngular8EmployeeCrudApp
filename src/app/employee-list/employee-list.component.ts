import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Observable, Subject } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

declare var $:any;
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  //employees:any;
  employees:Observable<Employee[]>
  employeelist:any;
  employee:Employee=new Employee();
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  isupdated=false;
  deleteMessage=false;
  constructor(private service:EmployeeService,private router:Router) { }

  ngOnInit() {

   // this.employees=this.service.getEmployee();

  //  $('button').on('click',function(){
  //       alert("How are you");
  //  });

  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };   
    this.service.getEmployee().subscribe(data =>{  
      this.employees =data;  
      this.dtTrigger.next();  
      })  

  }
  
// Delete Employee Logic Start
  deleteEmpById(eid:number){
    this.service.deleteEmployee(eid)
    .subscribe(  
      data => {  
        console.log(data);  
        this.deleteMessage=true;  
        this.service.getEmployee().subscribe(data =>{  
          this.employees =data  
          })  
      },  
      error => console.log(error));
  }
// Delete Employee Logic End

  // updateEmp(eid:number){
  //   this.router.navigate(['update',eid]);
  // }


  // Update Employee Logic Start
  updateEmployee(email: string){  
    this.service.findEmplById(email) 
      .subscribe(  
        data => {  
          this.employeelist=data             
        },  
        error => console.log(error));  
  }  

  employeeupdateform=new FormGroup({  
    eid:new FormControl(),  
    name:new FormControl(), 
    mobile:new FormControl(), 
    email:new FormControl(),  
    department:new FormControl(),
    experience:new FormControl()  
  }); 

  updateEmpl(updemp){  
    this.employee=new Employee();   
   this.employee.eid=this.EmployeeId.value;  
   this.employee.name=this.EmployeeName.value; 
   this.employee.mobile=this.EmployeeMobile.value; 
   this.employee.email=this.EmployeeEmail.value;  
   this.employee.department=this.EmployeeDepartment.value; 
   this.employee.experience=this.EmployeeExperience.value;  
   console.log(this.EmployeeDepartment.value);  

   this.service.updateEmployee(this.employee.eid,this.employee).subscribe(  
    data => {       
      this.isupdated=true;  
      this.service.getEmployee().subscribe(data =>{  
        this.employees =data  
        })  
    },  
    error => console.log(error));  
  }  
  
  get EmployeeMobile(){  
    return this.employeeupdateform.get('mobile');  
  } 
  
  get EmployeeDepartment(){  
    return this.employeeupdateform.get('department');  
  } 

  get EmployeeName(){  
    return this.employeeupdateform.get('name');  
  } 
  
  get EmployeeEmail(){  
    return this.employeeupdateform.get('email');  
  }  
  
  get EmployeeExperience(){  
    return this.employeeupdateform.get('experience');  
  }  
  
  get EmployeeId(){  
    return this.employeeupdateform.get('eid');  
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }

  // Update Employee Logic End

  // Employee Add Logic start

  addemployeeform=new FormGroup({  
    eid:new FormControl(),  
    name:new FormControl(), 
    mobile:new FormControl(), 
    email:new FormControl(),  
    department:new FormControl(),
    experience:new FormControl()  
  }); 


  addEmpl(addemp){  
    this.employee=new Employee();   
   this.employee.eid=this.AddEmployeeId.value;  
   this.employee.name=this.AddEmployeeName.value; 
   this.employee.mobile=this.AddEmployeeMobile.value; 
   this.employee.email=this.AddEmployeeEmail.value;  
   this.employee.department=this.AddEmployeeDepartment.value; 
   this.employee.experience=this.AddEmployeeExperience.value;  
   console.log(this.AddEmployeeDepartment.value);  

   this.service.doRegistration(this.employee).subscribe(  
    data => {       
      this.isupdated=true;  
      this.service.getEmployee().subscribe(data =>{  
        this.employees =data  
        })  
    },  
    error => console.log(error));  
  }  
  
  get AddEmployeeMobile(){  
    return this.addemployeeform.get('mobile');  
  } 
  
  get AddEmployeeDepartment(){  
    return this.addemployeeform.get('department');  
  } 

  get AddEmployeeName(){  
    return this.addemployeeform.get('name');  
  } 
  
  get AddEmployeeEmail(){  
    return this.addemployeeform.get('email');  
  }  
  
  get AddEmployeeExperience(){  
    return this.addemployeeform.get('experience');  
  }  
  
  get AddEmployeeId(){  
    return this.addemployeeform.get('eid');  
  }  
  
  changeisAdded(){  
    this.isupdated=false;  
  }
  // Employee Add Logic End


  // Employee get Profile Logic
  getById(eid:number){
    this.router.navigate(['profile',eid]);
  }

}
