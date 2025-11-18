import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface DemoUser {
  email: string;
  password: string;
  name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly allowedUser: DemoUser = {
    email: 'admin@fitware.com',
    password: '1234',
    name: 'Administrador'
  };

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });

  feedback = '';
  feedbackType: 'success' | 'danger' | '' = '';

  submit(): void {
    this.feedback = '';
    this.feedbackType = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.feedback = 'Ingresa tu correo y contrasena.';
      this.feedbackType = 'danger';
      return;
    }

    const { email, password } = this.form.getRawValue();
    if (email === this.allowedUser.email && password === this.allowedUser.password) {
      this.feedback = `Bienvenido ${this.allowedUser.name}`;
      this.feedbackType = 'success';
      setTimeout(() => this.router.navigateByUrl('/'), 600);
    } else {
      this.feedback = 'Credenciales incorrectas. Usa admin@fitware.com / 1234';
      this.feedbackType = 'danger';
    }
  }

  hasError(field: 'email' | 'password'): boolean {
    const control = this.form.get(field);
    return !!control && control.invalid && (control.dirty || control.touched);
  }
}
