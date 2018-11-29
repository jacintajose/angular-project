import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
  <h2>
             Welcome {{name}}
             </h2>
             <h2>{{2+2}}</h2>
             <h2>{{"welcome  "+ name}}
             `,
  styles: []
})
export class TestComponent implements OnInit {

  constructor() { }
  public name="Jacinta"
  ngOnInit() {
  }

}
