import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ContentModuleModule } from './content-module/content-module.module';
import { HomeComponent } from './content-module/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    ContentModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
