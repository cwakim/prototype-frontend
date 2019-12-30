import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: Object = [];
  isShow = false;

  constructor(private apiService: ApiService) { }

  /**
  * Gets the needed information from the server and sets them in the data variable
  */
  getInfo(): void{
    this.apiService.getInfo(localStorage.getItem('token')).subscribe((res: any)=>{
        this.data = res.data;
    });
  }

  /**
  * Toggles the display of the answers container
  */
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  ngOnInit() {
    this.getInfo();
  }

}
