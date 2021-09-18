import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {
  public identity

  constructor(public _userService: UserService) { 
    this.identity = this._userService.getIdentidad()
  }

  ngOnInit(): void {
  }

}
