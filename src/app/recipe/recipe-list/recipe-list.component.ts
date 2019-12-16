import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:recipe[];
  @Output() recipeItem=new EventEmitter<{name:string, description:string, imagePath:string}>();
  constructor() { 
    this.recipes=[new recipe("This is test recipe","this is description test","../assets/recipe1-cheesyMincePastaBake.jpg"), new recipe("This is test recipe123","this is description test123","../assets/recipe2seafoodSoup.jpg")];
    
  }
  itemClicked(item:{name:string, description:string, imagePath:string}){
    this.recipeItem.emit(item);
}

  ngOnInit() {
    // this.recipeItem.emit(this.recipes[0]);
  }

}
