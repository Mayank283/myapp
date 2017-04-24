import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../signup/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

  user: User = new User();
  errorMessage: string;

  constructor(private loginService: LoginService) { }

  login() {
    this.loginService.login(this.user).subscribe(
      user => this.user,
      error => this.errorMessage = <any>error);
  }
}
