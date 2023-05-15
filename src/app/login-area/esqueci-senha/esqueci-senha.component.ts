import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css']
})
export class EsqueciSenhaComponent implements OnInit {
 formulario: FormGroup;
 
 constructor(private formBuilder: FormBuilder, private location: Location) {
  this.formulario = this.formBuilder.group({
    email:[null, [Validators.required,Validators.email]]
   }) 
  }
  ngOnInit(): void {
   
 }
 logForm(){
  console.log(this.formulario.value);
  let valoresForm = this.formulario.value;
  console.log(valoresForm.email);
  if(this.existeCamposInvalidos()==false)
  this.voltar();
 }
 existeCamposInvalidos():boolean{
  if(this.isInvalid("email"))
  return true; 
  return false;
 }
 isInvalid(campo:string): boolean{
  if (this.formulario.get(campo)?.invalid){
    // alert("Dados Invalidos");
    return true;
  }
  return false;
 }
 getErrorMessage(campo:string):string | undefined{
     
  if(this.formulario.get(campo)?.hasError("email"))
    return "Email invalido";
  if(this.formulario.get(campo)?.hasError("required"))
    return "Insira um email";
  return undefined;
 }
 voltar(){
  this.location.back();
 }
}
