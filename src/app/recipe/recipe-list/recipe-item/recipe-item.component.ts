import { Component, OnInit, Input, Output, ViewEncapsulation } from '@angular/core';
import {RecipeService} from '../../recipe.service';
import { recipe } from '../../recipe.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeItemComponent implements OnInit {
  // @Input() perItem:recipe;
  numberId:number;
  perItem:recipe;
  @Input() indexItem:number;


  constructor(private myRecipeService:RecipeService, private route:ActivatedRoute) { }
  
  ngOnInit() {
    this.perItem=this.myRecipeService.getRecipes()[this.indexItem];
    
  }

  
  // itemClicked(){
  //   this.myRecipeService.recipeSelected.emit(this.perItem);
  // }

}
