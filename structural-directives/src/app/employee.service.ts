import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule } from '@angular/common/http'
import { Iemployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string="/assets/data/employees.json";

  constructor(private http: HttpClient) { }
  getemployees(): Observable<Iemployee[]>{
return this.http.get<Iemployee[]>(this._url);  
  }
}
