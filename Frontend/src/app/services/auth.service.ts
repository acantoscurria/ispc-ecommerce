import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Auth } from '../models/auth.models';
import { TokenService } from './token.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://localhost:8000";

  constructor(

    private http: HttpClient,
    private tokenService: TokenService

    ) { }

  login(email: string, password: string) {
    return this.http.post<Auth>(this.url + '/api/usuarios/token/', {email, password}).
    pipe(
      tap((data) => {
        this.tokenService.saveToken(data.access);

      })
    )
  }
}
