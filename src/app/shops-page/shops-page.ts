import { Component } from '@angular/core';
import { Products } from "./products/products";
import { NoResult } from "./no-result/no-result";

@Component({
  selector: 'app-shops-page',
  imports: [Products, NoResult],
  templateUrl: './shops-page.html',
  styleUrl: './shops-page.css',
})
export class ShopsPage {}
