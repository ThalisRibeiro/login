import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      email:[null, [Validators.required, Validators.email]],
      senha:[null, [Validators.required, Validators.minLength(3)]]
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
    if(!this.existeCamposInvalidos())
      this.router.navigate(['home'])
  }
  existeCamposInvalidos(){
    if(this.isInvalid("email") || this.isInvalid('senha'))
      return true;
    return false;
  }
  getErrorMessage(campo: string){
    if(this.formulario.get(campo)?.hasError('required'))
      return 'Campo obrigatório'
    if(this.formulario.get(campo)?.hasError('email'))
      return 'Email inválido'
    if(this.formulario.get(campo)?.hasError('minlength'))
      return "Insira a quantidade minima de caracteres";
    return undefined;
  }
  isInvalid(campo:string): boolean{
    if (this.formulario.get(campo)?.invalid){
      // alert("Dados Invalidos");
      return true;
    }
    return false;
   }
}
