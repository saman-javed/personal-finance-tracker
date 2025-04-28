import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-expense-visual',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './expense-visual.component.html',
  styleUrls: ['./expense-visual.component.css']
})
export class ExpenseVisualComponent implements OnInit {
  expenses: any[] = [
    { amount: 50 },
    { amount: 25.5 },
    { amount: 12 }
  ];
  pieChartConfig: ChartConfiguration<'pie'> = {
    type: 'pie',
    data: {
      labels: [],
      datasets: [{
        data: [],
        backgroundColor: []
      }]
    },
    options: { responsive: true }
  };

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    this.expenses = navigation?.extras.state?.['expenses'] || [];
    this.updateChart();
  }
  get totalExpenses(): number {
    return this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }

  updateChart() {
    const categoryMap = new Map<string, number>();
    this.expenses.forEach(expense => {
      const current = categoryMap.get(expense.category) || 0;
      categoryMap.set(expense.category, current + expense.amount);
    });

    this.pieChartConfig = {
      type: 'pie',
      data: {
        labels: Array.from(categoryMap.keys()),
        datasets: [{
          data: Array.from(categoryMap.values()),
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
            '#FF9F40', '#8AC24A', '#607D8B', '#E91E63', '#2196F3'
          ].slice(0, categoryMap.size) // Only use needed colors
        }]
      },
      options: { responsive: true }
    };
  }
}