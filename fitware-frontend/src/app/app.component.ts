import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SimpleAuthService } from './core/services/simple-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navOpen = false;
  currentYear = new Date().getFullYear();
  readonly loggedIn$: Observable<boolean>;

  constructor(private auth: SimpleAuthService, private router: Router) {
    this.loggedIn$ = this.auth.state$;
  }

  toggleNav(): void {
    this.navOpen = !this.navOpen;
  }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
