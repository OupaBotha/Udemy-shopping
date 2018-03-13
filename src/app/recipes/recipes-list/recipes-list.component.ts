import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Just testing', 'https://cdn.pixabay.com/photo/2017/11/05/11/22/recipes-2920072_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}