import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newIngredient=new EventEmitter<{name:string,amount:number}>();
  constructor() { }

  ngOnInit() {
  }
  addIngredient(name: HTMLInputElement, value:HTMLInputElement){
    console.log(name.value, value.value);
    if(name.value!="" && value.value!=""){
      this.newIngredient.emit(new ingredient(name.value,parseInt(value.value)));
    }
  }
}
