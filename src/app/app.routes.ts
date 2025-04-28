import { Routes } from '@angular/router';
import { WelcomePgComponent } from './pages/welcome-pg/welcome-pg.component';
import {RegisterPgComponent} from './pages/register-pg/register-pg.component';
import { LoginComponent } from './pages/login-pg/login-pg.component';
import { AddExpenseComponent } from './pages/add-expense/add-expense.component';
import {ExpenseFormComponent} from './pages/expense-form/expense-form.component';
import { ExpenseVisualComponent } from './pages/expense-visual/expense-visual.component';

export const routes: Routes = [
  { path: '', component: WelcomePgComponent },
  { path: 'register', component: RegisterPgComponent},
  { path: 'login', component: LoginComponent },
  { path: 'add-expense', component: AddExpenseComponent },
  { path: 'expense-form', component: ExpenseFormComponent },
  { path: 'expense-visual', component: ExpenseVisualComponent },
  { path: '', redirectTo: '/add-expense', pathMatch: 'full' } 
];

