import { Component } from '@angular/core';
import { Router } from '@angular/router';

  @Component({
    imports: [],
    selector: 'app-welcome-pg',
    templateUrl: './welcome-pg.component.html',
    styleUrls: ['./welcome-pg.component.css'] // ✅ Corrected
  })
  

export class WelcomePgComponent {
  constructor(private router: Router) {}
  goToLoginPage() {
    this.router.navigate(['login']);
  }
  goToRegisterPage() {
    this.router.navigate(['register']);
  }
}
