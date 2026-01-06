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

  skills = [
    {
      category: 'Programming Languages',
      items: [
        'Java',
        'Python',
        'C',
        'C++',
        'C#',
        'JavaScript',
        'Kotlin',
        'SQL',
        'Visual Basic'
      ]
    },
    {
      category: 'Frameworks & Libraries',
      items: [
        'React.js',
        'Angular',
        'Node.js',
        'Next.js',
        '.NET'
      ]
    },
    {
      category: 'Databases',
      items: [
        'SQL',
        'Microsoft Access'
      ]
    },
    {
      category: 'Developer Tools',
      items: [
        'Git',
        'GitHub',
        'Visual Studio',
        'Android Studio'
      ]
    }
  ];

  projects = [
    {
      title: 'TaskFlow – Task & Time Management System',
      description:
        'Developed a full-stack task and time management system as part of a software engineering team project to help users organize tasks, track progress, and manage priorities efficiently.',
      tech: ['React', 'TypeScript', 'C#', '.NET']
    },
    {
      title: 'PaoBucks – Coffee Ordering Mobile App',
      description:
        'Built an Android coffee ordering application that allows users to browse menus, customize orders, and place purchases through an intuitive mobile interface.',
      tech: ['Kotlin', 'Firebase', 'Material Design', 'XML']
    }
  ];

  interests = [
    'Full-Stack Web Development',
    'Mobile App Development',
    'Software Engineering',
    'Problem Solving',
    'Learning New Technologies',
    'Open Source Contribution',
    'Collaborative Projects',
  ];
}
