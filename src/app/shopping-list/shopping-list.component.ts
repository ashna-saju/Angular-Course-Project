import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit{
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Apples', 10),
  ];
  constructor() {
    
  }
  ngOnInit() {
    
  }
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
