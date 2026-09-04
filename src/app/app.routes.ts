import { Routes } from '@angular/router';
import { Products } from './shops-page/products/products';
import { Home } from './home/home';
import { NoResult } from './shops-page/no-result/no-result';
import { Cart } from './cart/cart';
import { LoginPage } from './login-page/login-page';

export const routes: Routes = [
      {path: '',redirectTo: 'home',pathMatch: 'full'},
      {path: 'home',component: Home},
      {path: 'products/:shop',component: Products},
      {path: 'cart',component: Cart},
      {path: 'login',component: LoginPage},
      {path: '**',component: NoResult}
];
