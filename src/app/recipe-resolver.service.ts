import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import {RecipeService} from './recipe/recipe.service';
import {recipe} from './recipe/recipe.model';
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {DataStorageService} from './shared/data-storage.service';

@Injectable({providedIn:'root'})
export class RecipeResolver implements Resolve<recipe[]>{

    constructor(private dataStorageService:DataStorageService, private recipeService:RecipeService){};

    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot)  {
        // here an issue was fixed because for first loading if we edited the form and changed the name 
        // it was not showing as it used to load that again
        const recipes=this.recipeService.getRecipes();
        if(recipes.length==0){
            return this.dataStorageService.fetchingAllRecipe();
        }
        else{
            return recipes;
        }
    }
}