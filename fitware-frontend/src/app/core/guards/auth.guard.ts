import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SimpleAuthService } from '../services/simple-auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: SimpleAuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
