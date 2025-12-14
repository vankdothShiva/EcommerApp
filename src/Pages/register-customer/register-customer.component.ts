import { Component } from '@angular/core';
import { ProductService } from '../../app/Services/product.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-register-customer',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './register-customer.component.html',
  styleUrl: './register-customer.component.css'
})
export class RegisterCustomerComponent {




SignUpForms!: FormGroup;


constructor(private productService:ProductService,private fb: FormBuilder) {

  this.SignUpForms = this.fb.group({
      CustId: [2565, Validators.required],
      FullName: ['', Validators.required],
      MobileNo: ['', Validators.required],
      Email: ['', Validators.email],
      Username: ['', Validators.required],
      password: ['', Validators.required],
      

    })

}

 customerObj= {
  CustId: 0,
  Name: "string",
  MobileNo: "string",

  Password: "string"
}
onsubmit(){

this.customerObj.CustId=this.SignUpForms.value.CustId;
this.customerObj.Name=this.SignUpForms.value.Name;
this.customerObj.MobileNo=this.SignUpForms.value.MobileNo;

  this.productService.InsertCustData(this.customerObj).subscribe((result)=>{
    console.log(result);
    alert("Registered Successfully");
  });


}
}
