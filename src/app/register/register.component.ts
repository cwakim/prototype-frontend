// register.component.ts used for registering users into the admin
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../app.component.css']
})
export class RegisterComponent implements OnInit {
   constructor(
     private usersService: UsersService,
     private _router: Router,
     private SpinnerService: NgxSpinnerService
   ) { }

   ngOnInit() {
   }

   /**
   * Submits the register form to the admin and handles the error if any.
   * Also redirects to the home on success after creating a token in the local storage
   * @param formData
   */
   onClickSubmit(formData) {
     this.SpinnerService.show();
     this.usersService.registerUser(
       formData.name,
       formData.email,
       formData.password,
       formData.c_password
     ).subscribe((res : any)=>{
       if (res.error)
       {
         alert(res.message);
       }
       else
       {
         localStorage.setItem('token', res.data.token);
         this._router.navigate(['']);
       }
       this.SpinnerService.hide();
     });
   }
}
