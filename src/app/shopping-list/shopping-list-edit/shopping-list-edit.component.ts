import { Component, ViewChild, ElementRef, Output, EventEmitter, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('cf') cf!: NgForm
  constructor(private slService: ShoppingListService) {

  }
  ing!: Ingredient
  editMode:boolean=false
  getIndex!:number;
  ngOnInit() {
    this.slService.newIndex.subscribe((data) => {
      this.getIndex=data
      this.ing = this.slService.getIngredients()[data]
      console.log(this.ing)
      this.editMode=true;
      this.cf.setValue({
        name: this.ing.name,
        amount: this.ing.amount
      })
    })
  }
  addNew(c: any) {
    const ingName = c.value.name;
    const ingAmt = c.value.amount;
    console.log(c.value)
    if (ingName == " " || ingAmt == '') {
      alert('Please enter valid inputs')
    } else {
      const ing = new Ingredient(ingName, ingAmt)
      if(this.editMode==true){
         this.slService.updateIngredient(this.getIndex,ing)
      }else{
        this.slService.addIngredient(ing);
      }
    }
  }
}
