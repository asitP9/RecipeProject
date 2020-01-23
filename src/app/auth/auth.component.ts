import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from './auth.service';
import { Observable } from 'rxjs';
import {authResponseData} from './auth.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @ViewChild('auth',{static:false}) authenticateForm:NgForm;
  isLoginMode:boolean=true;
  isLoading:boolean=false;
  error:string=null;
  authObs=new Observable<authResponseData>();

  constructor(private authService:AuthService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
  }

  changeLoginMode(){
    this.isLoginMode=!this.isLoginMode;
  }

  authenticateUser(){
    this.isLoading=true;
    console.log("I am authenticated", this.authenticateForm);
    if(this.authenticateForm.invalid){
      return;
    }
    if(this.isLoginMode){
      this.authObs=this.authService.loginExistingUser(this.authenticateForm.value.emailModel, this.authenticateForm.value.passwordModel)
     
    }
    else{
      this.authObs=this.authService.authenticateNewUser(this.authenticateForm.value.emailModel, this.authenticateForm.value.passwordModel)
    }
    this.authObs.subscribe(
      data=>{
          this.isLoading=false;
          this.router.navigate(['../'],{relativeTo:this.route});

      },
      errorMsg=>{
        // console.log("loginCompo", errorMsg);
        this.error=errorMsg;
        // this.error="An error Occurred!!! "+error.error.error.message;
          // console.log("This is the error",error.error.error.message);
          this.isLoading=false;
      }
    );
    this.authenticateForm.reset();
  }
}
