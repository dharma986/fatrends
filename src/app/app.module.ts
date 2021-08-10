import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';


import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';



@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxBootstrapIconsModule.pick(allIcons)
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
