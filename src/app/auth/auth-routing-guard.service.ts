import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthRoutingGuard implements CanActivate{
    constructor(private authService:AuthService){}
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) : Observable<boolean> | Promise <boolean> | boolean{

    }
}