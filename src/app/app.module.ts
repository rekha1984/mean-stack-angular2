import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about';
import { EdituserComponent } from './about/edit-user';
import { AdduserComponent } from './about/add-user';
import { HomeComponent } from './home/home';
import {routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent, AboutComponent, HomeComponent, EdituserComponent, AdduserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
