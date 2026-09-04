import { Component } from '@angular/core';
import { UserInfoForm } from "./user-info-form/user-info-form";
import { TableOfInvoices } from "./table-of-invoices/table-of-invoices";

@Component({
  selector: 'app-cart',
  imports: [UserInfoForm, TableOfInvoices],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {}
