import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp',
  template: `
  <h2 *ngIf="displayname else elseblock">
  codevolution
  </h2>
  <ng-template #elseblock>
  <h2>
  name is hidden
  </h2>

<div *ngIf=display; then thenblock; else elseblock">
  <ng-template #thenblock>
  <h2>
  HELLO
  </h2>
  </ng-template>

  <ng-template #elseblock>
  <h2>
 HIDDEN
  </h2>
  </ng-template>

  `,
  styles: []
})
export class CompComponent implements OnInit {
displayname=false;
display=false;
  constructor() { }

  ngOnInit() {
  }

}
