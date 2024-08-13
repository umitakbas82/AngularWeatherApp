import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeathermainComponent } from './weathermain/weathermain.component';

const routes: Routes = [
  {path:"**",component:WeathermainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
