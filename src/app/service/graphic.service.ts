import { Injectable } from '@angular/core';
import { ExpenseService } from './expense.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GraphicService {

  constructor(
    private expenseService: ExpenseService,
    private authService: AuthService) {}

  loadCategoriesAndExpenses(): void {
    const userId = this.authService.getUserIdFromLocalStorage();
    if (userId !== null) {
      this.expenseService.getCategorys().subscribe((categories) => {
        categories.forEach((category) => {
          this.loadExpensesByCategory(userId, category.id);
        });
      });
    } else {
      // Manejar el caso en el que userId es null
    }
  }

  loadExpensesByCategory(userId: number, categoryId: number): void {
    this.expenseService.getExpensesByUserAndCategory(userId, categoryId).subscribe((expenses) => {
    });
  }
}
