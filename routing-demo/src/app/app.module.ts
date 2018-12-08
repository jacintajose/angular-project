import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponenets } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
   routingComponenets,
   AppRoutingModule
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routingComponenets
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
