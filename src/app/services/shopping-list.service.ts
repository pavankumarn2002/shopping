import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  newIndex=new Subject<number>()
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)
  ];
  constructor() { }
  getIngredients() {
    return this.ingredients;
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  updateIngredient(index:number,ing:Ingredient){
       this.ingredients[index]=ing
  }
}
