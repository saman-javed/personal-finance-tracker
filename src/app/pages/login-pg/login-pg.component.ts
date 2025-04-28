import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login-pg.component.html',
  styleUrls: ['./login-pg.component.css'],
  imports: [FormsModule, CommonModule],
})
export class LoginComponent {
  constructor(private router: Router) {}
  email: string = '';
  password: string = '';
  loginError: string | null = null;
  submitted = false;

  onLogin() {
    this.submitted = true;
    this.loginError = null;
    
    // Only check credentials if form is valid
    if (this.email && this.password.length >= 6) {
      if (this.email === 'test@example.com' && this.password === '123456') {
        console.log('Login successful!');
        // this.router.navigate(['/dashboard']);
      } else {
        this.loginError = 'Invalid email or password';
      }
    }
  }

  goToRegisterPage() {
    this.router.navigate(['register']);
  }
}