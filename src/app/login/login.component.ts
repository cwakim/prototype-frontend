// login.component.ts
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})
export class LoginComponent implements OnInit {
   constructor(
     private usersService: UsersService,
     private _router: Router,
     private SpinnerService: NgxSpinnerService
   ) { }

   ngOnInit() {
   }

   /**
   * Logs in the user from the admin and redirects to home
   * @param formData
   */
   onClickSubmit(formData) {
     this.SpinnerService.show();
     this.usersService.getAccess(formData.email, formData.password).subscribe((res: any)=>{
       if (res.error)
       {
         alert(res.message);
       }
       else
       {
         localStorage.setItem('token', res['access_token']);
         this._router.navigate(['']);
       }
       this.SpinnerService.hide();
     });
   }
}
