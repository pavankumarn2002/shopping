import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ProjectComponent } from './project/project.component';
import { ProductListComponent } from './project/product-list/product-list.component';
import { ProductDetailsComponent } from './project/product-details/product-details.component';
import { ProductEditComponent } from './project/product-edit/product-edit.component';
import { ProductCreateComponent } from './project/product-create/product-create.component';

const routes: Routes = [
  {path:' ',redirectTo:'recipes',pathMatch:'full'},
  {path:'recipes',component:RecipesComponent,children:[
    {path:'',component:RecipeStartComponent},
    {path:'new',component:RecipeEditComponent},
    {path:':id',component:RecipesDetailComponent},
    {path:':id/edit',component:RecipeEditComponent},
  ]},
  {path:'shopping-list',component:ShoppingListComponent},
  {path:"project",component:ProjectComponent,children:[
    {path:'product-list',component:ProductListComponent},
    {path:'product-details/:id',component:ProductDetailsComponent},
    {path:'product-edit/:id',component:ProductEditComponent},
    {path:'product-create',component:ProductCreateComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
