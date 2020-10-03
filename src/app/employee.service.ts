import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  public doRegistration(employee:Employee){
    return this.http.post("http://localhost:8080/api/create/",employee);
  }

  public getEmployee():Observable<any>{
    return this.http.get("http://localhost:8080/api/findAll");
  }

  public getEmplById(eid:number){
    return this.http.get("http://localhost:8080/api/findById/"+eid);
  }

  public updateEmployee(eid:number,employee:Employee){
    return this.http.put("http://localhost:8080/api/update/"+employee.eid,employee);
  }

  public deleteEmployee(eid:number){
    return this.http.delete("http://localhost:8080/api/delete/"+eid);
  }

  public findEmplById(email:string): Observable<Object>{
    return this.http.get("http://localhost:8080/api/findOne/"+email);
  }
}
