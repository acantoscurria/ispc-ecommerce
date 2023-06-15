import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public saveToken(token: string) {
    localStorage.setItem('access', token);
  }

  public getToken() {
    return localStorage.getItem('access');
  }

}
