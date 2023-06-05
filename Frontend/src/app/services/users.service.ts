import { Injectable } from '@angular/core';
import { User, CreateUserDto } from '../models/user.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private api_url = 'https://fakestoreapi.com/users';

  constructor( private http: HttpClient) { }

  // createUser(user: any) {
  //   return fetch(this.api_url, {
  //     method: 'POST',
  //     body: JSON.stringify(user),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  // }

  createUser(user: CreateUserDto) {
    return this.http.post<User>(this.api_url, user);
  }

  getAllUsers() {
    return this.http.get<User[]>(this.api_url);
  }


}
