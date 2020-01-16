import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ingredient} from '../../shared/ingredient.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
  
})
export class RecipeDetailComponent implements OnInit {
   //@Input() selrecipe:{name:string, description:string, imagePath:string, ingredients:ingredient[]};
  //  @Output() shoppingListClicked=new EventEmitter<string>();
  detailsPresent:boolean=false;
  idParams:number;
  selrecipe:{name:string, description:string, imagePath:string, ingredients:ingredient[]};
  ingredientForParticularShoppingList=new EventEmitter<{name:string, amount:number}>();
  constructor(  private myShoppingList:ShoppingListService, private myRecipeList:RecipeService, private route:ActivatedRoute, private router:Router) {     
  }

  ngOnInit() {
    this.idParams=this.route.snapshot.params['id'];
    this.route.params.subscribe(
        (paramsTemp:Params)=>{
          this.selrecipe=this.myRecipeList.getRecipe(paramsTemp.id);
          //  this.selrecipe = this.myRecipeList.getRecipes()[paramsTemp.id];
          //  console.log(this.selrecipe);
        }
      );
      // The below will only work on the first time we load the recipe detail component. So bwlow approach will not worker.
    // this.selrecipe=this.myRecipeList.getRecipes()[this.route.snapshot.params['id']];
    // this.route.queryParams.subscribe(
    //   (queryParamTemp:Params)=>{
    //     this.detailsPresent=queryParamTemp.itemPresent==='1'?true:false;
    //   }
    //   );
  }

  deleteRecipe(){    
    this.myRecipeList.removeRecipe(this.idParams);
    this.router.navigate(['../'],{relativeTo:this.route});
  }
 
  passDataToShoppingList(){

    this.myShoppingList.addIngredientsFromRecipe(this.selrecipe.ingredients);
  }
}
