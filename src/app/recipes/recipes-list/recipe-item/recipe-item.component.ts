import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from 'src/app/services/recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{

  @Input() recipe!:Recipe;
  @Input() index!:number;
  constructor(){

  }
  ngOnInit(): void {
    
  }
 
}
