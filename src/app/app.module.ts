import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routingAppModule} from './app-routing.module'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import {CoreServiceModule} from './core-service.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,    
    routingAppModule,
    HttpClientModule,
    SharedModule,
    CoreServiceModule,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
