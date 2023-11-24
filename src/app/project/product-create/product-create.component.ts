import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  reactiveForm!: FormGroup;
  id!: number
  product!: any
  images!: FormArray
  img: any = []
  constructor(private productService: ProductService, private actRout: ActivatedRoute, private rout: Router, private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.reactiveForm = new FormGroup({
      title: new FormControl(),
      brand: new FormControl(),
      category: new FormControl(),
      description: new FormControl(),
      discountPercentage: new FormControl(),
      price: new FormControl(),
      rating: new FormControl(),
      thumbnail: new FormControl(),
      images: new FormArray([])
    });
    // this.id = +this.actRout.snapshot.params['id']
    // this.productService.getElement(this.id).subscribe((data) => {
    //   this.product = data;
    //   this.reactiveForm.patchValue({
    //     title: this.product.title,
    //     brand: this.product.brand,
    //     category: this.product.category,
    //     description: this.product.description,
    //     discountPercentage: this.product.discountPercentage,
    //     price: this.product.price,
    //     rating: this.product.rating,
    //     thumbnail: this.product.thumbnail
    //   });
    // })


  }
  get formData() { return <FormArray>this.reactiveForm.get('images'); }
  createItem(): FormGroup {
    return this.formBuilder.group({
      url: '',
    });
  }
  addItem() {
    this.images = this.reactiveForm.get('images') as FormArray;
    this.images.push(this.createItem());
  }
  onSubmit(form: FormGroup) {
    this.img = []
    for (let i = 0; i < this.images.value.length; i++) {
      console.log(this.images.value[i].url)
      this.img.push(this.images.value[i].url)
    }
    form.value.images = this.img
    
    this.productService.create(form.value).subscribe((res: any) => {
      console.log('Post updated successfully!');

    })
    console.log(form.value)
  }
}
