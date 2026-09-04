import { Component, OnInit, signal } from '@angular/core';
import { CartItem, Search } from '../../search';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-table-of-invoices',
  imports: [RouterLink],
  templateUrl: './table-of-invoices.html',
  styleUrl: './table-of-invoices.css',
})
export class TableOfInvoices implements OnInit {
  cart: CartItem[] = [];
  showConfMessage = false;

  total = 0;
  showMessage = signal(false);
  messageLeaving = signal(false);

  constructor(
    private searchService: Search,
    private router: Router,
  ) {}

  ngOnInit() {
    this.searchService.cart$.subscribe((cart) => {
      this.cart = cart;

      this.calculateTotal();
    });
  }

  calculateTotal() {
    this.total = this.cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  deleteProduct(id: number) {
    this.searchService.removeFromCart(id);
    this.showMessage.set(true);
    this.messageLeaving.set(false);

    setTimeout(() => {
      this.messageLeaving.set(true);

      setTimeout(() => {
        this.showMessage.set(false);
      }, 300);
    }, 800);
  }

  confirmMessage() {

  if (this.cart.length === 0) {
    return;
  }

  const savedWizard = localStorage.getItem('wizard');

  if (!savedWizard) {

    this.router.navigate(['/login'], {
      queryParams: {
        returnUrl: '/cart'
      }
    });

    return;
  }

  this.searchService.clearCart();
  this.showConfMessage = true;
}
}
