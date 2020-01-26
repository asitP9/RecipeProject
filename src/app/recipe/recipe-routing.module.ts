import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {Routes} from '@angular/router';
import { RecipeComponent } from './recipe.component';
import {AuthRoutingGuard} from '../auth/auth.guard';
import {RecipeResolver} from '../recipe-resolver.service';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';


const recipeRoutes:Routes=[
  {
    path:'', component: RecipeComponent, canActivate:[AuthRoutingGuard],
    children:[
      {
        path:'', component:RecipeStartComponent
        },
        {
            path:'new', component: RecipeEditComponent
        },
        {
            path:':id', component:RecipeDetailComponent,resolve:{recipe:RecipeResolver}
        },
        {
            path:':id/new', component:RecipeEditComponent
        }
    ]}];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(recipeRoutes)
  ],
  exports:[RouterModule]

})
export class RecipeRoutingModule { }
