import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import{SharedModule} from '../shared/shared.module';
import { TopdesignersComponent } from './topdesigners/topdesigners.component';


@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    TopdesignersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
