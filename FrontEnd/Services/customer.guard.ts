

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuard implements CanActivate {

  constructor(private loginService: LoginService,private router: Router) {}

//   canActivate(): boolean {
//     const role = localStorage.getItem('role');
//     if (role === 'customer') {
//       return true;
//     } else {
//       this.router.navigate(['/login']); 
//       return false;
//     }
//   }
canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.loginService.isAuthenticated() && this.loginService.isCustomer()) {
      return true;
    }
    this.router.navigate(['/']); // Redirect to login or access page
    return false;
  }
}

