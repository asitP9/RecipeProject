import { Injectable, EventEmitter, OnInit } from '@angular/core';
import {recipe} from './recipe.model'
import { ingredient } from '../shared/ingredient.model';


export class RecipeService implements OnInit {
  private recipes=[new recipe("Tasty Schinezl",
                              "A super Tasty Schnitzel - Just Awesome",
                              "../assets/recipe1-cheesyMincePastaBake.jpg",
                              [new ingredient("meat",1), new ingredient("freench fries",20)]), 
                    new recipe("Big Fat Burger",
                    "What else you need to say",
                    "../assets/recipe2seafoodSoup.jpg",
                    [new ingredient("buns",2), new ingredient("meat",1)])];
  recipeSelected=new EventEmitter<recipe>();
  constructor() { }
  ngOnInit(){

  }
  getRecipes(){
    return this.recipes.slice();
  }
}
