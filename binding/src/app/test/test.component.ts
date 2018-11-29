import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
  
  <h2>
             Welcome {{name}}
             </h2>
             <h2>{{2+2}}</h2>
             <h2>{{"welcome  "+ name}}
             <h2>{{name.length}}</h2>
             <h2>{{name.toUpperCase()}}</h2>
             <h2>{{greetuser()}}</h2>
             <h2>{{siteurl}}</h2>
             <input [id]="myid" type="text" value="Jacinta">
             <input bind-disabled="isdisabled" id={{myid}} type="text" value="Jacinta">

             `,
  styles: []
})
export class TestComponent implements OnInit {

  constructor() { }
  public name="Jacinta";
  public siteurl=window.location.href;
  public myid="testid";
  public isdisabled=false;
  ngOnInit() {
  }
greetuser(){
  return "Hello"+this.name;
}
}
