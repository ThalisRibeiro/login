import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css']
})
export class EsqueciSenhaComponent implements OnInit {
 formulario: FormGroup;
 
 constructor(private formBuilder: FormBuilder) {
  this.formulario = this.formBuilder.group({
    email:[null]
   }) 
  }
  ngOnInit(): void {
   
 }
 logForm(){
  console.log(this.formulario.value)
 }
}
