import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { EmployeComponent } from './employe/employe.component';
import {EmployeeService} from './employee.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    PipesComponent,
    ServicesComponent,
    EmployeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClient
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
