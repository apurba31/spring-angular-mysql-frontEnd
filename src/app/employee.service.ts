import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/api/v1/employees";

  constructor(private http:HttpClient) { }

  //get all employees
  getEmployeesList(): Observable<Employee[]>{
      return this.http.get<Employee[]>(`${this.baseUrl}`)
  }

  //create employee rest api
  createEmployee(employee: Employee): Observable<Object>{
      return this.http.post(`${this.baseUrl}`, employee);
  }

  //update employee by id
  updateEmployee(id: number, employee:Employee): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, employee);
  }

  //delete employee by id
  deleteEmployee(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }
}
