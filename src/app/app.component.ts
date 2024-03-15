import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UserList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{

  usersList: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;
  ngOnInit() {
   setTimeout(() => {
    this.usersList = UserList
   }, 1000);
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }
}
