import { Routes } from '@angular/router';
import { ProductsComponent } from '../Pages/products/products.component';
import { CheckoutComponent } from '../Pages/checkout/checkout.component';

export const routes: Routes = [

    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"product",component:ProductsComponent},
    {path:"checkout",component:CheckoutComponent},
    
];



