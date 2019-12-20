import {ingredient} from '../shared/ingredient.model'
import { EventEmitter, OnInit, OnChanges } from '@angular/core';

export class ShoppingListService  {
  private ingredients:ingredient[]=[new ingredient("tomato",5), new ingredient("carrot",3)];
  ingredientsChanged=new EventEmitter<ingredient[]>();

  constructor() { }

  getIngredients(){
    // this is the copy of the array so that original wont be touched
    return this.ingredients;
  }

  addIngredient(name:string, value:number){
      this.ingredients.push(new ingredient(name,value));
     this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredientsFromRecipe(ingredientsFromRecipe:ingredient[]){
    this.ingredients.push(...ingredientsFromRecipe);
  //  console.log(this.ingredients);

   this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
