
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ConducteurRoutingModule } from './conducteur-routing.module';

import { ButtonModule, FormModule, GridModule, TableModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { NgxFileDropModule } from 'ngx-file-drop';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [
    HomeComponent,



  ],
  imports: [
    CommonModule,
    ConducteurRoutingModule,
    GridModule,
    FormModule,
    FormsModule,
    TableModule,
    ButtonModule,
    NgxFileDropModule,
    ReactiveFormsModule,

  ]
})
export class ConduteurModule { }
