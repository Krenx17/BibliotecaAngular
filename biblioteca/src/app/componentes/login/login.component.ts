import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modelos/user.model';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public userModel: User
  public token: any
  public identity: any

  constructor(private _userService: UserService, private _router: Router) {
    this.userModel = new User('', '', '', '', '', '', '', '', [{libro:''}], [{libro:''}], '')
  }

  ngOnInit(): void {
  }

  login(){
    this._userService.login(this.userModel).subscribe(
      response =>{
        this.identity = response.obtainedUser
        localStorage.setItem('identidad', JSON.stringify(this.identity))
        this.getToken()
      }
    )
  }

  getToken(){
    this._userService.login(this.userModel, 'true').subscribe(
      response =>{
        this.token = response.token
        localStorage.setItem('token', this.token)
        this._router.navigate(['/home'])
      }
    )
  }
}
