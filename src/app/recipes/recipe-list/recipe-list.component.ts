import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chicken Soup', 'This is simply a test', 'https://ichef.bbci.co.uk/food/ic/food_16x9_448/recipes/chickensoup_1918_16x9.jpg'),
    new Recipe('Filet Mignon', 'This is simply a test', 'https://www.skinnytaste.com/wp-content/uploads/2015/02/filet-mignon.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
