import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modelos/user.model';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public userModel: User

  constructor(private _userService: UserService, private _router: Router) {
    this.userModel = new User('', '', '', '', '', '', '', '', [{libro:''}], [{libro:''}], '')
  }

  ngOnInit(): void {
  }

  register(){
    this._userService.register(this.userModel).subscribe(
      response =>{
        this._router.navigate(['/login'])
      }
    )
  }
}
