import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
