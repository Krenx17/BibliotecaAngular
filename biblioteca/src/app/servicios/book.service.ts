import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from '../modelos/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public headersvar = new HttpHeaders().set('Content-Type', 'application/json')
  public identity: any
  public opcion: any
  public token: any
  public url: String

  constructor(public _http: HttpClient) {
    this.url = environment.url
  }

  createBook(libro: Book): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())
    let data = JSON.stringify(libro)

    return this._http.post(this.url+'/create_book', data, {headers: headersToken})
  }

  editBook(libro: Book): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())
    let data = JSON.stringify(libro)

    return this._http.put(this.url+'/edit_book/'+libro._id, data, {headers: headersToken})
  }

  deleteBook(id: String): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())

    return this._http.delete(this.url+'/delete_book/'+id, {headers: headersToken})
  }

  books(): Observable<any>{
    return this._http.get(this.url+'/all_book', {headers: this.headersvar})
  }

  book(id: any): Observable<any>{
    return this._http.get(this.url+'/id_book/'+id, {headers: this.headersvar})
  }

  vermas(): Observable<any>{
    return this._http.get(this.url+'/buscado_book', {headers: this.headersvar})
  }

  copias(): Observable<any>{
    return this._http.get(this.url+'/copias_book', {headers: this.headersvar})
  }

  disponibles(): Observable<any>{
    return this._http.get(this.url+'/disponibles_book', {headers: this.headersvar})
  }

  prestar(id: any): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())

    return this._http.get(this.url+'/prestar_book/'+id, {headers: headersToken})
  }

  devolver(id: any): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())

    return this._http.post(this.url+'/devolver_book/'+id, {headers: headersToken})
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

  getOpcion(){
    var identidad2 = localStorage.getItem('opcion');
    if (identidad2 !="undefined"){
      this.opcion =identidad2
    }else{
      this.opcion = null
    }
    return this.opcion;
  }
}
