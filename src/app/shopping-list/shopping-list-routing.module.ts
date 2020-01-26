import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {shoppingListComponent} from './shopping-list.component';


const routes:Routes=[
  {path:'shopping-list', component: shoppingListComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ShoppingListRoutingModule { }
