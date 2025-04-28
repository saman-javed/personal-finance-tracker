
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  templateUrl: './register-pg.component.html',
  styleUrls: ['./register-pg.component.css'],
  imports: [FormsModule]
})
export class RegisterPgComponent {
  constructor(private router: Router) {}
  
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSignUp(form: NgForm) {
    form.control.markAllAsTouched();
    
    if (form.invalid) {
      return;
    }

    if (this.password !== this.confirmPassword) {
      return;
    }

    // Your registration logic here
    console.log('Registration successful:', {
      name: this.name,
      email: this.email
    });
    
    // Redirect on success
    // this.router.navigate(['/dashboard']);
  }

  goToLoginPage() {
    this.router.navigate(['login']);
  }
}











