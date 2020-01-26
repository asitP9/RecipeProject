import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {shoppingListComponent} from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ShoppingListRoutingModule} from './shopping-list-routing.module';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    shoppingListComponent,
    ShoppingEditComponent
    
  ],
  imports: [    
    FormsModule,
    RouterModule,
    ShoppingListRoutingModule,
    SharedModule
  ],
  exports:[
    shoppingListComponent,
    ShoppingEditComponent
  ]
})
export class ShoppingListModule { }
