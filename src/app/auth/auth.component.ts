import { Component, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from './auth.service';
import { Observable, Subscription } from 'rxjs';
import {authResponseData} from './auth.service'
import { ActivatedRoute, Router } from '@angular/router';
import {AlertComponent} from '../shared/alert/alert.component';
import { PlaceHolderDirective } from '../shared/place-holder/place-holder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  @ViewChild('auth',{static:false}) authenticateForm:NgForm;
  @ViewChild(PlaceHolderDirective,{static:false}) alertHost:PlaceHolderDirective;
  componentDismissSub:Subscription;
  isLoginMode:boolean=true;
  isLoading:boolean=false;
  authError:string=null;
  authObs=new Observable<authResponseData>();

  constructor(private authService:AuthService, private route:ActivatedRoute, private router:Router, private componentResolveFactory:ComponentFactoryResolver) { }

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
        this.authError=errorMsg;
        this.showErrorAlert(errorMsg);
        // this.error="An error Occurred!!! "+error.error.error.message;
          // console.log("This is the error",error.error.error.message);
          this.isLoading=false;
      }
    );
    this.authenticateForm.reset();
  }
  showErrorAlert(message:string){
    const alertCompFactory=this.componentResolveFactory.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef=this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentCreation=hostViewContainerRef.createComponent(alertCompFactory);
    componentCreation.instance.message=message;
    this.componentDismissSub=componentCreation.instance.closeComponent.subscribe(
      ()=>{
          this.componentDismissSub.unsubscribe();
          hostViewContainerRef.clear();

      }
    )
  }
  closeComponent(event:Event){
    this.authError=null;
  }
  ngOnDestroy(){
    if(this.componentDismissSub)
      this.componentDismissSub.unsubscribe();
  }
}
