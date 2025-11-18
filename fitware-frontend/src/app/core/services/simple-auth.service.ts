import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SimpleAuthService {
  private readonly storageKey = 'fitware_demo_logged';
  private readonly subject = new BehaviorSubject<boolean>(this.restoreState());
  readonly state$ = this.subject.asObservable();

  login(): void {
    localStorage.setItem(this.storageKey, 'true');
    this.subject.next(true);
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
    this.subject.next(false);
  }

  isLoggedIn(): boolean {
    return this.subject.value;
  }

  private restoreState(): boolean {
    return localStorage.getItem(this.storageKey) === 'true';
  }
}
