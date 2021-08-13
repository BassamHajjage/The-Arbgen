import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureBaseComponent } from './structure-base/structure-base.component';
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    StructureBaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class StructureModule { }
