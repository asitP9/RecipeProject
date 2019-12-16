import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() perItem:object;


  // @Output() emittingRecipeObject=new EventEmitter<{name: string, desc: string, imagePath: string}>();
  constructor() { }
  
  ngOnInit() {
  }

}
