import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { User } from './auth.model';
import { Router, ActivatedRoute } from '@angular/router';


export interface authResponseData{
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:string;
    localId:string;
    registered?:boolean;
}

@Injectable({providedIn:'root'})

export class AuthService{
  user=new BehaviorSubject<User>(null);
  errorMsg:string;
    constructor(private http:HttpClient, private router:Router){}
    loginExistingUser(username:string, password:string){
      return this.http.post<authResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBOEXvBz5m8mKA91_XKmLoRjUfrQSfss74",
      {                            
        email:username,
        password:password,
        returnSecureToken:true
      })
      .pipe(
        catchError(this.handleError),
        tap(
          (responseData)=>{

              this.authenticate(responseData.email,responseData.localId, responseData.idToken, responseData.expiresIn);
          }
        )
      );
    }
    authenticateNewUser(username:string, password:string){
        return this.http
        .post<authResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp"+
        "?key=AIzaSyBOEXvBz5m8mKA91_XKmLoRjUfrQSfss74",
        {                            
                email:username,
                password:password,
                returnSecureToken:true
        })
        .pipe(
          catchError(this.handleError),
          tap(respData=>{

            this.authenticate(respData.email, respData.localId, respData.idToken, respData.expiresIn);
         })
        )
      }

      authenticate(email:string, localId:string, idToken:string, expiresIn:String){
        const tokenExpirationDate:Date=new Date(new Date().getTime() + +expiresIn  *1000);
        const user=new User(email, localId, idToken, tokenExpirationDate);
        localStorage.setItem('respData', JSON.stringify(user));
        this.autoLogout(+expiresIn*1000);
        this.user.next(user);

      }

      handleError(errorRes:HttpErrorResponse){
        if(errorRes.error && errorRes.error.error){
          switch(errorRes.error.error.message){
            case 'EMAIL_EXISTS': 
                this.errorMsg="This email already exists, Please try a new one!!!";
                break;
            case "INVALID_PASSWORD": 
                this.errorMsg="Please enter the correct Password!!!";
                break;
            case "EMAIL_NOT_FOUND":
                this.errorMsg="The email cannot be found!!!";
                break;

          }                  
        }
        else{
          this.errorMsg="This is an Unknown Error!!!"
        }
        return throwError(this.errorMsg);
      }

      logout(){
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('respData');
      }

      autoLogin(){
        const respData=JSON.parse(localStorage.getItem('respData'));

        if(!respData){
          return;
        }
        const user=new User(respData.email, respData.localId, respData.tokenId, new Date(respData.tokenExpiryDate));
        
        if(respData.tokenExpiryDate){
          this.user.next(user);
          const expirationDuration=new Date(respData.tokenExpiryDate).getTime()-new Date().getTime();
          this.autoLogout(expirationDuration);
        }
      }

      autoLogout(expirationDuration:number){
        setTimeout(
          ()=>{ 
            this.logout();
          }, expirationDuration);
      }

     
    }