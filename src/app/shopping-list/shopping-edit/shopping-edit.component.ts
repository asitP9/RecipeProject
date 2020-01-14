import { Component, OnInit, Output, EventEmitter, ViewChild, Input, OnDestroy } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @Output() newIngredient=new EventEmitter<{name:string,amount:number}>();
  @ViewChild('f', {static:false}) shoppingListForm: NgForm;
  ingredientName:string;
  ingredientAmount:number;
  editedMode:boolean=false;
  editedItemIndex:number;
  editedItem:ingredient;
  subscribedIngredientIndex:Subscription;
  constructor(private myShoppingListService:ShoppingListService) { 

  }

  ngOnInit() {

    this.subscribedIngredientIndex=this.myShoppingListService.emittedIngredientsIndex.subscribe(
      (recipeIndex)=>{
          this.editedMode=true;
          this.editedItemIndex=recipeIndex;
          this.editedItem=this.myShoppingListService.getIngredient(recipeIndex);
          this.shoppingListForm.setValue({
            "ingredientName":this.editedItem.name,
            "ingredientAmount":this.editedItem.amount
          })
          // this.ingredientName=this.myShoppingListService.getIngredients()[recipeIndex].name;
          // this.ingredientAmount=this.myShoppingListService.getIngredients()[recipeIndex].amount;
      }
    )
  }

  ngOnDestroy(){
    this.subscribedIngredientIndex.unsubscribe();
  }

  addIngredient(){
    if(this.editedMode){
      this.myShoppingListService.addIngredientAtIndex(this.shoppingListForm.value["ingredientName"],this.shoppingListForm.value["ingredientAmount"],this.editedItemIndex);
      this.editedMode=false;
    }
    else
      this.myShoppingListService.addIngredient(this.shoppingListForm.value["ingredientName"],this.shoppingListForm.value["ingredientAmount"]);

      this.shoppingListForm.reset();

    }

    clearForm(){
      this.shoppingListForm.reset();
      this.editedMode=false;
    }

    deleteElement(){
      this.myShoppingListService.removeIngredient(this.editedItemIndex);
      this.clearForm();
    }
}
