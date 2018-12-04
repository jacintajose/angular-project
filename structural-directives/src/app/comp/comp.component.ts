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

</div>

 <div *ngFor="let col of colors; index as i">
 <h3>{{i}} {{col}}</h3>
 </div>
 <div *ngFor="let col of colors; first as f">
 <h3>{{f}} {{col}}</h3>
 </div>
 <div *ngFor="let col of colors; last as l">
 <h3>{{l}} {{col}}</h3>
 </div>
 <div *ngFor="let col of colors; odd as o">
 <h3>{{o}} {{col}}</h3>
 </div>
 <div *ngFor="let col of colors; even as e">
 <h3>{{e}} {{col}}</h3>
 </div>


  `,
  styles: []
})
export class CompComponent implements OnInit {
displayname=false;
display=true;
public color="red";
public colors=["red", "blue", "green", "yellow"];
  constructor() { }

  ngOnInit() {
  }

}
