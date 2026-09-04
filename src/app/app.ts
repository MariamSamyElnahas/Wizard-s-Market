import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Home } from "./home/home";
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DiagonAlley');

  showNavbar = true;

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {

    this.viewportScroller.setOffset([0, 70]);

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {

        this.showNavbar = event.urlAfterRedirects !== '/login';

      });

  }

}
