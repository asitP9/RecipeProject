import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  indexEdit:number;
  editMode:boolean;
  editRecipeForm:FormGroup;
  constructor(private route:ActivatedRoute, private myRecipeService:RecipeService, private router:Router) {
     }

  ngOnInit() {
    // this.indexEdit=this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params:Params)=>{
        this.indexEdit=params.id;
        this.editMode=params.id?true:false;
        this.initForm();

      }
    )

   
  }

 private initForm(){
   let recipeName:string="";
   let recipeImgUrl:string="";
   let recipeDesc="";
   let recipeIngredients=new FormArray([]);
  if(this.editMode){
    const recipe=this.myRecipeService.getRecipe(this.indexEdit);
    recipeName=recipe['name'];
    recipeImgUrl=recipe['imagePath'];
    recipeDesc=recipe['description'];
    if(recipe["ingredients"]){
      for(let ingredient of recipe["ingredients"])
        recipeIngredients.push(
          new FormGroup({
            "name":new FormControl(ingredient.name, Validators.required),
            "amount":new FormControl(ingredient.amount, [Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
          })
        );
    }
  }
    this.editRecipeForm=new FormGroup({
      "name": new FormControl(recipeName, Validators.required),
      "imagePath": new FormControl(recipeImgUrl, Validators.required),
      "description": new FormControl(recipeDesc, Validators.required),
      "ingredients": recipeIngredients
    })
  }

  get controls(){
    return (<FormArray>this.editRecipeForm.get('ingredients')).controls;
  }
  onSubmit(){
    if(this.editRecipeForm.valid){
      if(this.editMode){
        this.myRecipeService.updateRecipe(this.indexEdit,this.editRecipeForm.value);
      }else{
            this.myRecipeService.addRecipe(this.editRecipeForm.value);
      }
  this.onCancel();
    // this.editRecipeForm.reset();
  }
   }


  onCancel(){
    this.router.navigate(['../'], {relativeTo:this.route});
  }


  addmoreIngredients(){
    (<FormArray>this.editRecipeForm.get('ingredients')).push(
      new FormGroup({
        "name":new FormControl(null, Validators.required),
        "amount":new FormControl(null, [Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  deleteParticularIngredient(index:number){
    (<FormArray>this.editRecipeForm.get('ingredients')).removeAt(index);
    // The below code is to clear all the formArray
    // (<FormArray>this.recipeForm.get('ingredients')).clear();

  }

}
