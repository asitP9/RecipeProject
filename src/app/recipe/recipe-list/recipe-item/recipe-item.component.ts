import { Component, OnInit, Input, Output } from '@angular/core';
import {RecipeService} from '../../recipe.service';
import { recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() perItem:recipe;


  constructor(private myRecipeService:RecipeService) { }
  
  ngOnInit() {
  }
  itemClicked(){
    this.myRecipeService.recipeSelected.emit(this.perItem);
  }

}
