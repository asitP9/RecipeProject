import { OnInit } from '@angular/core';
import {recipe} from './recipe.model'
import { ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';


export class RecipeService implements OnInit {
  // private recipes=[new recipe("Tasty Schinezl",
  //                             "A super Tasty Schnitzel - Just Awesome",
  //                             "../assets/chicken_PNG2171.png",
  //                             [new ingredient("meat",1), new ingredient("freench fries",20)]), 
  //                   new recipe("Big Fat Burger",
  //                   "What else you need to say",
  //                   "../assets/recipe2seafoodSoup.jpg",
  //                   [new ingredient("buns",2), new ingredient("meat",1)])];
  private recipes=[];
  recipeChanged=new Subject<recipe[]>();
  constructor() { }
  ngOnInit(){

  }
  getRecipes(){
    // slice makes the copy of the recipe
    return this.recipes.slice();
  }

  getRecipe(index:number){
    // here we dont need slice because slice will make the copy but not deep copy.
    return this.recipes[index];
  }

  addRecipe(recipeTemp:recipe){
    this.recipes.push(recipeTemp);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, recipeTemp:recipe){
    this.recipes[index]=recipeTemp;
    this.recipeChanged.next(this.recipes.slice());
  }

  removeRecipe(recipeId:number){
        this.recipes.splice(recipeId,1);
        this.recipeChanged.next(this.recipes.slice());
    
  }

  replaceRecipes(recipeTemp:recipe[]){
      this.recipes=recipeTemp;
      this.recipeChanged.next(this.recipes.slice());
  }
}
