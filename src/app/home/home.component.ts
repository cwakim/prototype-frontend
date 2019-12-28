import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  data: Object = [];

  constructor(private usersService: UsersService) { }

  /**
  * Returns the users
  * @param formData
  */
  getFilms(): void{
    this.usersService.getFilms(localStorage.getItem('token')).subscribe((res: any)=>{
        this.data = res.data;
    });
  }

  ngOnInit() {
    this.getFilms();
  }

}
