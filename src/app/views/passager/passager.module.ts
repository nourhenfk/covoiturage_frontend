import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassagerRoutingModule } from './passager-routing.module';

import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [

    HomeComponent,

  ],
  imports: [
    CommonModule,
    PassagerRoutingModule
  ]
})
export class PassagerModule { }
