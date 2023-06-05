import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private authService: AuthService) {  }

  login(email: string, password: string) {
    this.authService.login(email, password)
    .subscribe((data) => {
      console.log(data.access_token);
    })
  }



}
