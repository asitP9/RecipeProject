import {Component} from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Component({
    selector:'app-shopping-list',
    templateUrl:'./shopping-list.component.html',
    styleUrls:['./shopping-list.component.css']
})

export class shoppingListComponent{
    ingredients:ingredient[]=[new ingredient("tomato",5), new ingredient("carrot",3)];
    constructor(){

    }
    newIngredientAdded(ingredientAdded:{name:string, amount:number}){
        // this.ingredients.push(ingredientAdded.name, ingredientAdded.amount);
        this.ingredients.push(ingredientAdded);

    }
}