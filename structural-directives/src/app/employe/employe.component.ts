import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detail',
  template: `
  <h2>Employee detail</h2>
  <ul *ngFor="let employee of employees">
  <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
  </ul>
  `,
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  public employees = [];


  constructor(private _employeeservice: EmployeeService) { }

  ngOnInit() {
    this._employeeservice.getemployees()
    .subscribe(data => this.employees = data);
  }

}
