import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  loginData = {
    email: '',
    password: '',
    remember: false
  };

  showPassword = false;

  onContactSubmit() {
    console.log('Contact form submitted:', this.contactData);
    // TODO: Implement actual form submission
    this.resetContactForm();
  }

  onLoginSubmit() {
    console.log('Login form submitted:', this.loginData);
    // TODO: Implement actual login logic
    this.resetLoginForm();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  private resetContactForm() {
    this.contactData = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }

  private resetLoginForm() {
    this.loginData = {
      email: '',
      password: '',
      remember: false
    };
  }
}
