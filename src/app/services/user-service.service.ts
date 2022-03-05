import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class UserServiceService {

  URL_API: String = "http://localhost:7070"
  constructor(private http:HttpClient) {
      
  }

  getAllUsers(): Observable<User[]> {
    // Get All 
    return this.http.get<User[]>(`${this.URL_API}/users`);
  }

  getOneUser(idUserToGet: string): Observable<User>{
    // Get One
    return this.http.get<User>(`${this.URL_API}/users/${idUserToGet}`);
  };


  addOneUser(userObj: User): Observable<User>{
    // Create One
    return this.http.post<User>(`${this.URL_API}/users`, userObj);
  };



  deleteOneUser(idUserToDelete: string): Observable<User>{
    return this.http.delete<User>(`${this.URL_API}/users/${idUserToDelete}`);
  };


  updateOneUser(idUserToEdit: any, userObj: User): Observable<User>{
    return this.http.put<User>(`${this.URL_API}/users/${idUserToEdit}`, userObj);
  };

}
