import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes!: Recipe[] ;
  constructor(private recipeService:RecipeService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(){
     this.recipes=this.recipeService.getRecipes()
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
    }
}
