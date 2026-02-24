import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  images: string[];
  githubLink?: string;
  features: string[];
  challenges?: string;
  learnings?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[] = [

    {
      id: 1,
      title: 'PaoBucks Coffee Ordering App',
      description:
        'Developed an Android application that allows users to browse, customize, and order coffee through an intuitive interface.',
      longDescription:
        'PaoBucks is a feature-rich Android coffee ordering application built using Kotlin and Firebase. The app enables users to browse coffee items, customize orders, and place orders seamlessly. Material Design principles were applied to create a responsive and engaging user interface. Agile development practices and GitHub version control were used to collaborate effectively and deliver incremental updates.',
      tech: ['Kotlin', 'Firebase', 'Android Studio', 'XML', 'Git', 'GitHub'],
      images: [
        'assets/projects/paobucks-1.png',
        'assets/projects/paobucks-2.png'
      ],
      githubLink: 'https://github.com/Sujit11122/paobucks',
      features: [
        'Coffee browsing and customization',
        'User-friendly and responsive UI',
        'Material Design components',
        'Smooth navigation and ordering flow'
      ],
      challenges:
        'Designing an intuitive ordering flow while integrating Firebase for data handling and user interactions.',
      learnings:
        'Strengthened Android development skills, Firebase integration, and experience working in Agile team environments.'
    },

    {
      id: 2,
      title: 'TaskFlow',
      description:
        'Built a task and time management system as part of a software engineering team project.',
      longDescription:
        'TaskFlow is a task and time management system developed using C#, .NET, React, and TypeScript. The application focuses on improving productivity by enabling task tracking, prioritization, and workflow organization. The project emphasized teamwork, planning, and efficient resource management following software engineering principles.',
      tech: ['C#', '.NET', 'React', 'TypeScript', 'Git', 'GitHub' , 'Agile Methodology'],
      images: [
        'assets/projects/taskflow-1.png',
        'assets/projects/taskflow-2.png'
      ],
      githubLink: 'https://github.com/Sujit11122/TaskFlow-Cmps285',
      features: [
        'Task creation and management',
        'Time tracking functionality',
        'Priority-based workflow organization',
        'Team collaboration support',
        'Clean and modular code structure'
      ],
      challenges:
        'Coordinating frontend and backend components while ensuring timely delivery.',
      learnings:
        'Improved understanding of full-stack development, team coordination, and project planning.'
    }

  ];

  constructor() {}

  getAllProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }
}
