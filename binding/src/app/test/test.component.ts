import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
  <h2>
             Welcome {{name}}
             </h2>
             <h2>{{2+2}}</h2>
             <h2>{{"welcome  "+ name}}
             <h2>{{name.length}}
             <h2>{{name.toUpperCase()}}</h2>
             `,
  styles: []
})
export class TestComponent implements OnInit {

  constructor() { }
  public name="Jacinta"
  ngOnInit() {
  }

}
