import { NgModule } from '@angular/core';
import {Routes, RouterModule,  PreloadAllModules} from "@angular/router";

const appRoute:Routes=[
    {path: '', redirectTo: '/recipe', pathMatch: 'full'},
    {path:'recipe', loadChildren:'./recipe/recipe.module#RecipeModule'},
    {path:'shopping-list', loadChildren:'./shopping-list/shopping-list.module#ShoppingListModule'},
    {path:'auth', loadChildren:'./auth/auth.module#AuthModule'}
    
];


@NgModule({
    imports: [RouterModule.forRoot(appRoute, { preloadingStrategy : PreloadAllModules }) ],
    exports: [RouterModule]
})
export class routingAppModule{

}
