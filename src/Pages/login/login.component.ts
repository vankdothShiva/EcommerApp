import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginModel } from '../../app/Model/Login';

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

  constructor() {
    // Initialize forms in constructor
    this.LoginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false)

    });




    this.SignUpForm = new FormGroup({
      FullName: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required, Validators.email]),
      MobileNo: new FormControl('', Validators.required),
      choice: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    // Component initialization logic here if needed
  }

 onSubmit(): void {
    if (this.LoginForm.valid) {
      // Get typed form data using the model
      const loginData: LoginModel = {
        username: this.LoginForm.value.username!,
        password: this.LoginForm.value.password!,
        rememberMe: this.LoginForm.value.rememberMe!
      
      };
      console.log('Login Data:', loginData);
    } else {
      console.log('Login Form Invalid');  
    }
  }
   

  signupdata():void{
    if (this.SignUpForm.valid) {
      console.log('SignUp Data:', this.SignUpForm.value);
      // TODO: Call your signup API here
      // Example:
      // this.authService.signup(this.SignUpForm.value).subscribe(...)
    } else {
      console.log('SignUp Form Invalid');
      // Mark all fields as touched to show validation errors
      Object.keys(this.SignUpForm.controls).forEach(key => {
        this.SignUpForm.get(key)?.markAsTouched();
      });
    }
  }
}