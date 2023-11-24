import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products!:Product[]
  constructor(private productService:ProductService){

  }
  ngOnInit(){
    this.productService.getAllData().subscribe(
      (data)=>{
         this.products=data.products;
      }
    )
  }
}
