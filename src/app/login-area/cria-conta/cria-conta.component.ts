import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cria-conta',
  templateUrl: './cria-conta.component.html',
  styleUrls: ['./cria-conta.component.css']
})
export class CriaContaComponent {
  formulario: FormGroup;

  constructor(private api:ApiService, private formBuilder: FormBuilder, private router:Router) {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email:[null, [Validators.required, Validators.email]],
      senha:[null, [Validators.required, Validators.minLength(3)]]
    })
  }

  criaConta(){
    console.log(this.formulario.value)
    if(!this.existeCamposInvalidos()){
      this.api.CriaConta(this.formulario.value.nome, this.formulario.value.email, this.formulario.value.senha).subscribe(res=>{
        console.log(res);
        alert(res.message);
      })
      this.router.navigate(['login'])
    }
  }
  existeCamposInvalidos(){
    if(this.isInvalid("nome")||this.isInvalid("email") || this.isInvalid('senha'))
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
