
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipes.model';
import { Ingredient } from '../shared/ingredient.model';
@Injectable({
	providedIn: 'root'
})
export class RecipeService {
	recipes: Recipe[] = [
		new Recipe('Tasty Schnitzel', 'A super-tasty Schnitzel -just awesome',
			'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/08/19/WU3203-ree-drummond-crispy-everything-chicken-cutlets_4x3.jpg.rend.hgtvcom.616.462.suffix/1660928170362.jpeg',
			[
				new Ingredient('Meat', 1),
				new Ingredient('French Fries', 20)
			]),
		new Recipe('Big Fat Burger', 'What else you need to say?',
			'https://vikalinka.com/wp-content/uploads/2021/07/Greek-Chicken-Burger-1CR2-Edit-500x500.jpg',
			[
				new Ingredient('Buns', 2),
				new Ingredient('Meat', 1)
			])
	]
	recipeSelected = new EventEmitter<Recipe>();
	constructor() {

	}
	getRecipes() {
		return this.recipes
	}
	getRecipe(index: number) {
		return this.recipes[index];
	}
}
