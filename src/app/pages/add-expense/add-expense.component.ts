import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseFormComponent } from '../expense-form/expense-form.component';
import { ExpenseVisualComponent } from '../expense-visual/expense-visual.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [CommonModule , ExpenseFormComponent, ExpenseVisualComponent],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent{
  constructor(private router: Router) {}
  [x: string]: any;
  isPopupOpen = false;
  isVisualView = false;
  expenses: any[] = [];


  openPopup() {
    this.isPopupOpen = true;
  }

  onClosePopup() {
    this.isPopupOpen = false;
  }
  deleteExpense(index: number) {
    this.expenses.splice(index, 1);
  }
  onSaveExpense(expense: any) {
    this.expenses.push(expense);
    this.onClosePopup();
  }
  toggleVisualView() {
    console.log("Sending expenses:", this.expenses);
    this.router.navigate(['/expense-visual'], { 
      state: { expenses: this.expenses } 
    });
  }
}