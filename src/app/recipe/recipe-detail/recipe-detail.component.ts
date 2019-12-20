import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ingredient} from '../../shared/ingredient.model'


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
  
})
export class RecipeDetailComponent implements OnInit {
   @Input() selrecipe:{name:string, description:string, imagePath:string, ingredients:ingredient[]};
   @Output() shoppingListClicked=new EventEmitter<string>();

  ingredientForParticularShoppingList=new EventEmitter<{name:string, amount:number}>();
  constructor(  private myShoppingList:ShoppingListService) {     

  }

  ngOnInit() {
    
  }

  passDataToShoppingList(){

    this.myShoppingList.addIngredientsFromRecipe(this.selrecipe.ingredients);
  }
}
