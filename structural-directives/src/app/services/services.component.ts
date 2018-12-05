import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-list',
  template: `
  <h2>Employee list</h2>
  <ul *ngFor="let employee of employees">
  <li> {{employee.name}} </li>
  </ul>
  `,
  styles: []
})
export class ServicesComponent implements OnInit {

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
