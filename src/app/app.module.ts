import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routingAppModule} from './app-routing.module'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {HttpClientModule} from '@angular/common/http';
import {RecipeModule} from './recipe/recipe.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import {CoreServiceModule} from './core-service.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,    
    routingAppModule,
    HttpClientModule,
    ShoppingListModule,
    SharedModule,
    CoreServiceModule,
    AuthModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
