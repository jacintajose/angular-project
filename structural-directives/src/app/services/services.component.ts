import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  template: `
  <h2>Employee list</h2>
  <ul *ngFor="let employees of employees">
  <li> {{employees.name}} </li>
  </ul>
  `,
  styles: []
})
export class ServicesComponent implements OnInit {

  public employees = [];


  constructor(private _employeeservice: EmployeeService) { }

  ngOnInit() {
    this._employeeservice.getemployees()
    .subscribe(data => this.employees = data);
  }

}
