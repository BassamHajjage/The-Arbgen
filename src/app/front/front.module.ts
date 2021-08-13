import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontRoutingModule } from './front-routing.module';
import { FrontHelloComponentComponent } from './front-hello-component/front-hello-component.component';
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [
    FrontHelloComponentComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    FlexLayoutModule
  ]
})
export class FrontModule { }
