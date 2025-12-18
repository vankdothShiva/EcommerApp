import { Routes } from '@angular/router';
import { ProductsComponent } from '../Pages/products/products.component';

import { RegisterCustomerComponent } from '../Pages/register-customer/register-customer.component';
import { LoginComponent } from '../Pages/login/login.component';
import { authGuard } from '../Pages/auth.guard';

export const routes: Routes = [

    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"product",component:ProductsComponent, canActivate: [authGuard] },

     {path:"RegisterCust",component:RegisterCustomerComponent},
     {path:"Login",component:LoginComponent},
     

];


