import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
    
   }

  /**
   * addUser
   */
  public addUser(user:any) {
    return this.http.post("http://localhost:8080/v1/vinit/billing/soft/api/user/",user);
  }


  public getAllUser() {
    return this.http.get("http://localhost:8080/v1/vinit/billing/soft/api/user/all/");
  }
}