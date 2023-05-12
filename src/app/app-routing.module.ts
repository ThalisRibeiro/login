import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAreaComponent } from './login-area/login-area.component';

const routes: Routes = [
  {path:'', component: LoginAreaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
