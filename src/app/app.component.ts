import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  constructor(private authService:AuthService){}

  ngOnInit(){
    this.authService.autoLogin();
    const loginUser=JSON.parse(localStorage.getItem('respData'));
   }
  
  }
