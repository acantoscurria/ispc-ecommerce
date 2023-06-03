import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private api_url = 'https://fakestoreapi.com/users';

  constructor() { }

  createUser(user: any) {
    return fetch(this.api_url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
