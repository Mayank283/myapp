import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {SignupService} from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignupService]
})
export class SignupComponent {

  user : User = new User();
  errorMessage: string;
  constructor(private signupService:SignupService) { }
  submit(){
    this.signupService.submit(this.user)
                      .subscribe(
                        user  => this.user,
                        error =>  this.errorMessage = <any>error);
  }
}