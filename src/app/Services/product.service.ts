import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpProducts: HttpClient) { }

 // Api: string = "https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts";

  GetAllProducts():Observable<any[]>{
    return this.httpProducts.get<any[]>('/api/amazon/GetAllProducts');
  }
   GetCartaory():Observable<any[]>{
    return this.httpProducts.get<any[]>('/api/amazon/GetAllCategory');
  }

     GetAllCatoryByID(categoryId:number):Observable<any[]>{
    return this.httpProducts.get<any[]>('/api/amazon/GetAllProductsByCategoryId?id='+categoryId);
  }



}
