import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { LoginAreaComponent } from './login-area.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';



@NgModule({
  declarations: [LoginAreaComponent, EsqueciSenhaComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginAreaComponent,
    EsqueciSenhaComponent
  ]
})
export class LoginAreaModule { }
