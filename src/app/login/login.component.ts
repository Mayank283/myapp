import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../signup/user';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService,Md5]
})
export class LoginComponent {

  user: User = new User();
  errorMessage: string;

  constructor(private loginService: LoginService) { }

  login() {
    this.loginService.login(this.user).subscribe(
      any =>  console.log(any),
      error => this.errorMessage = <any>error);
  }
}
