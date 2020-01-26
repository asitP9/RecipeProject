import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {AuthRoutingGuard} from './auth/auth.guard';
import { RecipeService } from './recipe/recipe.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ShoppingListService, RecipeService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi:true}, AuthRoutingGuard]

})
export class CoreServiceModule { }
