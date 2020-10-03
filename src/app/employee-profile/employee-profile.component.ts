import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  employee:any;
  eid:number;
  constructor(private service:EmployeeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.employee=new Employee();
    this.eid=this.route.snapshot.params['eid'];
    this.service.getEmplById(this.eid)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

}
