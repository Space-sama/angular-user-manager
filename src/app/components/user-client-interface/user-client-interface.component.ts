import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/User';
import { UserServiceService } from 'src/app/services/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-user-client-interface',
  templateUrl: './user-client-interface.component.html',
  styleUrls: ['./user-client-interface.component.css']
})
export class UserClientInterfaceComponent implements OnInit {

  editStatus : string = '';
  userSavedToken:any;
  userObject: User = {
    _id: '', firstName: '', lastName: '', pseudoName:'', pwwd: '', emaill: ''
  };


  constructor(private routers: Router, private activatedRoute: ActivatedRoute,
     private userService: UserServiceService, private auth:AuthenticationService) {

   }

  ngOnInit(): void {
    //this.submitForm();
    this.spontaneousRoute();
    this.userSession();
  }

  public userSession(){
    
    this.auth.userInfo().subscribe(
      (res) =>{
        
        this.userSavedToken = res;
        console.log('Token -->', res);
      }, (err)=>{
        console.log('Token not found...', err);
      }
    )
  }


  spontaneousRoute(){
    const urlParam = this.activatedRoute.snapshot.paramMap.get('id');

    if(urlParam){
      this.userService.getOneUser(urlParam).subscribe(
        res => {
          this.editStatus = 'OK';
          console.log(res);
          this.userObject = res;
        }, err => console.log(err),
      )
    }
  }

  submitForm(){
    this.userService.addOneUser(this.userObject).subscribe(
      res => {
        this.routers.navigate(['/users']);
      },
      err => console.log(err)
    )
  }

  updateOneUser(){
    this.userService.updateOneUser(this.userObject._id, this.userObject).subscribe(
      res => {
        console.log(res);
        this.routers.navigate(['/users']);
      }, err => console.log(err),
    )
  }

}
