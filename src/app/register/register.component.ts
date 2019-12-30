// register.component.ts
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

   onClickSubmit(formData) {
     this.SpinnerService.show();
     this.usersService.registerUser(
       formData.name,
       formData.email,
       formData.password,
       formData.c_password
     ).subscribe((res : any)=>{
       if (!res.success)
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
