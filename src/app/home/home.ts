import { Component } from '@angular/core';
import { HeroSection } from "./hero-section/hero-section";
import { ShopsPage } from "../shops-page/shops-page";
import { ContactUs } from "./contact-us/contact-us";
import { Footer } from "./footer/footer";
import { Shops } from "./shops/shops";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink,HeroSection, ShopsPage, ContactUs, Footer, Shops],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
