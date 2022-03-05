import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../User';

@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.component.html',
  styleUrls: ['./login-users.component.css']
})
export class LoginUsersComponent implements OnInit {

  constructor(private auth:AuthenticationService) {
    
   }


  userObject: User = {
    emaill: '', pwwd: ''
  };



  ngOnInit(): void {
  }


  submitForm(): void {
    this.auth.loginUser(this.userObject);
  }

}
