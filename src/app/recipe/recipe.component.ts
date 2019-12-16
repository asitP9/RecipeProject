import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  selectedRecipe:{name:string, description:string, imagePath:string};
  selectedRecipeName:string;
  constructor() { }

  ngOnInit() {
  }
  emitRecipeList(emittedRecipe:{name:string, description:string, imagePath:string}){
    this.selectedRecipe=emittedRecipe;
    // console.log("Recipe comp",this.selectedRecipe);
  }

}
