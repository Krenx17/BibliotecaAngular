import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/modelos/book.model';
import { BookService } from 'src/app/servicios/book.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
  providers: [BookService]
})
export class PrincipalComponent implements OnInit {
  public book: Book
  public books: any

  constructor(public _bookService: BookService, private _router: Router) { 
    this.book = new Book('', '', '', '', '', '', '', '','', 0, 0, 0, 0, 0)
  }

  ngOnInit(): void {
    this.allBooks()
  }

  allBooks(){
    localStorage.removeItem('opcion')
    this._bookService.books().subscribe(
      response =>{
        this.books = response.libros
      }
    )
  }

  prestar(id: any){
    localStorage.setItem('prestado', id)
  }
}
