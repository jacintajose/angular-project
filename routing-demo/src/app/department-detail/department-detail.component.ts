import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
  <h3>You selected department with id = {{departmentid}}</h3>
  <a (click)="goprevious()">Previous </a>
  <a (click)="gonext()"> Next</a>

  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

public departmentid;
  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentid=id;
  }

  goprevious(){
    let previousid= this.departmentid - 1;
    this.router.navigate(['/departments', previousid]);

  }

  gonext(){
    let nextid= this.departmentid + 1;
    this.router.navigate(['/departments', nextid]);

  }

}
