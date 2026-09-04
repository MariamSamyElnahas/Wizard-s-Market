import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { shops, shopNames, Product, allProducts } from '../../shared-data/shared-data';

import { Search } from '../../search';
import { NoResult } from '../no-result/no-result';

@Component({
  selector: 'app-products',
  imports: [NoResult],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: Product[] = [];

  shopName = '';

  originalProducts: Product[] = [];
  originalShopName = '';
  isSearching = false;
  quantities: { [id: number]: number } = {};

  showMessage = signal(false);
  messageLeaving = signal(false);

  constructor(
    private route: ActivatedRoute,
    private Search: Search,
    private cdr: ChangeDetectorRef,
  ) {
    this.route.params.subscribe((params) => {
      const shopKey = params['shop'];

      this.originalProducts = shops[shopKey] || [];

      this.products = this.originalProducts;

      this.originalShopName = shopNames[shopKey] || '';
      this.shopName = this.originalShopName;
    });

    this.Search.searchText$.subscribe((searchText) => {
      this.searchProducts(searchText);
    });
  }

  searchProducts(input: string) {
    if (input === '') {
      this.isSearching = false;
      this.products = this.originalProducts;
      this.shopName = this.originalShopName;
      return;
    }

    this.isSearching = true;

    const result = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(input) ||
        product.category.toLowerCase().includes(input),
    );

    this.products = result;
    this.shopName = `Search Results (${result.length})`;
  }

  increaseQuantity(product: Product) {
    this.quantities[product.id] = (this.quantities[product.id] || 1) + 1;
  }

  decreaseQuantity(product: Product) {
    const currentQuantity = this.quantities[product.id] || 1;

    if (currentQuantity > 1) {
      this.quantities[product.id]--;
    }
  }

  addToCart(product: Product) {
     const quantity =
      this.quantities[product.id] || 1;


    this.Search.addToCart(product, quantity);

    this.showMessage.set(true);
    this.messageLeaving.set(false);

    setTimeout(() => {
      this.messageLeaving.set(true);

      setTimeout(() => {
        this.showMessage.set(false);
      }, 300);
    }, 800);
  }
}
