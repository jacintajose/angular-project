import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
  <h2>{{name}}</h2>
  <h2>{{name | lowercase}}</h2>
  <h2>{{name | uppercase}}</h2>
  <h2>{{message | titlecase}}</h2>
  <h2>{{name | slice:5}}</h2>
  <h2>{{person | json}}</h2>

  <h2>{{1.2.345 | number:'1.2-3'}}</h2>
  <h2>{{1.2.345 | number:'3.4-5'}}</h2>
  <h2>{{1.2.345 | number:'3.1-2'}}</h2>
  <h2>{{0.45 | percent}}</h2>
  <h2>{{0.45 | currency}}</h2>



  `,
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
public name="Jacinta Jose";
public message="Welcome Jacinta";
public person ={
  firstname : "Tom",
  lastname : "Victor"
}
  constructor() { }

  ngOnInit() {
  }

}
