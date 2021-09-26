import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modelos/user.model';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  public userModel: User
  public usuarios: any
  public token: any

  constructor(private _userService: UserService) {
    this.userModel = new User('', '', '', '', '', '', '', '', [{libro:''}], [{libro:''}], '')
  }

  ngOnInit(): void {
    this.users()
  }

  newUser(){}

  users(){
    this._userService.users().subscribe(
      response =>{
        this.usuarios = response.users
      }
    )
  }

  oneUser(){}

  editUser(){}

  deleteUser(){}

}
