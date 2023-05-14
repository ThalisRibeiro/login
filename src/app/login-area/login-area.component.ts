import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-area',
  templateUrl: './login-area.component.html',
  styleUrls: ['./login-area.component.css']
})
export class LoginAreaComponent implements OnInit{
  /**
   *
   */
  formulario: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      email:[null],
      senha:[null]
    })
  }
  ngOnInit(): void {
    // this.formulario = this.formBuilder.group({
    //   email:[null],
    //   senha:[null]
    // })
  }
  login(){
    console.log(this.formulario.value)
    this.router.navigate(['home'])
  }
}
