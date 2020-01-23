import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {RecipeService} from '../recipe/recipe.service';
import {recipe} from '../recipe/recipe.model';
import { ingredient } from './ingredient.model';
import {map, tap, take, exhaustMap} from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn: "root"})

export class DataStorageService{
    constructor(private http:HttpClient, private recipeService:RecipeService, private authService:AuthService){}

    savingRecipe(){
        // put is used to replace any previous recipe which is stored
        return this.http.put('https://recipe-store-979a2.firebaseio.com/recipes.json',this.recipeService.getRecipes())
        .subscribe(
            (responseData)=>{
                console.log(responseData);
            }
        );
    }

    // Below we also can remove a bug if there are no ingredients and we try to access the ingredient, 
    // it may give a bug. so its better o initialise an empty ingredient even if there are no ingredient
    
    fetchingAllRecipe(){
           
        return this.http.get<recipe[]>('https://recipe-store-979a2.firebaseio.com/recipes.json').pipe(
           map(recipes=>{
            return recipes.map(recipe=>{
                 return {...recipe,
                          ingredients: recipe.ingredients? recipe.ingredients:[]
                 };
                })
            }),
            tap(fetchedRecipes=>{
                 this.recipeService.replaceRecipes(fetchedRecipes);
            })
       )
       
    }


}