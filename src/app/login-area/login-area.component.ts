import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-area',
  templateUrl: './login-area.component.html',
  styleUrls: ['./login-area.component.css']
})
export class LoginAreaComponent {
  /**
   *
   */
  email: string;
  senha: string;
  constructor(private router: Router) {
    this.email="";
    this.senha="";
  }
  login(){
    this.router.navigate(['home'])
  }
}
