import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginAreaModule } from './login-area/login-area.module';
import { LoginAreaComponent } from './login-area/login-area.component';
import { EsqueciSenhaComponent } from './login-area/esqueci-senha/esqueci-senha.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component: LoginAreaComponent, title: 'Login'},
  {path:'forgotpassword', component: EsqueciSenhaComponent, title:"Esqueci minha senha"},
  {path:'home', component: HomeComponent, title:'Home'}
  // {path:'', loadChildren: ()=>LoginAreaModule}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
