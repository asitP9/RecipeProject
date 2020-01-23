import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {RecipeComponent} from "./recipe/recipe.component";
import {shoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipe/recipe-detail/recipe-detail.component';
import {RecipeStartComponent} from './recipe/recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe/recipe-edit/recipe-edit.component';
import {RecipeResolver} from './recipe-resolver.service';
import {AuthComponent} from './auth/auth.component';

const appRoute:Routes=[
    {path: '', redirectTo: '/recipe', pathMatch: 'full'},
    {path:'recipe', component: RecipeComponent, 
        children:[{
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
        ]},
    {path:'auth', component: AuthComponent},
    {path:'shopping-list', component: shoppingListComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})
export class routingAppModule{

}
