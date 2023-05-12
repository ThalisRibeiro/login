import { Component } from '@angular/core';

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
  constructor() {
    this.email="";
    
  }
}
