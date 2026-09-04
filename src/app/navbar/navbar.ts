import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Search } from '../search';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  searchInput: string = '';

  isShopPage: boolean = false;

  constructor(
    private router: Router,
    private Search: Search
  ) {

    this.router.events.subscribe(() => {
      this.isShopPage = this.router.url.startsWith('/products');
    });

  }

  search() {

    const input = this.searchInput.toLowerCase().trim();

    this.Search.setSearchText(input);

  }
}
