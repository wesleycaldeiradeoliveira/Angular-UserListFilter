import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UserList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { isWithinInterval } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  userSelected: IUser = {} as IUser;
  usersListFiltered: IUser[] = [];
  showUserDetails: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UserList;
      this.usersListFiltered = this.usersList;
    }, 1000);
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }
  onFilter(filterOptions: IFilterOptions) {
    console.log(filterOptions);

    this.usersListFiltered = this.filterUsersList(
      filterOptions,
      this.usersList
    );
  }
  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filterUsersListByName(filterOptions.name, usersList);
    filteredList = this.filterUsersListByStatus(filterOptions.status, filteredList);
    filteredList = this.filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
  } 
  
  filterUsersListByDate(startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] {
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if(DATES_NOT_SELECTED) {
      return usersList;
    }

    const checkDateInterval = (user: IUser) => isWithinInterval(new Date(user.dataCadastro), {
      start: startDate,
      end: endDate,
    });

    const listFiltered = usersList.filter(checkDateInterval);

    return listFiltered;
  }

  filterUsersListByStatus(status: boolean | undefined, usersList: IUser[]): IUser[] {
     const STATUS_NOT_SELECTED = status === undefined;

    if(STATUS_NOT_SELECTED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.ativo === status);

    return filteredList;
  }

  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;

    if(NAME_NOT_TYPPED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));

    return filteredList;
  }
}
