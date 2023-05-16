import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  basehttp:string = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  Login(email:string, senha:string){
    let Usuario = {
      email: email,
      senha: senha
    }
    const headers = {'Content-Type': 'application/json'};
    const body = JSON.stringify(Usuario)
    return this.http.post<any>(this.basehttp+"/login",body,{headers})
  }
  CriaConta(nome: string, email:string,senha:string){
    let Usuario = {
      nome: nome,
      email: email,
      senha: senha
    }
    const headers = {'Content-Type': 'application/json'};
    const body = JSON.stringify(Usuario)
   
   return this.http.post<any>(this.basehttp+"/criaconta",body,{headers})
  }
}
