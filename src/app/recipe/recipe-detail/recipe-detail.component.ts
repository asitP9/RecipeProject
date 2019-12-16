import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selrecipe:string;
  constructor() { }

  ngOnInit() {
    // console.log("Selected Recipe is:::", this.selrecipe);
  }

}
