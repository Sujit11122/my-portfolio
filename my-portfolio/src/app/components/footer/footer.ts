import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  // Current year for copyright
  currentYear: number = new Date().getFullYear();
  
  // Your name/company name
  authorName: string = 'Your Name';
  
  // Social media links
  socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: '💻',
      ariaLabel: 'Visit my GitHub profile'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: '💼',
      ariaLabel: 'Connect with me on LinkedIn'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: '🐦',
      ariaLabel: 'Follow me on Twitter'
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: '📧',
      ariaLabel: 'Send me an email'
    }
  ];

  // Quick links (can be used for additional navigation)
  quickLinks: { label: string; url: string }[] = [
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Terms of Service', url: '/terms' }
  ];

  // Method to open social link
  openSocialLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // Method to get copyright text
  getCopyrightText(): string {
    return `© ${this.currentYear} ${this.authorName}. All rights reserved.`;
  }
}