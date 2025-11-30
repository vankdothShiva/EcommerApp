import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../app/Services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  Product: any[] = [];
  Category: any[] = [];

  constructor(private productServices: ProductService) {}

  ngOnInit(): void {
this.GetAllProducts();
this.GetAllCategory();

  }


  GetAllProducts(){
    this.productServices.GetAllProducts().subscribe((res: any) => {
      this.Product = res.data;
      console.log(this.Product);
    });
  }

  GetAllCategory(){
    this.productServices.GetCartaory().subscribe((res: any) => {
      this.Category = res.data;
      console.log(this.Category);
    });
  }

    GetAllCategoryByID(id : number){
    this.productServices.GetAllCatoryByID(id).subscribe((res: any) => {
      this.Product = res.data;
      console.log(this.Category);
    });
  }
}
