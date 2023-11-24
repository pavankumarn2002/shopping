import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/product';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  id!:number;
  product!:any;
  constructor(private productService:ProductService,private actRout:ActivatedRoute,private rout:Router){
  }
  ngOnInit() {
    this.id=+this.actRout.snapshot.params['id']
    this.productService.getElement(this.id).subscribe((data)=>{
      this.product=data;
    })

  }
}
