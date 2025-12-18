import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginModel, LoginModelManago } from '../../app/Model/Login';
import { ProductService } from '../../app/Services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  SignUpForm: FormGroup;

  constructor(private services: ProductService, private router: Router) {
    // Initialize forms in constructor
    this.LoginForm = new FormGroup({
      UserName: new FormControl('', Validators.required),
      UserPassword: new FormControl('', Validators.required),
      rememberMe: new FormControl(false)

    });





    this.SignUpForm = new FormGroup({
      Name: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required, Validators.email]),
      MobileNo: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
      choice: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.LoginForm.valid) {
      // Get typed form data using the model
      const loginData: LoginModel = {
        UserName: this.LoginForm.value.UserName!,
        UserPassword: this.LoginForm.value.UserPassword!,
        rememberMe: this.LoginForm.value.rememberMe!

      };

      const LoginDataManago: LoginModelManago = {

        UserName: this.LoginForm.value.UserName!,
        Password: this.LoginForm.value.UserPassword!


      };

      this.services.LoginData(this.LoginForm.value).subscribe((res) => {
        console.log(res);
      });



      this.services.LoginDataManago(LoginDataManago).subscribe({
        next: (res) => {
          console.log('Login Success', res);

          if (res.isSuccess) {
            localStorage.setItem('token', res.result.token);
            localStorage.setItem('user', JSON.stringify(res.result.user));
            this.router.navigate(['/product']);
          }
        },
        error: (err) => {
          console.error('Login Failed', err.error.message);
        }
      });
      console.log('Login Data:', loginData);
    } else {
      console.log('Login Form Invalid');
    }
  }


  signupdata(): void {
    if (this.SignUpForm.valid) {
      this.services.SignupData(this.SignUpForm.value).subscribe((res) => {
        console.log(res);
      });

      console.log('SignUp Data:', this.SignUpForm.value);

    } else {
      console.log('SignUp Form Invalid');

      Object.keys(this.SignUpForm.controls).forEach(key => {
        this.SignUpForm.get(key)?.markAsTouched();
      });
    }
  }



}