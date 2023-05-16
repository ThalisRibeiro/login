import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  basehttp:string = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  Login(email:string, senha:string){
    
  }
  CriaConta(nome: string, email:string,senha:string){
    let Usuario = {
      nome: nome,
      email: email,
      senha: senha
    }
    this.http.post(this.basehttp+"/criaconta",{
      nome: nome,
      email: email,
      senha: senha
    })
  }
}
