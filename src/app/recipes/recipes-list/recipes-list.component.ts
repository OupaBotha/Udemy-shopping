import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Just testing', 'https://c3.staticflickr.com/6/5693/30891366026_f16541f1c4_c.jpg'),
    new Recipe('A test recipe', 'Just testing', 'https://c3.staticflickr.com/6/5693/30891366026_f16541f1c4_c.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
