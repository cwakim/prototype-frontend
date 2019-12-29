import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  data: Object = [];

  constructor(private apiService: ApiService) { }

  /**
  * Returns the users
  * @param formData
  */
  getInfo(): void{
    this.apiService.getInfo(localStorage.getItem('token')).subscribe((res: any)=>{
        this.data = res.data;
    });
  }

  ngOnInit() {
    this.getInfo();
  }

}
