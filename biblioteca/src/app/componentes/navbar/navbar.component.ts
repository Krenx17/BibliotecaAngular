import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [UserService]
})
export class NavbarComponent implements OnInit {
  public identity
  public token

  constructor(public _userService: UserService, private _router: Router) { 
    this.identity = this._userService.getIdentidad()
    this.token = this._userService.getToken2()
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear()
    this._router.navigate(['/home'])
  }

  home(){
    localStorage.removeItem('opcion')
  }

  book(){
    localStorage.setItem('opcion', 'libro')
  }

  maga(){
    localStorage.setItem('opcion', 'revista')
  }
}
