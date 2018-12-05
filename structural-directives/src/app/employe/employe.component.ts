import { Component, OnInit } from '@angular/core';

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

  public employees = [
    {"id": 1, "name": "andrew","age":30},
    {"id": 2, "name": "mathew","age":38},
    {"id": 3, "name": "thomas","age":40},
    {"id": 4, "name": "riya","age":56}
  ];


  constructor() { }

  ngOnInit() {
  }

}
