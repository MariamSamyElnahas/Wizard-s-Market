import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  wizard = {
    name: '',
    email: '',
    password: '',
    house: '',
  };

  returnUrl = '/home';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe((params) => {
      this.returnUrl = params['returnUrl'] || '/home';
    });
  }

  enterDiagonAlley() {
    localStorage.setItem('wizard', JSON.stringify(this.wizard));

    this.router.navigate([this.returnUrl]);
  }
}
