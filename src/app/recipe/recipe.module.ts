import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeComponent } from './recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

import {RecipeRoutingModule} from './recipe-routing.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeStartComponent,
    RecipeEditComponent
    
  ],
  imports: [
    ReactiveFormsModule,
    RecipeRoutingModule,
    SharedModule
  ],
  
})
export class RecipeModule { }
