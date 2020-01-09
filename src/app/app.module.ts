import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routingAppModule} from './app-routing.module'

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import {shoppingListComponent} from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdowndirectiveDirective } from './shared/dropdowndirective.directive';

import {ShoppingListService} from './shopping-list/shopping-list.service';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeComponent,
    RecipeListComponent,
    shoppingListComponent,
    ShoppingEditComponent,
    DropdowndirectiveDirective,
    RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routingAppModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
