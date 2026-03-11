import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class Aboutcomponent {
  name = 'Sujit Gautam';
  role = 'Computer Science Student | Full-Stack Developer';

  about = {
    intro:
      'I am a Computer Science student at Southeastern Louisiana University with a strong interest in full-stack software development and problem-solving.',
    description:
      'I enjoy building scalable, user-focused applications using modern frontend and backend technologies. My academic background in data structures, algorithms, and software engineering helps me write clean, efficient, and maintainable code.',
    passion:
      'Outside of coursework, I work on personal and team-based projects, explore new technologies, and continuously improve my development skills through hands-on practice.'
  };

  education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Southeastern Louisiana University',
      year: 'Jan 2024 – Dec 2027',
      description:
        'GPA: 3.87/4.00. Relevant coursework includes Data Structures and Algorithms, Software Engineering Principles, and Object-Oriented Programming (Java, C++).'
    }
  ];

 interests = [
  'Full-Stack Web Development',
  'Frontend Engineering & UI Design',
  'Backend Development & APIs',
  'Mobile Application Development',
  'Software Engineering Best Practices',
  'Data Structures & Problem Solving',
  'Learning Emerging Technologies',
  'Open Source Collaboration',
  'Building Scalable Applications',
  'Team-Based & Agile Development',
];
}
