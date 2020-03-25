import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe ('Brownies', 
    'Brownies are a form of sheet cookie. They are typically eaten by hand, often accompanied by milk, served warm with ice cream (a la mode), topped with whipped cream, or sprinkled with powdered sugar and fudge.', 
    'https://www.chelsea.co.nz/files/cache/c7eb8909bcbfb9ff878c499feb1dcbd5_f1433.jpg'),
    new Recipe ('Chocolate cake',
    'Chocolate cake or chocolate gâteau (from French: gâteau au chocolat) is a cake flavored with melted chocolate, cocoa powder, or both.',
    'https://static.archiesonline.com/public/images/product/large/Fantastic_Chocolate_Cake_PRCAKE101_3880632a.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
