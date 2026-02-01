import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class Contact {
  form = {
    name: '',
    email: '',
    message: '',
  };

  successMessage = '';
  errorMessage = '';
   isSending = false;

  async sendForm(event: Event) {
    event.preventDefault();

    this.successMessage = '';
    this.errorMessage = '';

    try {
      const response = await fetch('https://formspree.io/f/mnjdyjar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: this.form.name,
          email: this.form.email,
          message: this.form.message,
          _replyto: this.form.email,
          subject: `Portfolio Contact from ${this.form.name}`,
        }),
      });

      if (response.ok) {
        this.successMessage = 'Message sent successfully!';
        this.form = { name: '', email: '', message: '' };
      } else {
        this.errorMessage = 'Failed to send message. Please try again.';
      }
    } catch {
      this.errorMessage = 'Network error. Please try again later.';
    } finally {
      this.isSending = false;
    }
  }
}
