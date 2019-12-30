// register.component.ts
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../app.component.css']
})
export class RegisterComponent implements OnInit {
   constructor(private usersService: UsersService, private _router: Router) { }

   ngOnInit() {
   }

   onClickSubmit(formData) {
     this.usersService.registerUser(
       formData.name,
       formData.email,
       formData.password,
       formData.c_password
     ).subscribe((res : any)=>{
       localStorage.setItem('token', res.data.token);
       this._router.navigate(['']);
     });
   }
}
