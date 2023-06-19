import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("INterceptor: "+this.tokenService.getToken())
    request = this.addToken(request);
    return next.handle(request);
  }

  private addToken(request: HttpRequest<any>) {
    const token  = this.tokenService.getToken();
    console.log("INterceptor: Bearer "+token);
    if (token) {
      const authRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });
      return authRequest;
    }
    return request;
  }
}
