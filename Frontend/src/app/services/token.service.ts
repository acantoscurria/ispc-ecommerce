import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public saveToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  public getToken() {
    return localStorage.getItem('access_token');
  }

}
