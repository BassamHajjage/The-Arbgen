import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructureBaseComponent } from "./structure/structure-base/structure-base.component";
import { FrontHelloComponentComponent } from "./front/front-hello-component/front-hello-component.component";

const routes: Routes = [
  {
    path: '',
    component: StructureBaseComponent,
    children: [
        {
          path: '',
          component: FrontHelloComponentComponent,
          /*children: [
              {
                path: '',
                component: LandingComponent,
                children: [
                  {
                    path: 'fr',
                    component: LandingComponent,
                  },
                  {
                    path: 'en',
                    component: LandingComponent,
                  },
                ]
              },
              {
                path: 'faq',
                component: FaqComponent
              }
            ]*/
        }/*,
        {
          path: 'start',
          component: LoginComponent,
        }*/
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
