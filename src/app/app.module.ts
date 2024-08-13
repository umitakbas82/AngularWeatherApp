import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  {HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { WeathermainComponent } from './weathermain/weathermain.component';

@NgModule({
  declarations: [
    AppComponent,
    WeathermainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
