import { Component,Input ,OnInit} from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  r:Recipe={name:'',description:'',imagePath:'',ingredients:[]}
  id!:number

  constructor(private route:ActivatedRoute,private recipeService:RecipeService,private router:Router){
  }
  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.r=this.recipeService.getRecipe(this.id);	
      }
    );
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
}
