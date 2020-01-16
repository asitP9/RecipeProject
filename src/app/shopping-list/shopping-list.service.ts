import {ingredient} from '../shared/ingredient.model'
import { EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService{
  private ingredients:ingredient[]=[new ingredient("tomato",5), new ingredient("carrot",3)];
  ingredientsChanged=new Subject<ingredient[]>();
  emittedIngredientsIndex=new Subject<number>();
  constructor() { }

  getIngredients(){
    // this is the copy of the array so that original wont be touched
    return this.ingredients.slice();
  }

  getIngredient(index:number){
      return this.ingredients[index];
  }
  addIngredient(name:string, value:number){
      this.ingredients.push(new ingredient(name,value));
     this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredientAtIndex(name:string, value:number, index:number){
    this.ingredients[index]=new ingredient(name,value);
    this.ingredientsChanged.next(this.ingredients.slice());

  }

  addIngredientsFromRecipe(ingredientsFromRecipe:ingredient[]){
    this.ingredients.push(...ingredientsFromRecipe);
  //  console.log(this.ingredients);

   this.ingredientsChanged.next(this.ingredients.slice());
  }

  removeIngredient(index:number){
    this.ingredients.splice(index,1);
  }

  
}
