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
    console.log(" getToken: "+localStorage.getItem('access'))
    return localStorage.getItem('access');
  }

}
