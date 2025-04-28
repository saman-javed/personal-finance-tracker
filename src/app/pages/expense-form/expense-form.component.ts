import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-expense',
  standalone: true,   
  imports: [CommonModule, FormsModule],
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent {
  @Input() isOpen = false;
  @Output() closePopup = new EventEmitter<void>();
  @Output() saveExpense = new EventEmitter<any>();

  categories = [
    { emoji: '🍔', name: 'Food' },
    { emoji: '🚗', name: 'Transport' },
    { emoji: '🏠', name: 'Housing' },
    { emoji: '🛒', name: 'Shopping' },
    { emoji: '🎮', name: 'Entertainment' },
    { emoji: '✈️', name: 'Travel' },
    { emoji: '💊', name: 'Health' },
    { emoji: '🧾', name: 'Bills' },
    { emoji: '📚', name: 'Education' },
    { emoji: '✨', name: 'Other' }
  ];

  selectedCategory = '';
  selectedEmoji = '';
  amount = '';

  selectCategory(category: any) {
    this.selectedCategory = category.name;
    this.selectedEmoji = category.emoji;
  }

  save() {
    if (this.selectedCategory && this.amount) {
      this.saveExpense.emit({
        category: this.selectedCategory,
        categoryEmoji: this.selectedEmoji,
        amount: parseFloat(this.amount)
      });
      this.resetForm();
    }
  }

  resetForm() {
    this.selectedCategory = '';
    this.selectedEmoji = '';
    this.amount = '';
  }

  close() {
    this.closePopup.emit();
    this.resetForm();
  }
}
