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
  </ng-template>

<div *ngIf="display; then thenblock; else elsblock"></div>
  <ng-template #thenblock>
  <h2>
  HELLO
  </h2>
  </ng-template>

  <ng-template #elsblock>
  <h2>
 HIDDEN
  </h2>
  </ng-template>

  <div [ngSwitch]="color">
  <div *ngSwitchCase ="'red'">You picked red color</div>
  <div *ngSwitchCase ="'blue'">You picked blue color</div>
  <div *ngSwitchCase ="'green'">You picked green color</div>
  <div *ngSwitchDefault>Pick Again</div>

<div>

  `,
  styles: []
})
export class CompComponent implements OnInit {
displayname=false;
display=true;
public color="red";
  constructor() { }

  ngOnInit() {
  }

}
