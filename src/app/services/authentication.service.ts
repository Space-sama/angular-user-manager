import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})




export class AuthenticationService {

  URL_API: String = "http://localhost:7070"
  constructor(private httpClient:HttpClient, private router:Router) {

   }


   public loginUser(userData:any){
    return this.httpClient.post<any>(`${this.URL_API}/auth/login_user`, userData, {
      withCredentials:true,
    });
  }


  public rigesterUser(userData:any){
    return this.httpClient.post<any>(`${this.URL_API}/auth/register_user`, userData,
    {
      withCredentials: true,
    }).subscribe(

    (res:any) => {
    console.log(res);
    this.router.navigate(['/users/login'])
    })
  }

  userInfo(){
    // user Session
    
    const user:any = localStorage.getItem('token');
    const userObj:any = JSON.parse(user);

    
    console.log('Testing token...', userObj);
  
    const token = userObj.userToken;
    
    console.log('myToken', token)
    console.log('id', userObj.user._id);
    const header = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
  
    const options = {
      headers: header,
      'Content-Type': 'application/json',
      'Allow-Control-Access-Origin': '*',
    };
    console.log('haeder :', options);
    return this.httpClient.get(`http://localhost:7070/users/${userObj.user._id}`, options);
  }

  logoutUser(){

    const user:any = localStorage.removeItem('token');
    localStorage.clear();
    console.log('remove storage..................', user);
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    })

  }

}
