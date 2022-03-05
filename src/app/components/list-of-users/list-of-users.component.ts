import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/User';




@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css']
})



export class ListOfUsersComponent implements OnInit {

  users : User[] = [];

  constructor(private userService: UserServiceService, private auth: AuthenticationService) {

   }

   userSavedToken:any;

  ngOnInit(): void {
    this.getAllUsers();
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

  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      res => {
        this.users = res;
      },
      err => console.log(err),

    )
  }

  deleteOneUser(idUserToDelete: any){

    if(confirm("Are you sure ?")) {
      this.userService.deleteOneUser(idUserToDelete).subscribe(
        res => {
          this.getAllUsers();
        }, err => console.log(err),
      )
    }
  }

}
