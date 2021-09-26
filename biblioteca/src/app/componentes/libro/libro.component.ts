import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/modelos/book.model';
import { BookService } from 'src/app/servicios/book.service';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss'],
  providers: [BookService]
})
export class LibroComponent implements OnInit {
  public identityn: any
  public id: any
  public identity
  public book

  constructor(public _bookService: BookService, public _userService: UserService) {
    this.book = new Book('', '', '', '', '', '', '', '','', 0, 0, 0, 0, 0),
    this.identity = this._userService.getIdentidad()
  }

  ngOnInit(): void {
    this.actualizar()
  }

  ebook(){
    this.id = localStorage.getItem('prestado')
    this._bookService.book(this.id).subscribe(
    response=> {
      this.book = response.libro
      console.log(this._userService.getIdentidad())
    }
    )
  }

  pedirprestado(){
    this._bookService.prestar(this.book._id).subscribe(
      response=>{
        this.actualizar()
      }
    )
  }

  actualizar(){
    this._userService.profile(this.identity._id).subscribe(
      response =>{
        this.identityn = response.userF
        console.log(response.userF)
        localStorage.setItem('identidad', JSON.stringify(this.identity))
        this.ebook()
      }
    )
  }
}
