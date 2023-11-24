import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  ingredients:Ingredient[]=[];
  constructor(private slServise:ShoppingListService){

  }
  ngOnInit() {
    this.ingredients=this.slServise.getIngredients()
  }
  getIndex(i:number){
    this.slServise.newIndex.next(i)
  }
}
