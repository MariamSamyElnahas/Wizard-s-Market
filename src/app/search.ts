import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './shared-data/shared-data';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class Search {
  private searchText = new BehaviorSubject<string>('');

  searchText$ = this.searchText.asObservable();

  setSearchText(text: string) {
    this.searchText.next(text);
  }
  clearSearch() {
    this.searchText.next('');
  }


  private cart = new BehaviorSubject<CartItem[]>([]);

  cart$ = this.cart.asObservable();
  constructor() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart.next(JSON.parse(savedCart));
    }

  }

  addToCart(product: Product, quantity: number) {
    const currentCart = [...this.cart.value];
    const existingProduct = currentCart.find(
      item => item.product.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {

      currentCart.push({
        product: product,
        quantity: quantity
      });

    }


    // Update BehaviorSubject
    this.cart.next(currentCart);


    // Save in localStorage
    localStorage.setItem(
      'cart',
      JSON.stringify(currentCart)
    );

  }

  removeFromCart(id: number) {

    const currentCart = this.cart.value.filter(
      item => item.product.id !== id
    );


    // Update BehaviorSubject
    this.cart.next(currentCart);


    // Update localStorage
    localStorage.setItem(
      'cart',
      JSON.stringify(currentCart)
    );

  }

  getCart() {
    return this.cart.value;
  }


  clearCart() {
    this.cart.next([]);
    localStorage.removeItem('cart');
  }

}