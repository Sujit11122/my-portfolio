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

  sendEmail() {
    const subject = `Portfolio Contact from ${this.form.name}`;
    const body = `
Name: ${this.form.name}
Email: ${this.form.email}

Message:
${this.form.message}
    `;

    window.location.href =
      `mailto:gautamsujit341@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
