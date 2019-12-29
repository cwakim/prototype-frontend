import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  data: Object = [];
  isShow = false;

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

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  ngOnInit() {
    this.getInfo();
  }

}
