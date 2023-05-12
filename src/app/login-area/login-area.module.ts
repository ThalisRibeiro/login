import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input'; 

import { LoginAreaComponent } from './login-area.component';



@NgModule({
  declarations: [LoginAreaComponent],
  imports: [
    CommonModule,
    MatInputModule
  ],
  exports:[
    LoginAreaComponent
  ]
})
export class LoginAreaModule { }
