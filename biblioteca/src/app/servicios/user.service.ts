import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../modelos/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public headersvar = new HttpHeaders().set('Content-Type', 'application/json')
  public identity: any
  public token: any
  public url: String

  constructor(public _http: HttpClient) { 
    this.url = environment.url
  }

  login(usuario: User, getToken = ' '): Observable<any>{
    if (getToken !=''){
      usuario.getToken = getToken
    }
    let data = JSON.stringify(usuario)

    return this._http.post(this.url+'/login', data, {headers: this.headersvar})
  }

  register(usuario: User): Observable<any>{
    let data = JSON.stringify(usuario)

    return this._http.post(this.url+'/register', data, {headers: this.headersvar})
  }

  user(usuario: User): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())
    let data = JSON.stringify(usuario)

    return this._http.post(this.url+'/create_user', data, {headers: headersToken})
  }

  editUser(usuario: User): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())
    let data = JSON.stringify(usuario)

    return this._http.put(this.url+'/edit_user/'+usuario._id, data, {headers: headersToken})
  }

  deleteUser(id: String): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())

    return this._http.delete(this.url+'/delete_user/'+id, {headers: headersToken})
  }

  users(): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())

    return this._http.get(this.url+'/all_users', {headers: headersToken})
  }

  profile(id: any): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())

    return this._http.get(this.url+'/idUser/'+id, {headers: headersToken})
  }

  getToken2(){
    var token2 = localStorage.getItem('token')
    if (token2 !="undefined"){
      this.token =token2
    }else{
      this.token = null
    }
    return this.token;
  }

  getIdentidad(){
    var identidad2 = JSON.parse(localStorage.getItem('identidad') || '{}');
    if (identidad2 !="undefined"){
      this.identity =identidad2
    }else{
      this.identity = null
    }
    return this.identity;
  }
}
