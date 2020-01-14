import {Component, OnInit, OnDestroy} from '@angular/core';
import {ShoppingListService} from './shopping-list.service';
import {ingredient} from '../shared/ingredient.model'
import { Subscription } from 'rxjs';
@Component({
    selector:'app-shopping-list',
    templateUrl:'./shopping-list.component.html',
    styleUrls:['./shopping-list.component.css'],
})

export class shoppingListComponent implements OnInit, OnDestroy{
    ingredients:{name:string, amount:number}[]=[];
  
    subscribedIngredients:Subscription;
    constructor(private myShoppingListService:ShoppingListService){ }

    // newIngredientAdded(ingredientAdded:{name:string, amount:number}){
    //     // this.ingredients.push(ingredientAdded.name, ingredientAdded.amount);
    //     this.ingredients.push(ingredientAdded);

    // }

    ngOnInit(){
        this.ingredients=this.myShoppingListService.getIngredients();
        this.subscribedIngredients=this.myShoppingListService.ingredientsChanged.subscribe(
            (ingredients:ingredient[])=>{
              this.ingredients=ingredients;
            });
    }

    ngOnDestroy(){
        this.subscribedIngredients.unsubscribe();
    }

    editParticularIngredient(i:number){
        // console.log(this.ingredients[i]);
        this.myShoppingListService.emittedIngredientsIndex.next(i);
    }
}