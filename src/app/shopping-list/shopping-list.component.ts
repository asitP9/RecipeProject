import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from './shopping-list.service';
import {ingredient} from '../shared/ingredient.model'
@Component({
    selector:'app-shopping-list',
    templateUrl:'./shopping-list.component.html',
    styleUrls:['./shopping-list.component.css'],
})

export class shoppingListComponent implements OnInit{
    ingredients:{name:string, amount:number}[]=[];
    constructor(private myShoppingListService:ShoppingListService){ }

    // newIngredientAdded(ingredientAdded:{name:string, amount:number}){
    //     // this.ingredients.push(ingredientAdded.name, ingredientAdded.amount);
    //     this.ingredients.push(ingredientAdded);

    // }

    ngOnInit(){
        this.ingredients=this.myShoppingListService.getIngredients();
        this.myShoppingListService.ingredientsChanged.subscribe(
            (ingredients:ingredient[])=>{
              this.ingredients=ingredients;
            });
    }
}