import { Component, OnInit } from '@angular/core';
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

  constructor(public _bookService: BookService) { 
    this.book = new Book('', '', '', '', '', '', '', '','', 0)
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
}
