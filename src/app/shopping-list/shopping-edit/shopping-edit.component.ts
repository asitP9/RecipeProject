import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @Output() newIngredient=new EventEmitter<{name:string,amount:number}>();
  constructor(private myShoppingListService:ShoppingListService) { }

  ngOnInit() {
  }
  addIngredient(name: HTMLInputElement, value:HTMLInputElement){
    console.log(name.value, value.value);
    if(name.value!="" && value.value!=""){
      this.myShoppingListService.addIngredient(name.value, parseInt(value.value));
    
      // this.newIngredient.emit(new ingredient(name.value,parseInt(value.value)));
    }
  }
}
