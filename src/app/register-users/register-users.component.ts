import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../User';

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css']
})

export class RegisterUsersComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }


    userObject: User = {
      firstName: '',
      lastName: '',
      pseudoName: '', 
      emaill: '',
       pwwd: ''
    };


  ngOnInit(): void {
    
  }

  
  submitForm(): void{
    this.auth.rigesterUser(this.userObject);
  }


 
}
