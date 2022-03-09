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


 
  constructor(private auth:AuthenticationService, private router:Router) {
    
  }

  errorMsg:any;
  userObject: User = {
    emaill: '', pwwd: ''
  };



  ngOnInit(): void {
  }


  submitForm(): void {
    this.auth.loginUser(this.userObject).subscribe(

      (res:any) => {
      console.log(res);
      localStorage.setItem('token', JSON.stringify(res))
      this.router.navigate(['/users']).then(() => {
        window.location.reload();
      }, (error) => {
        console.log(error);
        this.errorMsg=error;
      });

    });
  }

}


