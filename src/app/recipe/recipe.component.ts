import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import {RecipeService} from '../recipe/recipe.service';
import { recipe } from './recipe.model';
import { ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  selectedRecipe:{name:string, description:string, imagePath:string, ingredients:ingredient[]};
  constructor(private myRecipeService:RecipeService) { }

  ngOnInit() {
    // if(localStorage.getItem('idToken')){
      
    // }
    // this.myRecipeService.recipeSelected.subscribe(
    //   (recipeTemp:recipe)=>{
    //       this.selectedRecipe=recipeTemp;
    // })

  }


  


}
