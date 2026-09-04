import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-user-info-form',
  imports: [RouterLink,FormsModule],
  templateUrl: './user-info-form.html',
  styleUrl: './user-info-form.css',
})
export class UserInfoForm {
 
  wizard = {
    name: '',
    email: '',
    password: '',
    house: ''
  };

  showMessage = signal(false);
  messageLeaving = signal(false);


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}


  ngOnInit() {

    if (isPlatformBrowser(this.platformId)) {

      const savedWizard = localStorage.getItem('wizard');

      if (savedWizard) {
        this.wizard = JSON.parse(savedWizard);
      }

    }

  }


  saveWizard() {

    if (isPlatformBrowser(this.platformId)) {

      localStorage.setItem(
        'wizard',
        JSON.stringify(this.wizard)
      );

    }

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
