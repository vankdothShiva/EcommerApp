import { Routes } from '@angular/router';
import { ProductsComponent } from '../Pages/products/products.component';
import { CheckoutComponent } from '../Pages/checkout/checkout.component';
import { RegisterCustomerComponent } from '../Pages/register-customer/register-customer.component';

export const routes: Routes = [

    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"product",component:ProductsComponent},
    {path:"checkout",component:CheckoutComponent},
     {path:"RegisterCust",component:RegisterCustomerComponent},
    
];



