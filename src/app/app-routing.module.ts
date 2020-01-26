import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

const appRoute:Routes=[
    {path: '', redirectTo: '/recipe', pathMatch: 'full'},
    {path:'recipe', loadChildren:'./recipe/recipe.module#RecipeModule'}
    
];


@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})
export class routingAppModule{

}
