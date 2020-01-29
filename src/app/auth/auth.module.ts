import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AuthComponent } from './auth.component';
import {SharedModule} from '../shared/shared.module'
import { Routes, Router, RouterModule } from '@angular/router';

const routes:Routes=[{path:'', component: AuthComponent}];

@NgModule({
  declarations: [
    AuthComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule
  ],
  exports:[
    AuthComponent
  ]
})
export class AuthModule { }
