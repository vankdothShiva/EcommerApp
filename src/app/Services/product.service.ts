import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModelManago } from '../Model/Login';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpProducts: HttpClient) { }

  // Api: string = "https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts";



  // GetAllProducts(): Observable<any[]> {         // //this cloud Api
  //   return this.httpProducts.get<any[]>('/api/amazon/GetAllProducts');
  // }

  GetAllProducts(): Observable<any[]> {
    return this.httpProducts.get<any[]>('https://localhost:7157/api/Product');
  }
  GetCartaory(): Observable<any[]> {
    return this.httpProducts.get<any[]>('/api/amazon/GetAllCategory');
  }

  GetAllCatoryByID(categoryId: number): Observable<any[]> {
    return this.httpProducts.get<any[]>('/api/amazon/GetAllProductsByCategoryId?id=' + categoryId);
  }
  InsertCustData(customerObj: any): Observable<any> {
    return this.httpProducts.post('/api/amazon/RegisterCustomer', customerObj);
  }


  LoginData(LoginModel: any): Observable<any> {
    return this.httpProducts.post('/api/Ecommerce/Login', LoginModel);
  }

  // SignupData(SignUp: any): Observable<any> {
  //   return this.httpProducts.post('api/Ecommerce/RegisterCustomer', SignUp);
  // }


  LoginDataManago(LoginModel: LoginModelManago): Observable<any> {
    return this.httpProducts.post<LoginModelManago>('https://localhost:7177/api/auth/login', LoginModel);
  }

   SignUpDataManago(SignUpModel: LoginModelManago): Observable<any> {
    return this.httpProducts.post<LoginModelManago>('https://localhost:7177/api/auth/register', SignUpModel);
  }







}
