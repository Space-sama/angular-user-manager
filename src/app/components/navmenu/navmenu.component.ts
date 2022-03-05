import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  userSavedToken:any;
  userRemovedToken:any;
  isLogin: boolean = false;

  ngOnInit(): void {
    this.userSession();
  }


  logout(){
    this.auth.logoutUser();
    
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

}
