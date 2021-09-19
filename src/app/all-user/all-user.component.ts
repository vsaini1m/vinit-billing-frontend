import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  constructor(private _service:UserService) { }

  users:any;
  ngOnInit(): void {
    this._service.getAllUser().subscribe((data:any)=>{
      this.users=data;

      console.log(this.users);
      
    },
    (error:any)=>{
        //error 
        alert("error in loading all quizzess")
    })
  }


  /**
   * getAllUsers
   */
  public getAllUsers() {
    this._service.getAllUser().subscribe((data:any)=>{
      this.users=data;

      console.log(this.users);
      
    },
    (error:any)=>{
        //error 
        alert("error in loading all quizzess")
    })
  }
}
