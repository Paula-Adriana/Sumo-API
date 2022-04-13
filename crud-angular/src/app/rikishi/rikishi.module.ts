import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { RikishiRoutingModule } from './rikishi-routing.module';
import { RikishiComponent } from './rikishi/rikishi.component';



@NgModule({
  declarations: [
    RikishiComponent
  ],
  imports: [
    CommonModule,
    RikishiRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class RikishiModule { }
