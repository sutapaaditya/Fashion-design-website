import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  newsletterEmail: string = '';

  onNewsletterSubmit() {
    if (this.newsletterEmail) {
      // TODO: Implement newsletter subscription logic
      console.log('Newsletter subscription for:', this.newsletterEmail);
      this.newsletterEmail = ''; // Reset the form
    }
  }
}
