import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterModule, RouterLink, Router } from '@angular/router';
import { ProductService } from './Services/product.service';
import { LoginComponent } from '../Pages/login/login.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLinkWithHref,
    RouterModule,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerceApp';

  /**
   *
   */
 textNameChange: string = 'Login';

  constructor(
    private router: Router,
    private auth: AuthService
  ) {
    this.onLoginClick();
    this.logout();
  }

  ngOnInit() {
    this.updateText();
  }

  updateText() {
    this.textNameChange = this.auth.isLoggedIn() ? 'Logout' : 'Login';
  }
textLog:string="Login";
  onLoginClick() {
    if (this.auth.isLoggedIn()) {
      this.textLog= "Logout";
      this.logout();
    } else {
     this.textLog= "Login";
      this.router.navigate(['/Login']);
    }
  }

  logout() {
    this.auth.logout();
    this.updateText();
    this.router.navigate(['/Login']);
  }


}
