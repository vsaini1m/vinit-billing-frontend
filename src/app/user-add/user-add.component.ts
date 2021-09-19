import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  constructor(private _snakebar:MatSnackBar, private _userservice:UserService) { }

  public user={
    name:'',
    username:'',
    phNumber:'',
    address:'',
    zipCode:'',
    
  };

  /*
  private String name;
	private String type;
	private String category;
	
	
	private String unitOfMesaurement;
	
	private String HSN;
	
	private String itemTexability;
	
	private String sgst;
	
	private String igst;
	

	private String cgst;
	
	private String rate;
*/
  ngOnInit(): void {
  }

  /**
   * formSubmit
   */
  public formSubmit() {
    if(this.user.username.length<2 
      || this.user.phNumber.length<10) {
      this._snakebar.open("Enter Valid data !!","ok");
    }else{
      
      
    this._userservice.addUser(this.user).subscribe(
      (data:any)=>{
        console.log(data)
        //this._snackBar.open("Registration successfull..","ok");

        Swal.fire('Successfully done !! ','User name is '+data.username,'success');
      },
      (error)=>{

        console.log(error)
        Swal.fire('Opps somethins went wrong !! ','Registration Faild','error'); 
       // this._snackBar.open("Registration Faild.","ok");
      }
    )
    }




  }
}
